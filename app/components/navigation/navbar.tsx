"use client"; // Mark this as a client component

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use the correct hook for App Router
import { useRouter } from "next/navigation";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
  const pathname = usePathname(); // Get the current pathname
  const router = useRouter();

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full h-20 bg-[#c53232] fixed top-0 z-50">
      <div className="flex justify-end px-4 h-full">
        <div className="flex items-center">
          {/* Desktop Links */}
          <ul className="hidden md:flex gap-x-10">
            <li>
              <button
                className={`${
                  pathname === "/" ? "bg-gray-500" : "bg-white"
                } hover:bg-gray-500 p-2 rounded-full ${
                  pathname === "/" ? "text-white" : "text-black"
                } transition-colors duration-300`}
                onClick={() => router.push("/")}
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
                } hover:bg-gray-500 p-2 rounded-full ${
                  pathname.startsWith("/important-people")
                    ? "text-white"
                    : "text-black"
                } transition-colors duration-300`}
                onClick={() => router.push("/important-people")}
              >
                บุคคลสำคัญ
              </button>
            </li>
            <li>
              <button
                className={`${
                  pathname.startsWith("/legends") ? "bg-gray-500" : "bg-white"
                } hover:bg-gray-500 p-2 rounded-full ${
                  pathname.startsWith("/legends") ? "text-white" : "text-black"
                } transition-colors duration-300`}
                onClick={() => router.push("/legends")}
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
                } hover:bg-gray-500 p-2 rounded-full ${
                  pathname.startsWith("/cultural-heritage")
                    ? "text-white"
                    : "text-black"
                } transition-colors duration-300`}
                onClick={() => router.push("/cultural-heritage")}
              >
                มรดกวัฒนธรรม
              </button>
            </li>
            <li>
              <button
                className={`${
                  pathname === "/gallery" ? "bg-gray-500" : "bg-white"
                } hover:bg-gray-500 p-2 rounded-full ${
                  pathname === "/gallery" ? "text-white" : "text-black"
                } transition-colors duration-300`}
                onClick={() => router.push("/gallery")}
              >
                Picture of Baan Poon
              </button>
            </li>
          </ul>

          {/* Sidebar Icon */}
          <ViewHeadlineIcon
            className="text-white ml-4 cursor-pointer md:hidden"
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
        className={`fixed left-0 top-0 w-64 h-full bg-white shadow-lg z-50 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4 bg-[#c53232]">
          <p className="text-white font-bold">Menu</p>
          <CloseIcon className="text-white cursor-pointer" onClick={toggleSidebar} />
        </div>
        <ul className="flex flex-col p-4 gap-y-4">
          <li>
            <button
              className={`${
                pathname === "/" ? "bg-gray-500" : "bg-white"
              } hover:bg-gray-500 p-2 rounded-full ${
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
                pathname.startsWith("/important-people") ? "bg-gray-500" : "bg-white"
              } hover:bg-gray-500 p-2 rounded-full ${
                pathname.startsWith("/important-people") ? "text-white" : "text-black"
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
              } hover:bg-gray-500 p-2 rounded-full ${
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
                pathname.startsWith("/cultural-heritage") ? "bg-gray-500" : "bg-white"
              } hover:bg-gray-500 p-2 rounded-full ${
                pathname.startsWith("/cultural-heritage") ? "text-white" : "text-black"
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
              } hover:bg-gray-500 p-2 rounded-full ${
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
