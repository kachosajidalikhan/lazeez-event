import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import files from '../../constants/index'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="text-white bg-[#CC054D] py-8">
            <div className="container mx-auto px-6">

                {/* Top Section */}
                <div className="flex flex-wrap justify-between">

                    {/* Left Section - Policies */}
                    <div className="w-full Poppins sm:w-1/3 mb-6 sm:mb-0">
                        <ul className="space-y-2">
                            <Link to="/privacy-policy-page">
                            <li className="hover:underline cursor-pointer">Privacy Policy</li>
                            </Link>
                            <Link to="#">
                            <li className="hover:underline cursor-pointer">Captain Policy</li>
                            </Link>
                            <Link to="#">
                            <li className="hover:underline cursor-pointer">Cookies Policy</li>
                            </Link>
                            <Link to="refund-cancellation-page">
                            <li className="hover:underline cursor-pointer">Refund and Cancellation</li>
                            </Link>
                            <Link to="/terms-and-condition-page">
                            <li className="hover:underline cursor-pointer">Terms and Condition</li>
                            </Link>
                        </ul>
                    </div>

                    {/* Middle Section - Contact Info */}
                    <div className="w-full md:w-1/3 mb-6 Poppins sm:mb-0">
                        <div className="flex gap-2 mt-2 items-center">
                            <MdEmail className="text-lg" />
                            <p>
                                xyz@lazeezevents.com
                            </p>

                        </div>
                        <div className="flex gap-2 mt-2 items-center">

                            <MdLocationOn className="text-4xl lg:text-2xl" />
                            <p>
                                203 Progressive Plaza, Beaumont Road, Civil Lines Karachi, 75530
                            </p>
                        </div>
                    </div>

                    {/* Right Section - Links & Social Media */}
                    <div className="w-full flex gap-20 justify-around sm:w-1/3 ">
                        <ul className="space-y-2 Poppins">
                            <Link to="/FAQs">
                            <li className="hover:underline cursor-pointer">FAQs</li>
                            </Link>
                            <Link to="/blogs-page">
                            <li className="hover:underline cursor-pointer">Blogs</li>
                            </Link>
                            <Link to="/press-release-page">
                            <li className="hover:underline cursor-pointer">Press Release</li>
                            </Link>
                        </ul>
                        <div className="flex gap-4 mt-4">
                            <FaFacebookF className="text-lg cursor-pointer hover:scale-110 transition" />
                            <FaLinkedinIn className="text-lg cursor-pointer hover:scale-110 transition" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                                <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                            </svg>
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
