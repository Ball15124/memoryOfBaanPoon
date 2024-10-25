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
      <div className="flex flex-col md:flex-row justify-center mt-10 px-10 md:px-20 gap-x-[20px] lg:gap-x-[30px] 2xl:gap-x-[120px]">
        <div className="flex flex-col items-center justify-center mt-[60px] lg:mt-[25px] w-full md:w-1/3">
          <div className="h-[300px] xl:h-[400px] w-full rounded-[50px] bg-gray-400" />
          <button
            onClick={() => handleNavigation("1")}
            className="mt-[20px] md:mt-[40px] mb-5 md:mb-0 text-center"
          >
            <span className="text-3xl">
              2 ตระกูลผู้บุกเบิก
              <br /> (จารุเสถียร และ ธนะภูมิ)
            </span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/3">
          <div className="h-[300px] xl:h-[400px] w-full rounded-[50px] bg-gray-400" />
          <button
            onClick={() => handleNavigation("2")}
            className="mt-[30px] md:mt-[50px] mb-5 md:mb-0 text-center"
          >
            <span className="text-3xl">อาภรณ์ นพคุณ</span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/3">
          <div className="h-[300px] xl:h-[400px] w-full rounded-[50px] bg-gray-400" />
          <button
            onClick={() => handleNavigation("3")}
            className="mt-[30px] md:mt-[50px] mb-5 md:mb-0 text-center"
          >
            <span className="text-3xl">ศรีเชาว์ ทองโปร่ง</span>
          </button>
        </div>
      </div>
    </main>
  );
}
