import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTimes, FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="text-white bg-[#CC054D] py-8">
            <div className="container mx-auto px-6">

                {/* Top Section */}
                <div className="flex flex-wrap justify-between">

                    {/* Left Section - Policies */}
                    <div className="w-full Poppins sm:w-1/3 mb-6 sm:mb-0">
                        <ul className="space-y-2">
                            <li className="hover:underline cursor-pointer">Privacy Policy</li>
                            <li className="hover:underline cursor-pointer">Captain Policy</li>
                            <li className="hover:underline cursor-pointer">Cookies Policy</li>
                            <li className="hover:underline cursor-pointer">Terms and Condition</li>
                        </ul>
                    </div>

                    {/* Middle Section - Contact Info */}
                    <div className="w-1/3 mb-6 Poppins sm:mb-0">
                        <p className="flex items-center  gap-2">
                            <MdEmail className="text-lg" /> xyz@lazeezevents.com
                        </p>
                        <p className="flex items-center justify-center gap-2 mt-2">
                            <MdLocationOn className="text-xl" /> 203 Progressive Plaza, Beaumont Road, Civil Lines Karachi, 75530
                        </p>
                    </div>

                    {/* Right Section - Links & Social Media */}
                    <div className="w-full flex gap-20 justify-around sm:w-1/3 ">
                        <ul className="space-y-2 Poppins">
                            <li className="hover:underline cursor-pointer">FAQs</li>
                            <li className="hover:underline cursor-pointer">Blogs</li>
                            <li className="hover:underline cursor-pointer">Press Release</li>
                        </ul>
                        <div className="flex gap-4 mt-4">
                            <FaFacebookF className="text-lg cursor-pointer hover:scale-110 transition" />
                            <FaLinkedinIn className="text-lg cursor-pointer hover:scale-110 transition" />
                            <FaTimes className="text-lg cursor-pointer hover:scale-110 transition" />
                            <FaInstagram className="text-lg cursor-pointer hover:scale-110 transition" />
                        </div>
                    </div>

                </div>

                {/* Bottom Section - Copyright */}
                <div className="text-end Poppins mt-6 text-sm">
                    All rights reserved &copy;
                    <span className="Poppins-bold"> Your Company, {new Date().getFullYear()} </span>
                </div>

            </div>
        </footer>
    );
}
