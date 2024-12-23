import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai, Monoton, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/navbar";
import Footer from "./components/navigation/footer";
import { platform } from "os";
const inter = Inter({ subsets: ["latin"] });
const notoSansThai = Noto_Sans_Thai({ subsets: ["thai", "latin"] });
const monoton = Monoton({ subsets: ["latin"], weight: "400" }); // Add Monoton
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "Memory of Ban Poon | ความทรงจำของบ้านปูน",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} pt-20 bg-[#000000] text-[20px] md:text-[25px] z-0`}
        style={{
          fontFamily: "TH Niramit AS Regular, sans-serif",
        }}
      >
        <Navbar monotonClass={poppins.className} />
        {/* Pass the class as a prop */}
        {children}
      </body>
    </html>
  );
}
