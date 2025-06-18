import React from 'react'

function HeroSection() {
  return (
    <div
      className="flex flex-col items-center justify-center max-h-screen w-full text-center relative"
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
  )
}

export default HeroSection