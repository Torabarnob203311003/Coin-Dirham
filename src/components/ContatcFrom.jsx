import React, { useRef, useEffect } from 'react';
import { CircleArrowRight, MoveRight } from 'lucide-react';

function ContactForm({ bgColor, textColor, borderColor,  }) {
    const leftDivRef = useRef(null);
    const formRef = useRef(null);
    const sectionRef = useRef(null);

    // Only animate on large screens
    const isLargeScreen = () => typeof window !== "undefined" && window.innerWidth >= 1024;

    useEffect(() => {
        if (!isLargeScreen()) return;
        import('gsap').then(({ default: gsap }) => {
            // Section fade/slide in when component mounts (only content, not bg)
            if (sectionRef.current) {
                gsap.fromTo(
                    sectionRef.current,
                    { opacity: 0, y: 60 },
                    { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
                );
            }
        });
    }, []);

    useEffect(() => {
        if (!isLargeScreen()) return;
        let animationPlayed = false;

        function handleMouseEnter() {
            if (animationPlayed) return;
            animationPlayed = true;
            import('gsap').then(({ default: gsap }) => {
                // Left div animation on mouse enter
                if (leftDivRef.current) {
                    gsap.fromTo(
                        leftDivRef.current,
                        { opacity: 0, y: 40 },
                        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
                    );
                }
                // Form animation on mouse enter
                if (formRef.current) {
                    gsap.fromTo(
                        formRef.current.children,
                        { opacity: 0, y: 40 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            stagger: 0.28,
                            delay: 0.4,
                            ease: "power2.out"
                        }
                    );
                }
            });
        }

        const section = sectionRef.current;
        if (section) {
            section.addEventListener("mouseenter", handleMouseEnter);
        }
        // Initial state: hidden
        if (leftDivRef.current) leftDivRef.current.style.opacity = 0;
        if (formRef.current) Array.from(formRef.current.children).forEach(child => child.style.opacity = 0);

        return () => {
            if (section) {
                section.removeEventListener("mouseenter", handleMouseEnter);
            }
        };
    }, []);

    return (
        <div>
            <div
                className="min-h-screen bg-[#000000] bg-cover pt-20"
                style={{
                    backgroundImage: "url('/lf.png')",
                }}
            >
                <div
                    ref={sectionRef}
                    className='flex flex-col md:flex-row justify-between items-center'
                >
                    {/* left div */}
                    <div ref={leftDivRef} className='px-6 py-10 md:px-20 md:py-10'>
                        <div className="text-white text-[16px] md:text-[20px]">
                            <p className="text-sm mb-2">Get access</p>
                            <p className="text-sm">to DollarCoin <span className="">↗</span></p>
                        </div>
                        <div className='h-[1px] md:h-[219px] border-[1px] md:border-[0.5px] bg-[#ffffff41] w-full md:w-[1px] my-10'></div>
                        <div className="flex-1 flex items-center justify-center">
                            <div className="text-white">
                                <h1 className="text-[50px] md:text-[100px] leading-[70px] md:leading-[120px] tracking-normal font-light">
                                    Payment & *
                                    <br /><span className='ml-0 md:ml-20'>communication</span>
                                    <br />wrapped in
                                    <span className="rounded-full border leading-[0px] my-0 py-0 px-3">one</span>
                                </h1>
                            </div>
                        </div>
                    </div>

                    <form
                        ref={formRef}
                        style={{
                            background: bgColor,
                            color: textColor,
                            borderColor: borderColor,
                            // ...other dynamic styles as needed
                        }}
                        className="space-y-20 px-6 md:px-24"
                    >
                        <div className="text-[40px] md:text-[70px] leading-[50px] md:leading-[70px] text-white">
                            <span className="">Be one of the first</span>
                            <div className="flex items-center justify-center ">
                                <div className="flex gap-2 items-center space-x-2 text-[40px] md:text-[70px] mt-2">
                                    <span className="h-10 w-16 rounded-[2rem] flex items-center justify-center bg-gradient-to-r from-gray-900/75 via-gray-800/40 to-green-500/40 backdrop-blur-xl">
                                        <img src="/logo.png" className="h-6 w-6" alt="" />
                                    </span>
                                    <span className="text-white">to get the app</span>
                                </div>
                            </div>
                        </div>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full p-2 bg-transparent border-b border-gray-300 text-white placeholder-gray-400 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full p-2 bg-transparent border-b border-gray-300 text-white placeholder-gray-400 focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 bg-transparent border-b border-gray-300 text-white placeholder-gray-400 focus:outline-none"
                        />
                        <button className="flex items-center justify-between pl-8 pr-1 py-2 rounded-full border-2 border-[#1BAE6C] text-white text-lg font-light hover:cursor-pointer">
                            <span>Send Link</span>
                            <span className="flex ml-10 items-center justify-center w-10 h-10 rounded-full bg-gradient-to-bl from-[rgba(27,174,108,0.53)] to-[rgba(7,88,52,0.53)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
