import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BG1 from "./assets/BG1.png";

function App() {
  return (
    <ThemeProvider>
      <div
        className="min-h-screen h-screen overflow-hidden bg-zinc-900 w-full bg-cover bg-center transition-all duration-300"
        style={{ 
          backgroundImage: `url(${BG1})`,
          filter: 'contrast(1.18) brightness(0.98)'
        }}
      >
        <Navbar />
        <HeroSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
