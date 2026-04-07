// -------------------- IMPORTACIONES --------------------
// Se importan el botón reutilizable, los iconos de la navbar,
// los hooks de React y la función de traducciones.
import { Button } from "./../components/Button";
import { House, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { getTranslations } from "../translations";

// -------------------- COMPONENTE NAVBAR --------------------
// Recibe la prop "language" para mostrar el contenido traducido
// y la prop "setLanguage" para cambiar el idioma activo.
export const Navbar = ({ language, setLanguage }) => {
  // -------------------- ESTADO DEL MENÚ MÓVIL --------------------
  // Controla si el menú móvil está abierto o cerrado.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // -------------------- ESTADO DEL SCROLL --------------------
  // Controla si la página se ha desplazado lo suficiente como para
  // aplicar el estilo de navbar con fondo.
  const [isScrolled, setIsScrolled] = useState(false);

  // -------------------- TEXTOS TRADUCIDOS --------------------
  // Se obtiene únicamente el bloque de traducciones correspondiente a la navbar.
  const t = getTranslations(language).navbar;

  // -------------------- ENLACES DE NAVEGACIÓN --------------------
  // Lista de enlaces principales de la navbar.
  // Se memoriza con useMemo para no recrearla en cada render salvo
  // cuando cambien las traducciones.
  const navLinks = useMemo(
    () => [
      { href: "#about", label: t.about },
      { href: "#projects", label: t.projects },
    ],
    [t]
  );

  // -------------------- EFECTO DE SCROLL --------------------
  // Añade un listener al scroll para detectar cuándo la página baja más de 100 píxeles y actualizar el estilo de la navbar.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // -------------------- FUNCIÓN PARA NAVEGAR A UNA SECCIÓN --------------------
  // Recibe el id de una sección, la busca en el DOM y hace scroll suave hasta ella.
  // Además, cierra el menú móvil tras navegar.
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsMobileMenuOpen(false);
  };

  // -------------------- FUNCIÓN PARA VOLVER ARRIBA --------------------
  // Hace scroll suave hasta la parte superior de la página
  // y cierra el menú móvil si estuviera abierto.
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    // -------------------- CONTENEDOR PRINCIPAL --------------------
    // Header fijo en la parte superior.
    // Cambia su estilo según el estado de scroll.
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      } z-50`}
    >
      {/* -------------------- CONTENIDO DE LA NAVBAR --------------------
          Contenedor principal con logo/inicio, selector de idioma,
          enlaces de navegación y botón de contacto.
      */}
      <nav className="container mx-auto px-6 flex items-center justify-between gap-4">
        {/* -------------------- BLOQUE IZQUIERDO --------------------
            Contiene el botón de inicio y el selector de idioma en escritorio.
        */}
        <div className="flex items-center gap-4">
          {/* -------------------- BOTÓN DE INICIO --------------------
              Botón con icono de casa para volver al inicio de la página.
          */}
          <a
            href="#"
            className="inline-flex items-center justify-center p-2.5 rounded-full glass text-foreground hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(79,140,255,0.18)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            aria-label={t.goHome}
            title={t.goHome}
          >
            <House className="w-5 h-5" />
          </a>

          {/* -------------------- SELECTOR DE IDIOMA EN ESCRITORIO --------------------
              Solo se muestra en pantallas medianas o mayores.
              Recorre las opciones de idioma y resalta la activa.
          */}
          <div className="hidden md:flex glass rounded-full p-1 items-center gap-1">
            {["es", "en"].map((option) => {
              const isActive = language === option;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLanguage(option)}
                  className={`px-3 py-1.5 text-xs rounded-full uppercase transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface"
                  }`}
                  aria-pressed={isActive}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* -------------------- NAVEGACIÓN EN ESCRITORIO --------------------
            Solo se muestra en pantallas medianas o mayores.
            Incluye enlaces de navegación y botón de contacto.
        */}
        <div className="hidden md:flex items-center gap-4">
          {/* -------------------- ENLACES PRINCIPALES --------------------
              Se recorren los enlaces definidos en navLinks para renderizar
              la navegación principal.
          */}
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* -------------------- BOTÓN DE CONTACTO --------------------
              Lleva directamente a la sección de contacto.
          */}
          <Button size="sm" onClick={() => scrollToSection("contact")}>
            {t.contact}
          </Button>
        </div>

        {/* -------------------- BOTÓN DE MENÚ MÓVIL --------------------
            Solo se muestra en móvil.
            Alterna entre abrir y cerrar el menú móvil.
        */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={t.toggleMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* -------------------- MENÚ MÓVIL --------------------
          Se renderiza solo cuando isMobileMenuOpen es true.
          Incluye enlaces, selector de idioma y botón de contacto.
      */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {/* -------------------- ENLACES DEL MENÚ MÓVIL --------------------
                Se recorren los enlaces definidos en navLinks.
                Al pulsar uno de ellos, se cierra el menú.
            */}
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            {/* -------------------- SELECTOR DE IDIOMA EN MÓVIL --------------------
                Recorre las opciones de idioma y resalta la activa.
            */}
            <div className="flex items-center gap-2 pt-2">
              {["es", "en"].map((option) => {
                const isActive = language === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setLanguage(option)}
                    className={`px-3 py-2 text-xs rounded-full uppercase transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "glass text-muted-foreground hover:text-foreground"
                    }`}
                    aria-pressed={isActive}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {/* -------------------- BOTÓN DE CONTACTO EN MÓVIL --------------------
                Lleva a la sección de contacto y cierra el menú móvil.
            */}
            <Button onClick={() => scrollToSection("contact")}>
              {t.contact}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};