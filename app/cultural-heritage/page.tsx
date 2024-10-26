"use client";
import { useRouter } from "next/navigation";

export default function Heritage() {
  const router = useRouter();
  const handleNavigation = (id: any) => {
    router.push(`/cultural-heritage/${id}`);
  };

  return (
    <main className="flex flex-col items-center px-4">
      <div className="mt-10 text-center">
        <p className="text-[#c53232] text-4xl md:text-6xl font-bold">มรดกวัฒนธรรม</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 w-full max-w-screen-lg">
        {/* Each Button */}
        <button
          className="relative bg-white text-[#c53232] border-2 border-[#c53232] py-4 px-8 rounded-lg text-lg md:text-xl shadow-lg transition-colors duration-300 hover:bg-[#c53232] hover:text-white"
          onClick={() => handleNavigation(1)}
        >
          วัดสวนสวรรค์
        </button>

        <button
          className="relative bg-white text-[#c53232] border-2 border-[#c53232] py-4 px-8 rounded-lg text-lg md:text-xl shadow-lg transition-colors duration-300 hover:bg-[#c53232] hover:text-white"
          onClick={() => handleNavigation(2)}
        >
          โรงทำขนมจีน
        </button>

        <button
          className="relative bg-white text-[#c53232] border-2 border-[#c53232] py-4 px-8 rounded-lg text-lg md:text-xl shadow-lg transition-colors duration-300 hover:bg-[#c53232] hover:text-white"
          onClick={() => handleNavigation(3)}
        >
          โรงเตาอั้งโล่และโรงปูน
        </button>

        {/* Second row */}
        <button
          className="relative bg-white text-[#c53232] border-2 border-[#c53232] py-4 px-8 rounded-lg text-lg md:text-xl shadow-lg transition-colors duration-300 hover:bg-[#c53232] hover:text-white"
          onClick={() => handleNavigation(4)}
        >
          โรงฝิ่น
        </button>

        <button
          className="relative bg-white text-[#c53232] border-2 border-[#c53232] py-4 px-8 rounded-lg text-lg md:text-xl shadow-lg transition-colors duration-300 hover:bg-[#c53232] hover:text-white"
          onClick={() => handleNavigation(5)}
        >
          ศาลาโรงธรรม
        </button>

        <button
          className="relative bg-white text-[#c53232] border-2 border-[#c53232] py-4 px-8 rounded-lg text-lg md:text-xl shadow-lg transition-colors duration-300 hover:bg-[#c53232] hover:text-white"
          onClick={() => handleNavigation(6)}
        >
          บ้านตีนมิด
        </button>

        {/* Third row */}
        <button
          className="relative bg-white text-[#c53232] border-2 border-[#c53232] py-4 px-8 rounded-lg text-lg md:text-xl shadow-lg transition-colors duration-300 hover:bg-[#c53232] hover:text-white"
          onClick={() => handleNavigation(7)}
        >
          โรงสุราบางยี่ขัน
        </button>

        <button
          className="relative bg-white text-[#c53232] border-2 border-[#c53232] py-4 px-8 rounded-lg text-lg md:text-xl shadow-lg transition-colors duration-300 hover:bg-[#c53232] hover:text-white"
          onClick={() => handleNavigation(8)}
        >
          กำแพงวังเจ้าอนุวงศ์
        </button>

        <button
          className="relative bg-white text-[#c53232] border-2 border-[#c53232] py-4 px-8 rounded-lg text-lg md:text-xl shadow-lg transition-colors duration-300 hover:bg-[#c53232] hover:text-white"
          onClick={() => handleNavigation(9)}
        >
          ศาลเจ้าปึงเถ่ากง
        </button>
      </div>
    </main>
  );
}
