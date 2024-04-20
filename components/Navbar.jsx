"use client";
import React, { useEffect } from "react";
import Image from "next/image";
// import logo from "../public/logo.png";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';
// import '../styles/whatsapp.css'
import { IoIosMail,IoIosCall } from "react-icons/io";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);


    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSubmenu = () => {
        setShowSubmenu(!showSubmenu);
    };

    const handleBack = () => {
        setShowSubmenu(false);
    };


    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY === 0;
            setIsScrolled(!isTop);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);





    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDoubleDropdownOpen, setIsDoubleDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleDoubleDropdown = () => {
        setIsDoubleDropdownOpen(!isDoubleDropdownOpen);
    };
    const [value, setvalue] = useState(true)
    const [value1, setvalue1] = useState(false)
    function MouseOver(event) {
        //  event.target.style.display = "block";
        setvalue1(!value1)
    }
    function MouseOut() {
        setvalue1(false)
    }

    return (
        <div className="absolute w-full mx-auto top-0 z-50 overflow-hidden">
            <div className="flex items-center justify-evenly">
                <p className="text-5xl font-bold font-serif text-[#4ABB47] w-[50%] mx-auto text-center">Free NGO Site</p>
                <div className="flex items-center justify-center text-white text-2xl font-bold font-serif gap-x-10 bg-[#424242] rounded-bl-full h-24 w-[50%] m-auto">
                    <p className="flex items-center gap-x-4"><IoIosMail className="text-[#4ABB47]"/>nfo@freengo.org</p>
                    <p className="flex items-center gap-x-4"><IoIosCall className="text-[#4ABB47]"/>+919876543210</p>
                </div>
            </div>
            <nav
                className={`sticky w-full h-24 z-[9999999999] bg-black text-white`}
            >
                <div className="flex justify-center items-center h-full w-full px-4">

                    <div className="hidden sm:flex">
                        <ul className='flex flex-row sm:"flex md:pr-8'>
                            <Link href="/">
                                <li className="font-medium m-2 py-3 px-1  hover:underline underline-offset-8  hover:decoration-[#4ABB47] hover:decoration-4">
                                    Home
                                </li>
                            </Link>
                            <Link href="/about">
                                <li className="font-medium m-2  py-3 px-1  hover:underline underline-offset-8  hover:decoration-[#4ABB47] hover:decoration-4">
                                    About Us
                                </li>
                            </Link>
                            <Link href="/categories" className="">
                                <li className="font-medium m-2  py-3 px-1  hover:underline underline-offset-8  hover:decoration-[#4ABB47] hover:decoration-4">
                                    All Categories
                                </li>
                            </Link>
                            {/* <Link href="/products"> */}
                            <li className="relative flex gap-2 items-center group font-medium m-2  py-3 px-1  hover:underline underline-offset-8  hover:decoration-[#4ABB47] hover:decoration-4">
                                <Link href="/product" className="flex flex-row"> Projects <AiOutlineDown className="p-.5 mt-1 ml-1" /></Link>
                                <div className={`drop-shadow-lg  min-w-max hidden hover:block absolute ${value ? "group-hover:block" : "group-hover:hidden"} top-0 -left-12 w-full pt-8 transition-transform text-black`}>
                                    <ul className=" bg-white w-full rounded-lg mt-4">
                                        {/* <Link href="/product"> */}
                                        <li className={` group px-4 py-1  ${value ? "group-hover:block" : "group-hover:hidden"} m-auto cursor-pointer font-light text-semibold hover:bg-green-600  `} onMouseLeave={MouseOut} onMouseEnter={MouseOver} ><span className=" flex flex-row justify-between hover:text-white"  >
                                            Chimneys
                                            <div className="pt-1"><AiOutlineRight /></div>
                                        </span>

                                            {value1 && <div className="ml-0.5 rounded-lg  min-w-max  absolute top-[15%] md:left-[100%] lg:left-[100%]  mt-6 bg-white drop-shadow-lg">
                                                <ul className={`text-sm t-2`} >
                                                    <Link href={`/category/PyramidChimneys`}><li className="  py-2 m-auto px-2 cursor-pointer font-light text-semibold hover:bg-green-600 hover:text-white">Pyramid Chimneys</li></Link>
                                                    <Link href="/category/CurvedGlassChimneys"><li className="  py-2 m-auto px-2  cursor-pointer font-light text-semibold hover:bg-green-600 hover:text-white">Curved Glass Chimneys</li></Link>
                                                    <Link href="/category/StraightTShapedChimneys"><li className="  py-2 m-auto px-2  cursor-pointer font-light text-semibold hover:bg-green-600 hover:text-white">Straight T-Shaped Chimneys</li></Link>
                                                    <Link href="/category/VerticalChimneys"><li className="  py-2 m-auto px-2  cursor-pointer font-light text-semibold hover:bg-green-600 hover:text-white">Vertical Chimneys</li></Link>
                                                    <Link href="/category/IslandChimneys"><li className="  py-2 m-auto px-2  cursor-pointer font-light text-semibold hover:bg-green-600 hover:text-white">Island Chimneys</li></Link>
                                                </ul>
                                            </div>}
                                        </li>
                                        {/* </Link> */}
                                        <li className=" px-4  py-1   m-auto  cursor-pointer font-light text-semibold hover:bg-green-600 hover:text-white"><a href="/category/Built-inHobs">Built-in Hobs</a></li>
                                        <li className=" px-4  py-1  m-auto  cursor-pointer font-light text-semibold hover:bg-green-600 hover:text-white"><a href="/category/GasStoves">Gas Stove</a></li>
                                        {/* <li className=" px-4  py-1   m-auto  cursor-pointer font-light text-semibold hover:bg-green-600 hover:text-white"><a href="/category/RoundTable">Round Glass Table</a></li> */}
                                        {/* <li className=" px-4  py-1   m-auto  cursor-pointer font-light text-semibold hover:bg-green-600 hover:text-white"><a href="/categories">All Categories</a></li> */}

                                    </ul>
                                </div>
                            </li>



                            {/* </Link> */}
                            <Link href="/blog">
                                <li className="font-medium m-2  py-3 px-1  hover:underline underline-offset-8  hover:decoration-[#4ABB47] hover:decoration-4">
                                    Blog
                                </li>
                            </Link>
                            <Link href="/contact">
                                <li className="font-medium m-2  py-3 px-1  hover:underline underline-offset-8  hover:decoration-[#4ABB47] hover:decoration-4">
                                    Contact Us
                                </li>
                            </Link>
                            
                        </ul>
                    </div>
                    <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                        <AiOutlineMenu />
                    </div>
                </div>
                <div
                    className={
                        menuOpen
                            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-green-100 p-10 ease-in duration-500"
                            : "fixed left-[-100%] top-10 p-10 ease-in duration-500"
                    }
                >

                    <div className="flex-col ">
                        <ul>

                            <li
                                onClick={() => {
                                    setMenuOpen(false);
                                    setShowSubmenu(false);
                                }}
                                className="py-4  px-auto uppercase text-md flex flex-row"
                            >
                                <Link href="/">
                                    Home
                                </Link>

                                <div className="flex  w-full items-center justify-end">
                                    <div onClick={() => setMenuOpen(false)} className="cursor-pointer ">
                                        <AiOutlineClose className="pb-1" />
                                    </div>
                                </div>
                            </li>

                            <Link href="/about">
                                <li
                                    onClick={() => {
                                        setMenuOpen(false);
                                        setShowSubmenu(false);
                                    }}
                                    className="py-4 px-auto uppercase text-md"
                                >
                                    About Us
                                </li>
                            </Link>
                            <li
                                onClick={handleSubmenu}
                                className="py-4 px-auto uppercase text-md cursor-pointer"
                            >
                                <div className="flex flex-row">Projects
                                    {showSubmenu ? (
                                        // Display this when showSubmenu is true
                                        <AiOutlineDown className="ml-1 p-.5 mt-1" />
                                    ) : (
                                        // Display this when showSubmenu is false
                                        <AiOutlineRight className="ml-1 p-.5 mt-1" />
                                    )}</div>
                            </li>
                            {showSubmenu && (
                                <div className=" min-w-max  bg-green-100 ">
                                    <ul className="text-sm">
                                        <li onClick={handleNav} className="py-2 px-2 cursor-pointer font-light text-semibold hover:bg-green-600 hover:text-white">
                                            <Link href="/category/PyramidChimneys">Pyramid Chimneys</Link>
                                        </li>
                                        <li onClick={handleNav} className="py-2 px-2 cursor-pointer font-light text-semibold hover:bg-green-600 hover:text-white">
                                            <Link href="/category/CurvedGlassChimneys">Curved Glass Chimneys</Link>
                                        </li>
                                        <li onClick={handleNav} className="py-2 px-2 cursor-pointer font-light text-semibold hover:bg-green-600 hover:text-white">
                                            <Link href="/category/StraightTShapedChimneys">Straight T-Shaped Chimneys</Link>
                                        </li>
                                        <li onClick={handleNav} className="py-2 px-2 cursor-pointer font-light text-semibold hover:bg-green-600 hover:text-white">
                                            <Link href="/category/VerticalChimneys">Vertical Chimneys</Link>
                                        </li>
                                        <li onClick={handleNav} className="py-2 px-2 cursor-pointer font-light text-semibold hover:bg-green-600 hover:text-white">
                                            <Link href="/category/IslandChimneys">Island Chimneys</Link>
                                        </li>
                                        <li onClick={handleNav} className="py-2 px-2 cursor-pointer font-light text-semibold hover:bg-green-600 hover:text-white">
                                            <Link href="/category/Built-inHobs">Built-in Hobs</Link>
                                        </li>
                                        <li onClick={handleNav} className="py-2 px-2 cursor-pointer font-light text-semibold hover:bg-green-600 hover:text-white">
                                            <Link href="/category/GasStoves">Gas Stove</Link>
                                        </li>
                                        {/* <li onClick={handleNav} className="py-2 px-2 cursor-pointer font-light text-semibold hover:bg-green-600 hover:text-white">
                    <Link href="/category/RoundTable">Round Glass Table</Link>
                  </li> */}
                                        <li onClick={handleNav} className="py-2 px-2 cursor-pointer font-light text-semibold hover:bg-green-600 hover:text-white">
                                            <Link href="/categories">All Categories</Link>
                                        </li>
                                    </ul>

                                </div>
                            )}
                            <Link href="/blog">
                                <li
                                    onClick={() => {
                                        setMenuOpen(false);
                                        setShowSubmenu(false);
                                    }}
                                    className="py-4 px-auto uppercase text-md"
                                >
                                    Blog
                                </li>
                            </Link>
                            <Link href="/contact">
                                <li
                                    onClick={() => {
                                        setMenuOpen(false);
                                        setShowSubmenu(false);
                                    }}
                                    className="py-4 px-auto uppercase text-md"
                                >
                                    Contact Us
                                </li>
                            </Link>
                            <Link href="/Work">
                                <li
                                    onClick={() => {
                                        setMenuOpen(false);
                                        setShowSubmenu(false);
                                    }}
                                    className="py-4 px-auto uppercase text-md"
                                >
                                    Work@OrwoFlame
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>


            </nav>
        </div>
    );
};
export default Navbar;