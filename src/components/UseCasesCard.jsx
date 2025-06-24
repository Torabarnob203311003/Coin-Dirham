import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import BG3 from '../assets/BG3.svg';
import usecaseImg from '../assets/usecase1.jpg';
import VectorUsecase from '../assets/vectorusecase.svg';
import RightArrow from '../assets/rightarrow.png';

import Dot from '../assets/dot.svg';
import ShareIcon from '../assets/share.svg';

const UseCasesCard = () => {
  const [activeSection, setActiveSection] = useState(null); // Added state for active section

  return (
    <div
      className="relative min-h-screen flex flex-row items-center justify-center px-4"
      style={{
        backgroundImage: `url(${BG3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
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
      <div className="flex flex-col justify-center space-y-8 text-left">
        {/* Trade Section */}
        <div className="flex items-start space-x-4">
          <div className="flex flex-col items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <div className="w-px h-12 bg-gray-600 mt-2"></div>
          </div>
          <div>
            <h3 className="text-gray-500 text-xl font-medium">Trade</h3>
          </div>
        </div>

        {/* Hold Section */}
        <div className="flex items-start space-x-4">
          <div className="flex flex-col items-center">
            <div className={`w-2 h-2 rounded-full ${activeSection === 'Hold' ? 'bg-green-400' : 'bg-gray-600'}`}></div>
            <div className="w-px h-12 bg-gray-600 mt-2"></div>
          </div>
          <div className="cursor-pointer" onClick={() => setActiveSection('Hold')}>
            <h3 className={`text-xl font-medium mb-2 ${activeSection === 'Hold' ? 'text-white' : 'text-gray-400'}`}>
              Hold *
            </h3>
            {activeSection === 'Hold' && (
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                But I must explain to you how all this mistaken idea of 
                denouncing pleasure and praising pain was born and I 
                will give you a complete account of the system, and 
                expound the actual teachings of the great explorer of 
                the truth, the master-builder of
              </p>
            )}
          </div>
        </div>

        {/* Buy/Sell Section */}
        <div className="flex items-start space-x-4">
          <div className="flex flex-col items-center">
            <div className={`w-2 h-2 rounded-full ${activeSection === 'Buy/Sell' ? 'bg-green-400' : 'bg-gray-600'}`}></div>
            <div className="w-px h-12 bg-gray-600 mt-2"></div>
          </div>
          <div className="cursor-pointer" onClick={() => setActiveSection('Buy/Sell')}>
            <h3 className={`text-xl font-medium mb-2 ${activeSection === 'Buy/Sell' ? 'text-white' : 'text-gray-400'}`}>
              Buy/Sell
            </h3>
            {activeSection === 'Buy/Sell' && (
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Execute fast and secure buy or sell orders with competitive rates 
                and instant settlement for all your DirhamCoin transactions.
              </p>
            )}
          </div>
        </div>

        {/* Transact Section */}
        <div className="flex items-start space-x-4">
          <div className="flex flex-col items-center">
            <div className={`w-2 h-2 rounded-full ${activeSection === 'Transact' ? 'bg-green-400' : 'bg-gray-600'}`}></div>
          </div>
          <div className="cursor-pointer" onClick={() => setActiveSection('Transact')}>
            <h3 className={`text-xl font-medium mb-2 ${activeSection === 'Transact' ? 'text-white' : 'text-gray-400'}`}>
              Transact
            </h3>
            {activeSection === 'Transact' && (
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Send and receive DirhamCoin instantly with minimal fees 
                across our secure blockchain network worldwide.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCasesCard;
