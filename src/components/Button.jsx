// -------------------- COMPONENTE BUTTON --------------------
// Componente reutilizable para renderizar botones con varios tamaños.
// Recibe children con el contenido interno del botón y props adicionales para pasarlas directamente al elemento button.
export const Button = ({
  className = "",
  size = "default",
  children,
  ...props
}) => {
  // -------------------- CLASES BASE --------------------
  // Estilos comunes que se aplican a todos los botones:
  // forma, tipografía, colores, hover, sombra y accesibilidad.
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

  // -------------------- CLASES POR TAMAÑO --------------------
  // Mapa de tamaños disponibles para ajustar padding y tamaño de texto.
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // -------------------- CLASE FINAL --------------------
  // Combina las clases base, las del tamaño seleccionado  y cualquier clase adicional recibida por props.
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    // -------------------- BOTÓN --------------------
    // Elemento button principal al que se aplican las clases calculadas y el resto de props recibidas.
    <button className={classes} {...props}>
      {/* -------------------- CONTENIDO INTERNO --------------------
          Contenedor del contenido del botón.
          Centra los elementos y deja espacio entre texto e iconos.
      */}
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};