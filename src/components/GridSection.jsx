import React from 'react'

function GridSection() {
  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-3">
      <div className="col-span-2 row-span-4 flex items-start justify-start bg-white rounded-lg shadow">
        <img src="/Grid1.png" alt="Grid 1" className="max-w-full max-h-full object-contain" />
      </div>
      <div className="col-span-2 row-span-6 col-start-5 row-start-1">
        <div className="w-full h-full bg-gray-900 rounded-2xl border border-gray-600 p-6 flex flex-col relative overflow-hidden items-start justify-start text-left">
          {/* Background gradient/design element */}
          <div className="absolute top-0 right-0 w-40 h-40 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-full blur-xl transform rotate-45 scale-150"></div>
          </div>
          {/* Number */}
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
      <div className="col-span-2 row-span-2 col-start-1 row-start-5 flex items-start justify-start text-left rounded-3xl  bg-gradient-to-br from-[#1BAE6C] to-[#03160D">
        <div className="flex justify-center items-center gap-8 ">
                    <div>
                        <img
                            src="/src/assets/Footer.svg"
                            alt=""
                            className="w-[66px] h-[66px] object-contain"
                        />
                    </div>
                    <h1
 
                        className="text-[53px] font-normal"
                    >
                        DirhamCoin
                    </h1>
           </div>
        </div>
      <div className="col-span-2 row-span-3 col-start-3 row-start-1">
        <div className="w-full h-full bg-gray-900 rounded-2xl border border-gray-600 p-6 flex flex-col justify-between relative items-start text-left">
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
    </div>
  );
}

export default GridSection