import { getTranslations } from "../translations";

// -------------------- COMPONENTE EXPERIENCE --------------------
// Recibe la prop "language" para mostrar el contenido traducido.
export const Experience = ({ language }) => {
  // -------------------- TEXTOS TRADUCIDOS --------------------
  // Se obtiene únicamente el bloque de traducciones correspondiente a la sección Experience.
  const t = getTranslations(language).experience;

  // -------------------- DATOS DE EXPERIENCIA --------------------
  // Lista de experiencias definida dentro de las traducciones.
  const experiences = t.items;

  return (
    // -------------------- CONTENEDOR PRINCIPAL --------------------
    // Section principal de la sección Experience.
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* -------------------- FONDO DECORATIVO --------------------
          Forma difuminada de fondo para dar profundidad visual.
      */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      {/* -------------------- CONTENIDO CENTRAL --------------------
          Contenedor principal del contenido visible de la sección.
      */}
      <div className="container mx-auto px-6 relative z-10">
        {/* -------------------- CABECERA DE LA SECCIÓN --------------------
            Bloque superior con etiqueta, título y descripción.
        */}
        <div className="max-w-3xl mb-16">
          {/* -------------------- ETIQUETA SUPERIOR -------------------- */}
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t.label}
          </span>

          {/* -------------------- TÍTULO PRINCIPAL -------------------- */}
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            {t.titleLead}
            <span className="font-serif italic font-normal text-white">
              {" "}
              {t.titleAccent}
            </span>
          </h2>

          {/* -------------------- DESCRIPCIÓN -------------------- */}
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            {t.description}
          </p>
        </div>

        {/* -------------------- TIMELINE --------------------
            Contenedor principal de la línea temporal y de las tarjetas de experiencia.
        */}
        <div className="relative">
          {/* -------------------- LÍNEA CENTRAL --------------------
              Línea vertical de la timeline.
              En móvil queda alineada a la izquierda y en escritorio pasa al centro.
          */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* -------------------- LISTA DE EXPERIENCIAS --------------------
              Se recorre el array de experiencias para generar un bloque por cada elemento.
              Se usa animationDelay para que aparezcan una a una.
          */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* -------------------- PUNTO DE LA TIMELINE --------------------
                    Marca visual que indica la posición de cada experiencia en la línea temporal.
                    Si la experiencia es la actual, se añade una animación de pulso.
                */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* -------------------- COLUMNA DE LA EXPERIENCIA --------------------
                    Coloca cada tarjeta a un lado u otro de la timeline en escritorio.
                    En índices pares va a la izquierda y en impares a la derecha.
                */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  {/* -------------------- TARJETA DE EXPERIENCIA --------------------
                      Tarjeta principal con periodo, rol, empresa, descripción y tecnologías.
                  */}
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    {/* -------------------- PERIODO -------------------- */}
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>

                    {/* -------------------- ROL -------------------- */}
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>

                    {/* -------------------- EMPRESA -------------------- */}
                    <p className="text-muted-foreground">{exp.company}</p>

                    {/* -------------------- DESCRIPCIÓN -------------------- */}
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>

                    {/* -------------------- TECNOLOGÍAS --------------------
                        Lista de tecnologías asociadas a cada experiencia.
                        En las tarjetas de la izquierda se alinean a la derecha en escritorio.
                    */}
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};