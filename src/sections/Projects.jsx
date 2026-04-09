import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "../translations";

// -------------------- COMPONENTE PROJECTS --------------------
// Recibe la prop "language" para mostrar el contenido traducido.
export const Projects = ({ language }) => {
  // -------------------- TEXTOS TRADUCIDOS --------------------
  // Se obtiene únicamente el bloque de traducciones correspondiente a la sección Projects.
  const t = getTranslations(language).projects;

  // -------------------- DATOS DE PROYECTOS --------------------
  // Lista de proyectos definida dentro de las traducciones.
  const projects = t.items;

  return (
    // -------------------- CONTENEDOR PRINCIPAL --------------------
    // Section principal de la sección Projects.
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* -------------------- FONDOS DECORATIVOS --------------------
          Formas difuminadas de fondo para dar profundidad visual.
      */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      {/* -------------------- CONTENIDO CENTRAL --------------------
          Contenedor principal del contenido visible de la sección.
      */}
      <div className="container mx-auto px-6 relative z-10">
        {/* -------------------- CABECERA DE LA SECCIÓN --------------------
            Bloque superior con etiqueta, título y descripción.
        */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          {/* -------------------- ETIQUETA SUPERIOR -------------------- */}
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t.label}
          </span>

          {/* -------------------- TÍTULO PRINCIPAL -------------------- */}
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            {t.titleLead}
            {t.titleAccent && (
              <span className="font-serif italic font-normal text-white">
                {" "}
                {t.titleAccent}
              </span>
            )}
          </h2>

          {/* -------------------- DESCRIPCIÓN -------------------- */}
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            {t.description}
          </p>
        </div>

        {/* -------------------- GRID DE PROYECTOS --------------------
            Se recorre el array de proyectos para generar una tarjeta por cada elemento.
            Se usa animationDelay para que las tarjetas aparezcan una a una.
        */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* -------------------- IMAGEN DEL PROYECTO --------------------
                  Imagen principal de la tarjeta con un overlay oscuro para mejorar el contraste.
              */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-60" />
              </div>

              {/* -------------------- CONTENIDO DE LA TARJETA --------------------
                  Bloque inferior con botones, título, descripción y tecnologías.
              */}
              <div className="p-6 flex flex-col h-[320px]">
                {/* -------------------- ENLACES DE ACCIÓN --------------------
                    Botones para ver la demo y el repositorio.
                    Si el repositorio no es público, se muestra una etiqueta deshabilitada.
                */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                      {t.demoLabel}
                    </a>
                  )}

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium hover:bg-surface transition-colors"
                    >
                      <img src="/github.svg" alt="GitHub" className="w-4 h-4" />
                      GitHub
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium opacity-50 cursor-not-allowed select-none">
                      <img src="/github.svg" alt="GitHub" className="w-4 h-4" />
                      {t.githubPrivateLabel}
                    </span>
                  )}
                </div>

                {/* -------------------- TÍTULO DEL PROYECTO -------------------- */}
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors mb-4">
                  {project.title}
                </h3>

                {/* -------------------- DESCRIPCIÓN DEL PROYECTO -------------------- */}
                <p className="text-muted-foreground text-sm leading-6">
                  {project.description}
                </p>

                {/* -------------------- TAGS DEL PROYECTO --------------------
                    Lista de tecnologías o etiquetas asociadas al proyecto.
                */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};