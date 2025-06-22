import React, { useRef, useEffect } from 'react'
import Marquee from './Marquee'

function HeroSection() {
  const fgTextRef = useRef(null)
  const cardRef = useRef(null)
  const iconRef = useRef(null)

  useEffect(() => {
    // Animate foreground text (pop-up)
    if (fgTextRef.current) {
      import('gsap').then(({ default: gsap }) => {
        gsap.fromTo(
          fgTextRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }
        )
      })
    }
    // Animate card (from right, blur to clear)
    if (cardRef.current) {
      import('gsap').then(({ default: gsap }) => {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, x: 100, filter: 'blur(16px)' },
          { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1, delay: 0.4, ease: 'power3.out' }
        )
      })
    }
    // Animate icon image (continuous 360deg rotation)
    if (iconRef.current) {
      import('gsap').then(({ default: gsap }) => {
        gsap.to(iconRef.current, {
          rotate: 360,
          duration: 36, // slower rotation (was 8)
          repeat: -1,
          ease: 'linear'
        })
      })
    }
  }, [])

  return (
    <div className="flex flex-col md:flex-row items-start justify-center w-full max-h-screen text-center relative mt-10" style={{ color: '#FFF', fontFamily: 'Funnel Sans', fontStyle: 'normal', fontWeight: 300 }}>
      {/* Main text content */}
      <div
        className="flex flex-col items-center justify-center w-full text-center"
        style={{ width: '998px', color: '#FFF', fontFamily: 'Funnel Sans', fontSize: '120px', fontStyle: 'normal', fontWeight: 300, lineHeight: '120px' }}
      >
        {/* Overlapping icon image as before, not centered absolute */}
        <img 
          ref={iconRef}
          src="/icon.png" 
          alt="" 
          className="h-[600px] w-[600px] object-contain drop-shadow-2xl contrast-200 brightness-125 opacity-80 pointer-events-none select-none" 
          style={{ filter: 'drop-shadow(0 0 40px #000) contrast(2) brightness(1.25)', transform: 'translateX(530px) translateY(40px)' }}
        />
        {/* Foreground text content */}
        <div
          ref={fgTextRef}
          className="absolute top-5 left-80 z-10  mt-7 w-full flex flex-col items-start"
          style={{color: '#FFF', fontFamily: 'Funnel Sans', fontSize: '120px', fontStyle: 'normal', fontWeight: 300, lineHeight: '120px'}}
        >
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
      <div
        ref={cardRef}
        className="rounded-[32px] p-6 md:p-8 backdrop-blur-2xl shadow-2xl flex flex-col justify-between border border-[rgba(255,255,255,0.18)] mt-16 md:mt-0 md:ml-8"
        style={{
          width: '381px',
          height: '420px',
          boxShadow: '0 4px 32px 0 rgba(255,255,255,0.15), 0 1.5px 8px 0 rgba(255,255,255,0.10) inset',
          backdropFilter: 'blur(22.7px)',
          transform: 'translateY(50px)',
        }}
      >
        {/* STAR icon styled as requested, now larger */}
        <div className="flex justify-end">
          <div
            style={{
              borderRadius: '40px',
             
           
              width: '72px', // increased size
              height: '72px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src="/public/STAR.svg" alt="star" style={{ width: '40px', height: '40px' }} />
          </div>
        </div>
        {/* Title - moved up with smaller margin */}
        <div className="mt-0">
          <div
            style={{
              color: '#FFF',
              fontFamily: 'Funnel Sans',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: '40px',
              textAlign: 'left',
            }}
          >
            A Digital <br /> Dollar 
          </div>
        </div>
        {/* Description styled as in screenshot, border removed */}
        <div
          style={{
    
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
            textAlign: 'left',
          }}
        >
          With the stability and trust of traditional currency combined with the openess and freedom of cryptocurrency
        </div>
        {/* Button */}
        <div className="flex items-center justify-end mt-8">
          <button
            className="flex items-center border border-white text-white rounded-full  transition"
            style={{
              display: 'inline-flex',
              padding: '11.5px 15.881px 15.5px 34px',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              gap: '19px',
            }}
          >
            More details
            <span className="text-xl">&#8594;</span>
          </button>
        </div>
      </div>
      {/* Empty div for marquee */}
      <div> 

      </div>
    
    </div>
    
  )
}

export default HeroSection