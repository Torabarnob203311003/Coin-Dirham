import React from 'react'

function GridSection() {
  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-4">
      <div className="col-span-2 row-span-4 flex items-center justify-center bg-white rounded-lg shadow">
        <img src="/Grid1.png" alt="Grid 1" className="max-w-full max-h-full object-contain" />
      </div>
      <div className="col-span-2 row-span-6 col-start-5 row-start-1">5</div>
      <div className="col-span-2 row-span-2 col-start-1 row-start-5">6</div>
      <div className="col-span-2 row-span-3 col-start-3 row-start-1">
        <div className="w-80 h-48 bg-gray-900 rounded-2xl border border-gray-600 p-6 flex flex-col justify-between relative">
          {/* Number in upper left corner */}
          <div className="absolute top-6 left-6 text-gray-400 text-sm font-medium">
            02.
          </div>
          {/* Main content */}
          <div className="flex-1 flex flex-col justify-center mt-6">
            <h2 className="text-white text-2xl font-bold mb-4">
              Scalable
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dollar Coin will foster an ecosystem of products and services made to help people use digital currency in their everyday lives.
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 row-span-3 col-start-3 row-start-4">8</div>
    </div>
  );
}

export default GridSection