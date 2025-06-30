//"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import React, { useRef, useEffect } from "react";

const Footer = () => {
    const imgRef = useRef(null);
    const textRef = useRef(null);
    const sectionRef = useRef(null);

    // Only animate on large screens
    const isLargeScreen = () => typeof window !== "undefined" && window.innerWidth >= 1024;

    useEffect(() => {
        if (!isLargeScreen()) return;
        let played = false;
        function handleMouseEnter() {
            if (played) return;
            played = true;
            import('gsap').then(({ default: gsap }) => {
                if (imgRef.current) {
                    gsap.fromTo(
                        imgRef.current,
                        { opacity: 0, y: 100 },
                        { opacity: 1, y: 0, duration: 0.7, ease: "bounce.out" }
                    );
                }
                if (textRef.current) {
                    gsap.fromTo(
                        textRef.current,
                        { opacity: 0, y: 100 },
                        { opacity: 1, y: 0, duration: 0.7, delay: 0.1, ease: "power3.out" }
                    );
                }
                // Fade in all other text except DirhamCoin and Footer.svg
                const section = sectionRef.current;
                if (section) {
                    const allText = section.querySelectorAll("span, h2, ul, li, p, div, h1");
                    allText.forEach(el => {
                        if (el !== textRef.current && el !== imgRef.current && el.innerText !== "DirhamCoin") {
                            gsap.fromTo(el, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                duration: 0.7,
                                delay: 0.2,
                                ease: "power1.out"
                            });
                        }
                    });
                }
            });
        }
        const section = sectionRef.current;
        if (section) {
            section.addEventListener("mouseenter", handleMouseEnter);
        }
        // Initial state: hidden
        if (imgRef.current) imgRef.current.style.opacity = 0;
        if (textRef.current) textRef.current.style.opacity = 0;
        // Also hide other text initially
        if (sectionRef.current) {
            const allText = sectionRef.current.querySelectorAll("span, h2, ul, li, p, div, h1");
            allText.forEach(el => {
                if (el !== textRef.current && el !== imgRef.current && el.innerText !== "DirhamCoin") {
                    el.style.opacity = 0;
                }
            });
        }
        return () => {
            if (section) section.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    return (
        <footer className="bg-[#000403] text-white py-10 px-6 md:px-20">
            <div ref={sectionRef} className="flex flex-col border-b border-gray-700 pb-10">
                {/* Links */}
                <div className="flex flex-col md:flex-row justify-between gap-12 text-sm px-6 md:px-52">
                    <div>
                        <h2 className="font-light mb-5 text-lg md:text-2xl">
                            01.
                            <span className="text-gray-400 text-xl md:text-4xl mr-2">Navigation</span>
                        </h2>
                        <ul className="space-y-1 text-lg md:text-2xl font-light">
                            <li>What is DollarCoin</li>
                            <li>UseCases</li>
                            <li>Buy DollarCoin</li>
                            <li>Contact US</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-light mb-5 text-lg md:text-2xl">02.
                            <span className="text-gray-400 text-xl md:text-4xl mr-2">Legal</span>
                        </h2>
                        <ul className="space-y-1 text-lg md:text-2xl font-light">
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Disclaimer</li>
                            <li>Cookies Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-light mb-5 text-lg md:text-2xl">03.
                            <span className="text-gray-400 text-xl md:text-4xl mr-2">Socials</span>
                        </h2>
                        <div className="flex gap-3">
                            <div className="rounded-full h-12 w-12 bg-[linear-gradient(245.96deg,_rgba(255,255,255,0.1)_-6.19%,_rgba(153,153,153,0.05)_99.75%)] flex items-center justify-center">
                                <Facebook />
                            </div>
                            <div className="rounded-full h-12 w-12 bg-[linear-gradient(245.96deg,_rgba(255,255,255,0.1)_-6.19%,_rgba(153,153,153,0.05)_99.75%)] flex items-center justify-center">
                                <Instagram />
                            </div>
                            <div className="rounded-full h-12 w-12 bg-[linear-gradient(245.96deg,_rgba(255,255,255,0.1)_-6.19%,_rgba(153,153,153,0.05)_99.75%)] flex items-center justify-center">
                                <Twitter />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-8 mt-6 md:mt-12">
                    <div>
                        <img
                            ref={imgRef}
                            src="/src/assets/Footer.svg"
                            alt="DollarCoin"
                            className="h-36 md:h-[143px] w-36 md:w-[146px] mx-auto"
                        />
                    </div>
                    <h1
                        ref={textRef}
                        className="text-5xl md:text-[201.86px] font-light text-center md:text-left"
                    >
                        DollarCoin
                    </h1>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400 px-4 md:px-6">
                <p>Copyright 2024 | All Rights Reserved</p>
                <p>
                    Developed by <span className="text-white font-semibold">MDX</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
