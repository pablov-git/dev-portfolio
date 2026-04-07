import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { getTranslations } from "../translations";

// -------------------- DATOS ESTÁTICOS --------------------
// Array con los iconos que se asignarán a cada highlight.
const highlightIcons = [Code2, Rocket, Users, Lightbulb];

// -------------------- COMPONENTE ABOUT --------------------
// Recibe la prop "language" para mostrar el contenido traducido.
export const About = ({ language }) => {
  // -------------------- TEXTOS TRADUCIDOS --------------------
  // Se obtiene únicamente el bloque de traducciones correspondiente a la sección About.
  const t = getTranslations(language).about;

  return (
    // -------------------- CONTENEDOR PRINCIPAL --------------------
    // Section principal de la sección About.
    <section id="about" className="py-32 relative overflow-hidden">
      {/* -------------------- CONTENIDO CENTRAL --------------------
          Contenedor principal del contenido visible de la sección.
      */}
      <div className="container mx-auto px-6 relative z-10">
        {/* -------------------- GRID PRINCIPAL --------------------
            Divide la sección en dos columnas en pantallas grandes
        */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* -------------------- COLUMNA IZQUIERDA --------------------
              Textos principales
          */}
          <div className="space-y-8">
            {/* -------------------- ETIQUETA SUPERIOR --------------------
            */}
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                {t.label}
              </span>
            </div>

            {/* -------------------- TÍTULO PRINCIPAL --------------------
            */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              {language === "es" ? (
                <>
                  <span className="font-serif italic font-normal text-white">
                    {t.titleAccent}
                  </span>{" "}
                  {t.titleLead}
                </>
              ) : (
                <>
                  {t.titleLead}
                  <span className="font-serif italic font-normal text-white">
                    {" "}
                    {t.titleAccent}
                  </span>
                </>
              )}
            </h2>

            {/* -------------------- PÁRRAFO DESCRIPTIVO -------------------- */}
            <div className="text-muted-foreground animate-fade-in animation-delay-200">
              <p>{t.paragraphs[0]}</p>
            </div>
          </div>

          {/* -------------------- COLUMNA DERECHA --------------------
              Grid de tarjetas destacadas con información resumida */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* -------------------- TARJETAS DESTACADAS --------------------
              Se recorre el array de highlights para generar una tarjeta por cada elemento.
              Se usa animationDelay para que las tarjetas aparezcan una a una.
            */}
            {t.highlights.map((item, idx) => {
              const Icon = highlightIcons[idx];

              return (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  {/* -------------------- ICONO DE LA TARJETA -------------------- */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* -------------------- TÍTULO DE LA TARJETA -------------------- */}
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                  {/* -------------------- DESCRIPCIÓN DE LA TARJETA -------------------- */}
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};