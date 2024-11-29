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

const Footer = () => {
  const pathname = usePathname(); // Get the current pathname
  const router = useRouter();

  const handleNavigation = (sectionId: string) => {
    // Navigate to the home page
    if (pathname === "/") {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/");

      // Delay the scroll action to ensure the home page loads
      setTimeout(() => {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Adjust delay if necessary
    }
  };

  return (
    <div
      className={`w-full h-full relative bottom-0 z-50 px-5 lg:px-32 py-5 lg:py-10 transition-all duration-[1000ms] ${
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
            MEMORY OF<p className="leading-none">BAN POON</p>
          </h1>
          <div className="hidden lg:block h-52 w-[1px] bg-white ml-8" />
        </div>
        <div className="flex w-[70%] justify-center lg:justify-end text-center lg:text-start lg:place-content-end">
          {/* Desktop Links */}
          <ul className="flex flex-col lg:flex-row text-[20px] xl:text-[25px] place-content-end h-full">
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
                  pathname.startsWith("/history")
                    ? "text-gray-400"
                    : "text-white"
                } hover:text-gray-500 p-1 lg:p-4 transition-colors duration-300 hover:bg-white tracking-widest h-full `}
                onClick={() => router.push("/history")}
              >
                ประวัติชุมชน
              </button>
            </li>
            <li>
              <button
                className={`${
                  pathname.startsWith("/legends") ? "text-gray-400" : "text-white"
                } hover:text-gray-500 p-1 lg:p-4 transition-colors duration-300 hover:bg-white tracking-widest h-full`}
                onClick={() => router.push("/legends")}
              >
                เรื่องเล่าตำนาน
              </button>
            </li>
            <li>
              <button
                className={`${
                  pathname.startsWith("/cultural-heritage") ? "text-gray-400" : "text-white"
                } hover:text-gray-500 p-1 lg:p-4 transition-colors duration-300 hover:bg-white tracking-widest h-full`}
                onClick={() => handleNavigation("cultural-heritage")}
              >
                มรดกวัฒนธรรม
              </button>
            </li>
            <li>
              <button
                className={`${
                  pathname.startsWith("/gallery") ? "text-gray-400" : "text-white"
                } hover:text-gray-500 p-1 lg:p-4 transition-colors duration-300 hover:bg-white tracking-widest h-full`}
                onClick={() => handleNavigation("gallery")}
              >
                Picture of Ban Poon
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-row h-full">
          <div className="hidden lg:block h-52 w-[1px] bg-white mr-10" />
          <div className="flex flex-col justify-center">
            <button className={`text-white text-center xl:text-start text-[20px] xl:text-[25px]`}>
              ติดต่อเรา
            </button>
            <div className={`py-2 px-3 ${outfit.className} text-[15px] bg-white flex flex-row items-center space-x-2`}>
             <ContactSupportIcon fontSize="medium"/>
              <p>097-020-0803</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
