import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "./../components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { getTranslations } from "../translations";

// -------------------- COMPONENTE CONTACT --------------------
// Recibe la prop "language" para mostrar el contenido traducido.
export const Contact = ({ language }) => {
  // -------------------- TEXTOS TRADUCIDOS --------------------
  // Se obtiene únicamente el bloque de traducciones correspondiente a la sección Contact.
  const t = getTranslations(language).contact;

  // -------------------- DATOS DE CONTACTO --------------------
  // Lista de bloques de información de contacto que se mostrarán en la columna derecha.
  const contactInfo = [
    {
      icon: Mail,
      label: t.info[0].label,
      value: t.info[0].value,
      href: t.info[0].href,
    },
    {
      icon: Phone,
      label: t.info[1].label,
      value: t.info[1].value,
      href: t.info[1].href,
    },
    {
      icon: MapPin,
      label: t.info[2].label,
      value: t.info[2].value,
      href: t.info[2].href,
    },
  ];

  // -------------------- ESTADO DEL FORMULARIO --------------------
  // Almacena los valores de los campos name, email y message.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // -------------------- ESTADO DE CARGA --------------------
  // Indica si el formulario se está enviando.
  const [isLoading, setIsLoading] = useState(false);

  // -------------------- ESTADO DEL ENVÍO --------------------
  // Guarda el resultado del envío para mostrar un mensaje de éxito o error.
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  // -------------------- ENVÍO DEL FORMULARIO --------------------
  // Evita el comportamiento por defecto del form, envía el mensaje con EmailJS
  // y actualiza los estados según el resultado.
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // -------------------- CONFIGURACIÓN DE EMAILJS --------------------
      // Se obtienen las variables de entorno necesarias para enviar el correo.
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // -------------------- VALIDACIÓN DE CONFIGURACIÓN --------------------
      // Si falta alguna variable de entorno, se lanza un error.
      if (!serviceId || !templateId || !publicKey) {
        throw new Error(t.missingConfigMessage);
      }

      // -------------------- ENVÍO DEL MENSAJE --------------------
      // Se envían los datos del formulario mediante EmailJS.
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      // -------------------- ESTADO DE ÉXITO --------------------
      // Se muestra un mensaje de confirmación y se limpian los campos del formulario.
      setSubmitStatus({
        type: "success",
        message: t.successMessage,
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      // -------------------- ESTADO DE ERROR --------------------
      // Se muestra un mensaje de error si falla el envío.
      console.error("EmailJS error:", err);

      setSubmitStatus({
        type: "error",
        message:
          err instanceof Error && err.message
            ? err.message
            : t.errorMessage,
      });
    } finally {
      // -------------------- FIN DEL ENVÍO --------------------
      // Se desactiva el estado de carga al finalizar.
      setIsLoading(false);
    }
  };

  return (
    // -------------------- CONTENEDOR PRINCIPAL --------------------
    // Section principal de la sección Contact.
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* -------------------- FONDOS DECORATIVOS --------------------
          Formas difuminadas de fondo para dar profundidad visual.
      */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      {/* -------------------- CONTENIDO CENTRAL --------------------
          Contenedor principal del contenido visible de la sección.
      */}
      <div className="container mx-auto px-6 relative z-10">
        {/* -------------------- CABECERA DE LA SECCIÓN --------------------
            Bloque superior con etiqueta, título y descripción.
        */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* -------------------- GRID PRINCIPAL --------------------
            Divide la sección en dos columnas:
            - izquierda: formulario de contacto
            - derecha: información de contacto y disponibilidad
        */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* -------------------- COLUMNA IZQUIERDA --------------------
              Tarjeta principal con el formulario de contacto.
          */}
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            {/* -------------------- FORMULARIO --------------------
                Formulario controlado conectado al estado formData.
            */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* -------------------- CAMPO NOMBRE -------------------- */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t.form.nameLabel}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder={t.form.namePlaceholder}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              {/* -------------------- CAMPO EMAIL -------------------- */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t.form.emailLabel}
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  placeholder={t.form.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              {/* -------------------- CAMPO MENSAJE -------------------- */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={t.form.messagePlaceholder}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              {/* -------------------- BOTÓN DE ENVÍO --------------------
                  Muestra un texto distinto mientras el formulario se está enviando.
              */}
              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>{t.form.sending}</>
                ) : (
                  <>
                    {t.form.send}
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {/* -------------------- MENSAJE DE RESULTADO --------------------
                  Se muestra solo cuando submitStatus.type tiene valor.
                  Cambia de estilo según si el envío ha sido correcto o ha fallado.
              */}
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* -------------------- COLUMNA DERECHA --------------------
              Bloques secundarios con información de contacto y disponibilidad.
          */}
          <div className="space-y-6">
            {/* -------------------- TARJETA DE INFORMACIÓN --------------------
                Muestra los datos de contacto principales.
            */}
            <div className="glass rounded-3xl p-8 animate-fade-in animation-delay-400">
              <h3 className="text-xl font-semibold mb-6">{t.infoTitle}</h3>

              {/* -------------------- LISTA DE CONTACTO --------------------
                  Se recorre el array contactInfo para renderizar cada bloque de contacto.
              */}
              <div className="space-y-4">
                {contactInfo.map((item, i) => {
                  const Tag = item.href ? "a" : "div";

                  const itemClasses = item.href
                    ? "flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                    : "flex items-center gap-4 p-4 rounded-xl";

                  const iconClasses = item.href
                    ? "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    : "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center";

                  return (
                    <Tag
                      key={i}
                      {...(item.href ? { href: item.href } : {})}
                      className={itemClasses}
                    >
                      <div className={iconClasses}>
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>

                      <div>
                        <div className="text-sm text-muted-foreground">
                          {item.label}
                        </div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    </Tag>
                  );
                })}
              </div>
            </div>

            {/* -------------------- TARJETA DE DISPONIBILIDAD --------------------
                Muestra el estado actual de disponibilidad.
            */}
            <div className="glass rounded-3xl p-8 border border-primary/30 animate-fade-in animation-delay-500">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">{t.availabilityTitle}</span>
              </div>

              <p className="text-muted-foreground text-sm">
                {t.availabilityDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};