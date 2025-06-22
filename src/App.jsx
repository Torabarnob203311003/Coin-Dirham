import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BG1 from "./assets/BG1.png";
import Marquee from "./components/Marquee";
import InfoBar from "./components/InfoBar";
import CardSection from "./components/CardSection";
import ContactForm from "./components/ContatcFrom";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div
        className="min-h-screen h-screen overflow-hidden bg-zinc-800 w-full bg-cover bg-center transition-all duration-300"
        style={{ 
          backgroundImage: `url(${BG1})`,
          filter: 'contrast(1.38) brightness(1.18)'
        }}
      >
        <Navbar />
        <HeroSection  />
        <InfoBar />
      </div>
      <div>
        <CardSection />
      </div>
      <div >
         <ContactForm />
      </div>
       
        <Footer />
      
    </ThemeProvider>
  );
}

export default App;
