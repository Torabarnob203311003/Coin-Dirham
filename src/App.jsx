import { useEffect, useRef } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BG1 from "./assets/BG1.png";
import Marquee from "./components/Marquee";
import InfoBar from "./components/InfoBar";
import CardSection from "./components/CardSection";
import ContactForm from "./components/ContatcFrom";
import Footer from "./components/Footer";
import Scan from "./components/Scan";
import GridSection from "./components/GridSection";
import LineSection from "./components/lineSection";
import UseCasesCard from "./components/UseCasesCard";

function App() {
  // Auto-refresh on screen size switch between mobile and desktop
  const lastType = useRef(window.innerWidth < 768 ? "mobile" : "desktop");
  useEffect(() => {
    const onResize = () => {
      const type = window.innerWidth < 768 ? "mobile" : "desktop";
      if (type !== lastType.current) {
        window.location.reload();
        lastType.current = type;
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <ThemeProvider>
      <div
        className="min-h-screen h-screen overflow-x-hidden bg-zinc-800 w-full bg-cover bg-center transition-all duration-300"
        style={{
          backgroundImage: `url(${BG1})`,
          filter: 'contrast(1.38) brightness(1.18)'
        }}
      >
        <Navbar />
        <HeroSection />
        <InfoBar />
      </div>
      <div>
        <CardSection />
      </div>
      <div>
        <UseCasesCard />
      </div>
      <div>
        <Scan />
      </div>
      <div>
        <LineSection />
      </div>
      <div>
        <ContactForm />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;