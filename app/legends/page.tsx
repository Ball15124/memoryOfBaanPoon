"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Legends() {
  const router = useRouter();
  const handleNavigation = (id: any) => {
    // Navigate to the dynamic route with the given id
    router.push(`/legends/${id}`);
  };

  return (
    <main className="flex flex-col pb-10">
      <div className="self-center mt-10">
        <p className="text-[#c53232] text-6xl font-bold">เรื่องเล่าตำนาน</p>
      </div>

      <div className="grid md:grid-cols-2 gap-20 mt-10 mx-20">
        {/* First button */}
        <button
          className="bg-[#c47a61] text-white py-4 px-8 rounded-lg text-4xl h-[180px]"
          onClick={() => handleNavigation(1)}
        >
          ข้อเท็จจริงของโรงทำเกี๊ยะ
        </button>

        {/* Second button */}
        <button
          className="bg-[#c47a61] text-white py-4 px-8 rounded-lg text-4xl h-[180px]"
          onClick={() => handleNavigation(2)}
        >
          เงาะบางยี่ขัน
        </button>

        {/* Third button */}
        <button
          className="bg-[#c47a61] text-white py-4 px-8 rounded-lg text-4xl h-[180px]"
          onClick={() => handleNavigation(3)}
        >
          วัดเจ้าจอมวงศ์
        </button>

        {/* Fourth button */}
        <button
          className="bg-[#c47a61] text-white py-4 px-8 rounded-lg text-4xl h-[180px]"
          onClick={() => handleNavigation(4)}
        >
          การก่อสร้างสะพานพระราม 8
        </button>
      </div>
    </main>
  );
}
