"use client"; // Mark this as a client component

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Use the correct hook for App Router
import { useRouter } from "next/navigation";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Navbar = ({ monotonClass }: { monotonClass: string }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
  const pathname = usePathname(); // Get the current pathname
  const router = useRouter();

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    // Only check scroll position if on the home page
    if (pathname === "/") {
      const currentScroll = window.scrollY;
      const threshold = 600;

      if (currentScroll > threshold && !isScrolled) {
        setIsScrolled(true);
      } else if (currentScroll <= threshold && isScrolled) {
        setIsScrolled(false);
      }
    }
  };

  useEffect(() => {
    // Reset isScrolled to false when navigating to the home page
    if (pathname === "/") {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  }, [pathname]);

  useEffect(() => {
    // Add throttling to prevent too frequent updates
    let ticking = false;

    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [pathname, isScrolled]);

  return (
    <div
      className={`w-full h-20 fixed top-0 z-50 transition-colors duration-[1000ms] ${
        isScrolled 
        // &&
        // !pathname.startsWith("/important-people") &&
        // !pathname.startsWith("/legends") &&
        // !pathname.startsWith("/cultural-heritage") &&
        // !pathname.startsWith("/gallery")
          // ? "backdrop-blur-md bg-trasparent"
          ? "bg-[#c53232]"
          : pathname != "/"
          ? "bg-[#c53232]"
          : "bg-transparent"
      }`}
    >
      <div className={`flex justify-between pl-4 h-full items-center`}>
        <ArrowBackIcon
          className={`text-white mr-4 cursor-pointer block md:!hidden ${
            pathname === "/" ||
            pathname === "/important-people" ||
            pathname === "/legends" ||
            pathname === "/cultural-heritage" ||
            pathname === "/gallery"
              ? "!hidden"
              : "block"
          }`}
          onClick={() => router.back()} // Go back to the previous page
        />
        <h1
          className={`text-white ml-0 text-[20px] tracking-[5px] ${monotonClass}`}
        >
          MEMORY OF BAAN POON
        </h1>

        <div className="flex items-center h-full">
          {/* Desktop Links */}
          <ul className="hidden md:flex h-full">
            <li className="h-full">
              <button
                className={` text-white hover:text-gray-500 p-4 transition-colors duration-300 tracking-widest hover:bg-white h-full`}
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
                } hover:text-gray-500 p-4  transition-colors duration-300 hover:bg-white tracking-widest h-full`}
                onClick={() => router.push("/important-people")}
              >
                บุคคลสำคัญ
              </button>
            </li>
            <li>
              <button
                className={`${pathname.startsWith("/legends") && "bg-white"} ${
                  pathname.startsWith("/legends") ? "text-black" : "text-white"
                } hover:text-gray-500 p-4  transition-colors duration-300 hover:bg-white tracking-widest h-full`}
                onClick={() => router.push("/legends")}
              >
                เรื่องเล่าตำนาน
              </button>
            </li>
            <li>
              <button
                className={`${
                  pathname.startsWith("/cultural-heritage") && "bg-white"
                } ${
                  pathname.startsWith("/cultural-heritage")
                    ? "text-black"
                    : "text-white"
                } hover:text-gray-500 p-4   transition-colors duration-300 hover:bg-white tracking-widest h-full`}
                onClick={() => router.push("/cultural-heritage")}
              >
                มรดกวัฒนธรรม
              </button>
            </li>
            <li>
              <button
                className={`${pathname.startsWith("/gallery") && "bg-white"} ${
                  pathname.startsWith("/gallery") ? "text-black" : "text-white"
                } hover:text-gray-500 p-4   transition-colors duration-300 hover:bg-white tracking-widest h-full`}
                onClick={() => router.push("/gallery")}
              >
                Picture of Baan Poon
              </button>
            </li>
          </ul>

          {/* Sidebar Icon */}
          <ViewHeadlineIcon
            className="text-white ml-4 mr-4 cursor-pointer md:!hidden"
            onClick={toggleSidebar}
          />
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar Menu */}
      <div
        className={`fixed right-0 top-0 w-64 h-full bg-white shadow-lg z-50 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4 bg-[#c53232]">
          <p className="text-white font-bold">Menu</p>
          <CloseIcon
            className="text-white cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <ul className="flex flex-col p-4 gap-y-4">
          <li>
            <button
              className={`${
                pathname === "/" ? "bg-gray-500" : "bg-white"
              } hover:bg-gray-500 p-2  ${
                pathname === "/" ? "text-white" : "text-black"
              } transition-colors duration-300 w-full text-left`}
              onClick={() => {
                router.push("/");
                toggleSidebar();
              }}
            >
              หน้าแรก
            </button>
          </li>
          <li>
            <button
              className={`${
                pathname.startsWith("/important-people")
                  ? "bg-gray-500"
                  : "bg-white"
              } hover:bg-gray-500 p-2  ${
                pathname.startsWith("/important-people")
                  ? "text-white"
                  : "text-black"
              } transition-colors duration-300 w-full text-left`}
              onClick={() => {
                router.push("/important-people");
                toggleSidebar();
              }}
            >
              บุคคลสำคัญ
            </button>
          </li>
          <li>
            <button
              className={`${
                pathname.startsWith("/legends") ? "bg-gray-500" : "bg-white"
              } hover:bg-gray-500 p-2  ${
                pathname.startsWith("/legends") ? "text-white" : "text-black"
              } transition-colors duration-300 w-full text-left`}
              onClick={() => {
                router.push("/legends");
                toggleSidebar();
              }}
            >
              เรื่องเล่าตำนาน
            </button>
          </li>
          <li>
            <button
              className={`${
                pathname.startsWith("/cultural-heritage")
                  ? "bg-gray-500"
                  : "bg-white"
              } hover:bg-gray-500 p-2  ${
                pathname.startsWith("/cultural-heritage")
                  ? "text-white"
                  : "text-black"
              } transition-colors duration-300 w-full text-left`}
              onClick={() => {
                router.push("/cultural-heritage");
                toggleSidebar();
              }}
            >
              มรดกวัฒนธรรม
            </button>
          </li>
          <li>
            <button
              className={`${
                pathname === "/gallery" ? "bg-gray-500" : "bg-white"
              } hover:bg-gray-500 p-2  ${
                pathname === "/gallery" ? "text-white" : "text-black"
              } transition-colors duration-300 w-full text-left`}
              onClick={() => {
                router.push("/gallery");
                toggleSidebar();
              }}
            >
              Picture of Baan Poon
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
