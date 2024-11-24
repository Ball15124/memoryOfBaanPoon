"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const data = [
  {
    id: 1,
    name: "ข้อเท็จจริงของโรงทำเกี๊ยะ",
    description:
      "จากการอพยพเข้ามาของผู้คนจากพื้นที่ต่างๆสู่ย่านชุมชนบ้านปูนมากขึ้น ทำให้มีความคึกคัก โดยคนในชุมชนบางส่วนก็แยกไปประกอบอาชีพอื่นๆนอกชุมชน เช่น เครื่องประดับ การทำเกี๊ยะ เป็นต้น โดยในปัจจุบันข้อมูลที่ผู้คนได้รับรู้อาจมีการสื่อสารคาดเคลื่อนจากในอดีตในเรื่องของโรงทำเกี๊ยะภายในชุมชนบ้านปูน โดยข้อเท็จจริงนั้นภายในชุมชนไม่มีโรงทำเกี๊ยะอย่างที่คนทั่วไปเห็นตามแหล่งข้อมูลต่างๆ แท้จริงนั้นเกิดจากคนภายในชุมชนได้ไปประกอบอาชีพทำเกี๊ยะในย่านเยาวราช แต่อาศัยอยู่ที่ชุมชนบ้านปูน เนื่องจากงานที่ล้นมือจึงได้ขนวัสดุอุปกรณ์ในการทำเกี๊ยะกลับมาประกอบต่อในที่อยู่อาศัยของตน จึงเป็นสาเหตุที่ทำให้คนภายในชุมชนคิดว่าได้มีการทำโรงเกี๊ยะเกิดขึ้นภายในชุมชน และส่งต่อข้อมูลที่คาดเคลื่อนที่ผิดไปจากความจริง อ้างอิงข้อมูลที่ได้รับมาจากคุณลุงอาภรณ์ นพคุณ ผู้ซึ่งอาศัยในชุมชนบ้านปูนตั้งแต่เกิดและได้อยู่ในช่วงเวลานั้น",
    images: [
      {
        image: "/assests/images/เรื่องเล่าตำนาน/โรงทำเกี๊ยะ.jpg",
      },
      // {
      //   image: "/assests/images/โรงทำเกี๊ยะ2.jpg",
      // },
      // {
      //   image: "/assests/images/โรงทำเกี๊ยะ3.jpg",
      // },
    ],
  },
  {
    id: 2,
    name: "เงาะบางยี่ขัน",
    description:
      "เงาะบางยี่ขันมีรสชาติออกหวานอมเปรี้ยว มีผลสีแดงอมเหลือง เนื้อร่อน โดยเงาะบางยี่ขันนี้เป็นที่โปรดปรานของรัชกาลที่5 พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัวเป็นอย่างมาก ถึงกับทรงยกอากรค่าสวนให้กับชาวสวนที่ปลูกเงาะบางยี่ขัน โดยเงาะบางยี่ขันถูกกล่าวถึงในหนังสือ “ ตำราการปลูกผลไม้ กับ ตำราการปลูกเข้าของโบราณ ” ที่เขียนโดยมหาอำมาตย์เอก เจ้าพระยาพลเทพ เสนาบดีกระทรวงเกษตราธิการ ไว้ว่า “ เงาะนี้พันธุ์ดีอยู่ตำบลบางยี่ขัน ชอบดอนเหมือนกับทุเรียน ถ้าแรกลงเพียง 2-3 ปี น้ำท่วม 2 วันตาย เปนไม้ตอนดีกว่าเพาะ ปลูกระยะห่างกันประมาณ 6 ศอก ถ้าแรกลง 2ศอก 3 ปีมีผลแต่เล็กน้อยพึ่งสอนเปน ถ้า 5 ปี ต้นลำงามบริบูรณ์คราวฤดูหนึ่งประมาณ 400 ผล ”",
    images: [
      {
        image: "/assests/images/เรื่องเล่าตำนาน/เงาะบางยี่ขัน.jpg",
      },
      {
        image: "/assests/images/เรื่องเล่าตำนาน/เงาะบางยี่ขัน(1).jpg",
      },
      {
        image: "/assests/images/เรื่องเล่าตำนาน/เงาะบางยี่ขัน(2).jpg",
      },
      {
        image: "/assests/images/เรื่องเล่าตำนาน/เงาะบางยี่ขัน(3).jpg",
      },
    ],
  },
  {
    id: 3,
    name: "วังเจ้าอนุวงศ์",
    // description:
    //   "ถิ่นฐานของเจ้านายลาวที่ “บางยี่ขัน” ชุมชน “ลาว” อพยพในบางกอก การยึดครองเวียงจันทน์ ซึ่งปกครองโดยพระโอรสองค์โตของพระเจ้าศิริบุญสาร ได้แก่ พระเจ้านันทเสน พระราชธิดาองค์โตคือเจ้านางเขียวค้อม และพระโอรสองค์รองลงมาคือเจ้าอนุวงศ์ เชลยเจ้านายลาวได้มาถึงธนบุรีราวปี ค.ศ. 1780 การยึดครองเวียงจันทน์ ซึ่งปกครองโดยพระโอรสองค์โตของพระเจ้าศิริบุญสาร ได้แก่ พระเจ้านันทเสน พระราชธิดาองค์โตคือเจ้านางเขียวค้อม และพระโอรสองค์รองลงมาคือเจ้าอนุวงศ์ เชลยเจ้านายลาวได้มาถึงธนบุรีราวปี ค.ศ. 1780 พระเจ้านันทเสน ไม่ได้ประทับที่บางยี่ขันนานนัก หลังจากที่พระเจ้าศิริบุญสารสิ้นพระชนม์ในปี ค.ศ. 1781 (พ.ศ. 2324) พระองค์ทรงได้รับแต่งตั้งเป็นกษัตริย์เมืองขึ้นแห่งเวียงจันทน์ และทรงย้ายกลับภูมิลำเนา เจ้าอินทวงศ์ (อุปราชองค์ใหม่) และ เจ้าพรหมวงศ์ ต่างก็ถูกส่งตัวมารวมกับเจ้าอนุวงศ์ที่บางกอกในฐานะตัวประกันหลวง เนื่องด้วยเหตุนั้นสืบมาอีกหลายรัชกาล วังลาวในฐานะถิ่นฐานของเจ้านายลาวที่บางยี่ขัน  หลังจากพระเจ้านันทเสนทิวงคต เจ้าอินทวงศ์ก็สืบราชสมบัติที่เวียงจันทน์ต่อในปี ค.ศ. 1797 (พ.ศ. 2340) ส่วน เจ้าอนุวงศ์ทรงได้รับแต่งตั้งเป็นอุปราช หลังจากนั้นในปี ค.ศ. 1804 (พ.ศ. 2347) พระเจ้าอินทวงศ์ก็ถึงแก่ทิวงคตและเจ้าอนุวงศ์ก็ครองราชย์สืบมา ดังนั้นพระโอรสทั้ง 3 พระองค์ ของพระเจ้าศิริบุญสารซึ่งต่างได้ดำรงตำแหน่งอุปราชของเวียงจันทน์แล้วนั้น ก็ได้สืบราชสมบัติขึ้นเป็นกษัตริย์เป็นลำดับกันมา  เมื่อครั้งแต่ละพระองค์ยังคงดำรงตำแหน่งอุปราชลาว โดยมากแล้วพระองค์มักใช้เวลาประทับอยู่ที่บางยี่ขัน ซึ่งนับว่าแสดงถึงความสำคัญที่บางกอกมอบต่อเวียงจันทน์ ธรรมเนียมปฏิบัตินี้ดำเนินต่อเนื่องมาด้วยการแต่งตั้งพระโอรสของเจ้าอนุวงศ์ คือ เจ้าคลี่ เป็นอุปราชในปี ค.ศ. 1804 (พ.ศ. 2347) เมื่อเจ้าอนุวงศ์ได้เริ่มแผนการกบฏต่อรัชกาลที่ 3 เมื่อราวปี ค.ศ. 1825 (พ.ศ. 2368) เจ้าคลี่จึงสละตำแหน่งอุปราชอย่างเงียบๆ ก่อนตำแหน่งได้ถูกแทนที่ด้วยพระอนุชาต่างมารดาของเจ้าอนุวงศ์ คือ เจ้าติสสะ และการทำสงครามไทยลาวหรือที่เรียกว่ากบฏเจ้าอนุวงศ์ เจ้าอนุวงศ์ได้พ่ายแพ้พระเจ้าอนุวงศ์ที่ถูกถอดจากตำแหน่งพร้อมทั้งสมาชิกของครอบครัวพระองค์ รวมทั้งพระมเหสี พระสนม และพระโอรสพระธิดา 23 พระองค์ ก็ถูกจองจำและปลิดชีพที่บางกอก",
    images: [
      {
        image: "/assests/images/เรื่องเล่าตำนาน/วังเจ้าอนุวงศ์.jpg",
      },
      {
        image: "/assests/images/เรื่องเล่าตำนาน/วังเจ้าอนุวงศ์(1).jpg",
      },
      {
        image: "/assests/images/เรื่องเล่าตำนาน/วังเจ้าอนุวงศ์(2).jpg",
      },
    ],
  },
  {
    id: 4,
    name: "การก่อสร้างสะพานพระราม 8",
    description:
      "ความเปลี่ยนแปลงในย่านเกิดขึ้นอย่างต่อเนื่อง ในปีพ.ศ. 2538 เริ่มโครงการก่อสร้างสะพานพระระราม 8 ถือเป็นจุดเปลี่ยนสำคัญของชุมชน ในช่วงการก่อสร้างสะพานพระราม 8 นั้นเป็นการที่คนในชุมชนออกมาต่อสู้รวมตัว เรียกร้องให้กรุงเทพมหานคร ทบทวนการไล่รื้อชุมชนบ้านปูนทั้งหมดจนกระทั่งได้ข้อยุติในปีพ.ศ. 2542 ที่เกิดการเวนคืนเฉพาะพื้นที่ชุมชนทำล่าง ซึ่งส่งผลให้คนท่าล่าล่างย้ายอกไปจากบริเวณนี้ โดยส่วนมากย้ายไปอยู่ที่บ้านเอื้ออาทร บางกรวย บางใหญ่ บางส่วนก็ย้ายไปอยู่ในชุมชมชนคฤหบดีหรือชุมชนใกล้เคียง และมีคนในชุมชนที่เป็นผู้เช่าบ้านที่อาศัยอยู่อย่างยาวนานได้รับผลกระทบแต่ในวันนี้ความเปลี่ยนแปลงได้เกิดขึ้นแล้วหลายคนต้องขนข้าวของออกจากบ้านปูน แยกย้ายกันไปหาที่อยู่ใหม่ พร้อม ๆ กับการเวนคืนที่ดินเพื่อก่อสร้างโครงการสะพานพระราม 8 คนที่เคยอาศัยอยู่ในทำล่าง ต่อเมื่อถูกไล่รื้อในช่วงการสร้างสะพานพระราม 8 ก็ได้ย้ายออกไปเข้าบ้านอยู่ที่ชุมชนคฤหบดีและยังคงค้าขาย มีปฏิสัมพันธ์อันดีกับคนในชุมชนอยู่ แต่ก็มีบางส่วนที่ย้ายออกพร้อมกับความสัมพันธ์ ความสนิทชิดเชื้อในชุมชนได้หายลงไปผลจากการเปลี่ยนแปลงดังกล่าว ยังทำให้วิถีชีวิตในชุมชนเปลี่ยน จากการต้องเดินไปขึ้นเรือก็น้อยลง",
    images: [
      {
        image: "/assests/images/เรื่องเล่าตำนาน/สะพานพระราม8.jpg",
      },
      {
        image: "/assests/images/เรื่องเล่าตำนาน/สะพานพระราม8(2).jpg",
      },
      {
        image: "/assests/images/เรื่องเล่าตำนาน/สะพานพระราม8(3).jpg",
      },
      {
        image: "/assests/images/เรื่องเล่าตำนาน/สะพานพระราม8(1).jpg",
      },
    ],
  },
];

