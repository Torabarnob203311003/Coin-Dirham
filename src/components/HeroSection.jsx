import React, { useRef, useEffect } from 'react'
import Marquee from './Marquee'

function HeroSection() {
  const fgTextRef = useRef(null)
  const cardRef = useRef(null)
  const iconRef = useRef(null)

  useEffect(() => {
    // Animate foreground text (pop-up + left to right)
    if (fgTextRef.current) {
      import('gsap').then(({ default: gsap }) => {
        gsap.fromTo(
          fgTextRef.current,
          { opacity: 0, x: -120 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
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
    // Animate icon image: pop up on load, then rotate infinitely
    if (iconRef.current) {
      import('gsap').then(({ default: gsap }) => {
        gsap.fromTo(
          iconRef.current,
          { scale: 0.7, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            onComplete: () => {
              gsap.to(iconRef.current, {
                rotate: 360,
                duration: 36,
                repeat: -1,
                ease: 'linear'
              })
            }
          }
        )
      })
    }
  }, [])

  return (
    <div
      className="flex flex-col md:flex-row items-start justify-center w-full max-h-screen text-center relative mt-7  px-2 sm:px-4"
      style={{ color: '#FFF', fontFamily: 'Funnel Sans', fontStyle: 'normal', fontWeight: 300 }}
    >
      {/* Main text content */}
      <div
        className="flex flex-col items-center justify-center w-full text-center relative"
        style={{
          width: '100%',
          maxWidth: '998px',
          color: '#FFF',
          fontFamily: 'Funnel Sans',
          fontSize: 'clamp(32px, 8vw, 120px)',
          fontStyle: 'normal',
          fontWeight: 300,
          lineHeight: 'clamp(32px, 8vw, 120px)',
        }}
      >
        {/* Overlapping icon image as before, not centered absolute */}
        <img
          ref={iconRef}
          src="/icon.png"
          alt=""
          className="
            h-[380px] w-[380px] sm:h-[300px] sm:w-[300px] md:h-[600px] md:w-[600px]
            object-contain drop-shadow-2xl contrast-200 brightness-125 opacity-80
            pointer-events-none select-none
            translate-x-0 translate-y-20
            sm:translate-x-[100px] sm:translate-y-[50px]
            md:translate-x-[490px] md:translate-y-[40px]
          "
          style={{
            filter: 'drop-shadow(0 0 40px #000) contrast(2) brightness(1.25)',
          }}
        />
        {/* Foreground text content */}
        <div
          ref={fgTextRef}
          className="absolute top-2 left-2 sm:top-5 sm:left-10 md:top-5 md:left-180 z-10 -mt-16 sm:mt-7 w-full flex flex-col items-start pl-16 sm:pl-0 sm:text-left text-5xl sm:text-9xl leading:[1.2] md:leading-[0.9]"
          style={{
            color: '#FFF',
            fontFamily: 'Funnel Sans',
            fontStyle: 'normal',
            fontWeight: 300,
          }}
        >
          <span className="-ms-4 sm:-ms-8 md:-ms-16">
            Stable
            <img
              src="/Group 2.svg"
              alt="arrow"
              style={{
                height: 'clamp(20px, 4vw, 60px)',
                width: 'auto',
                verticalAlign: 'middle',
                display: 'inline',
                marginLeft: '8px',
              }}
            />
          </span>
          <span className="-ms-3 sm:ms-10">Cryptocurrency</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <span
              className="-ms-4 sm:-ms-8 md:-ms-16"
              style={{
                border: '2px solid #fff',
                borderRadius: 'clamp(20px, 4vw, 40px)',
                padding: '0 clamp(8px, 2vw, 16px)',
                display: 'inline-block',
                position: 'relative',
                top: 'clamp(8px, 2vw, 16px)',
                fontSize: 'clamp(20px, 6vw, 120px)',
              }}
            >
              backed
            </span>
            <span style={{ marginLeft: 'clamp(4px, 1vw, 8px)' }}>by the</span>
          </span>
          <span
            className="ms-8 sm:ms-32 md:ms-64"
            style={{
              position: 'relative',
              top: '1px',
            }}
          >
            US Dollar
          </span>
        </div>
      </div>
      {/* Card section - styled as in screenshot */}
      <div
        ref={cardRef}
        className="rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 md:p-8 backdrop-blur-2xl shadow-2xl flex flex-col justify-between border border-[rgba(255,255,255,0.18)] -mt-7 ms-40 sm:mt-16 md:mt-14 md:ml-8 max-w-[95vw] sm:max-w-[400px] md:max-w-none mx-auto md:mx-0"
        style={{
          width: '60%',
          //height:'50%',
          //minWidth: '40px',
          maxWidth: '381px',
          height: 'clamp(320px, 60vw, 420px)',
          boxShadow: '0 4px 32px 0 rgba(255,255,255,0.15), 0 1.5px 8px 0 rgba(255,255,255,0.10) inset',
          backdropFilter: 'blur(22.7px)',
          transform: 'translateY(0px) sm:translateY(25px) md:translateY(50px)',
        }}
      >
        {/* STAR icon styled as requested, now larger */}
        <div className="flex justify-end">
          <div
            style={{
              borderRadius: 'clamp(20px, 4vw, 40px)',
              width: 'clamp(48px, 12vw, 72px)',
              height: 'clamp(48px, 12vw, 72px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src="/STAR.svg" alt="star" style={{ width: 'clamp(24px, 6vw, 40px)', height: 'clamp(24px, 6vw, 40px)' }} />
          </div>
        </div>
        {/* Title - moved up with smaller margin */}
        <div className="mt-0">
          <div
            style={{
              color: '#FFF',
              fontFamily: 'Funnel Sans',
              fontSize: 'clamp(20px, 5vw, 40px)',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: 'clamp(24px, 6vw, 40px)',
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
            fontSize: 'clamp(14px, 3.5vw, 16px)',
            fontWeight: 300,
            lineHeight: 'clamp(18px, 4.5vw, 22px)',
            marginTop: 'clamp(12px, 3vw, 18px)',
            padding: 'clamp(8px, 2vw, 12px) clamp(6px, 1.5vw, 10px)',
            width: '100%',
            boxSizing: 'border-box',
            textAlign: 'left',
          }}
        >
          With the stability and trust of traditional currency combined with the openess and freedom of cryptocurrency
        </div>
        {/* Button */}
        <div className="flex items-center justify-end mt-4 sm:mt-8">
          <button
            className="flex items-center border border-white text-white rounded-full transition"
            style={{
              display: 'inline-flex',
              padding: 'clamp(8px, 2vw, 11.5px) clamp(10px, 2.5vw, 15.881px) clamp(10px, 2.5vw, 15.5px) clamp(20px, 5vw, 34px)',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              gap: 'clamp(10px, 2.5vw, 19px)',
              fontSize: 'clamp(12px, 3vw, 16px)',
            }}
          >
            More details
            <span className="text-base sm:text-xl">&#8594;</span>
          </button>
        </div>
      </div>
      {/* Empty div for marquee */}
      <div></div>
    </div>
    
  )
}

export default HeroSection