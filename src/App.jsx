import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import BG1 from "./assets/BG1.png";

function App() {
  return (
    <ThemeProvider>
      <div
        className="min-h-screen bg-zinc-900 w-full bg-cover bg-center transition-all duration-300"
        style={{ backgroundImage: `url(${BG1})` }}
      >
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