export default function LegendsDetail() {
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname
  const id = Number(pathname.split("/").pop()); // Convert the id to a number

  const person = data.find((item) => item.id === id);

  return (
    <main className="flex flex-col items-center justify-center">
      <div
        className="relative top-[-80px] flex flex-col w-full h-[52.5vw] bg-cover bg-center justify-center items-center z-[-2]"
        style={{ backgroundImage: `url('${person?.images[0].image}')` }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 z-[-1]"></div>

        {/* Text Content */}

        <div className="px-2 text-black bg-[#fcf00b] font-bold justify-center items-center text-[20px] tracking-widest">
          <p>LEGEND</p>
        </div>
        <h1 className="relative text-white text-center text-[36px] lg:text-[80px] font-bold animate-fade-in leading-tight">
          {person?.name}
        </h1>
      </div>

      <div className="justify-items-center pb-10 px-10 max-w-4xl">
        <div className="container flex flex-col">
          <div className="flex flex-col space-y-4 w-full overflow-hidden">
            {person?.id === 3 ? (
              <p className="text-white animate-fade-in">
                ถิ่นฐานของเจ้านายลาวที่บางยี่ขัน
                ชุมชนของชาวลาวบางส่วนที่อพยพลงมายังบางกอก
                หลังจากการยึดครองนครเวียงจันทน์
                ซึ่งถูกดูแลและปกครองโดยพระโอรสองค์โตของพระเจ้าศิริบุญสาร ได้แก่
                พระเจ้านันทเสน พระราชธิดาองค์โตคือเจ้านางเขียวค้อม
                และพระโอรสองค์รองลงมาคือเจ้าอนุวงศ์
                เชลยเจ้านายลาวได้มาถึงธนบุรีราวปี พ.ศ. 2323
                <br />
                <br />
                <p className="text-white animate-fade-in">
                  หลังจากที่พระเจ้าศิริบุญสารสิ้นพระชนม์ในปี พ.ศ. 2324
                  พระเจ้านันทเสนทรงได้รับแต่งตั้งเป็นกษัตริย์เมืองขึ้นแห่งเวียงจันทน์
                  และทรงย้ายกลับภูมิลำเนา เจ้าอินทวงศ์ (อุปราชองค์ใหม่) และ
                  เจ้าพรหมวงศ์
                  ต่างก็ถูกส่งตัวมารวมกับเจ้าอนุวงศ์ที่บางกอกในฐานะตัวประกันหลวง
                  เนื่องด้วยเหตุนั้นสืบมาอีกหลายรัชกาล
                  ในฐานะถิ่นฐานของเจ้านายลาวที่บางยี่ขัน
                  <br />
                  <br />
                </p>
                <p className="text-white animate-fade-in">
                  หลังจากพระเจ้านันทเสนทิวงคต
                  เจ้าอินทวงศ์ก็สืบราชสมบัติที่เวียงจันทน์ต่อในปี พ.ศ. 2340
                  ส่วนเจ้าอนุวงศ์ทรงได้รับแต่งตั้งเป็นอุปราช แต่หลังจากนั้นในปี
                  พ.ศ. 2347 พระเจ้าอินทวงศ์ก็ถึงแก่ทิวงคต
                  และเจ้าอนุวงศ์ก็ครองราชย์สืบมา ดังนั้นพระโอรสทั้ง 3 พระองค์
                  ของพระเจ้าศิริบุญสารซึ่งต่างได้ดำรงตำแหน่งอุปราชของเวียงจันทน์และสืบราชสมบัติขึ้นเป็นกษัตริย์เป็นลำดับต่อกันมา
                  เมื่อครั้งแต่ละพระองค์ยังคงดำรงตำแหน่งอุปราชลาว
                  โดยมากแล้วพระองค์มักใช้เวลาประทับอยู่ที่บางยี่ขัน
                  ซึ่งนับว่าแสดงถึงความสำคัญที่บางกอกมอบต่อเวียงจันทน์
                  <br />
                  <br />
                </p>
                <p className="text-white animate-fade-in">
                  แต่ด้วยความรักชาติบ้านเมืองและเห็นแก่ประชาชนของตน
                  เจ้าอนุวงศ์ได้เริ่มแผนการกบฏต่อรัชกาลที่ 3 เมื่อราวปี พ.ศ.
                  2368 เจ้าคลี่ (อุปราช ณ ตอนนั้น)
                  ได้สละตำแหน่งอุปราชอย่างเงียบๆเนื่องด้วยไม่เห็นดีเห็นงามกับเจ้าอนุวงศ์
                  ตำแหน่งนี้จึงได้ถูกแทนที่ด้วยพระอนุชาต่างมารดาของเจ้าอนุวงศ์
                  คือ เจ้าติสสะ
                  และเกิดการทำสงครามไทยลาวหรือที่เรียกว่ากบฏเจ้าอนุวงศ์
                  บทสรุปของสงครมในครั้งนี้ เจ้าอนุวงศ์ได้พ่ายแพ้
                  ถูกถอดจากตำแหน่งพร้อมทั้งสมาชิกของครอบครัวพระองค์
                  รวมทั้งพระมเหสี พระสนม และพระโอรสพระธิดา 23 พระองค์
                  ก็ถูกจองจำและถูกปลิดชีพที่บางกอก
                  <br />
                  <br />
                </p>
                <div
                  className="bg-cover bg-center max-w-[1024px] aspect-[1024/550]"
                  style={{
                    backgroundImage: `url('${person.images[2].image}')`,
                  }}
                />
                <p className="text-white animate-fade-in">
                  <br />
                  ในปัจุบันเหลือเพียงหลักฐานจากซากกำแพงวัง
                  ข้อมูลเกี่ยวกับลักษณะของวังเจ้าอนุวงศ์
                  ไม่มีความแน่ชัดว่าเป็นสิ่งปลูกสร้างในลักษณะไหนและตั้งอยู่ในจุดไหนของชุมชน
                  แต่ในนิราศวังบางยี่ขัน ที่แต่งโดย คุณพุ่ม บุษบาท่าเรือจ้าง
                  กวีหญิงของไทยที่มีชื่อเสียงท่านหนึ่ง
                  ได้กล่าวให้เห็นถึงภาพระหว่างการเดินทางไปยังบางยี่ขัน
                  พรรณาถึงความทรุดโทรมของวังเจ้าอนุวงศ์หรือวังบางยี่ขัน
                  โดวเห็นได้จากถ้อยความในนิราศที่ว่า
                  <br />
                  <br />
                </p>
                <p className="text-white animate-fade-in text-center">
                  &quot;ดูรกเลี้ยวเกี่ยวพันเถาวัลย์วุ่น
                  เกตพิกุลเลียบอุโลกโศกสาขา
                  <br /> ทุกพุ่มพักหักพังเปนรังกา
                  เมื่อเจ้าตาย่านกระหม่อมอยู่พร้อมพรัก&quot;
                  <br />
                  &quot;บ้านที่สร้างบางยี่ขันท่านมาพัก ตึกตำหนักหักตกถึงอกไก่
                  <br />
                  นี่แอบอิงพิงพระเดชประเทศไทย ยังเปนได้ดูดู๋พังถึงหลังคา&quot;
                </p>
              </p>
            ) : (
              <p className="text-white animate-fade-in">
                {person?.description}
              </p>
            )}
            <div
              className="bg-cover bg-center max-w-[1024px] aspect-[1024/550]"
              style={{
                backgroundImage: `url('${
                  person?.id === 1
                    ? person?.images[0].image
                    : person?.images[1].image
                }')`,
              }}
            />
          </div>
          <div className="flex flex-col md:flex-row w-full mt-5">
            {person?.id !== 1 &&
              person?.id !== 3 &&
              person?.images
                .slice(-2)
                .map((image, index) => (
                  <div
                    key={index}
                    className="container h-[100px] md:h-[200px] bg-cover bg-center"
                    style={{ backgroundImage: `url('${image.image}')` }}
                  />
                ))}
          </div>
        </div>
      </div>
    </main>
  );
}
