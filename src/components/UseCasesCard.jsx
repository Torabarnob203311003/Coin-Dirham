import React from 'react';
import { Share2 } from 'lucide-react';
import BG3 from '../assets/BG3.svg';
import usecaseImg from '../assets/usecase1.jpg';
import VectorUsecase from '../assets/vectorusecase.svg';
import RightArrow from '../assets/rightarrow.png';

const UseCasesCard = () => {


  return (
  <div className='relative min-h-screen flex flex-col items-center justify-center px-4'
    style={{
      backgroundImage: `url(${BG3})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
  >
      <div
        className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 rounded-2xl p-8 text-white min-h-[400px] relative overflow-hidden max-w-md mx-auto"
        style={{
          width: "989px",
          height: "580px",
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
      <div className="mb-12 space-y-4">
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
        {/* Dots indicator */}
        <div className="flex space-x-2 mb-6">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        </div>

        {/* Tab navigation */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-8">
            <span className="text-sm text-white font-semibold">Exchange</span>
            <span className="text-sm text-green-300">Stable</span>
          </div>
          
          {/* Share button */}
          <div className="p-2">
            <Share2 className="w-4 h-4 text-green-300" />
          </div>
        </div>
      </div>
    </div>

  </div>
  );
};

export default UseCasesCard;