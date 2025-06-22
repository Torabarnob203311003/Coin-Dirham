import React from "react";
import { BsArrowRight } from "react-icons/bs";
import tokenBitcoin from "../assets/token_bitcoin.svg"; // Adjust the path if needed
import crousupLogo from "../assets/Course Up.svg"; // Replace with your actual logo path

function CardSection() {
  return (
    <div
      className="w-full min-h-[300px] flex flex-col items-center justify-center bg-cover bg-center overflow-x-hidden relative"
      style={{
        backgroundImage: 'url(/src/assets/BG2.jpg)',
        filter: "brightness(0.9) contrast(1.2)", // Reduce brightness, add contrast
      }}
    >
      <div
        className="text-center max-w-[1396px] mt-36 mx-auto w-full"
        style={{
          color: "#F3F3F3",
          textAlign: "center",
          fontFamily: "Funnel Sans",
          fontSize: "70px",
          fontStyle: "normal",
          fontWeight: 300,
          lineHeight: "120%",
        }}
      >
        <span
          className="inline-flex items-center justify-center border border-[#1BAE6C] rounded-[51.5px] px-6"
          style={{
            width: "410px",
            height: "72px",
            flexShrink: 0,
            fontFamily: "Funnel Sans",
            fontWeight: 300,
            fontSize: "inherit",
          }}
        >
          DirhamCoin
        </span>
        {" "}
        is a{" "}
        <img
          src={tokenBitcoin}
          alt="bitcoin token"
          className="inline-block align-middle mx-2 "
          style={{
            width: "78.495px",
            height: "52px",
            flexShrink: 0,
            borderRadius: "100px",
            background: "linear-gradient(269deg, rgba(27, 174, 108, 0.44) -26.56%, rgba(33, 33, 33, 0.35) 99.06%)",
            backdropFilter: "blur(8.25px)",
            verticalAlign: "middle",
          }}
        />
        type of cryptocurrency 
        <br  />that is referred to as a stable coin
        <span className="inline-block align-middle mx-2">
          <BsArrowRight size={72} color="#FFF" style={{ verticalAlign: "middle"}} />
        </span>
        
        This <br />Means
        <img
          src={crousupLogo}
          alt="CrousUp Logo"
          style={{
            width: "113px",
            height: "56px",
            flexShrink: 0,
            verticalAlign: "middle",
            margin: "0 12px",
            display: "inline-block",
            borderRadius: "100px",
            background: "linear-gradient(267deg, rgba(96, 96, 96, 0.32) 15.44%, rgba(198, 198, 198, 0.10) 97.33%)",
            backgroundColor: "#606060",
            padding: "8px"
          }}
        />
        DirhamCoin = USD Dollar
      </div>
    </div>
  );
}

export default CardSection;
