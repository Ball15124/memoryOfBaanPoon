"use client"; // Mark this as a client component

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use the correct hook for App Router
import { useRouter } from "next/navigation";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

const Navbar = () => {
  const pathname = usePathname(); // Get the current pathname
  const router = useRouter();

  return (
    <div className="w-full h-20 bg-[#c53232] sticky top-0">
      <div className="flex justify-end px-4 h-full">
        <div className="flex items-center">
          <ul className="hidden md:flex gap-x-10">
            <li>
              <button
                className={`${
                  pathname === "/" ? "bg-gray-500" : "bg-white"
                } hover:bg-gray-500 p-2 rounded-full ${
                  pathname === "/" ? "text-white" : "text-black"
                }`}
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
                }`}
                onClick={() => router.push("/important-people")}
              >
                บุคคลสำคัญ
              </button>
            </li>
            <li>
              <button
                className={`${
                  pathname === "/legends" ? "bg-gray-500" : "bg-white"
                } hover:bg-gray-500 p-2 rounded-full ${
                  pathname === "/legends" ? "text-white" : "text-black"
                }`}
                onClick={() => router.push("/legends")}
              >
                เรื่องเล่าตำนาน
              </button>
            </li>
            <li>
              <button
                className={`${
                  pathname === "/cultural-heritage" ? "bg-gray-500" : "bg-white"
                } hover:bg-gray-500 p-2 rounded-full ${
                  pathname === "/cultural-heritage"
                    ? "text-white"
                    : "text-black"
                }`}
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
                }`}
                onClick={() => router.push("/gallery")}
              >
                Picture of Baan Poon
              </button>
            </li>
          </ul>
          <ViewHeadlineIcon className="text-white ml-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
