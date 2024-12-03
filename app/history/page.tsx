"use client"; // Mark this as a client component
import Link from "next/link";
import { useRouter } from "next/navigation";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import SouthWestIcon from "@mui/icons-material/SouthWest";
import Footer from "../components/navigation/footer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  useLoadScript,
  GoogleMap,
  Polygon,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Skeleton from "@mui/material/Skeleton";
import path from "path";

export default function History() {
  const router = useRouter();
  const handleNavigation = (id: any) => {
    // Navigate to the dynamic route with the given id
    router.push(`/important-people/${id}`);
  };
  const [center, setCenter] = useState({
    lat: 13.773376962641311,
    lng: 100.49313327216268,
  });
  const markerPosition = { lat: 13.773376962641311, lng: 100.49313327216268 };

  const [images, setImages] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [zoomLevel, setZoomLevel] = useState(15); // Initialize zoom level with a default value
  const imageCareerPresent = [
    {
      image: "/assests/images/อาชีพปัจจุบัน.jpg",
      alt: "Career present 1",
    },
    {
      image: "/assests/images/อาชีพปัจจุบัน2.jpg",
      alt: "Career present 2",
    },
    {
      image: "/assests/images/อาชีพปัจจุบัน3.jpg",
      alt: "Career present 3",
    },
    {
      image: "/assests/images/อาชีพปัจจุบัน4.jpg",
      alt: "Career present 4",
    },
  ];
  const [infoOpen, setInfoOpen] = useState(false);

  const handleMarkerClick = () => {
    if (infoOpen === true) {
      setInfoOpen(false);
    } else {
      setInfoOpen(true); // Open InfoWindow when marker is clicked
    }
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDoC9xVgrQZsXn6dhbB9tom-vE4JatuWlk", // Replace with your Google Maps API Key
  });

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setIsAnimating(true);
      setImages((prev) => (prev + 1) % imageCareerPresent.length);
    }, 5000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setZoomLevel(width < 700 ? 14 : 15);
    };

    handleResize(); // Call once on mount to set initial zoom level
    window.addEventListener("resize", handleResize); // Adjust zoom level on window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener on unmount
    };
  }, []);

  useEffect(() => {
    startInterval();
    return () => stopInterval(); // Clean up on unmount
  }, [imageCareerPresent]);

  const handleDotClick = (index: number) => {
    setIsAnimating(true);
    stopInterval(); // Stop the current interval
    setImages(index); // Update to the selected slide
    startInterval(); // Restart the interval
  };

  //const center = { lat: 13.773376962641311, lng: 100.49313327216268 };

  // Define the polygon path (bounding box)
  const borderPath = [
    { lat: 13.762963273127724, lng: 100.49026035597758 },
    { lat: 13.77351877457299, lng: 100.48205279420299 },
    { lat: 13.780550425862831, lng: 100.48809695026047 },
    { lat: 13.784618322316163, lng: 100.49450103566177 },
    { lat: 13.781717133748344, lng: 100.50097559580446 }, // Closing the border
    { lat: 13.781717133748344, lng: 100.50097559580446 }, // Closing the border
    { lat: 13.76670081749138, lng: 100.4944036348416 }, // Closing the border
  ];
  const outerPath = [
    { lat: 13.762963273127724, lng: 100.49026035597758 },
    { lat: 13.77351877457299, lng: 100.48205279420299 },
    { lat: 13.780550425862831, lng: 100.48809695026047 },
    { lat: 13.784618322316163, lng: 100.49450103566177 },
    { lat: 13.781717133748344, lng: 100.50097559580446 }, // Closing the border
    { lat: 13.781717133748344, lng: 100.50097559580446 }, // Closing the border
    { lat: 13.76670081749138, lng: 100.4944036348416 }, // Closing the border
  ];
  const polylineOptions = {
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
    fillColor: "transparent",
    icons: [
      {
        icon: {
          path: "M 0,-1 0,1",
          strokeOpacity: 1,
          scale: 2,
        },
        offset: "0",
        repeat: "10px", // Space between dots
      },
    ],
  };

  return (
    <main className="flex flex-col">
      <div className="w-full absolute h-[80px] bg-[#c53232] top-0 animate-fade-in" />
      <div className="flex flex-col lg:flex-row relative w-full bg-[#c53232] px-10 lg:px-40 py-20 animate-fade-in z-10">
        <div className="w-full lg:w-1/3 items-center self-start mt-10 pr-5 animate-fade-in flex flex-row lg:flex-col justify-between">
          <p
            className="text-white text-4xl lg:text-[96px] font-bold leading-[1.2] w-1/3 lg:w-full drop-shadow-2xl"
            style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
          >
            ประวัติ
            <br />
            ชุมชน
            <br />
            บ้านปูน
          </p>
          <div className="container bg-[url('/assests/images/ประวัติชุมชน3FLIP.PNG')] max-w-[800px] aspect-[800/800] mt-10 lg:mt-32 bg-cover bg-center bg-no-repeat w-1/3 flex lg:hidden"></div>
          <div className="container bg-[url('/assests/images/ประวัติชุมชน3.PNG')] h-[200px] lg:h-[400px] mt-10 lg:mt-32 bg-cover bg-center bg-no-repeat hidden lg:flex"></div>
        </div>
        <div className="container text-white mt-12 animate-fade-in self-center  lg:text-start">
          <p>
            ชุมชนบ้านปูนตั้งอยู่บริเวณสะพานพระราม 8 ฝั่งธนบุรี เขตบางพลัด
            กรุงเทพมหานคร จากคำบอกเล่าของผู้ใหญ่ในชุมชนเล่าว่า
            ผู้คนได้ย้ายเข้ามาพร้อมๆ กับการอพยพของกลุ่มคนหลายกลุ่มจากกรุงศรีอยุธยา
            โดยชุมชนบ้านปูนในอดีตประกอบไปด้วยตระกูลเก่าแก่ 5 ตระกูล ได้แก่
            ตระกูลธนะภูมิ ตระกูลดาระสวัสดิ์ ตระกูลศศิบุตร ตระกูลติณณรัตน์
            และตระกูลรามสมภพ
            ซึ่งปัจจุบันก็ยังคงมีทายาทของตระกูลเหล่านี้อาศัยอยู่ในชุมชนบ้านปูน
            และมีบางส่วนได้ย้ายออกจากชุมชน ตระกูลเหล่านี้
            ถือเป็นตระกูลใหญ่ที่สมาชิกในตระกูลมีศักดินา
            ทำให้มีฐานะทางเศรษฐกิจที่ดี
          </p>
          <p className="mt-10">
            ชื่อ บ้านปูน หมายถึงหมู่บ้านที่ประกอบอาชีพการทำปูนขาย
            ซึ่งปูนในที่นี้หมายถึงปูนที่ไว้ใช้ตำหมากพลู
            เมื่อก่อนชาวบ้านยึดถืออาชีพทำปูนขาย โดยมีเตาปูนอยู่ในชุมชนทั้งหมด 4
            - 5 เตา สูงประมาณ 4 เมตร
            แต่ปัจจุบันไม่หลงเหลือหลักฐานของเตาสำหรับทำปูนแล้ว
            ในสมัยก่อนบริเวณนี้เคยเป็นที่ดินของเจ้าอนุวงค์แห่งเวียงจันทน์
            หลักฐานที่บ่งบอกว่าที่แห่งนี้เป็นวังเก่า
            คือซากกำแพงวังที่ตั้งอยู่ทางทิศใต้ของชุมชน
            ในปัจจุบันยังคงหลงเหลือให้เห็นเป็นหลักฐาน
          </p>
          <p className="mt-10">
            หลักฐานอีกอย่างหนึ่งที่แสดงถึงความเก่าแก่ของชุมชนก็คือ
            เรือนไม้ทรงไทย เป็นสมบัติของตระกูลธนภูมิ สร้างขึ้นในสมัยใดไม่ปรากฏ
            แต่เป็นเรือนไม้ที่ภายในมีโบราณวัตถุ เช่น
            กระจกในสมัยรัชกาลที่ 5 เป็นต้น นอกจากนั้นแล้ว
            ในชุมชนยังมีโบราณสถานอีกหนึ่งที่คือ ศาลาโรงธรรม ตั้งอยู่กลางชุมชน
            ถูกเล่าว่าสร้างขึ้นตั้งแต่สมัยรัชกาลที่ 2 ด้วยไม้สักทองทั้งหลัง
            ภายในประดิษฐานพระพุทธรูป 3 องค์ จากเดิมที่ประดิษฐานอยู่ 9 องค์
            แต่ภายหลังถูกขโมยออกไป
            ศาลาโรงธรรมถูกสร้างขึ้นโดยตระกูลดาระสวัสดิ์และตระกูลธนะภูมิ
            เพื่อให้คนในชุมชนได้มีสถานที่ในการประกอบกิจการงานบุญ เช่น
            การถวายภัตตาหาร การฟังเทศน์ฟังธรรม เป็นต้น
            ปัจจุบันศาลาโรงธรรมได้จดทะเบียนขึ้นเป็นโบราณสถานของกรมศิลปากรแล้ว
            ซึ่งบริเวณเดียวกันก็มีศาลเจ้าปึงเถ้ากง ศูนย์รวมใจของคนเชื้อสายจีน
            ภายหลังคนเชื้อสายจีนได้เข้ามาในชุมชนและประกอบอาชีพทำเตาอั่งโล่ขาย
            จากการสัมภาษณ์ เคยมีโรงทำเตาอั่งโล่ทั้งหมด 4 - 5 โรง
            อีกทั้งคนในชุมชนก็ยังประกอบอาชีพอื่นๆ
            บางส่วนยังมีหลักฐานหลงเหลืออยู่และบางส่วนถูกรื้อถอนไปแล้ว ได้แก่
            บ้านทำบายศรี โรงขนมจีน โรงผักกาดดอง โรงยาฝิ่น โรงหลอมตะกั่ว
            และโรงสุราบางยี่ขัน เป็นต้น
            ซึ่งโรงสุราบางยี่ขันนี้เป็นสถานที่ที่ปรากฏอยู่ในนิราศภูเขาทองของสุนทรภู่
            เป็นหลักฐานในการยืนยันการมีอยู่ของโรงสุราบางยี่ขันในชุมชนบ้านปูน
            ในความหนึ่งที่ว่า
          </p>
          <div className="container mt-[26px] flex flex-col items-center">
            <div className="hidden md:flex flex-row leading-loose">
              <p>
                ถึงโรงเหล้าเตากลั่นควันโขมง
                <br /> โอ้บาปกรรมน้ำนรกเจียวอกเรา
                <br />
                ทำบุญบวชกรวดน้ำขอสำเร็จ
                <br /> ถึงสุราพารอดไม่วอดวาย
                <br />
                ไม่เมาเหล้าแล้วแต่เรายังเมารัก
                <br /> ถึงเมาเหล้าเช้าสายก็หายไป
              </p>
              <p className="text-end">
                มีคันโพงผูกสายไว้ปลายเสา
                <br />
                ให้มัวเมาเหมือนหนึ่งบ้าเป็นน่าอาย
                <br />
                สรรเพชญโพธิญาณประมาณหมาย
                <br />
                ไม่ใกล้กรายแกล้งเมินก็เกินไป
                <br />
                สุดจะหักห้ามจิตคิดไฉน
                <br />
                แต่เมาใจนี้ประจำทุกค่ำคืน
              </p>
            </div>
            <div className="flex md:hidden flex-row leading-loose text-center">
              <p>
                ถึงโรงเหล้าเตากลั่นควันโขมง
                <br />
                มีคันโพงผูกสายไว้ปลายเสา
                <br />
                โอ้บาปกรรมน้ำนรกเจียวอกเรา
                <br />
                ให้มัวเมาเหมือนหนึ่งบ้าเป็นน่าอาย
                <br />
                ทำบุญบวชกรวดน้ำขอสำเร็จ
                <br />
                สรรเพชญโพธิญาณประมาณหมาย
                <br />
                ถึงสุราพารอดไม่วอดวาย
                <br />
                ไม่ใกล้กรายแกล้งเมินก็เกินไป
                <br />
                ไม่เมาเหล้าแล้วแต่เรายังเมารัก
                <br />
                สุดจะหักห้ามจิตคิดไฉน
                <br />
                ถึงเมาเหล้าเช้าสายก็หายไป
                <br />
                แต่เมาใจนี้ประจำทุกค่ำคืน
              </p>
              {/* <p className="text-end">
                มีคันโพงผูกสายไว้ปลายเสา
                <br />
                ให้มัวเมาเหมือนหนึ่งบ้าเป็นน่าอาย
                <br />
                สรรเพชญโพธิญาณประมาณหมาย
                <br />
                ไม่ใกล้กรายแกล้งเมินก็เกินไป
                <br />
                สุดจะหักห้ามจิตคิดไฉน
                <br />
                แต่เมาใจนี้ประจำทุกค่ำคืน
              </p> */}
            </div>
            <p className="mt-10">
              ชุมชนบ้านปูนต้องเผชิญกับเหตุการณ์สำคัญในประวัติศาสตร์มากมาย
              ทั้งสงครามโลกครั้งที่ 2
              บริเวณบ้านปูนเกือบจะถูกทหารฝ่ายสัมพันธมิตรทิ้งระเบิดใส่
              รวมถึงการเผชิญกับอุทกภัยครั้งใหญ่ของประเทศไทยถึง 2 ครั้ง ในปี พ.ศ.
              2538 และปี พ.ศ. 2554
              และการต่อสู้เพื่อเรียกร้องสิทธิในที่อยู่อาศัยของตนเมื่อมีโครงการสร้างสะพานพระราม
              8 ในปี พ.ศ. 2538
            </p>
            <p className="mt-10">
              ชุมชนบ้านปูนก็เหมือนกับชุมชนอื่นๆในกรุงเทพมหานครที่มีการอพยพเข้ามาของผู้คนจากต่างถิ่นที่เข้าหางานมาทำในเมืองหลวง
              ในวันนี้จึงมีผู้คนมากหน้าหลายตาจากหลากหลายที่เข้ามาอยู่อาศัย
              แต่ก็ยังคงมีชาวบ้านอีกกลุ่มหนึ่งซึ่งอาศัยอยู่ในบ้านปูนมาแต่เดิม
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full items-center lg:items-stretch bg-[#c53232] px-10 lg:px-40 pb-5 justify-center">
        <Image
          src="/assests/images/ประวัติชุมชน.jpg"
          alt="Community History 1"
          width={768}
          height={600}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="mr-0 lg:mr-5 mb-5 lg:mb-0 shadow-2xl shadow-black"
        />
        <Image
          src="/assests/images/ประวัติชุมชน2.JPG"
          alt="Community History 2"
          width={768}
          height={600}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="shadow-2xl shadow-black"
        />
      </div>

      {/* <div className=" px-10 lg:px-40 pb-40 justify-center bg-[#c53232]">
        <video width="320" height="240" controls preload="auto" playsInline>
          <source src="/assests/videos/อนิเมชั่นบ้านปูน.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <div className="px-10 lg:px-40 pb-14 md:pb-40 bg-[#c53232] justify-items-center">
        <video
          width="0"
          controls
          playsInline
          preload="metadata"
          poster="/assests/images/VideoPreview.png"
          className="shadow-2xl shadow-black w-[768px] lg:w-[1300px]"
        >
          <source
            src="/assests/videos/บ้านปูนFIXED2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="flex flex-col w-full px-10 lg:px-40 py-10">
        <p
          className="text-white text-2xl lg:text-6xl font-bold leading-[1.2] text-end"
          style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
        >
          อาชีพ
          <br />
          คนใน
          <br />
          ชุมชน
        </p>
        <p
          className="text-white text-4xl lg:text-8xl font-bold leading-[1.2] mt-10 text-center lg:text-start"
          style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
        >
          <SouthEastIcon fontSize="inherit" className="mr-5" />
          อาชีพในอดีต
        </p>
        <div className="container flex flex-col self-center">
          <div className="flex flex-col w-full">
            <p className="text-white mt-5 lg:mt-0">
              1. กลุ่มคนไทยที่เข้ามาอยู่ในชุมชนบ้านปูน บางยี่ขัน
              เป็นกลุ่มที่เข้ามาอยู่ในภายหลังจากการก่อตั้งชุมชนบ้านปูน
              บางกลุ่มได้รวมกับกลุ่มเดิม ในฐานะเครือญาติ
              หรือมีความสัมพันธ์ทางครอบครัว และเพื่อนฝูง
              บางกลุ่มอยู่แบบอิสระเพื่อประกอบอาชีพของตน เช่น ค้าขาย ทำราชการ
              และลูกจ้าง เป็นต้น
            </p>
            <p className="text-white mt-5">
              2. กลุ่มคนจีน อาจแยกได้เป็น 2 กลุ่ม คือ
              <br /> 1. กลุ่มแรก
              ส่วนใหญ่จะเข้ามาอยู่พร้อมๆกับการตั้งโรงงานสุราบางยี่ขัน
              ในต้นรัชกาลที่ 2 โดยคนจีนกลุ่มแรกนี้
              มีอาชีพเป็นคนงานในโรงงานต้มกลั่นสุรา
              เป็นหัวหน้าควบคุมและอยู่ภายใต้บังคับบัญชาของนายอากรที่รับผูกขาดการทำและจำหน่ายสุราพร้อมเสียค่าอากรสุราให้รัฐบาล
              ต่อมาภายหลัง เมื่อเกิดการเปลี่ยนแปลงการปกครอง พ.ศ. 2475
              รัฐบาลได้ยกเลิกการผูกขาดต้มกลั่นและจำหน่ายสุรา
              โดยให้กรมสรรพสามิตเข้ามาควบคุม
              แต่คนจีนที่เป็นหัวหน้าหรือนายอากรที่ผูกขาดเรื่องสุราก็ยังปฏิบัติงานอยู่ต่อไป
              โดยแปรสภาพเป็นข้าราชการในสังกัดกรมสรรพสามิต กระทรวงการคลัง
              และหัวหน้าคนจีนคนสุดท้ายมีบรรดาศักดิ์เป็น หลวงสิทธิสุโรปกรณ์
              โดยมีชื่อจีนว่า หลงจี้บั๊ก
              <br />
              <br /> 2. กลุ่มหลัง บางคนก็เป็นลูกหลานของคนจีนกลุ่มแรก
              ดังนั้นจึงมักจะทำงานในโรงงานสุราสืบทอดจากบรรพบุรุษของตน
              บางคนก็แยกไปประกอบอาชีพอิสระ เช่น ค้าขาย รับจ้างทั่วไป เป็นต้น
              ในกลุ่มหลังที่มีความใกล้ชิดกับคนกลุ่มแรก
              จะมีอาชีพควบคู่กับการทำโรงงานสุรา
              คือการจัดตั้งโรงงานฝิ่นสำหรับบริการคนงานโรงงานสุราและคนอื่นๆ
              เป็นหนึ่งในอาชีพสำคัญของคนจีนในชุมชนบ้านปูนเช่นกัน
            </p>
          </div>
          <div className="flex flex-col lg:flex-row w-full mt-5">
            <Image
              src="/assests/images/อาชีพในอดีต.PNG"
              alt="Career in the past 1"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full lg:w-1/3 h-[400px] object-contain"
            />
            <Image
              src="/assests/images/อาชีพในอดีต2.JPG"
              alt="Career in the past 2"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full lg:w-1/3 h-[400px] object-contain"
            />
            <Image
              src="/assests/images/อาชีพในอดีต3.PNG"
              alt="Career in the past 3"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full lg:w-1/3 h-[400px] object-contain"
            />
          </div>
          <p className="text-center text-white mt-2">
            (ภาพ : ชุมทางหนังไทย, 2565,
            https://youtu.be/8Hij7BQXLkU?si=5yvPDloSq67SHaPT)
          </p>
        </div>
        <p
          className="text-white text-4xl lg:text-8xl font-bold leading-[1.2] mt-20 text-center lg:text-end"
          style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
        >
          อาชีพในปัจจุบัน
          <SouthWestIcon fontSize="inherit" className="ml-5" />
        </p>
        <div className="container flex flex-col self-center">
          <div className="flex flex-col w-full ml-0 lg:ml-5 mt-5 lg:mt-0">
            <p className="text-white">
              คนในชุมชนบ้านปูนต้องมีการปรับตัวหลายๆ ด้านจึงทำให้ในปัจจุบันคนในชุมชนประกอบอาชีพที่หลากหลายมากขึ้น
              ทั้งพนักงานบริษัท หรือออกไปทำงานด้านนอกเป็นส่วนใหญ่
              แต่บางส่วนยังมีอาชีพค้าขาย ร้านอาหาร ร้านขายของชำ
              และร้านทำบายศรีอยู่บ้างในชุมชน
            </p>
          </div>
          <div className="hidden lg:flex flex-row mt-5">
            {imageCareerPresent.map((images, index) => (
              <Image
                key={index}
                src={images.image}
                alt={images.alt}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full lg:w-1/4 h-[400px]"
              />
            ))}
          </div>

          <div className="block lg:hidden">
            <Image
              src={imageCareerPresent[images].image}
              alt={imageCareerPresent[images].alt}
              width="0"
              height="0"
              sizes="100vw"
              className={`w-full lg:w-1/3 h-[400px] ${
                isAnimating ? "animate-fade-in" : ""
              }`}
              onAnimationEnd={() => setIsAnimating(false)}
            />
            <div className="flex flex-row justify-center mt-5 space-x-2">
              {imageCareerPresent.map((_, index) => (
                <div
                  key={index}
                  className={`w-5 h-1 rounded-xl ${
                    images === index ? "bg-white" : "bg-gray-400"
                  }`}
                  onClick={() => handleDotClick(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-10 lg:px-40 py-10">
        <p
          className="text-white text-2xl lg:text-6xl font-bold leading-[1.2] text-center"
          style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
        >
          แผนที่ชุมชน
        </p>
        <p className="text-white mt-10 text-start">
          อาณาเขตของชุมชนบ้านปูน บางยี่ขัน อาจกำหนดโดยประมาณได้ดังนี้
          <br /> <span className="text-[#c53232] font-bold">ทิศเหนือ</span>{" "}
          ตามแนวคลองวัดบวรมงคล (วัดลิงขบ) ปัจจุบันถูกถมเป็นถนน
          <br /> <span className="text-[#c53232] font-bold">
            ทิศตะวันออก
          </span>{" "}
          จากจุดเหนือสุดของเขตทิศเหนือ ไปตามแม่น้ำเจ้าพระยาจนถึงสุดเขต
          หรือแนวคลองบางยี่ขัน
          <br /> <span className="text-[#c53232] font-bold">ทิศใต้</span>{" "}
          ตามแนวคลองบางยี่ขัน ขนานไปตลอดทางผ่านวัดดาวดึงส์ วัดบางยี่ขัน
          <br /> <span className="text-[#c53232] font-bold">
            ทิศตะวันตก
          </span>{" "}
          นับจากจุดทิศใต้ คือ คลองบางยี่ขัน ผ่านแนวถนนจรัลสนิทวงศ์ไปจน
          จดแนวคลองวัดบวรมงคล (ถนนเข้าวัดบวรมงคล)
        </p>
        {!isLoaded ? (
          <Skeleton variant="rectangular" width={210} height={118} />
        ) : (
          <GoogleMap
            mapContainerClassName="h-[350px] lg:h-[700px] w-full mt-10"
            center={center} // Default center (San Francisco)
            zoom={zoomLevel} // Default zoom level
          >
            <Polygon
              paths={[outerPath, borderPath]}
              options={polylineOptions}
            />
            <Marker position={markerPosition} onClick={handleMarkerClick}>
              {infoOpen && (
                <InfoWindow onCloseClick={handleMarkerClick}>
                  <div className="w-full min-w-[200px]">
                    <h1 className="absolute top-[14%] font-bold text-[14px]">
                      Bang Yi Khan
                    </h1>
                    <p>
                      Bang Phlat District
                      <br />
                      Bangkok 10700
                    </p>
                    <a
                      href="https://www.google.com/maps/place/%E0%B9%81%E0%B8%82%E0%B8%A7%E0%B8%87%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%A2%E0%B8%B5%E0%B9%88%E0%B8%82%E0%B8%B1%E0%B8%99+%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%94+%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3+10700/@13.7732934,100.4819323,15z/data=!3m1!4b1!4m6!3m5!1s0x30e2997a4c02488f:0x40100b25de28dc0!8m2!3d13.7734174!4d100.4930564!16s%2Fg%2F1tmmht23?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-700"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          </GoogleMap>
        )}
        {/* <div className="container bg-[url('/assests/images/MockMap.png')] h-[350px] lg:h-[700px] bg-cover bg-center mt-10 " /> */}
      </div>
      <div className="flex flex-col w-full px-0 lg:px-40 py-10">
        <p
          className="text-white text-2xl lg:text-6xl font-bold leading-[1.2] text-center"
          style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
        >
          แผนที่วัฒนธรรม
        </p>
        <div className="bg-[url('/assests/images/แผนที่วัฒนธรรม.JPG')] h-[200px] lg:h-[700px] bg-no-repeat bg-contain bg-center mt-5 " />
        <p className="text-white mt-5 text-center">
          (แผนที่แสดงตำแหน่งมรดกวัฒนธรรมที่ยังคงอยู่และมรดกวัฒนธรรมที่เลือนหายของชุมชนบ้านปูน)
        </p>
        <div className="flex flex-col sm:flex-row px-10">
          <div className="flex flex-col w-full sm:w-1/2 border-r-[0px] sm:border-r-[1px] border-b-[1px] sm:border-b-[0px] mr-0 sm:mr-3 pb-3 sm:pb-0">
            <p className="text-white mt-5 text-start">
              มรดกวัฒนธรรมที่เลือนหาย คือ มรดกวัฒนธรรมของชุมชน
              บ้านปูนที่ไม่ปรากฏให้เห็นเป็นหลักฐานอยู่ในปัจจุบัน
              <br /> คงไว้เพียง จากคำบอกเล่าและบันทึกต่างๆ
            </p>
            <p className="text-white mt-0 sm:mt-5 text-start ">
              1.บ้านทำผักกาดดอง (เลือนหาย)
              <br /> 2.เตาทำปูน (เลือนหาย)
              <br /> 3.โรงทำเตาอั่งโล่ (เลือนหาย)
              <br /> 4.โรงทำขนมจีน (เลือนหาย)
            </p>
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <p className="text-white mt-5 text-start">
              มรดกวัฒนธรรมที่ยังคงอยู่ คือ มรดกวัฒนธรรมของชุมชน
              บ้านปูนที่ยังปรากฏให้เห็นเป็นหลักฐานอยู่ในปัจจุบัน
            </p>
            <p className="text-white mt-0 sm:mt-[18px] text-start">
              <br className="hidden sm:block" />
              1.กำแพงเก่า (คงอยู่)
              <br /> 2.กลุ่มเรือนเก่า (คงอยู่)
              <br /> 3.ศาลาโรงธรรม (คงอยู่)
              <br /> 4.ศาลเจ้าปึงเก้ากง (คงอยู่)
              <br /> 5.วัดสวนสวรรค์ (คงอยู่)
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
