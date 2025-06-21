import React from "react";

function Marquee() {
  const textStyle = {
    color: '#FFF',
    fontFamily: 'Funnel Sans',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: 'normal',
  };
  return (
    <div className="flex items-center space-x-10 w-full justify-center mt-4 whitespace-nowrap">
      <span
        className="border border-white flex items-center justify-center"
        style={{
          width: '230px',
          height: '47px',
          flexShrink: 0,
          borderRadius: '100.528px',
          backdropFilter: 'blur(76.45px)',
          ...textStyle
        }}
      >
        Scroll to learn more
      </span>
      <span style={{display: 'inline-block', width: '162px', height: '1px', background: '#FFF', flexShrink: 0}}></span>
      <span
        className="flex items-center justify-center"
        style={{
          width: '230px',
          height: '47px',
          flexShrink: 0,
          borderRadius: '100.528px',
          ...textStyle
        }}
      >
        Fast// Stable// Scalable// Secure//
      </span>
      <span   className="" style={{display: 'inline-block', width: '162px', height: '1px', background: '#FFF',  flexShrink: 0}}></span>
      <span
        className="flex items-center space-x-40   justify-center"
        style={{
          width: '230px',
          height: '47px',
          flexShrink: 0,
          borderRadius: '100.528px',
          ...textStyle
        }}
      >
        (We are part of the GlobalCoin ecosystem)
      </span>
    </div>
  );
}

export default Marquee;
