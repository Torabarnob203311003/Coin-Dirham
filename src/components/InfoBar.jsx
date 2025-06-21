import React from "react";

function InfoBar() {
  return (
    <div className="w-full overflow-hidden mt-4 px-2">
      <div className="flex items-center justify-between whitespace-nowrap animate-left-to-right">
        {/* Left: Scroll to learn more */}
        <span
          className="border border-white rounded-full px-4 py-1 text-white text-sm font-light flex items-center"
          style={{
            fontFamily: 'Funnel Sans',
            fontSize: '14px',
            fontWeight: 300,
          }}
        >
          Scroll to learn more
        </span>
        {/* Center: Line + Fast... + Line */}
        <div className="flex-1 flex items-center mx-4">
          <span className="block h-px bg-white/30 flex-1" />
          <span
            className="mx-4 text-white text-sm font-light"
            style={{ fontFamily: 'Funnel Sans', fontWeight: 300 }}
          >
            Fast// Stable// Scalable// Secure//
          </span>
          <span className="block h-px bg-white/30 flex-1" />
        </div>
        {/* Right: Ecosystem note */}
        <span
          className="text-white text-xs font-light"
          style={{ fontFamily: 'Funnel Sans', fontWeight: 300 }}
        >
          (We are part of the iGlobalCoin ecosystem)
        </span>
      </div>
    </div>
  );
}

export default InfoBar;

/* Add this to your global CSS (e.g., index.css or App.css):
@keyframes moveLeftToRight {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.animate-left-to-right {
  animation: moveLeftToRight 18s linear infinite;
}
*/
