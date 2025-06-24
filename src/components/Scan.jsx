import React from "react";
import FooterLogo from "../assets/footer2.svg";
import AppleSvg from "../assets/apple.svg";
import GoogleSvg from "../assets/goggle.svg";

// Placeholder icons (replace with your own assets if available)
const CoinsAppIcon = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="18" fill="#1de9b6" />
    <path d="M12 18h12M12 22h12M12 14h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/46.jpg"
];

const QRCode = () => (
  <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
    <rect width="48" height="48" rx="8" fill="#222" />
    <rect x="8" y="8" width="8" height="8" fill="#fff"/>
    <rect x="32" y="8" width="8" height="8" fill="#fff"/>
    <rect x="8" y="32" width="8" height="8" fill="#fff"/>
    <rect x="20" y="20" width="4" height="4" fill="#fff"/>
    <rect x="24" y="24" width="4" height="4" fill="#fff"/>
    <rect x="32" y="32" width="8" height="8" fill="#fff"/>
  </svg>
);

function Scan() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0c1813] overflow-hidden px-4"
      style={{
        backgroundImage: "url('/bg3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center ">
        <h1
          className="text-white text-center font-[Funnel Sans] font-light mb-6"
          style={{
            width: 971,
            height: 300,
            fontFamily: "Funnel Sans",
            fontWeight: 300,
            fontSize: "100px",
            lineHeight: "100px",
            letterSpacing: "0%",
            color: "#fff",
            margin: "0 auto",
            maxWidth: "100%",
            overflowWrap: "break-word"
          }}
        >
          Start transacting<br />
          with <span className="inline-flex items-center gap-2">
            DirhamCoin
            <img
              src={FooterLogo}
              alt="Footer Logo"
              className="w-32 h-32 mt-5 ml-2 inline-block align-middle"
              style={{ filter: "drop-shadow(0 0 10px #000) contrast(1.2) brightness(1.2)" }}
            />
          </span>
          <br />
          {/* Add Apple and Google SVGs before "on" */}
          <span className="inline-flex items-center gap-4 mt-4">
            <span
              style={{
                width: "147px",
                height: "76px",
                flexShrink: 0,
                borderRadius: "100px",
                background: "linear-gradient(267deg, rgba(96, 96, 96, 0.32) 15.44%, rgba(198, 198, 198, 0.10) 97.33%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px"
              }}
            >
              <img
                src={AppleSvg}
                alt="Apple"
                style={{
                  width: "34px",
                  height: "34px",
                  flexShrink: 0
                }}
              />
              <img
                src={GoogleSvg}
                alt="Google"
                style={{
                  width: "34px",
                  height: "34px",
                  flexShrink: 0
                }}
              />
            </span>
            <span className="ml-4">on Coins App</span>
          </span>
        </h1>
        <div className="flex items-center justify-center gap-4 mb-4">
        
          
        </div>
       <div className="mt-24">
         <p
          className="text-center mb-8 font-light"
          style={{
            width: "800px",
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Funnel Sans",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "140%",
            opacity: 0.51,
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising <br /> pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of...
        </p>
        <div className="flex flex-row gap-4 mb-12 justify-center items-center w-full">
          <button
            className="text-white font-semibold px-6 py-3 rounded-full shadow transition flex items-center"
            style={{
              width: "205px",
              height: "47px",
              flexShrink: 0,
              borderRadius: "100.528px",
              border: "1px solid #1BAE6C",
              backdropFilter: "blur(76.45132446289062px)"
            }}
          >
            <span className="flex items-center w-full justify-between whitespace-nowrap">
              <span style={{ marginRight: "18px" }}>Get DirhamCoin</span>
              <span
                className="inline-flex items-center justify-center rounded-full p-1"
                style={{
                  background: "linear-gradient(135deg, rgba(27, 174, 108, 0.53) 4.72%, rgba(7, 88, 52, 0.53) 79.2%)",
                  backdropFilter: "blur(8.25px)"
                }}
              >
                <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
                  <path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-4-4 4 4-4 4"/>
                </svg>
              </span>
            </span>
          </button>
          <button
            className="text-white font-semibold px-6 py-3 rounded-full shadow transition flex items-center"
            style={{
              width: "226px",
              height: "47px",
              flexShrink: 0,
              borderRadius: "100.528px",
              border: "1px solid rgba(255, 255, 255, 0.07)",
              backdropFilter: "blur(76.45132446289062px)",
              background: "transparent"
            }}
          >
            Download Whitepaper
          </button>
        </div>
       </div>
      </div>
      {/* Bottom Left QR Card */}
      <div className="absolute left-6 bottom-6 bg-[#181f1c] bg-opacity-80 rounded-2xl p-5 flex flex-col items-center shadow-lg min-w-[220px]">
        <QRCode />
        <div className="mt-3 text-white text-base font-semibold">Scan our QR code</div>
        <div className="text-[#b6eada] text-xs mt-1">Download on App Store or Google Play.</div>
      </div>
      {/* Bottom Right Social Proof Card */}
      <div className="absolute right-6 bottom-6 bg-[#181f1c] bg-opacity-80 rounded-2xl p-5 flex flex-col items-start shadow-lg min-w-[220px]">
        <div className="text-white text-xl font-bold mb-2">+25k</div>
        <div className="text-[#b6eada] text-xs mb-2">People recommend</div>
        <div className="flex items-center mb-1">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="avatar"
              className="w-8 h-8 rounded-full border-2 border-[#232b27] -ml-2 first:ml-0"
              style={{ zIndex: 10 - i }}
            />
          ))}
        </div>
        <div className="text-[#b6eada] text-xs">They trust, use and enjoy it</div>
      </div>
      {/* Optional: background swirl/gradient effect */}
      <div className="pointer-events-none absolute inset-0 z-0" style={{
        background: "radial-gradient(ellipse at center, #1de9b622 0%, transparent 70%)"
      }} />
    </div>
  );
}


export default Scan;

