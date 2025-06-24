import React, { useRef, } from 'react'
import VectorIcon from '../assets/Vector.svg'


function LineSection() {
  const marqueeRef = useRef(null)
 // const marqueeTween = useRef(null)

  

  return (
  <div className=' bg-green-950'
  style={{
    backgroundColor: "#012B16",
  }}>

      <div
      className="  py-2"
      style={{
        background: "linear-gradient(90deg, #002616 0%, #003B30 50%, #064E2E 100%)",
        opacity:"0.9" ,
        transform: "rotate(-1.3deg)",
        color: "#F3F3F3",
            width: "1896px",
    height: "65px",
        textAlign: "center",
        fontFamily: "Funnel Sans",
        fontSize: "46px",
        fontStyle: "normal",
        fontWeight: 200,
        lineHeight: "110%",
        whiteSpace: "nowrap",
        overflow: "hidden",
        position: "relative"
      }}
    >
      <div
          ref={marqueeRef}
          className="flex items-center justify-center space-x-2"
          style={{
            willChange: "transform",
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%"
          }}
        >
        <span className='font-thin'>Dirham and Bitcoin are an stable coin</span>
        <span>
          <img src={VectorIcon} alt="vector icon" width={32} height={32} />
        </span>
        <h2 className="font-thin">
            Buy DirhamCoin on the app at the rate of 1 USD to 1 USD
            <span className="inline-block align-middle ml-2" style={{ position: "relative", top: "-6px" }}>
              <img src={VectorIcon} alt="logo" width={32} height={32} />
            </span>
        </h2>
      </div>
    </div>
  </div>
  )
}

export default LineSection