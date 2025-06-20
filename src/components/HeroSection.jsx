import React from 'react'

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center w-full max-h-screen text-center relative" style={{ color: '#FFF', fontFamily: 'Funnel Sans', fontStyle: 'normal', fontWeight: 300 }}>
      {/* Main text content */}
      <div
        className="flex flex-col items-center justify-center w-full text-center"
        style={{ width: '998px', color: '#FFF', fontFamily: 'Funnel Sans', fontSize: '120px', fontStyle: 'normal', fontWeight: 300, lineHeight: '120px' }}
      >
        {/* Overlapping icon image as before, not centered absolute */}
        <img 
          src="/icon.png" 
          alt="" 
          className="h-[600px] w-[600px] object-contain drop-shadow-2xl contrast-200 brightness-125 opacity-80 pointer-events-none select-none" 
          style={{ filter: 'drop-shadow(0 0 40px #000) contrast(2) brightness(1.25)', transform: 'translateX(680px) translateY(50px)' }}
        />
        {/* Foreground text content */}
        <div className="absolute top-5 left-80 z-10  mt-7 w-full flex flex-col items-start" style={{color: '#FFF', fontFamily: 'Funnel Sans', fontSize: '120px', fontStyle: 'normal', fontWeight: 300, lineHeight: '120px'}}>
          <span className='-ms-16'>
            Stable
            <img
              src="/src/assets/Group 2.svg"
              alt="arrow"
              style={{ height: '60px', width: 'auto', verticalAlign: 'middle', display: 'inline', marginLeft: '8px' }}
            />
          </span>
          <span className='ms-10'>Cryptocurrency</span>
          <span style={{display: 'inline-flex', alignItems: 'center'}}>
            <span
              className='-ms-16'
              style={{
                border: '2px solid #fff',
                borderRadius: '40px',
                padding: '0 16px',
                display: 'inline-block',
                position: 'relative',
                top: '16px'
              }}
            >
              backed
            </span>
            <span style={{marginLeft: '8px'}}>by the</span>
          </span>
          <span
            className='ms-64'
            style={{
              position: 'relative',
              top: '1px'
            }}
          >
            US Dollar
          </span>
        </div>
      </div>
      {/* Card section - styled as in screenshot */}
      <div className="flex-shrink-0 w-full md:w-[381px] md:h-[420px] bg-[rgba(18,40,32,0.75)] rounded-3xl backdrop-blur-xl shadow-2xl mt-8 md:mt-20 md:ml-12 p-6 relative z-20">
        {/* Close icon */}
        <div className="flex justify-end">
          <span className="text-white text-2xl cursor-pointer font-thin">&times;</span>
        </div>
        {/* Title */}
        <div className="mt-2">
          <div
            style={{
              width: '207px',
              color: '#FFF',
              fontFamily: 'Funnel Sans',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: '40px',
            }}
          >
            A Digital<br />Dollar
          </div>
        </div>
        {/* Description styled as in screenshot */}
        <div
          style={{
            background: 'rgba(0,0,0,0.20)',
            border: '2px solid #3FC5FF',
            borderRadius: '6px',
            color: '#FFF',
            fontFamily: 'Funnel Sans',
            fontSize: '16px',
            fontWeight: 300,
            lineHeight: '22px',
            marginTop: '18px',
            padding: '12px 10px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          With the stability and trust of traditional currency combined<br />with the openess and freedom of cryptocurrency
        </div>
        {/* Button */}
        <div className="flex items-center justify-end mt-8">
          <button
            className="flex items-center border border-white text-white rounded-full px-6 py-2 hover:bg-white hover:text-black transition"
          >
            More details
            <span className="ml-2 text-xl">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection