"use client"; // Mark this as a client component

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Use the correct hook for App Router
import { useRouter } from "next/navigation";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: "400" }); // Add Monoton

const Navbar = ({ monotonClass }: { monotonClass: string }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
  const pathname = usePathname(); // Get the current pathname
  const router = useRouter();

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const smoothScroll = (target: Element, duration: number) => {
    const start = window.scrollY;
    const targetPosition = target.getBoundingClientRect().top + start;
    const startTime = performance.now();

    const scroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Ensure it doesn't exceed 1
      const ease = easeInOutQuad(progress); // Easing function

      window.scrollTo(0, start + (targetPosition - start) * ease);

      if (progress < 1) {
        requestAnimationFrame(scroll); // Continue scrolling
      }
    };

    requestAnimationFrame(scroll);
  };

  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Easing function for smooth scroll
  };

  const handleScroll = () => {
    // Only check scroll position if on the home page
    if (pathname === "/" || pathname === "/history" || pathname.startsWith("/legends") || pathname.startsWith("/cultural-heritage")) {
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
      setIsScrolled(false);
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
      className={`w-full h-20 fixed top-0 z-50 transition-all duration-[1000ms] ${
        isScrolled ? "opacity-0 h-0" : "opacity-100 h-20"
      } ${
        pathname !== "/" && !pathname.startsWith('/legends') && !pathname.startsWith('/cultural-heritage')
          ? "bg-[#c53232]"
          : "bg-transparent"
      }`}
    >
      <div className={`flex justify-between pl-10 h-full items-center`}>
        {/* <ArrowBackIcon
          className={`text-white mr-4 cursor-pointer ${
            pathname === "/" ||
            pathname === "/important-people" ||
            pathname === "/legends" ||
            pathname === "/cultural-heritage" ||
            pathname === "/gallery"
              ? "!hidden"
              : "!block"
          } md:!hidden`}
          onClick={() => router.back()} // Go back to the previous page
        /> */}
        <ArrowBackIcon
          className={`text-white mr-4 cursor-pointer ${pathname.startsWith("/cultural-heritage") || pathname.startsWith("/legends/")  ? "block" : "!hidden"}`}
          onClick={() => router.back()} // Go back to the previous page
        />
        <h1
          className={`text-white ml-0 text-[10px] md:text-[20px] tracking-[2px] ${outfit.className} ${pathname.startsWith("/cultural-heritage") || pathname.startsWith("/legends/")  ? "!hidden" : "block"}`}
        >
          MEMORY OF BAAN POON
        </h1>

        <div className="flex items-center h-full">
          {/* Desktop Links */}
          <ul className="hidden lg:flex h-full">
            <li className="h-full">
              <button
                className={` text-white hover:text-gray-500 p-4 transition-colors duration-300 tracking-widest hover:bg-white h-full`}
                onClick={() => router.push("/")}
              >
                หน้าแรก
              </button>
            </li>
            {/* <li>
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
            </li> */}
            <li>
              <button
                className={`${
                  pathname.startsWith("/history")
                    ? "text-gray-400"
                    : "text-white"
                } hover:text-gray-500 p-4  transition-colors duration-300 hover:bg-white tracking-widest h-full`}
                onClick={() => router.push("/history")}
              >
                ประวัติชุมชน
              </button>
            </li>
            <li>
              <button
                className={`${
                  pathname.startsWith("/legends") ? "text-gray-400" : "text-white"
                } hover:text-gray-500 p-4  transition-colors duration-300 hover:bg-white tracking-widest h-full`}
                onClick={() => router.push("/legends")}
              >
                เรื่องเล่าตำนาน
              </button>
            </li>
            <li>
              <button
                className={`${
                  pathname.startsWith("/cultural-heritage")
                    ? "text-gray-400"
                    : "text-white"
                } hover:text-gray-500 p-4   transition-colors duration-300 hover:bg-white tracking-widest h-full`}
                onClick={() => handleNavigation("cultural-heritage")}
              >
                มรดกวัฒนธรรม
              </button>
            </li>
            <li>
              <button
                className={`${pathname.startsWith("/gallery") && "bg-white"} ${
                  pathname.startsWith("/gallery") ? "text-black" : "text-white"
                } hover:text-gray-500 p-4   transition-colors duration-300 hover:bg-white tracking-widest h-full`}
                onClick={() => handleNavigation("gallery")}
              >
                Picture of Baan Poon
              </button>
            </li>
          </ul>

          {/* Sidebar Icon */}
          <ViewHeadlineIcon
            className="text-white ml-4 mr-4 cursor-pointer lg:!hidden"
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
        className={`fixed right-0 top-0 w-64 h-full bg-black shadow-lg z-50 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 bg-black">
          {/* <p className="text-white font-bold">Menu</p> */}
          <CloseIcon
            className="text-white cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <ul className="flex flex-col p-4 gap-y-4">
          <li>
            <button
              className={`text-right p-2  ${
                pathname === "/" ? "text-[#c53232]" : "text-white"
              } transition-colors duration-300 w-full text-left`}
              onClick={() => {
                router.push("/");
                toggleSidebar();
              }}
            >
              หน้าแรก
            </button>
          </li>
          {/* <li>
            <button
              className={`text-right p-2  ${
                pathname.startsWith("/important-people")
                  ? "text-[#c53232]"
                  : "text-white"
              } transition-colors duration-300 w-full text-left`}
              onClick={() => {
                router.push("/important-people");
                toggleSidebar();
              }}
            >
              บุคคลสำคัญ
            </button>
          </li> */}
          <li>
            <button
              className={`text-right p-2  ${
                pathname.startsWith("/history")
                  ? "text-[#c53232]"
                  : "text-white"
              } transition-colors duration-300 w-full text-left`}
              onClick={() => {
                router.push("/history");
                toggleSidebar();
              }}
            >
              ประวัติชุมชน
            </button>
          </li>
          <li>
            <button
              className={`text-right p-2 text-white transition-colors duration-300 w-full`}
              onClick={() => {
                handleNavigation("important-person");
                toggleSidebar();
              }}
            >
              บุคคลสำคัญ
            </button>
          </li>
          <li>
            <button
              className={`text-right p-2  ${
                pathname.startsWith("/legends")
                  ? "text-[#c53232]"
                  : "text-white"
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
              className={`text-right p-2  ${
                pathname.startsWith("/cultural-heritage")
                  ? "text-[#c53232]"
                  : "text-white"
              } transition-colors duration-300 w-full text-left`}
              onClick={() => {
                handleNavigation("cultural-heritage");
                toggleSidebar();
              }}
            >
              มรดกวัฒนธรรม
            </button>
          </li>
          <li>
            <button
              className={`text-right p-2  ${
                pathname === "/gallery" ? "text-[#c53232]" : "text-white"
              } transition-colors duration-300 w-full text-left`}
              onClick={() => {
                handleNavigation("gallery");
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
