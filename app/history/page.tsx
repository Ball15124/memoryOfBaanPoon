"use client"; // Mark this as a client component
import Link from "next/link";
import { useRouter } from "next/navigation";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import SouthWestIcon from "@mui/icons-material/SouthWest";
import Footer from "../components/navigation/footer";

export default function History() {
  const router = useRouter();
  const handleNavigation = (id: any) => {
    // Navigate to the dynamic route with the given id
    router.push(`/important-people/${id}`);
  };
  return (
    <main className="flex flex-col">
      <div className="flex flex-col lg:flex-row relative w-full bg-[#c53232] px-10 lg:px-40 py-20 animate-fade-in z-10">
        <div className="w-full lg:w-1/3 items-center self-start mt-10 pr-5 animate-fade-in flex flex-row lg:flex-col justify-between">
          <p
            className="text-white text-4xl lg:text-[96px] font-bold leading-[1.2] w-1/3 lg:w-full"
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
        <div className="container text-white mt-12 animate-fade-in text-center lg:text-start">
          <p>
            ชุมชนบ้านปูนตั้งอยู่บริเวณสะพานพระราม 8 ฝั่งธนบุรี เขตบางพลัด
            กรุงเทพมหานคร จากปากคำบอกเล่าของผู้ใหญ่ในชุมชนเล่าว่า
            ผู้คนได้ย้ายเข้ามาพร้อมๆกับการอพยพของกลุ่มคนหลายกลุ่มจากกรุงศรีอยุธยา
            โดยชุมชนบ้านปูนในอดีตประกอบไปด้วยตระกูลเก่าแก่ 5 ตระกูล ได้แก่
            ตระกูลธนภูมิ ตระกูลดาระสวัสดิ์ ตระกูลศศิบุตร ตระกูลติณณรัตน์
            และตระกูลรามสมภพ
            ซึ่งปัจจุบันก็ยังคงมีทายาทของตระกูลเหล่านี้อาศัยอยู่ในชุมชนบ้านปูน
            และมีบางส่วนได้ย้ายออกจากชุมชน ตระกูลเหล่านี้
            ถือเป็นตระกูลใหญ่ที่สมาชิกในตระกูลมีศักดินา
            ทำให้มีฐานะทางเศรษฐกิจที่ดีกว่าสมาชิกในชุมชนคนอื่นๆ
          </p>
          <p className="mt-10">
            ชื่อ บ้านปูน หมายถึงหมู่บ้านที่ประกอบอาชีพการทำปูนขาย
            ซึ่งปูนในที่นี้หมายถึงปูนที่ไว้ใช้ตำหมากพลู
            เมื่อก่อนชาวบ้านยึดถืออาชีพทำปูนขาย โดยมีเตาปูนอยู่ในชุมชนทั้งหมด 3
            เตา สูงประมาณ 4 เมตร
            แต่ปัจจุบันไม่หลงเหลือหลักฐานของเตาสำหรับทำปูนแล้ว
            ในสมัยก่อนบริเวณนี้เคยเป็นที่ดินของเจ้าอนุวงค์แห่งเวียงจันทน์
            หลักฐานที่บ่งบอกว่าที่แห่งนี้เป็นวังเก่า
            คือซากกำแพงวังที่ตั้งอยู่ทางทิศใต้ของชุมชน
            ในปัจจุบันยังคงหลงเหลือให้เห็นเป็นหลักฐาน
          </p>
          <p className="mt-10">
            หลักฐานอีกอย่างหนึ่งที่แสดงถึงความเก่าแก่ของชุมชนก็คือ
            เรือนไม้ทรงไทย เป็นสมบัติของตระกูลธนภูมิ สร้างขึ้นในสมัยใดไม่ปรากฏ
            แต่เป็นเรือนไม้ที่ภายในมีโบราณวัตถุหลายอย่าง เช่น
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
            ในปัจจุบันยังคงเหลือให้เห็นอยู่ภายในชุมชนเพียง 1 โรงเท่านั้น
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
              ชุมชนบ้านปูนก็เหมือนกับชุมชนอื่นๆในกรุงเทพมหานครที่มีการอพยพเข้ามาของผู้คนจากต่างถิ่นที่เข้าหางานทำในเมืองหลวง
              ในวันนี้จึงมีผู้คนมากหน้าหลายตาจากหลากหลายที่เข้ามาอยู่อาศัย
              แต่ก็ยังคงมีชาวบ้านอีกกลุ่มหนึ่งซึ่งอาศัยอยู่ในบ้านปูนมาแต่เดิม
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full relative top-[-80px] bg-[#c53232] px-10 lg:px-40 pb-40 ">
        <div className="container w-full lg:w-1/2 h-[400px] lg:h-[600px] overflow-hidden flex items-center justify-center">
          <img
            src="/assests/images/ประวัติชุมชน.jpg"
            alt="Community History 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container w-full lg:w-1/2 h-[400px] lg:h-[600px] overflow-hidden flex items-center justify-center">
          <img
            src="/assests/images/ประวัติชุมชน2.JPG"
            alt="Community History 2"
            className="w-full h-full object-cover"
          />
        </div>
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
        <div className="container flex flex-col">
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
          <div className="flex flex-col lg:flex-row mt-5">
            <div className="container h-[200px] md:h-[400px] w-full lg:w-1/3 bg-[url('/assests/images/อาชีพในอดีต.PNG')] bg-center bg-contain bg-no-repeat"></div>
            <div className="container h-[200px] md:h-[400px] w-full lg:w-1/3 bg-[url('/assests/images/อาชีพในอดีต2.JPG')] bg-center bg-contain bg-no-repeat"></div>
            <div className="container h-[200px] md:h-[400px] w-full lg:w-1/3 bg-[url('/assests/images/อาชีพในอดีต3.PNG')] bg-center bg-contain bg-no-repeat"></div>
          </div>
        </div>
        <p
          className="text-white text-4xl lg:text-8xl font-bold leading-[1.2] mt-10 text-center lg:text-end"
          style={{ fontFamily: "MN KAEWKANLAYA, sans-serif" }}
        >
          อาชีพในปัจจุบัน
          <SouthWestIcon fontSize="inherit" className="ml-5" />
        </p>
        <div className="container flex flex-col-reverse lg:flex-row">
          <div className="container h-[200px] sm:h-[300px] md:h-[400px] w-full lg:w-1/4 bg-[url('/assests/images/อาชีพปัจจุบัน3.jpg')] bg-center bg-cover"></div>
          <div className="flex flex-col w-full lg:w-3/4 ml-0 lg:ml-5 mt-5 lg:mt-0">
            <p className="text-white">
              คนในชุมชนบ้านปูนต้องมีการปรับตัวหลายๆด้านจึงทำให้ในปัจจุบันคนในชุมชนประกอบอาชีพที่หลากหลายมากขึ้น
              ทั้งพนักงานบริษัท หรือออกไปทำงานด้านนอกเป็นส่วนใหญ่
              แต่บางส่วนยังมีอาชีพค้าขาย ร้านอาหาร ร้านขายของชำ
              และร้านทำบายศรีอยู่บ้างในชุมชน
            </p>
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
          <br /> ทิศเหนือ ตามแนวคลองวัดบวรมงคล (วัดลิงขบ) ปัจจุบันถูกถมเป็นถนน
          <br /> ทิศตะวันออก จากจุดเหนือสุดของเขตทิศเหนือ
          ไปตามแม่น้ำเจ้าพระยาจนถึงสุดเขต หรือแนวคลองบางยี่ขัน
          <br /> ทิศใต้ ตามแนวคลองบางยี่ขัน ขนานไปตลอดทางผ่านวัดดาวดึงส์
          วัดบางยี่ขัน
          <br /> ทิศตะวันตก นับจากจุดทิศใต้ คือ คลองบางยี่ขัน
          ผ่านแนวถนนจรัลสนิทวงศ์ไปจน จดแนวคลองวัดบวรมงคล (ถนนเข้าวัดบวรมงคล)
        </p>
        <div className="container bg-[url('/assests/images/MockMap.png')] h-[350px] lg:h-[700px] bg-cover bg-center mt-10 " />
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
        <div className="flex flex-row px-10">
          <div className="flex flex-col w-1/2 border-r-[1px] mr-3">
            <p className="text-white mt-5 text-start">
              มรดกวัฒนธรรมที่เลือนหาย คือ มรดกวัฒนธรรมของชุมชน
              บ้านปูนที่ไม่ปรากฏให้เห็นเป็นหลักฐานอยู่ในปัจจุบัน
              <br /> คงไว้เพียง จากคำบอกเล่าและบันทึกต่างๆ
            </p>
            <p className="text-white mt-5 text-start ">
              1.บ้านทำผักกาดดอง (เลือนหาย)
              <br /> 2.เตาทำปูน (เลือนหาย)
              <br /> 3.โรงทำเตาอั่งโล่ (เลือนหาย)
              <br /> 4.โรงทำขนมจีน (เลือนหาย) มรดกวัฒนธรรมที่ยังคงอยู่ คือ
            </p>
          </div>
          <div className="flex flex-col w-1/2">
            <p className="text-white mt-5 text-start">
              มรดกวัฒนธรรมที่ยังคงอยู่ คือ มรดกวัฒนธรรมของชุมชน
              บ้านปูนที่ยังปรากฏให้เห็นเป็นหลักฐานอยู่ในปัจจุบัน
            </p>
            <p className="text-white mt-5 text-start">
              <br />
              1.บ้านทำผักกาดดอง (เลือนหาย)
              <br /> 2.เตาทำปูน (เลือนหาย)
              <br /> 3.โรงทำเตาอั่งโล่ (เลือนหาย)
              <br /> 4.โรงทำขนมจีน (เลือนหาย)
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
