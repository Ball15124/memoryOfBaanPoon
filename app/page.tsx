"use client"; // Mark this as a client component

import Image from "next/image";
import { Poppins, Outfit } from "next/font/google";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "./components/navigation/footer";
import { usePathname } from "next/navigation";
import "./globals.css";
const poppins = Poppins({ subsets: ["latin"], weight: ["900", "400", "300"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "300"] }); // Add Monoton

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  const elementRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.1 } // Adjust as necessary
    );

    elementRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      elementRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [elementRefs]);

  const handleCulture = (id: number) => {
    router.push(`/cultural-heritage/${id}`);
  };
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if user is scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 500) {
        setIsScrolled(true); // Hide button
      } else {
        setIsScrolled(false); // Show button
      }

      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (
      userAgent.includes("iphone") ||
      userAgent.includes("ipod") ||
      userAgent.includes("ipad")
    ) {
      setIsIOS(true);
    }
  }, []);

  useEffect(() => {
    // Access localStorage only on the client
    const storedExpanded = localStorage.getItem("expanded") === "true";
    setExpanded(storedExpanded);
  }, []);

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
    "/assests/images/PictureOfBaanPoon/IMG_1109.jpg",
    "/assests/images/PictureOfBaanPoon/IMG_1135.jpg",
    "/assests/images/PictureOfBaanPoon/IMG_2076.JPG",
    "/assests/images/PictureOfBaanPoon/IMG_2079.JPG",
    "/assests/images/PictureOfBaanPoon/IMG_2080.JPG",
    "/assests/images/PictureOfBaanPoon/IMG_2081.JPG",
  ];

  const imageRefs = useRef<(HTMLDivElement | null)[]>(
    Array(galleryImages.length).fill(null)
  );

  const toggleExpanded = () => {
    setExpanded((prev) => {
      const newExpanded = !prev;
      localStorage.setItem("expanded", newExpanded.toString());
      return newExpanded;
    });
  };

  return (
    <>
      <main className="flex w-full flex-col pb-5 relative top-[-80px] z-0">
        {/* Replace 'path/to/your/image.jpg' with the actual path to your image */}
        <div
          className={`flex flex-col w-full bg-[url('/assests/images/หน้าแรก(1).JPG')] bg-no-repeat items-center ${
            isIOS
              ? "ios-background-fix"
              : "sticky top-0 h-[1100px] bg-scroll bg-center bg-cover"
          }`}
        >
          <h1
            className={`${poppins.className} text-[28px] sm:text-[30px] lg:text-[48px] text-[#C53232] font-light drop-shadow-lg text-center mt-[300px] animate-fade-in`}
          >
            Memory of
          </h1>
          <h1
            className={`${poppins.className} mt-[-30px] md:mt-[-40px] lg:mt-[-60px] text-[50px] sm:text-[70px] font-extrabold md:text-[90px] lg:text-[110px] xl:text-[190px] text-[#C53232] drop-shadow-lg animate-fade-in text-center`}
          >
            BAN POON
          </h1>
          {/* <button
            onClick={() => router.push("/history")}
            className="mt-[180px] text-white hover:text-black transition-colors duration-[500ms] hover:bg-white text-[16px] sm:text-[18px] md:text-[20px] p-2 md:p-4 bg-transparent border-[1px] border-white self-center text-center"
          >
            HISTORY OF BAANPOON
          </button> */}
          <button
            onClick={() => router.push("/history")}
            className={`relative animate-fade-in top-[8.5%] text-white transition-all duration-500 hover:text-black hover:bg-white text-[16px] sm:text-[18px] md:text-[20px] p-2 md:p-4 bg-transparent border-[1px] border-white self-center text-center ${
              isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            HISTORY OF BAN POON
          </button>
        </div>
        {/* <button
            onClick={() => router.push("/history")}
            className="fixed top-[75%] text-white hover:text-black transition-colors duration-[500ms] hover:bg-white text-[16px] sm:text-[18px] md:text-[20px] p-2 md:p-4 bg-transparent border-[1px] border-white self-center text-center"
          >
            HISTORY OF BAANPOON
          </button> */}
        <div className="relative bg-[#c53232] h-[10px] z-10"></div>
        <div className="px-10 md:px-20 lg:px-30 xl:px-96 py-8 !bg-[#000000] z-10">
          <section
            className={`${poppins.className} text-[#c53232] text-[40px] md:text-[70px] lg:text-[110px] font-bold`}
            id="cultural-heritage"
          >
            CULTURAL
            <p className="mt-[-30px] md:mt-[-50px] lg:mt-[-80px]">HERITAGES</p>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-[1px] border-gray-400 h-[500px] group overflow-hidden">
              <div className="h-[40%] bg-[url('/assests/images/มรดกวัฒนธรรม/วัดสวนสวรรค์(1).jpg')] bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
              <div className="w-full p-6 flex flex-col justify-between h-[60%]">
                <div>
                  <p
                    className="text-white text-center text-2xl"
                    style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
                  >
                    วัดสวนสวรรค์
                  </p>
                  <p className="text-white line-clamp-4">
                    วัดสวนสวรรค์ ถูกทิ้งร้างไปเมื่อ พ.ศ. 2463
                    ก่อนจะถูกบูรณะใหม่และรวมเข้ากับวัดคฤหบดีใน พ.ศ. 2519
                    ภายในตัววัดเหลือแค่อุโบสถกับเจดีย์ มีเสมาแบบพิเศษหักมุม
                    ผู้เชี่ยวชาญสันนิษฐานว่าหลังจากการสร้างขึ้นในสมัยอยุธยา
                    น่าจะมีการบูรณะในช่วงรัชกาลที่ 1 อุโบสถวัดสวนสวรรค์
                    เป็นอาคารก่ออิฐถือปูนทรงสูงหลังคาไม่ซ้อนชั้น
                    ซึ่งอาจสร้างขึ้นในสมัยอยุธยาตอนปลายถึงต้นรัตนโกสินทร์
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
              <div className="h-[40%] bg-[url('/assests/images/มรดกวัฒนธรรม/โรงทำขนมจีน.jpg')] bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
              <div className="w-full p-6 flex flex-col justify-between h-[60%]">
                <div>
                  <p
                    className="text-white text-center text-2xl"
                    style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
                  >
                    โรงทำขนมจีน
                  </p>
                  <p className="text-white line-clamp-4">
                    โรงทำขนมจีน
                    ก็เป็นอีกหนึ่งสิ่งที่เคยเป็นของดีประจำชุมชนบ้านปูนและเลื่องลือไปหลายชุมชนในฝั่งธนบุรี
                    โดยโรงทำขนมจีนนั้นจะอยู่ถัดออกไปจากโรงเตาอั่งโล่
                    ใกล้กับบริเวณท่าล่าง ดูแลโดยชาวจีนชื่อ ยายเนี้ยว
                    ไม่ทราบนามสกุล
                    ซึ่งโรงงานทำขนมจีนแห่งนี้ตั้งอยู่บนที่ดินของตระกูลธนะภูมิ
                    จากคำบอกเล่าของผู้อาวุโสในชุมชนเล่าว่าในอดีตจะมีเรือมารอรับขนมจีนในบริเวณนี้กันอย่าง
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
              <div className="h-[40%] bg-[url('/assests/images/มรดกวัฒนธรรม/โรงเตาอั่งโล่.jpg')] bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
              <div className="w-full p-6 flex flex-col justify-between h-[60%]">
                <div>
                  <p
                    className="text-white text-center text-2xl"
                    style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
                  >
                    โรงเตาอั้งโล่และโรงปูน
                  </p>
                  <p className="text-white line-clamp-4">
                    โรงเตาอั่งโล่ ชุมชนบ้านปูนเดิมที แบ่งเป็นท่าบนและท่าล่าง
                    โดยชุมชนบ้านปูนในปัจจุบันคือส่วนของ “ท่าบน”
                    เป็นที่อยู่อาศัยของชาวบ้านมาตั้งแต่อดีต
                    เดิมทีบริเวณนี้เป็นที่ตั้งของโรงทำเตาอั้งโล่
                    เรียงติดกันจำนวน 4 - 5 โรง
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
                  <p
                    className="text-white text-center text-2xl"
                    style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
                  >
                    โรงฝิ่น
                  </p>
                  <p className="text-white line-clamp-4">
                    โรงยาฝิ่น
                    คนในชุมชนบ้านปูนเชื้อสายจีนที่อพยพเข้ามาได้สร้างขึ้นเพื่อเป็นสถานที่ผ่อนคลายให้กับลูกจ้างในโรงสุราบางยี่ขันและผู้คนรอบข้างในบริเวณนี้
                    โดยสรรพคุณของฝิ่นนั้นจะทำให้ร่างกายของผู้เสพรู้สึกกระปรี้กระเปร่า
                    ระงับความเจ็บปวด
                    ซึ่งถือเป็นยาชั้นดีของลูกจ้างแรงงานในโรงสุราบางยี่ขัน
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
              <div className="h-[40%] bg-[url('/assests/images/มรดกวัฒนธรรม/ศาลาโรงธรรม(2).jpg')] bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
              <div className="w-full p-6 flex flex-col justify-between h-[60%]">
                <div>
                  <p
                    className="text-white text-center text-2xl"
                    style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
                  >
                    ศาลาโรงธรรม
                  </p>
                  <p className="text-white line-clamp-4">
                    ศาลาโรงธรรม เป็นศาลาใต้ถุนสูงชั้นเดียว
                    ยกพื้นสำหรับพระสงฆ์เจริญพระพุทธมนต์
                    สูงกว่าระดับพื้นปกติประมาณ 60 ซม. พอก้าวขึ้นลงได้สะดวก
                    ตรงกลางตั้งธรรมาสน์สำหรับพระสงฆ์เทศน์
                    ใต้ถุนศาลาโรงธรรมด้านที่ยกพื้นสูง แต่เดิมมีเรือเก็บเอาไว้ 1
                    ลำ จอมพลประภาส จารุเสถียร
                    ได้กล่าวไว้ในหนังสืออัตชีวประวัติของท่านว่า
                    บรรพบุรุษของท่านบอกเล่าไว้ว่า
                    เรือลำดังกล่าวใช้เป็นพาหนะหนีพม่าลงมาจากกรุงศรีอยุธยาก่อนที่กรุงเก่าจะเสียแก่พม่า
                    ในปันจุบันเรือลำนี้ชำรุดผุพังและสูญหายไปแล้ว
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
              <div className="h-[40%] bg-[url('/assests/images/มรดกวัฒนธรรม/บ้านตีมีด.jpg')] bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
              <div className="w-full p-6 flex flex-col justify-between h-[60%]">
                <div>
                  <p
                    className="text-white text-center text-2xl"
                    style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
                  >
                    บ้านตีมีด
                  </p>
                  <p className="text-white line-clamp-4">
                    บ้านตีมีด เป็นธุรกิจเล็กๆของคุณลุงไสวและครอบครัว
                    ที่ย้ายจากจังหวัดพระนครศรีอยุธนามายังชุมชนบ้านปูน บางยี่ขัน
                    เพื่อหาเงินให้เพียงพอต่อค่าครองชีพในแต่วัน
                    จึงได้นำทักษะการตีมีดที่ติดไม้ติดมือของตนมาใช้ประกอบอาชีพ
                    โดยการรับทำมีดและกรรไกรตัดผมแบบโบราณ ด้วยความคม ความประณีต
                    และความชำนาญ ทำให้ชื่อเสียง
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
              <div className="h-[40%] bg-[url('/assests/images/มรดกวัฒนธรรม/โรงสุราบางยี่ขัน.jpg')] bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
              <div className="w-full p-6 flex flex-col justify-between h-[60%]">
                <div>
                  <p
                    className="text-white text-center text-2xl"
                    style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
                  >
                    โรงสุราบางยี่ขัน
                  </p>
                  <p className="text-white line-clamp-4">
                    หลังจากการทำสงครามไทยลาว เจ้าตัสสะ
                    พระอนุชาต่างมารดาของเจ้าอนุวงศ์ ได้ตัดสินใจยอมจำนนต่อฝ่ายไทย
                    และได้รับการแต่งตั้งเป็น &quot;นายอากร&quot;
                    ผูกขาดสุราของบางกอก
                    โดยมีสมาคมนักลงทุนชาวจีนดูแลสัญญาและข้อตกลงทางธุรกิจว่าด้วยการผูกขาดของพระองค์
                    กระทั่งในที่สุดได้ก่อตั้งโรงกลั่นสุราบริเวณริมน้ำบางยี่ขัน
                    หรือบริเวณที่ตั้งเดิมของวังลาว
                    (ปัจจุบันพื้นที่นี้กลายมาเป็นสวนหลวงพระราม 8
                    และสถาบันดนตรีกัลยาณิวัฒนา)
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
              <div className="h-[40%] bg-[url('/assests/images/มรดกวัฒนธรรม/กำแพงวังเจ้าอนุวงศ์(2).jpg')] bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
              <div className="w-full p-6 flex flex-col justify-between h-[60%]">
                <div>
                  <p
                    className="text-white text-center text-2xl"
                    style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
                  >
                    กำแพงวังเจ้าอนุวงศ์
                  </p>
                  <p className="text-white line-clamp-4">
                    กำแพงวังเจ้าอนุวงศ์ หรือ วังเจ้าลาว
                    สันนิษฐานว่าซากกำแพงดังกล่าวคือ วังของเจ้าอนุวงศ์
                    หนึ่งในสามของเชื้อพระวงศ์เวียงจันทน์อันได้แก่ เจ้านันทเสน
                    เจ้าอินทวงศ์ และเจ้าอนุวงศ์
                    ซึ่งถูกนำตัวเข้ามาเมื่อครั้งกองทัพกรุงธนบุรีตีนครเวียงจันทน์เมื่อ
                    พ.ศ. 2322 แล้วโปรดเกล้าฯ
                    พระราชทานที่ดินและวังให้เป็นที่ประทับ ณ บางยี่ขัน
                    ซึ่งเป็นหลักฐานของการเข้ามาอยู่อาศัยของเจ้านายจากกรุงเวียงจันทน์
                    ประเทศลาว ในช่วงรัชกาลที่ 3
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
              <div className="h-[40%] bg-[url('/assests/images/มรดกวัฒนธรรม/ศาลเจ้าปึงเถ้ากง(1).jpg')] bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
              <div className="w-full p-6 flex flex-col justify-between h-[60%]">
                <div>
                  <p
                    className="text-white text-center text-2xl"
                    style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
                  >
                    ศาลเจ้าปึงเถ้ากง
                  </p>
                  <p className="text-white line-clamp-4">
                    ศาลเจ้าปึงเถ้ากง
                    เป็นศาลเจ้าเก่าแก่ที่อยู่คู่ชุมชนมาอย่างยาวนาน
                    ชาวบ้านให้ความเคารพนับถือ เทพประธานของศาลแห่งนี้ คือ
                    เทพปึงเถ้ากง (ปึงเถ่ากง ปูนเถ้ากง โทวตี่กง) หรือ อากง
                    ความหมายในภาษาไทยคือ ปู่
                    ตามความเชื่อโบราณเชื่อว่าแต่ละท้องที่จะมีเทพประจำถิ่น
                    โดยชาวจีนแต้จิ๋วเรียกว่า
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
            <div
              className={`${
                expanded ? "block" : "hidden"
              } border-[1px] border-gray-400 h-[500px] group overflow-hidden`}
            >
              <div className="h-[40%] bg-[url('/assests/images/มรดกวัฒนธรรม/โรงทำผักกาดดอง.jpg')] bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
              <div className="w-full p-6 flex flex-col justify-between h-[60%]">
                <div>
                  <p
                    className="text-white text-center text-2xl"
                    style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
                  >
                    โรงผักกาดดอง
                  </p>
                  <p className="text-white line-clamp-4">
                    โรงทำผักกาด
                    เป็นหนึ่งในอาชีพของชาวบ้านในชุมชนบ้านปูนที่ทำมาตั้งแต่อดีต
                    โดยขั้นตอนการทำนั้น
                    ชาวบ้านจะนำผักกาดที่ซื้ิอมาจากปากคลองตลาด ทำความสะอาด
                    เลือกคัดใบที่สวยน่ารับประทาน
                    หลังจากนั้นนำมาขยำพร้อมใส่ลงไปในโอ่งหรือปี๊ป
                    ปิดท้ายด้วยการแช่ผักกาดด้วยน้ำมะพร้าวและเกลือ
                    ก่อนจะปิดฝาหรือเอาอิฐมอญทับไว้ ใช้เวลาในการดองทั้งหมด 1
                    อาทิตย์หรือรอจนกว่า
                  </p>
                </div>
                <button
                  onClick={() => handleCulture(10)}
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
            onClick={toggleExpanded}
            className={`relative ${
              expanded ? "bottom-[-30px]" : "bottom-[100px]"
            } ${
              expanded ? "mb-40" : "mb-0"
            } left-1/2 transform -translate-x-1/2 border-[1px] border-white text-white px-4 py-2 shadow-md hover:bg-white hover:text-black transition-colors duration-500`}
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
        <div className="relative bg-white h-[10px] z-10"></div>
        <div className="w-full py-8 bg-[#000000] z-10" id="important-person">
          <p
            className={`${poppins.className} text-white text-[20px] md:text-[40px] lg:text-[50px] font-bold text-center`}
          >
            IMPORTANT PERSONS
            {/* <p className="mt-[-30px] md:mt-[-50px] lg:mt-[-80px]">PERSONS</p> */}
          </p>
        </div>
        <div className="px-10 md:px-20 lg:px-30 xl:px-70 !bg-[#000000] z-10">
          <div
            ref={elementRefs[0]}
            className={`sticky top-[-350px] lg:top-0 w-full flex flex-col-reverse lg:flex-row pt-5 pb-10 lg:py-10 
      ${isVisible[0] ? "animate-fade-in" : "opacity-0"}`}
          >
            <div className="w-full lg:w-1/3 flex flex-row">
              <div className="w-full lg:w-1/2 h-[200px] lg:h-[600px] bg-[url('/assests/images/ตระกูลธนะภูมิ.jpg')] bg-center bg-no-repeat bg-cover" />
              <div className="w-full lg:w-1/2 h-[200px] lg:h-[600px] bg-[url('/assests/images/ตระกูลจารุเสถียร.jpg')] bg-center bg-no-repeat bg-cover" />
            </div>
            <div className="w-full lg:w-2/3 flex-col">
              <p
                className={`leading-none ml-0 lg:ml-7 text-[#c53232] text-[40px] md:text-[60px] lg:text-[80px] font-bold`}
                style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
              >
                2 ตระกูลผู้บุกเบิก
                <p className="leading-none">(จารุเสถียร และ ธนะภูมิ)</p>
              </p>
              <p
                className={`mt-4 ml-0 lg:ml-7 text-white text-[20px] md:text-[25px]`}
              >
                ตระกูลธนะภูมิ ต้นตระกูลธนะภูมิ คือ ขุนสุขุมนาฏนิตยภักดี (ทิม
                ธนะภูมิ) ปลัดกรมในสมเด็จพระนางเจ้าสุขุมาลมารศรี
                พระราชเทวีในรัชกาลที่ 5
                โดยบรรพบุรุษของสกุลธนะภูมินี้เป็นผู้ริเริ่มการทำปูนขึ้นที่บ้านปูน
                บางยี่ขัน และถือว่าเป็นพระญาติทางฝ่ายมารดาของเจ้าคุณจอมมารดาสำลี
                พระสนมเอกในรัชกาลที่ 4
                เจ้าจุลจอมมารดาสำลีเป็นธิดาของสมเด็จเจ้าพระยาบรมมหาพิชัยญาติ
                (ทัด บุนนาค)
                และเป็นเจ้าจอมมารดาในสมเด็จพระปิตุจฉาเจ้าสุขุมาลมารศรี
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
          <div
            className={`sticky top-[-300px] sm:top-[-290px] lg:top-0 w-full py-5 bg-black`}
          >
            <div
              ref={elementRefs[1]}
              className={`${
                isVisible[1] ? "animate-fade-in" : "opacity-0"
              } flex flex-col lg:flex-row`}
            >
              <div className={`w-full lg:w-2/3 flex-col`}>
                <p
                  className={`leading-none ml-0 lg:ml-7 text-[#c53232] text-[40px] md:text-[60px] lg:text-[80px] font-bold`}
                  style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
                >
                  อาภรณ์ นพคุณ
                </p>
                <p
                  className={`mr-0 lg:mr-4 mt-4 ml-0 lg:ml-7 text-white text-[20px] md:text-[25px]`}
                >
                  อาภรณ์ นพคุณ ชาวบ้านชุมชนบ้านปูนในวัย 88 ปี
                  ที่เกิดและเติบโตอยู่ในชุมชนบ้านปูนมาตลอดทั้งชีวิต
                  รับรู้และเห็นการเปลี่ยนแปลงต่างๆมากมาย
                  ปัจจุบันประกอบอาชีพค้าขาย
                  เปิดร้านขายของชำให้กับชาวบ้านและผู้ที่แวะเวียนเข้ามาเยี่ยมชมชุมชนบ้านปูน
                  เหตุผลที่ทำให้อาภรณ์ นพคุณ
                  ยังคงอยู่ในชุมชนบ้านปูนต่อมาเรื่อยๆจนถึงปัจจุบัน
                  ไม่ได้ย้ายออกไปเหมือนกับคนอื่นๆ ก็คือค่าเช่าบ้านมีราคาถูก
                  เป็นหนึ่งในส่วนที่ตระกูลธนะภูมิดูแลและเป็นเจ้าของ
                  ในอดีตค่าเช่าบ้านอยู่ในราคาเดือนละประมาณ 300 - 400 บาท
                  บางบ้านก็ละเว้นการเก็บค่าเช่า
                  ช่วยทำให้คนในชุมชนมีที่อยู่อาศัยและสามารถดำรงอยู่มาถึงปัจจุบัน
                  ซึ่งอาภรณ์ นพคุณ ถือเป็นผู้อาวุโสที่สำคัญของชุมชน
                  เพราะเป็นบุคคลที่รับรู้เรื่องราวของชุมชนบ้านปูนเยอะที่สุดในตอนนี้
                  ในวัยที่อายุเยอะ วันเวลาก็ไม่แน่นอน
                  จุดประสงค์ในการทำเว็บไซต์นี้
                  ก็เพื่อเป็นการเก็บความทรงจำส่วนหนึ่งของอาภรณ์
                  นพคุณเกี่ยวกับชุมชนบ้านปูนไว้ให้ลูกหลานได้รับรู้สืบต่อไป
                </p>
              </div>
              <div
                className={`w-full lg:w-1/3 aspect-[1/1] bg-center bg-contain bg-no-repeat`}
                style={{
                  backgroundImage: `url('/assests/images/อาภรณ์_นพคุณ.jpg')`,
                }}
              />
            </div>
          </div>
          <div
            className={`sticky top-0 w-full flex flex-col-reverse lg:flex-row pt-5 pb-24 bg-black`}
          >
            <div
              ref={elementRefs[2]}
              className={`${
                isVisible[2] ? "animate-fade-in" : "opacity-0"
              } flex flex-col-reverse lg:flex-row`}
            >
              <div
                className={`w-full lg:w-1/3 aspect-[1/1] bg-center bg-contain bg-no-repeat 
              `}
                style={{
                  backgroundImage: `url('/assests/images/ศรีเชาว์_ทองโปร่ง.jpg')`,
                }}
              />
              <div className={`w-full lg:w-2/3 flex-col `}>
                <p
                  className={`leading-none ml-0 lg:ml-7 text-[#c53232] text-[40px] md:text-[60px] lg:text-[80px] font-bold`}
                  style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
                >
                  ศรีเชาว์ ทองโปร่ง
                </p>
                <p
                  className={`mt-4 ml-0 lg:ml-7 text-white text-[20px] md:text-[25px] `}
                >
                  นายศรีเชาวน์ ทองโปร่ง อายุ 67 ปี
                  ปัจจุบันดำรงตำแหน่งคณะกรรมการและประธานชุมชนบ้านปูน เขตบางพลัด
                  จังหวัดกรุงเทพมหานคร เกิดและเติบโตในชุมชนบ้านปูน
                  เห็นการเปลี่ยนแปลงภายในชุมชนมาตลอดทั้งชีวิต
                </p>
                <p
                  className={`mt-4 ml-0 lg:ml-7 text-white text-[20px] md:text-[25px] `}
                >
                  ประวัติการศึกษา เคยศึกษาที่โรงเรียนศรีวิทยาลัย
                  จบการศึกษาชั้นประถมศึกษาปีที่ 4
                  ต่อมาได้มาศึกษาต่อที่โรงเรียนนาฎศิลป์จนจบชั้นสูง
                  ก่อนจะเข้าเรียนปริญญาตรีที่เทคโนโลยีและอาชีวะศึกษา
                  จบปีการศึกษาปี พ.ศ. 2524
                  นายศรีเชาวน์เคยประกอบอาชีพครูสอนพิเศษนาฏศิลป์ที่โรงเรียนต่างๆ
                  เช่นโรงเรียนอัสสัมชัน วิทยาลัยครูบางเขน กรมส่งเสริมการเกษตร
                  ต่อมามีโอกาสได้เป็นตัวแทนเดินทางไปพร้อมคณะเพื่อเผยแพร่วัฒนธรรมศิลปะการแสดงไทย
                  อย่างเช่น โขน ในต่างประเทศ อาทิเช่น อังกฤษ อเมริกา ญี่ปุ่น
                  ต่อมาในปี พ.ศ. 2535
                  นายศรีเชาน์ได้เดินทางกลับมาอยู่ที่ชุมชนบ้านปูนและได้เป็นส่วนหนึ่งของการเป็นกรรมการชุมชน
                  ด้วยการทำความดีของนายศรีเชาวน์ทำให้ชาวบ้านเกิดความไว้วางใจ
                  จึงได้รับเลือกเป็นประธานชุมชนในปี พ.ศ.2556 และจะหมดวาระในปี
                  พ.ศ.2568
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="!bg-[#c53232] z-10 justify-items-center text-center items-center py-52">
          <div
            ref={elementRefs[3]}
            className={`${isVisible[3] ? "animate-fade-in" : "opacity-0"}`}
          >
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
        </div>
        <div className="px-10 md:px-20 lg:px-30 xl:px-70 bg-[#000000] z-10 py-16">
          <section
            className={`${poppins.className} text-center text-white text-[20px] md:text-[40px] lg:text-[50px] font-bold`}
            id="gallery"
          >
            THE PICTURE OF BAN POON
            {/* <p className="mt-[-30px] md:mt-[-50px] lg:mt-[-80px]">PERSONS</p> */}
          </section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (imageRefs.current) {
                    imageRefs.current[index] = el;
                  }
                }}
                style={{
                  backgroundImage: `url('${img}')`,
                }}
                className="h-[400px] lg:h-[600px] xl:h-[800px] bg-cover bg-no-repeat bg-center opacity-0 translate-y-10 transition-all duration-1000 ease-out"
              />
            ))}
          </div>
        </div>
      </main>
      {/* <div className="flex h-[200px] w-full bg-blue-400 z-40"/> */}
      <Footer />
    </>
  );
}
