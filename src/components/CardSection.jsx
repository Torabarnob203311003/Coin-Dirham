import React, { useRef, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import tokenBitcoin from "../assets/token_bitcoin.svg";
import crousupLogo from "../assets/Course Up.svg";
import GridSection from "./GridSection";

function CardSection() {
  const textRef = useRef(null);
  const dirhamRef = useRef(null);
  const bitcoinRef = useRef(null);
  const arrowRef = useRef(null);
  const crousupRef = useRef(null);

  // Mobile refs
  const mobileTextRef = useRef(null);
  const mobileDirhamRef = useRef(null);
  const mobileBitcoinRef = useRef(null);
  const mobileArrowRef = useRef(null);
  const mobileCrousupRef = useRef(null);

  // Animate on scroll into view (only once)
  useEffect(() => {
    let ctx;
    let mobileCtx;
    let triggered = false;
    let mobileTriggered = false;

    // Desktop animation function
    function animate() {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView && !triggered) {
        triggered = true;
        import("gsap").then(async ({ default: gsap }) => {
          const { SplitText } = await import("gsap/SplitText");
          gsap.registerPlugin(SplitText);

          ctx = gsap.context(() => {
            // Desktop animations
            const split = new SplitText(textRef.current, { type: "chars,words" });
            gsap.from(split.chars, {
              opacity: 0,
              y: 30,
              stagger: 0.03,
              duration: 0.7,
              ease: "power2.out"
            });

            if (dirhamRef.current) {
              gsap.fromTo(
                dirhamRef.current,
                { scale: 0.92, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, delay: 0.2, ease: "power1.out" }
              );
            }

            if (bitcoinRef.current) {
              gsap.fromTo(
                bitcoinRef.current,
                { scale: 0.92, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, delay: 0.5, ease: "power1.out" }
              );
            }

            if (arrowRef.current) {
              gsap.fromTo(
                arrowRef.current,
                { scale: 0.92, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, delay: 0.9, ease: "power1.out" }
              );
            }

            if (crousupRef.current) {
              gsap.fromTo(
                crousupRef.current,
                { scale: 0.92, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, delay: 1.2, ease: "power1.out" }
              );
            }
          }, textRef);
        });
        window.removeEventListener("scroll", animate);
      }
    }

    // Mobile animation function
    function animateMobile() {
      if (!mobileTextRef.current) return;
      const rect = mobileTextRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView && !mobileTriggered) {
        mobileTriggered = true;
        import("gsap").then(async ({ default: gsap }) => {
          const { SplitText } = await import("gsap/SplitText");
          gsap.registerPlugin(SplitText);

          mobileCtx = gsap.context(() => {
            // Animate all text elements with typing effect
            const mobileTextElements = mobileTextRef.current.querySelectorAll('span:not([data-animated])');
            mobileTextElements.forEach((element) => {
              element.setAttribute('data-animated', 'true');
            });

            const mobileSplit = new SplitText(mobileTextElements, { type: "chars,words" });
            gsap.from(mobileSplit.chars, {
              opacity: 0,
              y: 20,
              stagger: 0.02,
              duration: 0.5,
              ease: "power2.out"
            });

            // Animate mobile elements individually
            if (mobileDirhamRef.current) {
              gsap.fromTo(
                mobileDirhamRef.current,
                { scale: 0.9, y: 30, opacity: 0 },
                { scale: 1, y: 0, opacity: 1, duration: 0.6, delay: 0.3, ease: "power2.out" }
              );
            }

            if (mobileBitcoinRef.current) {
              gsap.fromTo(
                mobileBitcoinRef.current,
                { scale: 0.9, y: 30, opacity: 0 },
                { scale: 1, y: 0, opacity: 1, duration: 0.6, delay: 0.5, ease: "power2.out" }
              );
            }

            if (mobileArrowRef.current) {
              gsap.fromTo(
                mobileArrowRef.current,
                { scale: 0.9, x: -30, opacity: 0 },
                { scale: 1, x: 0, opacity: 1, duration: 0.6, delay: 0.7, ease: "power2.out" }
              );
            }

            if (mobileCrousupRef.current) {
              gsap.fromTo(
                mobileCrousupRef.current,
                { scale: 0.9, y: 30, opacity: 0 },
                { scale: 1, y: 0, opacity: 1, duration: 0.6, delay: 0.9, ease: "power2.out" }
              );
            }

            // Animate the exchange rate text
            const exchangeRate = mobileTextRef.current.querySelector('.exchange-rate');
            if (exchangeRate) {
              gsap.fromTo(
                exchangeRate,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, delay: 1.1, ease: "power2.out" }
              );
            }
          }, mobileTextRef);
        });
        window.removeEventListener("scroll", animateMobile);
      }
    }

    // Add both scroll listeners
    window.addEventListener("scroll", animate, { passive: true });
    window.addEventListener("scroll", animateMobile, { passive: true });

    // Initial checks
    animate();
    animateMobile();

    return () => {
      window.removeEventListener("scroll", animate);
      window.removeEventListener("scroll", animateMobile);
      if (ctx) ctx.revert();
      if (mobileCtx) mobileCtx.revert();
    };
  }, []);

  return (
    <div
      className="w-full min-h-[300px] flex flex-col items-center justify-center bg-cover bg-center overflow-x-hidden relative"
      style={{
        backgroundImage: 'url(/BG2.jpg)',
        filter: "brightness(0.9) contrast(1.2)",
      }}
    >
      {/* Desktop Version - Hidden on mobile */}
      <div
        ref={textRef}
        className="
          hidden sm:block
          text-center
          sm:mx-auto
          sm:px-0
          sm:w-full
          sm:max-w-[1396px]
          sm:text-[70px]
          sm:font-[300]
          mt-36
          font-light
          leading-[120%]
          font-[Funnel Sans]
          text-[#F3F3F3]
          whitespace-normal
        "
        style={{
          textAlign: "center",
          fontStyle: "normal",
        }}
      >
        <span
          ref={dirhamRef}
          className="
            inline-flex items-center justify-center border border-[#1BAE6C] rounded-[51.5px] px-6
            w-[390px] h-[72px]
          "
          style={{
            fontFamily: "Funnel Sans",
            fontWeight: 300,
            fontSize: "inherit",
            lineHeight: "inherit",
            verticalAlign: "middle",
            marginTop: "0px",
            marginBottom: "0px",
            opacity: 1,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          DollarCoin
        </span>
        {" "}
        is a{" "}
        <img
          ref={bitcoinRef}
          src={tokenBitcoin}
          alt="bitcoin token"
          className="inline-block align-middle mx-2"
          style={{
            width: "78.495px",
            height: "52px",
            flexShrink: 0,
            borderRadius: "100px",
            background: "linear-gradient(269deg, rgba(27, 174, 108, 0.44) -26.56%, rgba(33, 33, 33, 0.35) 99.06%)",
            backdropFilter: "blur(8.25px)",
            verticalAlign: "middle",
            opacity: 1,
            display: "inline-block"
          }}
        />
        type of cryptocurrency 
        <br />that is referred to as a stable coin
        <span
          ref={arrowRef}
          className="inline-block align-middle mx-2"
          style={{
            opacity: 1,
            display: "inline-block"
          }}
        >
          <BsArrowRight size={72} color="#FFF" style={{ verticalAlign: "middle"}} />
        </span>
        This <br />Means
        <img
          ref={crousupRef}
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
            padding: "8px",
            opacity: 1
          }}
        />
        DollarCoin = USD Dollar
      </div>

      {/* Mobile Version - Visible only on mobile */}
      <div
        ref={mobileTextRef}
        className="
          block sm:hidden
          max-w-sm mx-auto text-center text-[#F3F3F3] space-y-4 px-6 mt-20
          font-[Funnel Sans] text-[18px] font-light leading-[120%]
        "
      >
        {/* First Line */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <div 
            ref={mobileDirhamRef}
            className="border-2 border-[#1BAE6C] rounded-full px-3 py-0 h-[27px] w-[148px] flex items-center justify-center flex-shrink-0"
          >
            <span className="text-[#F3F3F3] font-light">DollarCoin</span>
          </div>
          <span className="text-[#F3F3F3] text-lg">is a</span>
          <img
            ref={mobileBitcoinRef}
            src={tokenBitcoin}
            alt="bitcoin token"
            className="inline-block align-middle w-[40px] h-[20px] flex-shrink-0 rounded-full"
            style={{
              borderRadius: "100px",
              background: "linear-gradient(269deg, rgba(27, 174, 108, 0.44) -26.56%, rgba(33, 33, 33, 0.35) 99.06%)",
              backdropFilter: "blur(8.25px)",
              verticalAlign: "middle",
              opacity: 1,
              display: "inline-block"
            }}
          />
          <span className="text-[#F3F3F3] text-lg">type of</span>
        </div>

        {/* Second Line */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="text-[#F3F3F3] text-lg">cryptocurrency</span>
          <span
            ref={mobileArrowRef}
            className="text-[#F3F3F3] text-xl flex items-center"
          >
            <BsArrowRight size={20} className="w-[40px] h-[20px] flex-shrink-0" color="#FFF" />
          </span>
          <span className="text-[#F3F3F3] text-lg">that is</span>
        </div>

        {/* Third Line */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="text-[#F3F3F3] text-lg">referred to as a stable</span>
        </div>

        {/* Fourth Line */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="text-[#F3F3F3] text-lg">coin</span>
          <img
            ref={mobileCrousupRef}
            src={crousupLogo}
            alt="CrousUp Logo"
            className="inline-block align-middle w-[40px] h-[20px] flex-shrink-0 rounded-full"
            style={{
              borderRadius: "100px",
              background: "linear-gradient(267deg, rgba(96, 96, 96, 0.32) 15.44%, rgba(198, 198, 198, 0.10) 97.33%)",
              backgroundColor: "#606060",
              padding: "2px",
              opacity: 1
            }}
          />
          <span className="text-[#F3F3F3] text-lg">This Means</span>
        </div>

        {/* Exchange Rate */}
        <div className="exchange-rate mt-8 text-[#F3F3F3] text-lg">
          <span>1 DollarCoin </span>
          <span className="text-xl mx-2">=</span>
          <span> 1 USD Dollar</span>
        </div>
      </div>

      <div className="mt-20 mb-20 ms-6 me-6">
        <GridSection />
      </div>
    </div>
  );
}

export default CardSection;