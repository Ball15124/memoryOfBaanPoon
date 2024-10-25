"use client"; // Mark this as a client component
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ImportantPeople() {
  const router = useRouter();
  const handleNavigation = (id: any) => {
    // Navigate to the dynamic route with the given id
    router.push(`/important-people/${id}`);
  };
  return (
    <main className="flex flex-col ">
      <div className="self-center mt-10">
        <p className="text-[#c53232] text-6xl font-bold">บุคคลสำคัญ</p>
      </div>
      <div className="flex flex-row justify-center mt-10 px-20 gap-x-[120px]">
        <div className="flex flex-col items-center justify-center w-1/3">
          <div className="h-[400px] w-full rounded-[50px] bg-gray-400" />
          <button
            onClick={() => handleNavigation("1")}
            className="mt-[50px] text-center"
          >
            <span className="text-3xl">
              2 ตระกูลผู้บุกเบิก
              <br /> (จารุเสถียร และ ธนะภูมิ)
            </span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center w-1/3">
          <div className="h-[400px] w-full rounded-[50px] bg-gray-400" />
          <button
            onClick={() => handleNavigation("2")}
            className="mt-[50px] text-center"
          >
            <span className="text-3xl">อาภรณ์ นพคุณ</span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center w-1/3">
          <div className="h-[400px] w-full rounded-[50px] bg-gray-400" />
          <button
            onClick={() => handleNavigation("3")}
            className="mt-[50px] text-center"
          >
            <span className="text-3xl">ศรีเชาว์ ทองโปร่ง</span>
          </button>
        </div>
      </div>
    </main>
  );
}
