"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#000403] text-white py-10 px-6 md:px-20">
            <div className="flex flex-col border-b border-gray-700 pb-10">
                {/* Links */}
                <div className=" flex justify-end gap-52 text-sm px-52">
                    <div>
                        <h2 className="font-light mb-5">
                            01.
                            <span className="text-gray-400 text-4xl mr-2">Navigation</span>
                        </h2>
                        <ul className="space-y-1 text-2xl font-light">
                            <li>What is DirhamCoin</li>
                            <li>UseCases</li>
                            <li>Buy DirhamCoin</li>
                            <li>Contact US</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-light mb-5 text-[20px]">02.
                            <span className="text-gray-400 text-4xl mr-2">Legal</span>
                        </h2>
                        <ul className="space-y-1 text-2xl font-light">
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Disclaimer</li>
                            <li>Cookies Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-light mb-5 text-[20px]">03.
                            <span className="text-gray-400 text-4xl mr-2">Socials</span>
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
                <div className="flex items-center gap-8">
                    <div>
                        <img src="/src/assets/Footer.svg" alt="" className="h-[143.00103759765625] w-[146.68617248535156]" />
                    </div>
                    <h1 className="text-[201.86px] font-light">DirhamCoin</h1>
                </div>
            </div>
            

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400 px-1">
                <p>Copyright 2024 | All Rights Reserved</p>
                <p>
                    Developed by <span className="text-white font-semibold">MDX</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
