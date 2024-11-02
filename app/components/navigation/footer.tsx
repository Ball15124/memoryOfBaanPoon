"use client"; // Mark this as a client component

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Use the correct hook for App Router
import { useRouter } from "next/navigation";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { Cookie, Outfit } from "next/font/google";
const cookie = Cookie({ subsets: ["latin"], weight: "400" }); // Add Monoton
const outfit = Outfit({ subsets: ["latin"], weight: "400" }); // Add Monoton

const Footer = ({ monotonClass }: { monotonClass: string }) => {
  const pathname = usePathname(); // Get the current pathname
  const router = useRouter();

  return (
    <div
      className={`w-full h-80 lg:h-52 relative bottom-0 z-50 px-5 lg:px-32 py-5 lg:py-10 transition-all duration-[1000ms] ${
        pathname === "/dsad" ? "opacity-0 h-0" : "opacity-100 h-20"
      } ${pathname !== "/dsad" ? "bg-[#c53232]" : "bg-transparent"}`}
    >
      <div className={`flex flex-col lg:flex-row justify-between pl-4 h-full items-center`}>
        <div className="flex flex-row items-center h-full">
          <h1
            className={`text-white text-[40px] md:text-[80px] tracking-[5px] ${cookie.className} mr-3`}
          >
            M
          </h1>
          <h1
            className={`text-white text-[10px] md:text-[20px] tracking-[5px] leading-none ${outfit.className}`}
          >
            MEMORY OF<p className="leading-none">BAAN POON</p>
          </h1>
          <div className="hidden lg:block h-full w-[2px] bg-black ml-8" />
        </div>
        <div className="flex w-[70%] justify-center lg:justify-end text-center lg:text-start">
          {/* Desktop Links */}
          <ul className="flex flex-col lg:flex-row h-full">
            <li className="h-full">
              <button
                className={` text-white hover:text-gray-500 p-1 lg:p-4 transition-colors duration-300 tracking-widest hover:bg-white h-full`}
                onClick={() => router.push("/")}
              >
                หน้าแรก
              </button>
            </li>
            <li>
              <button
                className={`${
                  pathname.startsWith("/important-people") && "bg-white"
                } ${
                  pathname.startsWith("/important-people")
                    ? "text-black"
                    : "text-white"
                } hover:text-gray-500 p-1 lg:p-4 transition-colors duration-300 hover:bg-white tracking-widest h-full `}
                onClick={() => router.push("/important-people")}
              >
                ประวัติชุมชน
              </button>
            </li>
            <li>
              <button
                className={`${pathname.startsWith("/legends") && "bg-white"} ${
                  pathname.startsWith("/legends") ? "text-black" : "text-white"
                } hover:text-gray-500 p-1 lg:p-4 transition-colors duration-300 hover:bg-white tracking-widest h-full`}
                onClick={() => router.push("/legends")}
              >
                เรื่องเล่าตำนาน
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-row h-full items-center">
          <div className="hidden lg:block h-full w-[2px] bg-black mr-10" />
          <div className="flex flex-col">
            <button className={`p-2 ${outfit.className} text-[12px] text-white`}>
              CONTACT US
            </button>
            <div className={`p-2 ${outfit.className} text-[12px] bg-white flex flex-row items-center`}>
             <ContactSupportIcon fontSize="medium"/>
              097-020-0803
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
