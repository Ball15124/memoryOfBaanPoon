// app/important-people/[id]/page.js
"use client"; // Mark this as a client component

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Sample data array
const data = [
  {
    id: 1,
    name: "2 ตระกูลผู้บุกเบิก (จารุเสถียร และ ธนะภูมิ)",
    description:
      "2 ตระกูลผู้บุกเบิกชุมชนบ้านปูน ตระกูลธนะภูมิ ต้นตระกูลธนะภูมิ คือ ขุนสุขุมนาฏนิตยภักดี หรือ ทิม ธนะภูมิ ปลัดกรมในสมเด็จพระนางเจ้าสุขุมาลมารศรี พระราชเทวีในรัชกาลที่ 5 โดยบรรพบุรุษของสกุลธนะภูมินี้เป็นผู้ริเริ่มการทำปูนขึ้นที่บ้านปูนย่านบางยี่ขัน และถือว่าเป็นพระญาติฝ่ายมารดาของเจ้าคุณจอมมารดาสำลี พระสนมเอกในรัชกาลที่ 4 เจ้าจุลจอมมารดาสำลีนั้นเป็นธิดาของสมเด็จเจ้าพระยาบรมมหาพิชัยญาติ ( ทัด บุนนาค ) และเป็นเจ้าจอมมารดาในสมเด็จพระปิตุจฉาเจ้าสุขุมาลมารศรี พระอัครราชเทวีในรัชกาลที่ 5 ซึ่งเป็นพระมารดาในสมเด็จพระเจ้าบรมวงศ์เธอ เจ้าฟ้าสุทธาทิพย์รัตน กรมหลวงศรีรัตนโกสินทร์ และจอมพลสมเด็จพระเจ้าบรมวงศ์เธอ เจ้าฟ้าบริพัตรสุขุมพันธุ์ กรมพระนครสวรรค์วรพินิต คนในตระกูลนี้บางทีก็เรียกกันว่า พระญาติบ้านปูน",
  },
  {
    id: 2,
    name: "อาภรณ์ นพคุณ",
    description: "An influential figure in the arts.",
  },
  {
    id: 3,
    name: "ศรีเชาว์ ทองโปร่ง",
    description: "อดีตครูที่วิทยาลัยนาฏศิลป์และเป็นผู้ได้รับคัดเลือกให้เป็นประธานชุมชนบ้านปูนคนปัจจุบัน รอข้อมูลเพิ่ม (ยังไม่เสร็จสมบูรณ์)",
  },
];

const ImportantPersonDetail = () => {
  const pathname = usePathname(); // Get the current pathname
  const id = Number(pathname.split("/").pop()); // Convert the id to a number

  // Check if the id is valid and retrieve the data
  const person = data.find((item) => item.id === id);

  if (!person) {
    return <p>Person not found.</p>;
  }

  return (
    <main className="flex flex-col px-20">
      <div className="mt-10">
        <p className="text-[#c53232] text-6xl font-bold">{person.name}</p>
      </div>
      <div className="flex flex-row">
        {id != 1 ? (
          <div className="w-1/3 h-[350px] mt-8 rounded-[50px] bg-gray-400" />
        ) : (
          <div className="flex flex-col w-1/3">
            <div className="w-full h-[350px] mt-8 rounded-[50px] bg-gray-400" />
            <div className="w-full h-[350px] mt-8 rounded-[50px] bg-gray-400" />
          </div>
        )}
        <p className="text-black text-[36px] text-justify w-2/3 ml-8 mt-8">{person.description}</p>
      </div>
    </main>
  );
};

// // Use this export to allow the server to fetch params
// export async function generateStaticParams() {
//   // Fetch your dynamic IDs from an API if needed
//   return [
//     { id: "1" },
//     { id: "2" },
//     // Add more static paths if necessary
//   ];
// }

export default ImportantPersonDetail;
