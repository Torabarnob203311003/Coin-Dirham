import { CircleArrowRight, MoveRight } from 'lucide-react';
import React from 'react';

const ContactForm = () => {

    return (
        <div>
            <div
                className="min-h-screen bg-[#000000] bg-cover pt-20  "
                style={{
                   backgroundImage: "url('/lf.png')",
                  // rotate: '-180deg', 
                }}
            >
                <div className='flex justify-between items-center'>
                    {/* left div */}
                    <div className='px-20 py-10'>
                        <div className="text-white text-[20px]">
                            <p className="text-sm mb-2">Get access</p>
                            <p className="text-sm">to DirhamCoin <span className="">↗</span></p>
                        </div>
                        <div className='h-[219px] border-[10x] bg-[#ffffff41] w-[1px] my-10'></div>
                        <div className="flex-1 flex items-center justify-center">
                            <div className="text-white">
                                <h1 className="text-[100px] leading-[120px] tracking-normal font-light">
                                    Payment & *
                                    <br /><span className='ml-20'>communication</span>
                                    <br />wrapped in
                                    <span className="rounded-full border leading-[0px] my-0 py-0 px-3">one</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <form className="space-y-20 px-24">
                        <div className="text-[70px] leading-[70px] text-white">
                            <span className="">Be one of the first</span>
                            <div className=" flex items-center justify-center ">
                                <div className="flex gap-2 items-center space-x-2 text-[70px] mt-2">
                                    <span className="h-14 w-20 rounded-[2rem] flex items-center justify-center bg-gradient-to-r from-gray-900/75 via-gray-800/40 to-green-500/40 backdrop-blur-xl">
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
                        <button class="flex items-center justify-between pl-8 pr-1 py-2 rounded-full border-2 border-[#1BAE6C] text-white text-lg font-light hover:cursor-pointer">
                            <span>Send Link</span>
                            <span class="flex ml-10 items-center justify-center w-10 h-10 rounded-full bg-gradient-to-bl from-[rgba(27,174,108,0.53)] to-[rgba(7,88,52,0.53)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;