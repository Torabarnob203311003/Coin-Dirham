import React, { useState, useRef, useEffect } from 'react';
import { Share2 } from 'lucide-react';
import BG3 from '../assets/BG3.svg';
import usecaseImg from '../assets/usecase1.jpg';
import VectorUsecase from '../assets/vectorusecase.svg';
import RightArrow from '../assets/rightarrow.png';

import Dot from '../assets/dot.svg';
import ShareIcon from '../assets/share.svg';

const UseCasesCard = () => {
  const [activeSection, setActiveSection] = useState(null);
  const stepsRef = useRef([]);
  const intervalRef = useRef(null);
  const userInteractedRef = useRef(false);

  const sections = ['Trade', 'Hold', 'Buy/Sell', 'Transact'];

  // Auto-animate active section every 2 seconds
  useEffect(() => {
    import('gsap').then(gsap => {
      const handleScroll = () => {
        const stepEls = stepsRef.current;
        if (!stepEls || !stepEls.length) return;

        let found = false;
        for (let i = 0; i < stepEls.length; i++) {
          const el = stepEls[i];
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (!found && rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            setActiveSection(el.dataset.section);
            found = true;
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  }, []);

  // Animation: cycle through sections every 2s unless user interacts
  useEffect(() => {
    // Start from first section if not set
    if (activeSection === null) setActiveSection(sections[0]);
    if (userInteractedRef.current) return;

    import('gsap').then(gsap => {
      intervalRef.current = setInterval(() => {
        setActiveSection(prev => {
          const idx = sections.indexOf(prev);
          return sections[(idx + 1) % sections.length];
        });
      }, 2000);
    });

    return () => {
      clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line
  }, [activeSection]);

  // Pause animation on user click
  const handleSectionClick = (section) => {
    userInteractedRef.current = true;
    clearInterval(intervalRef.current);
    setActiveSection(section);
  };

  return (
    <div
      className="relative min-h-screen flex flex-row items-center justify-center px-4"
      style={{
        backgroundImage: `url(${BG3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "auto",
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none" // IE 10+
      }}
    >
      {/* Card Section */}
      <div
        className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 rounded-2xl p-8 text-white min-h-[400px] relative overflow-hidden"
        style={{
          width: "789px",
          height: "720px",
          flexShrink: 0,
          borderRadius: "40px",
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.62) 0%, rgba(0, 0, 0, 0.62) 100%), url(${usecaseImg}) lightgray 50% / cover no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-700 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-600 rounded-full opacity-20 translate-y-12 -translate-x-12"></div>

        {/* Header with arrow */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold leading-tight">
              Our Use
            </h2>
            <span className="inline-flex items-center mt-2 text-4xl font-bold leading-tight">
              <img src={VectorUsecase} alt="" style={{ marginRight: "8px" }} />
              Cases
            </span>
          </div>
          <img src={RightArrow} alt="right arrow" width={32} height={32} />
        </div>

        {/* Description */}
        <div className="mb-12 space-y-4 mt-72">
          <p
            className="leading-relaxed text-sm"
            style={{
              color: "#D2D4D7",
              fontFamily: "Funnel Sans",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "140%"
            }}
          >
            All <span
              style={{
                color: "#D2D4D7",
                fontFamily: "Funnel Sans",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "140%"
              }}
            >DirhamCoin</span> transactions are fast and Green, no matter where you are sending or spending your money.
          </p>
          <p
            className="text-xs opacity-80"
            style={{
              color: "#D2D4D7",
              fontFamily: "Funnel Sans",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "140%"
            }}
          >
            Experience seamless transactions with our advanced blockchain technology.
          </p>
        </div>

        {/* Bottom section */}
        <div className="absolute bottom-8 left-8 right-8">
          {/* Dots indicator and tab navigation in a row */}
          <div className="flex items-center justify-between mb-6">
            <img
              src={Dot}
              alt="dot"
              style={{
                width: "86px",
                height: "14px",
                flexShrink: 0
              }}
            />
            <div className="flex space-x-8 ml-6 items-center">
              <span className="text-sm font-semibold border text-zinc-300 border border-gray-300 rounded-full px-4 py-1">Exchange</span>
              <span className="text-sm text-zinc-300 border border-gray-300 rounded-full px-4 py-1">Stable</span>
              <span
                style={{
                  width: "57px",
                  height: "57px",
                  flexShrink: 0,
                  borderRadius: "100px",
                  border: "1px solid #FFF",
                  background: "rgba(255, 255, 255, 0.02)",
                  backdropFilter: "blur(42.75px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img
                  src={ShareIcon}
                  alt="share"
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "100px"
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Gap between the two sections */}
      <div style={{ width: "48px" }}></div>
      {/* Steps/Sections beside the card */}
      <div className="relative flex flex-col justify-center space-y-8 text-left" style={{ minHeight: "600px" }}>
        {/* Steps */}
        <div
          className="flex items-start space-x-4"
          ref={el => stepsRef.current[0] = el}
          data-section="Trade"
        >
          <div className="flex flex-col items-center">
            <div
              className={`w-4 h-4 rounded-full ${activeSection === 'Trade' ? 'bg-green-400 shadow-lg' : 'bg-gray-600'}`}
              onClick={() => handleSectionClick('Trade')}
              style={{ cursor: "pointer" }}
            ></div>
            <div className="w-px h-12 bg-gray-600 mt-2"></div>
          </div>
          <div className="cursor-pointer" onClick={() => handleSectionClick('Trade')}>
            <h3
              className={`text-xl font-medium ${activeSection === 'Trade' ? 'text-white' : 'text-gray-500'}`}
              style={
                activeSection === 'Trade'
                  ? {
                      color: "#FFF",
                      fontFamily: "Funnel Sans",
                      fontSize: "70px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      lineHeight: "120%",
                    }
                  : {}
              }
            >
              Trade{activeSection === 'Trade' && ' *'}
            </h3>
            {activeSection === 'Trade' && (
              <p
                style={{
                  color: "#FFF",
                  fontFamily: "Funnel Sans",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "140%"
                }}
                className="leading-relaxed max-w-xs"
              >
                Trade DirhamCoin seamlessly on our platform with real-time pricing, deep liquidity, and secure order execution. Enjoy low fees and instant settlement for all your trading needs.
              </p>
            )}
          </div>
        </div>
        <div
          className="flex items-start space-x-4"
          ref={el => stepsRef.current[1] = el}
          data-section="Hold"
        >
          <div className="flex flex-col items-center">
            <div
              className={`w-4 h-4 rounded-full ${activeSection === 'Hold' ? 'bg-green-400 shadow-lg' : 'bg-gray-600'}`}
              onClick={() => handleSectionClick('Hold')}
              style={{ cursor: "pointer" }}
            ></div>
            <div className="w-px h-12 bg-gray-600 mt-2"></div>
          </div>
          <div className="cursor-pointer" onClick={() => handleSectionClick('Hold')}>
            <h3
              className={`text-xl font-medium mb-2 ${activeSection === 'Hold' ? 'text-white' : 'text-gray-400'}`}
              style={
                activeSection === 'Hold'
                  ? {
                      color: "#FFF",
                      fontFamily: "Funnel Sans",
                      fontSize: "70px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      lineHeight: "120%",
                    }
                  : {}
              }
            >
              Hold{activeSection === 'Hold' && ' *'}
            </h3>
            {activeSection === 'Hold' && (
              <p
                style={{
                  color: "#FFF",
                  fontFamily: "Funnel Sans",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "140%"
                }}
                className="leading-relaxed max-w-xs"
              >
                But I must explain to you how all this mistaken idea of 
                denouncing pleasure and praising pain was born and I 
                will give you a complete account of the system, and 
                expound the actual teachings of the great explorer of 
                the truth, the master-builder of
              </p>
            )}
          </div>
        </div>
        <div
          className="flex items-start space-x-4"
          ref={el => stepsRef.current[2] = el}
          data-section="Buy/Sell"
        >
          <div className="flex flex-col items-center">
            <div
              className={`w-4 h-4 rounded-full ${activeSection === 'Buy/Sell' ? 'bg-green-400 shadow-lg' : 'bg-gray-600'}`}
              onClick={() => handleSectionClick('Buy/Sell')}
              style={{ cursor: "pointer" }}
            ></div>
            <div className="w-px h-12 bg-gray-600 mt-2"></div>
          </div>
          <div className="cursor-pointer" onClick={() => handleSectionClick('Buy/Sell')}>
            <h3
              className={`text-xl font-medium mb-2 ${activeSection === 'Buy/Sell' ? 'text-white' : 'text-gray-400'}`}
              style={
                activeSection === 'Buy/Sell'
                  ? {
                      color: "#FFF",
                      fontFamily: "Funnel Sans",
                      fontSize: "70px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      lineHeight: "120%",
                    }
                  : {}
              }
            >
              Buy/Sell{activeSection === 'Buy/Sell' && ' *'}
            </h3>
            {activeSection === 'Buy/Sell' && (
              <p
                style={{
                  color: "#FFF",
                  fontFamily: "Funnel Sans",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "140%"
                }}
                className="leading-relaxed max-w-xs"
              >
                Execute fast and secure buy or sell orders with competitive rates 
                and instant settlement for all your DirhamCoin transactions.
              </p>
            )}
          </div>
        </div>
        <div
          className="flex items-start space-x-4"
          ref={el => stepsRef.current[3] = el}
          data-section="Transact"
        >
          <div className="flex flex-col items-center">
            <div
              className={`w-4 h-4 rounded-full ${activeSection === 'Transact' ? 'bg-green-400 shadow-lg' : 'bg-gray-600'}`}
              onClick={() => handleSectionClick('Transact')}
              style={{ cursor: "pointer" }}
            ></div>
          </div>
          <div className="cursor-pointer" onClick={() => handleSectionClick('Transact')}>
            <h3
              className={`text-xl font-medium mb-2 ${activeSection === 'Transact' ? 'text-white' : 'text-gray-400'}`}
              style={
                activeSection === 'Transact'
                  ? {
                      color: "#FFF",
                      fontFamily: "Funnel Sans",
                      fontSize: "70px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      lineHeight: "120%",
                    }
                  : {}
              }
            >
              Transact{activeSection === 'Transact' && ' *'}
            </h3>
            {activeSection === 'Transact' && (
              <p
                style={{
                  color: "#FFF",
                  fontFamily: "Funnel Sans",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "140%"
                }}
                className="leading-relaxed max-w-xs"
              >
                Send and receive DirhamCoin instantly with minimal fees 
                across our secure blockchain network worldwide.
              </p>
            )}
          </div>
        </div>
      </div>
      <style>
        {`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .min-h-screen::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default UseCasesCard;

