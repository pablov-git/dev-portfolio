import { useEffect, useState } from "react";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";

function App() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return ["es", "en"].includes(savedLanguage) ? savedLanguage : "es";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;