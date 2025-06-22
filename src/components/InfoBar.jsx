import React from "react";
import Marquee from "react-fast-marquee";

const textStyle = {
  color: '#808080',
  fontFamily: 'Funnel Sans',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: 'normal',
};

function InfoBar() {
  return (
    <div className="w-full overflow-hidden mt-28 px-2">
      <Marquee gradient={false} speed={180} pauseOnHover={true}>
        <span
          className="border border-zinc-500 rounded-full px-4 py-1 flex items-center mr-8"
          style={textStyle}
        >
          Scroll to learn more
        </span>
        <div className="flex items-center mx-12">
          <span className="block h-px bg-white/30 flex-1 w-56 mr-8" />
          <span
            className="mx-8 w-[260px]"
            style={textStyle}
          >
            Fast // Stable // Scalable // Secure //
          </span>
          <span className="block h-px bg-white/30 flex-1 w-80 " />
        </div>
        <span
          className="ml-8"
          style={textStyle}
        >
          (We are part of the iGlobalCoin ecosystem)
        </span>
      </Marquee>
    </div>
  );
}

export default InfoBar;
