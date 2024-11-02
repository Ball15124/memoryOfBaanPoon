"use client"; // Mark this as a client component

import Image from "next/image";
import { Poppins } from "next/font/google";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const poppins = Poppins({ subsets: ["latin"], weight: "900" });

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const handleCulture = (id: any) => {
    router.push(`/cultural-heritage/${id}`);
  };

  useEffect(() => {
    // Initialize intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When an image container enters the viewport
          if (entry.isIntersecting) {
            // Add the fade-in class
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
            // Stop observing this element after animation
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "50px", // Start animation slightly before the element comes into view
      }
    );

    // Observe all image containers
    imageRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    "หน้าแรก(1).JPG",
    "หน้าแรก(2).JPG",
    "หน้าแรก(3).JPG",
    "หน้าแรก(4).JPG",
    "หน้าแรก(5).JPG",
    "วัดสวนสวรรค์.jpg",
  ];

  const imageRefs = useRef<(HTMLDivElement | null)[]>(
    Array(galleryImages.length).fill(null)
  );

  return (
    <main className="flex w-full flex-col pb-10 absolute top-[-80px]">
      {/* Replace 'path/to/your/image.jpg' with the actual path to your image */}
      <div className="sticky top-0 w-full h-[1100px] bg-[url('/assests/images/หน้าแรก(1).JPG')] bg-fixed bg-center bg-no-repeat bg-cover z-[0] justify-items-center">
        <h1
          className={`${poppins.className} text-[28px] sm:text-[30px] lg:text-[48px] text-[#C53232] drop-shadow-lg text-center mt-[300px] animate-fade-in`}
        >
          Memory of
        </h1>
        <h1
          className={`${poppins.className} mt-[-30px] md:mt-[-40px] lg:mt-[-60px] text-[60px] sm:text-[70px] md:text-[90px] lg:text-[110px] xl:text-[190px] text-[#C53232] drop-shadow-lg animate-fade-in`}
        >
          BAANPOON
        </h1>
        <button className="mt-[180px] text-white hover:text-black transition-colors duration-[500ms] hover:bg-white text-[16px] sm:text-[18px] md:text-[20px] p-2 md:p-4 bg-transparent border-[1px] border-white">
          HISTORY OF BAANPOON
        </button>
      </div>
      <div className="relative bg-[#c53232] h-[10px]"></div>
      <div className="px-10 md:px-20 lg:px-30 xl:px-96 py-8 bg-[#000000] z-10">
        <p
          className={`${poppins.className} text-[#c53232] text-[40px] md:text-[70px] lg:text-[110px] font-bold`}
        >
          CULTURAL
          <p className="mt-[-30px] md:mt-[-50px] lg:mt-[-80px]">HERITAGES</p>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border-[1px] border-gray-400 h-[500px] group overflow-hidden">
            <div className="h-[40%] bg-[url('/assests/images/วัดสวนสวรรค์.jpg')] bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
            <div className="w-full p-6 flex flex-col justify-between h-[60%]">
              <div>
                <p className="text-white text-center text-2xl">วัดสวนสวรรค์</p>
                <p className="text-white line-clamp-6">
                  วัดสวนสวรรค์ ตั้งอยู่ซอยจรัญสนิทวงศ์ 44 ชุมชนบ้านปูน บางยี่ขัน
                  ถูกทิ้งร้างไปเมื่อ พ.ศ.2463
                  ก่อนจะถูกบูรณะวัดใหม่และถูกรวมเข้ากับวัดคฤหบดีในพ.ศ. 2519
                  ภายในตัววัดเหลือแค่อุโบสถกับเจดีย์มีเสมาแบบพิเศษหักมุม
                  ผู้เชี่ยวชาญสันนิษฐานว่าหลังจากถูกสร้างในสมัยอยุธยา
                  น่าจะมีการบูรณะในช่วงรัชกาลที่ 1...
                </p>
              </div>
              <button
                onClick={() => handleCulture(1)}
                className="py-2 px-8 text-white bg-[#c53232] hover:bg-white hover:text-black transition-colors duration-[500ms]"
              >
                อ่านต่อ
              </button>
            </div>
          </div>
          <div className="border-[1px] border-gray-400 h-[500px] group overflow-hidden">
            <div className="h-[40%] bg-[url('/assests/images/โรงทำขนมจีน.jpg')] bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
            <div className="w-full p-6 flex flex-col justify-between h-[60%]">
              <div>
                <p className="text-white text-center text-2xl">โรงทำขนมจีน</p>
                <p className="text-white line-clamp-6">
                  ถัดออกไปจากโรงเตาใกล้กับบริเวณท่าล่างจะเป็นโรงงานทำขนมจีนขนาดใหญ่
                  โดยชาวจีนชื่อ ยายเนี้ยว ไม่ทราบนามสกุล
                  ซึ่งเช่าช่วงมาจากผู้เช่ารายแรกอีกทอดหนึ่ง
                  โรงงานทำขนมจีนตั้งอยู่บนที่ดินของตระกูลธนะภูมิ
                  ในอดีตจะมีเรือมารับขนมจีนในบริเวณนี้...
                </p>
              </div>
              <button
                onClick={() => handleCulture(2)}
                className="py-2 px-8 text-white bg-[#c53232] hover:bg-white hover:text-black transition-colors duration-[500ms]"
              >
                อ่านต่อ
              </button>
            </div>
          </div>
          <div className="border-[1px] border-gray-400 h-[500px] group overflow-hidden">
            <div className="h-[40%] bg-[url('/assests/images/โรงเตาอั้งโล่และโรงปูน.jpg')] bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
            <div className="w-full p-6 flex flex-col justify-between h-[60%]">
              <div>
                <p className="text-white text-center text-2xl">
                  โรงเตาอั้งโล่และโรงปูน
                </p>
                <p className="text-white line-clamp-6">
                  ชุมชนบ้านปูนเดิมที เรียก ท่าบนและท่าล่าง
                  ชุมชนบ้านปูนปัจจุบันเรียก &quot;ท่าบน&quot;
                  เป็นที่อยู่อาศัยของชาวบ้านมาตั้งแต่อดีมีกำแพงอิฐที่สันนิษฐานว่าเป็นกำแพงวังเจ้าอนุวงศ์แบ่งอาณาเขตบริเวณใต้สะพานพระรามที่
                  8 ในปัจจุบันเรียกว่า &quot;ท่าล่าง&quot; บริเวณริมแม่น้ำ ท่าบน
                  เดิมเป็นที่ตั้งของโรงทำเตาอั้งโล่เรียงติดกันจำนวน 4 - 5 โรง...
                </p>
              </div>
              <button
                onClick={() => handleCulture(3)}
                className="py-2 px-8 text-white bg-[#c53232] hover:bg-white hover:text-black transition-colors duration-[500ms]"
              >
                อ่านต่อ
              </button>
            </div>
          </div>
          <div
            className={`${
              expanded ? "block" : "hidden"
            } lg:block border-[1px] border-gray-400 h-[500px] group overflow-hidden`}
          >
            <div className="h-[40%] bg-[url('/assests/images/โรงฝิ่น.jpg')] bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
            <div className="w-full p-6 flex flex-col justify-between h-[60%]">
              <div>
                <p className="text-white text-center text-2xl">โรงฝิ่น</p>
                <p className="text-white line-clamp-6">
                  เป็นของคุณหญิงเติม ธนะภูมิ รอข้อมูล (ยังไม่เสร็จสมบูรณ์)...
                </p>
              </div>
              <button
                onClick={() => handleCulture(4)}
                className="py-2 px-8 text-white bg-[#c53232] hover:bg-white hover:text-black transition-colors duration-[500ms]"
              >
                อ่านต่อ
              </button>
            </div>
          </div>
          <div
            className={`${
              expanded ? "block" : "hidden"
            } lg:block border-[1px] border-gray-400 h-[500px] group overflow-hidden`}
          >
            <div className="h-[40%] bg-[url('/assests/images/ศาลาโรงธรรม.jpg')] bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
            <div className="w-full p-6 flex flex-col justify-between h-[60%]">
              <div>
                <p className="text-white text-center text-2xl">ศาลาโรงธรรม</p>
                <p className="text-white line-clamp-6">
                  ศาลาโรงธรรมในบ้านปูน เป็นศาลาใต้ถุนสูงชั้นเดียว
                  ยกพื้นสำหรับพระสงฆ์เจริญพระพุทธมนต์ สูงกว่าระดับพื้นปกติประมาณ
                  60 ชม. พอก้าวขึ้นลงได้สะดวก
                  ตรงกลางตั้งธรรมาสน์สำหรับพระสงฆ์เทศน์
                  ไต้ถุนศาลาโรงธรรมด้านที่ยกพื้นสูงแต่เดิมมีเรือเก่งเก็บเอาไว้ 1
                  ลำ จอมพล ประกาส จารุเสถียร
                  ได้กล่าวไว้ในหนังสืออัตชีวประวัติของท่านว่า
                  บรรพบุรุษของท่านบอกว่า
                  เรือลำดังกล่าวใช้เป็นพาหนะหนีพม่าลงมาจากกรุงศรีอยุธยาก่อนที่กรุงเก่าจะเสียแก่พม่า
                  ในปันจุบันเรือลำนี้ชำรุดผุพังและสูญหายไปแล้ว...
                </p>
              </div>
              <button
                onClick={() => handleCulture(5)}
                className="py-2 px-8 text-white bg-[#c53232] hover:bg-white hover:text-black transition-colors duration-[500ms]"
              >
                อ่านต่อ
              </button>
            </div>
          </div>
          <div
            className={`${
              expanded ? "block" : "hidden"
            } lg:block border-[1px] border-gray-400 h-[500px] group overflow-hidden`}
          >
            <div className="h-[40%] bg-[url('/assests/images/บ้านตีมีด.jpg')] bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
            <div className="w-full p-6 flex flex-col justify-between h-[60%]">
              <div>
                <p className="text-white text-center text-2xl">บ้านตีมีด</p>
                <p className="text-white line-clamp-6">
                  รอข้อมูล (ยังไม่เสร็จสมบูรณ์)...
                </p>
              </div>
              <button
                onClick={() => handleCulture(6)}
                className="py-2 px-8 text-white bg-[#c53232] hover:bg-white hover:text-black transition-colors duration-[500ms]"
              >
                อ่านต่อ
              </button>
            </div>
          </div>
          <div
            className={`${
              expanded ? "block" : "hidden"
            } border-[1px] border-gray-400 h-[500px] group overflow-hidden`}
          >
            <div className="h-[40%] bg-[url('/assests/images/โรงสุราบางยี่ขัน.jpg')] bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
            <div className="w-full p-6 flex flex-col justify-between h-[60%]">
              <div>
                <p className="text-white text-center text-2xl">
                  โรงสุราบางยี่ขัน
                </p>
                <p className="text-white line-clamp-6">
                  หลังจากการทำสงครามไทยลาวหรือที่เรียกว่ากบฏเจ้าอนุวงศ์
                  เจ้าตัสสะซึ่งเป็นพระอนุชาต่างมารดาของเจ้าอนุวงศ์ทรงรับผิดชอบดูแลกองพันทหารทางตะวันออกของการศึกลาว
                  และได้ตัดสินใจยอมจำนนต่อฝ่ายไทย
                  เจ้าติสสะจึงได้รับการแต่งตั้งเป็น &quot;นายอากร&quot;
                  ผูกขาดสุราของบางกอก
                  โดยมีสมาคมนักลงทุนชาวจีนดูแลสัญญาและข้อตกลงทางธุรกิจว่าด้วยการผูกขาดของพระองค์
                  กระทั่งในที่สุดได้ก่อตั้งโรงกลั่นสุราบริเวณริมน้ำที่บางยี่ขัน
                  บริเวณที่ตั้งเดิมของวังลาว (ประมวญ วิชาพูล, 2482: 78)
                  (ปัจจุบันพื้นที่นี้กลายมาเป็นสวนหลวงพระราม 8
                  และสถาบันดนตรีกัลยาณิวัฒนา)...
                </p>
              </div>
              <button
                onClick={() => handleCulture(7)}
                className="py-2 px-8 text-white bg-[#c53232] hover:bg-white hover:text-black transition-colors duration-[500ms]"
              >
                อ่านต่อ
              </button>
            </div>
          </div>
          <div
            className={`${
              expanded ? "block" : "hidden"
            } border-[1px] border-gray-400 h-[500px] group overflow-hidden`}
          >
            <div className="h-[40%] bg-[url('/assests/images/กำแพงวังเจ้าอนุวงศ์.jpg')] bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
            <div className="w-full p-6 flex flex-col justify-between h-[60%]">
              <div>
                <p className="text-white text-center text-2xl">
                  กำแพงวังเจ้าอนุวงศ์
                </p>
                <p className="text-white line-clamp-6">
                  กำแพงวังเจ้าอนุวงศ์ หรือ วังเจ้าลาว
                  สันนิษฐานว่าซากกำแพงดังกล่าวคือ วังของเจ้าอนุวงศ์
                  หนึ่งในสามของเชื้อพระวงศ์เวียงจันทน์อันได้แก่ เจ้านันทเสน
                  เจ้าอินทวงศ์ และเจ้าอนุวงศ์
                  ซึ่งถูกนำตัวเข้ามาเมื่อครั้งกองทัพกรุงธนบุรีตีนครเวียงจันทน์เมื่อ
                  พ.ศ. 2322 แล้วโปรดเกล้าฯ พระราชทานที่ดินและวังให้เป็นที่ประทับ
                  ณ บางยี่ขัน
                  ซึ่งเป็นหลักฐานของการเข้ามาอยู่อาศัยของเจ้านายจากกรุงเวียงจันทน์
                  ประเทศลาว ในช่วงรัชกาลที่ 3...
                </p>
              </div>
              <button
                onClick={() => handleCulture(8)}
                className="py-2 px-8 text-white bg-[#c53232] hover:bg-white hover:text-black transition-colors duration-[500ms]"
              >
                อ่านต่อ
              </button>
            </div>
          </div>
          <div
            className={`${
              expanded ? "block" : "hidden"
            } border-[1px] border-gray-400 h-[500px] group overflow-hidden`}
          >
            <div className="h-[40%] bg-[url('/assests/images/ศาลเจ้าปึงเถ้ากง.jpg')] bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
            <div className="w-full p-6 flex flex-col justify-between h-[60%]">
              <div>
                <p className="text-white text-center text-2xl">
                  ศาลเจ้าปึงเถ้ากง
                </p>
                <p className="text-white line-clamp-6">
                  เป็นศาลเจ้าเก่าแก่ที่อยู่คู่ชุมชน ชาวบ้านให้ความเคารพนับถือ
                  เทพประธานของศาลแห่งนี้ คือ เทพปึงเถ้ากง (ปึงเถ่ากง ปูนเถ้ากง
                  โทวตี่กง) หรือ อากง ความหมายในภาษาไทย คือ ปู่
                  ตามความเชื่อโบราณเชื่อว่าแต่ละท้องที่มีเทพประจำถิ่น
                  โดยชาวจีนแต้จิ๋วเรียกโดยทั่วไปว่า “ตี่เถ่าเล่าเอี๊ย” หรือ
                  &quot;เทพผู้เป็นใหญ่ ณ ที่นั้น&quot;
                  ไม่ว่าชาวจีนจะอพยพไปอยู่ที่ใดก็ยังยึดมั่นความเชื่อนี้อยู่
                  จึงได้แกะสลักรูปเคารพของเทพตี่เถ่าเล่าเอี๊ยจากไม้ขึ้นมาเพื่อเคารพบูชา
                  ภายหลังเรียกอย่างง่ายๆ ว่า &quot;ปึนเถ้ากง&quot;...
                </p>
              </div>
              <button
                onClick={() => handleCulture(9)}
                className="py-2 px-8 text-white bg-[#c53232] hover:bg-white hover:text-black transition-colors duration-[500ms]"
              >
                อ่านต่อ
              </button>
            </div>
          </div>
        </div>
        {!expanded && (
          <div className="relative top-[-100px] w-full h-[100px] bg-gradient-to-t from-black to-transparent pointer-events-none" />
        )}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`relative ${
            expanded ? "bottom-[-20px]" : "bottom-[100px]"
          } left-1/2 transform -translate-x-1/2 border-[1px] border-white text-white px-4 py-2 shadow-md hover:bg-white hover:text-black transition-colors duration-500`}
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>
      <div className="relative bg-white h-[10px]"></div>
      <div className="w-full justify-items-center py-8 bg-[#000000] z-10">
        <p
          className={`${poppins.className} text-white text-[20px] md:text-[40px] lg:text-[50px] font-bold`}
        >
          IMPORTANT PERSONS
          {/* <p className="mt-[-30px] md:mt-[-50px] lg:mt-[-80px]">PERSONS</p> */}
        </p>
      </div>
      <div className="px-10 md:px-20 lg:px-30 xl:px-70 bg-[#000000] z-10">
        <div className="sticky top-0 z-10 w-full flex flex-col-reverse lg:flex-row py-5">
          <div className="w-full lg:w-1/3 h-[400px] lg:h-[600px] bg-[url('/assests/images/ทิม_ธนะภูมิ.jpg')] bg-center bg-no-repeat bg-cover" />
          <div className="w-full lg:w-2/3 flex-col">
            <p
              className={`leading-none ml-0 lg:ml-7 text-[#c53232] text-[40px] md:text-[60px] lg:text-[80px] font-bold`}
            >
              2 ตระกูลผู้บุกเบิก
              <p className="leading-none">(จารุเสถียร และ ธนะภูมิ)</p>
            </p>
            <p
              className={`mt-4 ml-0 lg:ml-7 text-white text-[16px] md:text-[20px]`}
            >
              ตระกูลธนะภูมิ ต้นตระกูลธนะภูมิ คือ ขุนสุขุมนาฏนิตยภักดี (ทิม
              ธนะภูมิ) ปลัดกรมในสมเด็จพระนางเจ้าสุขุมาลมารศรี
              พระราชเทวีในรัชกาลที่ 5
              โดยบรรพบุรุษของสกุลธนะภูมินี้เป็นผู้ริเริ่มการทำปูนขึ้นที่บ้านปูน
              บางยี่ขัน และถือว่าเป็นพระญาติทางฝ่ายมารดาของเจ้าคุณจอมมารดาสำลี
              พระสนมเอกในรัชกาลที่ 4
              เจ้าจุลจอมมารดาสำลีเป็นธิดาของสมเด็จเจ้าพระยาบรมมหาพิชัยญาติ (ทัด
              บุนนาค) และเป็นเจ้าจอมมารดาในสมเด็จพระปิตุจฉาเจ้าสุขุมาลมารศรี
              พระอัครราชเทวีในรัชกาลที่ 5
              ซึ่งเป็นพระมารดาในสมเด็จพระเจ้าบรมวงศ์เธอ เจ้าฟ้าสุทธาทิพย์รัตน
              กรมหลวงศรีรัตนโกสินทร์ และจอมพลสมเด็จพระเจ้าบรมวงศ์เธอ
              เจ้าฟ้าบริพัตรสุขุมพันธุ์ กรมพระนครสวรรค์วรพินิต
              คนในตระกูลนี้บางทีก็ถูกเรียกกันว่า &quot;พระญาติบ้านปูน&quot;
              <br />
              <br />
              ตระกูลจารุเสถียร
              บรรพบุรุษของตระกูลนี้อพยพมาจากอยุธยาพร้อมกับบรรพบุรุษในตระกูลธนะภูมิ
              มีความสนิทสนมและนับถือกันเหมือนญาติสนิท เท่าที่มีหลักฐานปรากฏคือ
              พระยาพายัพ พิริยะกิจ (เป้า จารุเสถียร)
              อดีตผู้ว่าราชการเมืองพระประแดง บิดาของพลเอกจำเป็น และจอมพลประภาส
              จารุเสถียร
            </p>
          </div>
        </div>
        <div className="sticky top-0 z-10 w-full flex flex-col lg:flex-row py-5 bg-black">
          <div className="w-full lg:w-2/3 flex-col">
            <p
              className={`leading-none ml-0 lg:ml-7 text-[#c53232] text-[40px] md:text-[60px] lg:text-[80px] font-bold`}
            >
              อาภรณ์ นพคุณ
            </p>
            <p
              className={`mr-0 lg:mr-4 mt-4 ml-0 lg:ml-7 text-white text-[16px] md:text-[20px]`}
            >
              อาภรณ์ นพคุณ ชาวชุมชนบ้านปูนในวัย 88 ปี
              ที่เกิดและเติบโตอยู่ในชุมชนบ้านปูนมาตลอดทั้งชีวิต
              รับรู้และเห็นการเปลี่ยนแปลงต่างๆมากมาย ปัจจุบันประกอบอาชีพค้าขาย
              เปิดร้านขายของชำให้กับชาวบ้านและผู้ที่แวะเวียนเข้ามาเยี่ยมชมชุมชนบ้านปูน
              เหตุผลที่ทำให้อาภรณ์ นพคุณ
              ยังคงอยู่ในชุมชนบ้านปูนต่อมาเรื่อยๆจนถึงปัจจุบัน
              ไม่ได้ย้ายออกไปเหมือนกับคนอื่นๆ ก็คือค่าเช่าบ้านมีราคาถูก
              เป็นหนึ่งในส่วนที่ตระกูลธนภูมิดูแลและเป็นเจ้าของ
              ในอดีตค่าเช่าบ้านอยู่ในราคาเดือนละประมาณ 300 - 400 บาท
              บางบ้านก็ละเว้นการเก็บค่าเช่า
              ช่วยทำให้คนในชุมชนมีที่อยู่อาศัยและสามารถดำรงอยู่มาถึงปัจจุบัน
            </p>
          </div>
          <div className="w-full lg:w-1/3 h-[400px] lg:h-[600px] bg-[url('/assests/images/โรงทำขนมจีน.jpg')] bg-center bg-no-repeat bg-cover" />
        </div>
        <div className="sticky top-0 z-10 w-full flex flex-col-reverse lg:flex-row pt-5 pb-24 bg-black">
          <div className="w-full lg:w-1/3 h-[400px] lg:h-[600px] bg-[url('/assests/images/ศรีเชาว์_ทองโปร่ง.jpg')] bg-center bg-no-repeat bg-cover" />
          <div className="w-full lg:w-2/3 flex-col">
            <p
              className={`leading-none ml-0 lg:ml-7 text-[#c53232] text-[40px] md:text-[60px] lg:text-[80px] font-bold`}
            >
              ศรีเชาว์ ทองโปร่ง
            </p>
            <p
              className={`mt-4 ml-0 lg:ml-7 text-white text-[16px] md:text-[20px]`}
            >
              ศรีเชาว์ ทองโปร่ง ชาวบ้านชุมชนบ้านปูนในวัย xx ปี
              อดีตครูที่วิทยาลัยนาฏศิลป์
              เกิดและได้ใช้ชีวิตช่วงหนึ่งในชุมชนบ้านปูน
              ก่อนจะกลับเข้ามาอาศัยยังชุมชนแห่งนี้อีกครั้งเมื่อเป็นผู้ได้รับคัดเลือกให้เป็นประธานชุมชนบ้านปูนคนปัจจุบัน
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#c53232] z-10 justify-items-center text-center p-52">
        <p
          className={`${poppins.className} text-black text-[40px] md:text-[70px] lg:text-[110px] font-bold`}
        >
          LEGENDARY
          <p className="mt-[-30px] md:mt-[-50px] lg:mt-[-80px]">TALES</p>
        </p>
        <button
          onClick={() => router.push("/legends")}
          className="py-5 px-10 border-[1px] border-black text-black hover:bg-black hover:text-white transition-colors duration-500"
        >
          สำรวจ
        </button>
      </div>
      <div className="px-10 md:px-20 lg:px-30 xl:px-70 bg-[#000000] z-10 py-16">
        <p
          className={`${poppins.className} text-center text-white text-[20px] md:text-[40px] lg:text-[50px] font-bold`}
        >
          THE PICTURE OF BAANPOON
          {/* <p className="mt-[-30px] md:mt-[-50px] lg:mt-[-80px]">PERSONS</p> */}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              ref={(el) => {
                if (imageRefs.current) {
                  imageRefs.current[index] = el;
                }
              }}
              className={`bg-[url('/assests/images/${img}')] h-[400px] lg:h-[600px] xl:h-[800px] bg-cover bg-no-repeat bg-center opacity-0 translate-y-10transition-all duration-1000 ease-out`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
