import React from "react";

// Placeholder icons (replace with your own assets if available)
const AppleIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="16" fill="#222" />
    <path d="M21 24c-1 1-2 1-3 1s-2 0-3-1c-2-2-3-5-3-7 0-2 1-3 3-3 1 0 2 1 3 1s2-1 3-1c2 0 3 1 3 3 0 2-1 5-3 7z" fill="#fff"/>
    <circle cx="20" cy="12" r="2" fill="#fff"/>
  </svg>
);
const GoogleIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="16" fill="#222" />
    <text x="9" y="22" fontSize="14" fill="#fff" fontFamily="Arial">G</text>
  </svg>
);
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
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0c1813] overflow-hidden px-4">
      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-white text-center font-[Funnel Sans] font-light text-4xl md:text-6xl leading-tight mb-6">
          Start transacting<br />
          with <span className="inline-flex items-center gap-2">
            DirhamCoin
            <span className="inline-flex items-center justify-center bg-[#1de9b6] rounded-full w-8 h-8 ml-2">
              <CoinsAppIcon />
            </span>
          </span>
          <br />
          on Coins App
        </h1>
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="inline-flex items-center justify-center bg-[#232b27] rounded-full w-10 h-10">
            <AppleIcon />
          </span>
          <span className="inline-flex items-center justify-center bg-[#232b27] rounded-full w-10 h-10">
            <GoogleIcon />
          </span>
        </div>
        <p className="text-[#b6eada] text-center max-w-2xl mb-8 font-light">
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of...
        </p>
        <div className="flex flex-row gap-4 mb-12">
          <button className="bg-[#1de9b6] text-[#0c1813] font-semibold px-6 py-3 rounded-full shadow hover:bg-[#13c9a7] transition">
            Get DirhamCoin
          </button>
          <button className="bg-[#232b27] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#1de9b6] hover:text-[#0c1813] transition">
            Download Whitepaper
          </button>
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
