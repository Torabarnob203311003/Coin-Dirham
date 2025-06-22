import React from 'react'

function GridSection() {
  return (
    <div className="min-h-screen bg-[#101a16] flex items-center justify-center py-8 px-2">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-6">
        {/* 01. Fast */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg p-7 flex flex-col justify-between min-h-[180px] overflow-hidden">
          <span className="absolute top-5 left-5 text-xs text-white/70 font-semibold">01.</span>
          {/* Background swirl image (placeholder gradient) */}
          <div className="absolute right-0 top-0 w-32 h-24 opacity-60 pointer-events-none" style={{background: 'radial-gradient(ellipse at top right, #1de9b6 40%, transparent 70%)'}} />
          <h3 className="text-xl font-bold text-white mb-2 mt-8">Fast</h3>
          <p className="text-white/80 text-sm">
            All <span className="font-semibold text-white">DirhamCoin</span> transactions are fast and cheap, no matter where you are sending, or spending, your money.
          </p>
        </div>
        {/* 02. Scalable */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg p-7 flex flex-col justify-between min-h-[180px]">
          <span className="absolute top-5 left-5 text-xs text-white/70 font-semibold">02.</span>
          <h3 className="text-xl font-bold text-white mb-2 mt-8">Scalable</h3>
          <p className="text-white/80 text-sm">
            DirhamCoin will foster an ecosystem of products and services made to help people use digital currency in their everyday lives.
          </p>
        </div>
        {/* 03. Secure */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg p-7 flex flex-col justify-between min-h-[180px] overflow-hidden">
          <span className="absolute top-5 left-5 text-xs text-white/70 font-semibold">03.</span>
          {/* Background swirl image (placeholder gradient) */}
          <div className="absolute right-0 top-0 w-32 h-24 opacity-60 pointer-events-none" style={{background: 'radial-gradient(ellipse at top right, #1de9b6 40%, transparent 70%)'}} />
          <h3
            className="mb-2 mt-8"
            style={{
              width: '150px',
              color: '#FFF',
              fontFamily: '"Funnel Sans", sans-serif',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: '120%',
              // leading-trim and text-edge are not widely supported, but included for completeness
              leadingTrim: 'both',
              textEdge: 'cap'
            }}
          >
            Secure
          </h3>
          <p className="text-white/80 text-sm">
            DirhamCoin is a currency, built as an ERC-20 token on the Ethereum blockchain with security in mind.
          </p>
        </div>
        {/* DirhamCoin Logo Card */}
        <div className="row-span-2 md:row-span-2 md:col-span-1 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg p-7 min-h-[180px] relative overflow-hidden">
          {/* Swirl background effect */}
          <div className="absolute right-0 top-0 w-32 h-24 opacity-60 pointer-events-none" style={{background: 'radial-gradient(ellipse at top right, #1de9b6 40%, transparent 70%)'}} />
          <div className="flex flex-col items-center gap-4 w-full relative z-10">
            {/* Logo (placeholder SVG) */}
            <div className="bg-[#1de9b6] rounded-full w-14 h-14 flex items-center justify-center mb-2 shadow-lg">
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="16" fill="#1de9b6"/>
                <path d="M10 16h12M10 20h12M10 12h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">DirhamCoin</span>
            <span className="text-sm text-[#1de9b6] font-semibold tracking-wide">The Next Generation Stablecoin</span>
            <p className="text-center text-white/80 text-sm max-w-[220px] mt-2">
              Fast, secure, and scalable payments for everyone. Pegged 1:1 to the US Dollar and built on Ethereum.
            </p>
           
          </div>
        </div>
        {/* 04. Stable */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg p-7 flex flex-col justify-between min-h-[180px]">
          <span className="absolute top-5 left-5 text-xs text-white/70 font-semibold">04.</span>
          <h3 className="text-xl font-bold text-white mb-2 mt-8">Stable</h3>
          <p className="text-white/80 text-sm">
            DirhamCoin is pegged 1:1 to the US Dollar, which means 1 USDD will always be redeemable for 1 USD. It’s the best of fiat on the blockchain.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GridSection