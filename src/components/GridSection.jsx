import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

function GridSection() {
  const iconRef = useRef(null);

  useEffect(() => {
    if (iconRef.current) {
      gsap.fromTo(
        iconRef.current,
        { opacity: 0, x: 100, y: -100, scale: 0.7 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out'
        }
      );
    }
  }, []);

  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-3">
      <div className="col-span-2 row-span-4 flex items-start justify-start  rounded-lg shadow">
        <img src="/Grid1.png" alt="Grid 1" className="max-w-full max-h-full object-contain" />
      </div>
      <div className="col-span-2 row-span-6 col-start-5 row-start-1">
        <div className="w-full h-full  rounded-2xl border border-gray-600 p-6 flex flex-col relative overflow-hidden items-start justify-start text-left">
          {/* Background gradient/design element */}
          <div className="absolute top-0 right-0 w-40 h-40 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-full blur-xl transform rotate-45 scale-150"></div>
          </div>
          {/* Icon in top right without GSAP transition */}
          <img
            src="/icon.png"
            alt="icon"
            className="absolute z-20"
            style={{
              top: '1rem',
              right: '1rem',
              width: '590px',
              height: '590px',
              transform: 'translate(250px, -240px)',
              transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), top 0.3s, right 0.3s',
              filter: 'brightness(1.1) contrast(2.1)'
            }}
          />
          {/* Number icon add */}
          <div className="text-gray-400 text-sm font-medium relative z-10 mb-4">
            03.
          </div>
          {/* Main content */}
          <div className="flex-1 flex flex-col justify-end relative z-10 items-start text-left">
            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              Secure
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed text-left">
              Dollar Coin is a currency built on ERC-20 token for the Ethereum blockchain with security in mind.
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 row-span-2 col-start-1 row-start-5 flex items-start justify-center text-left rounded-3xl"
        style={{
          background: "linear-gradient(135deg, #03160D 0%, #1BAE6C 100%)"
        }}
      >
        <div className="flex justify-center items-center gap-8 mt-8 w-full">
          <div className="items-center justify-center">
            <img
              src="/src/assets/Footer.svg"
              alt=""
              className="w-[46px] h-[66px] object-contain"
            />
          </div>
          <h1 className="text-[53px] font-normal text-white">
            DirhamCoin
          </h1>
        </div>
      </div>
      <div className="col-span-2 row-span-3 col-start-3 row-start-1">
        <div className="w-full h-full rounded-2xl border border-gray-600 p-6 flex flex-col justify-between relative items-start text-left">
          {/* Number in upper left corner */}
          <div className="text-gray-400 text-sm font-medium mb-4">
            02.
          </div>
          {/* Main content */}
          <div className="flex-1 flex flex-col justify-center items-start text-left">
            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              Scalable
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed text-left">
              Dollar Coin will foster an ecosystem of products and services made to help people use digital currency in their everyday lives.
            </p>
          </div>
        </div>
      </div>
      <div className=" col-span-2 row-span-3 col-start-3 row-start-4 flex items-start justify-start text-left"> 
        
          <div className="w-full h-full bg-gray-900 rounded-2xl border border-gray-600 p-6 flex flex-col justify-between relative items-start text-left">
          {/* Number in upper left corner */}
          <div className="text-gray-400 text-sm font-medium mb-4">
            04.
          </div>
          {/* Main content */}
          <div className="flex-1 flex flex-col justify-center items-start text-left">
            <h2 className="text-white text-2xl font-bold mb-4 text-left">
             Stable
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed text-left">
             Dollar Coin is pegged 1:1 to the US Dollar, which means 1 USDD will always be redeemable for 1 USD. It’s the best of fiat on the blockchain.
            </p>
          </div>
        </div>
        </div>
    </div>
  );
}

export default GridSection