import { Button } from "./../components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { getTranslations } from "../translations";

// -------------------- DATOS ESTÁTICOS --------------------
// Lista de tecnologías que se mostrarán en la franja inferior animada.
const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Postman",
  "Cypress",
  "Angular",
  "Java",
  "Spring Boot",
  "SQL",
];

// -------------------- COMPONENTE HERO --------------------
// Recibe la prop "language" para mostrar el contenido traducido.
export const Hero = ({ language }) => {
  // -------------------- TEXTOS TRADUCIDOS --------------------
  // Se obtiene únicamente el bloque de traducciones correspondiente al hero.
  const t = getTranslations(language).hero;

  return (
    // -------------------- CONTENEDOR PRINCIPAL --------------------
    // Section principal del hero.
    <section className="relative min-h-screen flex items-center">
      {/* -------------------- FONDO DEL HERO --------------------
          Capa de fondo absoluta que ocupa toda la sección
          Tiene una imagen de fondo y un degradado superpuesto
      */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* -------------------- CONTENIDO CENTRAL --------------------
          Contenedor del contenido visible por encima del fondo.
      */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        {/* -------------------- GRID PRINCIPAL --------------------
            Divide el hero en dos columnas en pantallas grandes
        */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* -------------------- COLUMNA IZQUIERDA -------------------- */}
          <div className="space-y-8">
            {/* -------------------- BLOQUE DE TEXTO -------------------- */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground animate-fade-in">
                {t.greeting}
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary glow-text animate-fade-in animation-delay-100">
                {t.role}
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl animate-fade-in animation-delay-200">
                {t.description}
              </p>
            </div>

            {/* -------------------- BOTONES DE ACCIÓN -------------------- */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                {t.primaryCta} <ArrowRight className="w-5 h-5" />
              </Button>

              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                {t.secondaryCta}
              </AnimatedBorderButton>
            </div>

            {/* -------------------- ENLACES SOCIALES -------------------- */}
            <div className="flex items-center gap-4 ml-2">
              <span className="text-sm text-muted-foreground animate-fade-in animation-delay-400">{t.follow}</span>

              <a
                href="#"
                aria-label="GitHub"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 animate-fade-in animation-delay-400"
              >
                <img
                  src="/github.svg"
                  alt="GitHub"
                  className="w-5 h-5"
                />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 animate-fade-in animation-delay-400"
              >
                <img
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>

          {/* -------------------- COLUMNA DERECHA -------------------- */}
          <div className="relative w-full max-w-[20rem] aspect-square mx-auto group">
            {/* -------------------- DECORACIÓN SVG EXTERIOR -------------------- */}
            <svg
              viewBox="0 0 120 120"
              className="absolute -inset-7 w-[calc(100%+3.5rem)] h-[calc(100%+3.5rem)] m-auto pointer-events-none animate-spin-slow"
            >
              <circle cx="60" cy="60" r="56" fill="none" stroke="var(--color-primary)" strokeWidth="1" strokeOpacity="0.12" className="animate-fade-in animation-delay-500" />
              
              <circle cx="65.5" cy="4.5" r="1" fill="var(--color-primary)" fillOpacity="0.45" className="animate-fade-in animation-delay-600" />
              <circle cx="70.5" cy="5.4" r="1.6" fill="var(--color-primary)" fillOpacity="0.7" className="animate-fade-in animation-delay-700" />

              <g className="animate-tip-glow">
                <circle cx="76" cy="6.8" r="4" fill="var(--color-primary)" fillOpacity="0.16" className="animate-fade-in animation-delay-700" />
                <circle cx="76" cy="6.8" r="2.2" fill="var(--color-highlight)" fillOpacity="0.95" className="animate-fade-in animation-delay-700" />
              </g>
            </svg>

            {/* -------------------- IMAGEN DE PERFIL -------------------- */}
            <img
              src="/foto-CV.png"
              alt={t.profileAlt}
              className="relative w-full h-full rounded-full glass p-2 glow-border transition-all duration-500 profile-hover-glow animate-fade-in animation-delay-500"
            />
          </div>
        </div>

        {/* -------------------- LISTA DE TECNOLOGÍAS -------------------- */}
        <div className="mt-20 animate-fade-in animation-delay-600 pt-40">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            {t.technologies}
          </p>

          {/* -------------------- CONTENEDOR DE LA LISTA -------------------- */}
          <div className="relative overflow-hidden">
            {/* -------------------- LISTA ANIMADA --------------------
                Se duplica el array de las tecnologías y se recorre para crear una cinta continua.
            */}
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="skill-item">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* -------------------- INDICADOR DE SCROLL -------------------- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">{t.scroll}</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};