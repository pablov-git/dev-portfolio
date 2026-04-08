// -------------------- DATOS ESTÁTICOS --------------------
// Array con los enlaces sociales que se mostrarán en el footer.
const socialLinks = [
  { iconUrl: "/github.svg", href: "https://github.com/pablov-git", label: "GitHub" },
  { iconUrl: "/linkedin.svg", href: "https://www.linkedin.com/in/pablo-vacas/", label: "LinkedIn" },
];

// -------------------- COMPONENTE FOOTER --------------------
// Renderiza el pie de página con el año actual y los enlaces sociales.
export const Footer = () => {
  // -------------------- AÑO ACTUAL --------------------
  // Se obtiene dinámicamente el año actual para que el footer no haya que actualizarlo manualmente.
  const currentYear = new Date().getFullYear();

  return (
    // -------------------- CONTENEDOR PRINCIPAL --------------------
    // Footer principal de la página.
    <footer className="py-12 border-t border-border">
      {/* -------------------- CONTENIDO CENTRAL --------------------
          Contenedor principal del contenido visible del footer.
      */}
      <div className="container mx-auto px-6">
        {/* -------------------- LAYOUT DEL FOOTER --------------------
            Distribuye el contenido en columna en móvil y en fila en pantallas medianas o mayores.
        */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* -------------------- TEXTO DE COPYRIGHT -------------------- */}
          <p className="text-sm text-muted-foreground">© {currentYear}</p>

          {/* -------------------- ENLACES SOCIALES --------------------
              Se recorre el array de enlaces sociales para renderizar cada icono.
          */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <img
                  src={social.iconUrl}
                  alt={social.label}
                  className="w-5 h-5"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};