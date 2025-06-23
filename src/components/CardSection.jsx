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

  // Animate on scroll into view
  useEffect(() => {
    let ctx;
    let triggered = false;
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
            // Typing effect for all text
            const split = new SplitText(textRef.current, { type: "chars,words" });
            gsap.from(split.chars, {
              opacity: 0,
              y: 30,
              stagger: 0.03,
              duration: 0.7,
              ease: "power2.out"
            });
            // DirhamCoin pop animation
            if (dirhamRef.current) {
              gsap.fromTo(
                dirhamRef.current,
                { scale: 0.92, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, delay: 0.2, ease: "power1.out" }
              );
            }
            // Bitcoin pop animation (smooth, no shake)
            if (bitcoinRef.current) {
              gsap.fromTo(
                bitcoinRef.current,
                { scale: 0.92, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, delay: 0.5, ease: "power1.out" }
              );
            }
            // ArrowRight pop animation
            if (arrowRef.current) {
              gsap.fromTo(
                arrowRef.current,
                { scale: 0.92, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, delay: 0.9, ease: "power1.out" }
              );
            }
            // Crousup logo pop animation (smooth, no shake)
            if (crousupRef.current) {
              gsap.fromTo(
                crousupRef.current,
                { scale: 0.92, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, delay: 1.2, ease: "power1.out" }
              );
            }
          }, textRef);
        });
      } else if (!inView && triggered) {
        triggered = false;
        if (ctx) ctx.revert();
      }
    }
    window.addEventListener("scroll", animate, { passive: true });
    // Initial check in case already in view
    animate();
    return () => {
      window.removeEventListener("scroll", animate);
      if (ctx) ctx.revert();
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
      <div
        ref={textRef}
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
          ref={dirhamRef}
          className="inline-flex items-center justify-center border border-[#1BAE6C] rounded-[51.5px] px-6"
          style={{
            width: "410px",
            height: "72px",
            flexShrink: 0,
            fontFamily: "Funnel Sans",
            fontWeight: 300,
            fontSize: "inherit",
            lineHeight: "72px", // Ensures vertical centering
            verticalAlign: "middle", // Align with text baseline
            marginTop: "0px", // Remove any offset
            marginBottom: "0px", // Remove any offset
            opacity: 1,
            display: "inline-flex", // Ensures vertical centering with flex
            alignItems: "center", // Ensures vertical centering with flex
            justifyContent: "center"
          }}
        >
          DirhamCoin
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
        <br  />that is referred to as a stable coin
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
        DirhamCoin = USD Dollar
        
     
   
      </div>
          <div className=" mt-20 mb-20  ms-6 me-6">
      <GridSection />
      </div>
     
    </div>
  );
}

export default CardSection;
