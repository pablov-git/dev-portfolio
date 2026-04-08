export const translations = {
  es: {
    navbar: {
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
      goHome: "Ir arriba",
      toggleMenu: "Abrir menú",
    },

    hero: {
      greeting: "Hola, soy Pablo.",
      role: "Desarrollador frontend",
      description:
        "Desarrollo interfaces con React con un enfoque en la claridad y la usabilidad. En esta web recopilo algunos de mis mejores proyectos.",
      primaryCta: "Contactar",
      secondaryCta: "Descargar CV",
      follow: "Sígueme:",
      technologies: "Tecnologías con las que trabajo",
      scroll: "Scroll",
      profileAlt: "Foto de perfil",
    },

    about: {
      label: "Sobre mí",
      titleLead: "modernas, rápidas y funcionales",
      titleAccent: "Aplicaciones web",
      paragraphs: [
        "Busco una oportunidad para crecer como desarrollador dentro de un equipo en el que pueda aportar, ganar experiencia y seguir evolucionando profesionalmente.",
      ],
      highlights: [
        {
          title: "React",
          description:
            "Desarrollo de interfaces por componentes con una estructura clara y reutilizable.",
        },
        {
          title: "JavaScript",
          description:
            "Lógica de interfaz centrada en claridad, mantenibilidad y comportamiento consistente.",
        },
        {
          title: "UI",
          description:
            "Interfaz cuidada, con atención al detalle visual y a la experiencia de uso.",
        },
        {
          title: "Accesibilidad",
          description:
            "Interés por construir aplicaciones más claras, usables y fáciles de recorrer.",
        },
      ],
    },

    projects: {
      label: "Proyectos destacados",
      titleLead: "Una muestra de mi trabajo",
      titleAccent: "",
      description:
        "Aquí puedes ver algunos de los proyectos que mejor reflejan mi forma de trabajar.",
      demoLabel: "Demo",
      githubPrivateLabel: "GitHub privado",
      items: [
        {
          title: "SIGO",
          description:
            "Plataforma gamificada diseñada para dar visibilidad a proyectos de impacto social. Implementé componentes reutilizables, gestión de estado global con Zustand, funcionalidades basadas en mapas interactivos con MapLibre GL e integración con APIs REST autenticadas.",
          image: "/projects/SIGO.png",
          tags: [
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Zustand",
            "MapLibre GL",
            "REST API",
          ],
          link: "https://youtu.be/zYYHRDWyR6w?t=5019",
          github: null,
        },
        {
          title: "E-commerce",
          description:
            "Tienda online desarrollada con JavaScript, HTML5 y CSS3, centrada en la construcción de una interfaz clara, navegación intuitiva y una experiencia de compra fluida.",
          image: "/projects/e-commerce.png",
          tags: ["JavaScript", "HTML5", "CSS3"],
          link: "https://pablov-git-e-commerce.netlify.app/",
          github: "https://github.com/pablov-git/e-commerce",
        },
      ],
    },

    contact: {
      label: "Contacto",
      titleLead: "¿Hablamos?",
      titleAccent: "",
      description:
        "Si quieres escribirme por una oportunidad, una propuesta o cualquier otra consulta, puedes hacerlo aquí.",
      infoTitle: "Información de contacto",
      availabilityTitle: "Disponible para nuevos proyectos",
      availabilityDescription:
        "Actualmente estoy abierto a nuevas oportunidades.",
      missingConfigMessage:
        "Falta la configuración de EmailJS. Revisa las variables de entorno.",
      successMessage:
        "Mensaje enviado correctamente. Te responderé en cuanto pueda.",
      errorMessage:
        "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.",
      form: {
        nameLabel: "Nombre",
        namePlaceholder: "Tu nombre...",
        emailLabel: "Email",
        emailPlaceholder: "tuemail@ejemplo.com",
        messageLabel: "Mensaje",
        messagePlaceholder: "Tu mensaje...",
        send: "Enviar mensaje",
        sending: "Enviando...",
      },
      info: [
        {
          label: "Email",
          value: "pablovacasm@gmail.com",
          href: "mailto:pablovacasm@gmail.com",
        },
        {
          label: "Teléfono",
          value: "+34 614 185 410",
          href: "tel:+34614185410",
        },
        {
          label: "Ubicación",
          value: "España",
        },
      ],
    },

    footer: {
      rights: "Todos los derechos reservados.",
      links: [
        { href: "#about", label: "Sobre mí" },
        { href: "#projects", label: "Proyectos" },
        { href: "#contact", label: "Contacto" },
      ],
    },
  },

  en: {
    navbar: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      goHome: "Go to top",
      toggleMenu: "Toggle menu",
    },

    hero: {
      greeting: "Hi, I'm Pablo.",
      role: "Frontend developer",
      description:
        "I build interfaces with React with a focus on clarity and usability. This website brings together some of my best projects.",
      primaryCta: "Contact",
      secondaryCta: "Download CV",
      follow: "Follow me:",
      technologies: "Technologies I work with",
      scroll: "Scroll",
      profileAlt: "Profile photo",
    },

    about: {
      label: "About Me",
      titleLead: "Modern, fast and functional",
      titleAccent: "web applications",
      paragraphs: [
        "I'm looking for an opportunity to grow as a developer within a team where I can contribute, gain experience, and continue evolving professionally.",
      ],
      highlights: [
        {
          title: "React",
          description:
            "Component-based interfaces built with clear structure and reusability in mind.",
        },
        {
          title: "JavaScript",
          description:
            "Interface logic focused on clarity, maintainability, and consistent behavior.",
        },
        {
          title: "UI",
          description:
            "Care for visual detail and user experience across the whole interface.",
        },
        {
          title: "Accessibility",
          description:
            "Interest in building applications that are clearer, easier to use, and easier to navigate.",
        },
      ],
    },

    projects: {
      label: "Featured projects",
      titleLead: "A sample of my work",
      titleAccent: "",
      description:
        "Here you can see some of the projects that best reflect the way I work.",
      demoLabel: "Demo",
      githubPrivateLabel: "Private GitHub",
      items: [
        {
          title: "SIGO",
          description:
            "Gamified platform designed to give visibility to social impact projects. I built reusable interface components, implemented global state management with Zustand, developed interactive map features with MapLibre GL, and integrated authenticated REST APIs.",
          image: "/projects/SIGO.png",
          tags: [
            "React",
            "JavaScript",
            "Vite",
            "Tailwind CSS",
            "Zustand",
            "MapLibre GL",
          ],
          link: "https://youtu.be/zYYHRDWyR6w?t=5019",
          github: null,
        },
        {
          title: "E-commerce",
          description:
            "Online store built with JavaScript, HTML5, and CSS3, focused on a clear interface, intuitive navigation, and a smooth shopping experience.",
          image: "/projects/e-commerce.png",
          tags: ["JavaScript", "HTML5", "CSS3"],
          link: "https://pablov-git-e-commerce.netlify.app/",
          github: "https://github.com/pablov-git/e-commerce",
        },
      ],
    },

    contact: {
      label: "Contact",
      titleLead: "Shall we talk?",
      titleAccent: "",
      description:
        "If you'd like to write to me about an opportunity, a proposal, or any other question, you can do it here.",
      infoTitle: "Contact Information",
      availabilityTitle: "Available for new projects",
      availabilityDescription:
        "I'm currently open to new opportunities.",
      missingConfigMessage:
        "EmailJS configuration is missing. Please check your environment variables.",
      successMessage:
        "Message sent successfully. I'll get back to you as soon as I can.",
      errorMessage:
        "The message could not be sent. Please try again later.",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name...",
        emailLabel: "Email",
        emailPlaceholder: "your@email.com",
        messageLabel: "Message",
        messagePlaceholder: "Your message...",
        send: "Send message",
        sending: "Sending...",
      },
      info: [
        {
          label: "Email",
          value: "pablovacasm@gmail.com",
          href: "mailto:pablovacasm@gmail.com",
        },
        {
          label: "Phone",
          value: "+34 614 185 410",
          href: "tel:+34614185410",
        },
        {
          label: "Location",
          value: "Spain",
        },
      ],
    },

    footer: {
      rights: "All rights reserved.",
      links: [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
      ],
    },
  },
};

export const getTranslations = (language) =>
  translations[language] || translations.en;