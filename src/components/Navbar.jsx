import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import Sun from "../assets/Sun.svg";
import Moon from "../assets/Moon.svg";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import Stroke1 from "../assets/stroke1.svg";

function WorldIcon(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
    </svg>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className="relative flex items-center justify-center gap-2 px-2 py-1"
      style={{
        width: '95px',
        height: '47px',
        flexShrink: 0,
        borderRadius: '100.528px',
        border: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(76.45px)',
        overflow: 'visible'
      }}
    >
      {/* Decorative gradient stroke as a div, centered and visible */}
      <div
        style={{
          position: 'absolute',
          left: '-40%',
          top: '-90%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          height: 400,
          borderRadius: '617px',
          opacity: 0.7, // slightly more visible
          background: 'linear-gradient(180deg, rgba(0, 120, 67, 0.85) 0%, rgba(0, 120, 67, 0.00) 100%)', // darker green
          filter: 'blur(32px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      {/* Sun and Moon buttons, above the stroke */}
      <div className="relative flex items-center gap-2 z-10">
        <motion.button
          onClick={() => setTheme("light")}
          className="p-2 bg-transparent border-none outline-none flex items-center justify-center"
          aria-label="Light mode"
          style={{
            width: 36,
            height: 36,
            flexShrink: 0,
            background: theme === "light" ? "linear-gradient(135deg, rgba(27, 174, 108, 0.53) 4.72%, rgba(7, 88, 52, 0.53) 79.2%)" : "none",
            backdropFilter: theme === "light" ? "blur(8.25px)" : "none",
            borderRadius: "50%"
          }}
          whileTap={{ scale: 0.85 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "light" ? (
              <motion.img
                key="sun"
                src={Sun}
                alt="Light mode"
                width={24}
                height={24}
                style={{ flexShrink: 0 }}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.img
                key="sun-off"
                src={Sun}
                alt="Light mode"
                width={24}
                height={24}
                style={{ flexShrink: 0, opacity: 0.5 }}
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 90, opacity: 0.5 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </motion.button>
        <motion.button
          onClick={() => setTheme("dark")}
          className="p-2 bg-transparent border-none outline-none flex items-center justify-center"
          aria-label="Dark mode"
          style={{
            width: 36,
            height: 36,
            flexShrink: 0,
            background: theme === "dark" ? "linear-gradient(135deg, rgba(27, 174, 108, 0.53) 4.72%, rgba(7, 88, 52, 0.53) 79.2%)" : "none",
            backdropFilter: theme === "dark" ? "blur(8.25px)" : "none",
            borderRadius: "50%"
          }}
          whileTap={{ scale: 0.85 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "dark" ? (
              <motion.img
                key="moon"
                src={Moon}
                alt="Dark mode"
                width={24}
                height={24}
                style={{ flexShrink: 0 }}
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.img
                key="moon-off"
                src={Moon}
                alt="Dark mode"
                width={24}
                height={24}
                style={{ flexShrink: 0, opacity: 0.5 }}
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: -90, opacity: 0.5 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Animation variants for popup effect
  const navbarVariants = {
    hidden: { opacity: 0, scale: 0.85, filter: "blur(16px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 16,
        delay: 0.1
      }
    }
  };

  return (
    <>
      <motion.nav
        className="w-full flex items-center justify-between px-4 md:px-10 font-[300] text-[18px] text-white -mt-6  min-h-[165px]"
        style={{ fontFamily: 'Funnel Sans', fontStyle: 'normal', lineHeight: 'normal' }}
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="DirhamCoin Logo"
            className="h-14 md:h-24 object-contain"
          />
        </div>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#about"
            className="flex items-center gap-2 px-4 py-3"
            style={{
              fontFamily: 'Funnel Sans',
              borderRadius: '100.528px',
              border: '1px solid #1BAE6C',
              backdropFilter: 'blur(76.45px)',
              width: '230px',
              height: '47px',
              flexShrink: 0,
              whiteSpace: 'nowrap'
            }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
            What is DirhamCoin?
          </a>
          <a href="#usecases"
            className="flex items-center justify-center h-[47px] min-w-[148px] px-0 py-0"
            style={{
              color: '#FFF',
              fontFamily: 'Funnel Sans',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: 'normal',
              borderRadius: '100.528px',
              border: '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(76.45px)',
              flexShrink: 0,
              whiteSpace: 'nowrap',
              textAlign: 'center'
            }}
          >Use Cases</a>
          <a href="#buy"
            className="flex items-center justify-center h-[47px] min-w-[148px] px-6 py-0"
            style={{
              color: '#FFF',
              fontFamily: 'Funnel Sans',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: 'normal',
              borderRadius: '100.528px',
              border: '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(76.45px)',
              flexShrink: 0,
              whiteSpace: 'nowrap',
              textAlign: 'center',
              letterSpacing: '0.04em'
            }}
          >Buy DirhamCoin</a>
        </div>
        {/* Desktop Right: Theme, Language, Contact */}
        <div className="hidden md:flex items-center gap-8">
          <ThemeToggle />
          <div className="flex items-center gap-2 px-6 py-3">
            <WorldIcon className="text-white" />
            <select
              className="bg-transparent text-white font-[300] focus:outline-none"
              style={{
                color: '#FFF',
                fontFamily: 'Funnel Sans',
                fontSize: '20px', // increased font size for EN
                fontStyle: 'normal',
                fontWeight: 300,
                lineHeight: 'normal'
              }}
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 hover:underline rounded-full px-7 py-3 whitespace-nowrap"
            style={{
              color: "#F2F2F3",
              fontFamily: "Funnel Sans",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "normal",
              borderRadius: "100.528px",
              border: "1px solid #036E47",
              backdropFilter: "blur(76.45px)",
              width: "173px",
              height: "47px",
              flexShrink: 0,
              textDecoration: "none" // <-- correct way to add text-decoration
            }}
          >
            <span className="flex items-center w-full justify-between">
              <span style={{ marginRight: "18px" }}>Contact Us</span>
              <span
                className="inline-flex items-center justify-center rounded-full p-1"
                style={{
                  background: "linear-gradient(135deg, rgba(27, 174, 108, 0.53) 4.72%, rgba(7, 88, 52, 0.53) 79.2%)",
                  backdropFilter: "blur(8.25px)"
                }}
              >
                {/* Right Arrow SVG */}
                <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
                  <path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-4-4 4 4-4 4"/>
                </svg>
              </span>
            </span>
          </a>
        </div>
        {/* Mobile: Theme, Menu (removed country icon, EN, and arrow) */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          {/* Hamburger Menu */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="ml-2 flex flex-col justify-center items-center w-10 h-10">
            <span className="block w-7 h-0.5 bg-white mb-1 rounded"></span>
            <span className="block w-7 h-0.5 bg-white mb-1 rounded"></span>
            <span className="block w-7 h-0.5 bg-white rounded"></span>
          </button>
        </div>
        {/* Mobile Nav Drawer */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black/70 flex flex-col items-center justify-center md:hidden">
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl">&times;</button>
            <div className="flex flex-col gap-6 mt-10">
              <a href="#about" className="text-white text-xl" onClick={() => setMenuOpen(false)}>What is DirhamCoin?</a>
              <a href="#usecases" className="text-white text-xl" onClick={() => setMenuOpen(false)}>Use Cases</a>
              <a href="#buy" className="text-white text-xl" onClick={() => setMenuOpen(false)}>Buy DirhamCoin</a>
              <a href="#contact" className="text-white text-xl" onClick={() => setMenuOpen(false)}>Contact Us</a>
            </div>
          </div>
        )}
      </motion.nav>
    </>
  );
}