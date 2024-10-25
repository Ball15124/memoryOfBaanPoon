import Image from "next/image";
import Navbar from "./components/navigation/navbar";

export default function Home() {
  return (
    <>
      <main className="flex flex-col pb-10">
        {/* Replace 'path/to/your/image.jpg' with the actual path to your image */}
        <div className="self-center">
          <Image
            src="/assests/images/Memory_Of_Baan_Poon-removebg-preview.png" // Use the correct path to your image
            alt="Description of the image" // Add a descriptive alt text
            width={1000} // Set a width for the image
            height={0} // Set a height for the image
          />
        </div>
        <div className="flex flex-row flex-wrap">
          <div className="relative w-1/5 h-96">
            <Image
              src="/assests/images/หน้าแรก(1).JPG"
              alt="Description of the image"
              layout="fill" // Use fill to cover the parent container
              objectFit="cover" // Ensures the image maintains its aspect ratio while filling the container
            />
          </div>

          <div className="relative w-1/5 h-96">
            <Image
              src="/assests/images/หน้าแรก(2).JPG"
              alt="Description of the image"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="relative w-1/5 h-96">
            <Image
              src="/assests/images/หน้าแรก(3).JPG"
              alt="Description of the image"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="relative w-1/5 h-96">
            <Image
              src="/assests/images/หน้าแรก(4).JPG"
              alt="Description of the image"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="relative w-1/5 h-96">
            <Image
              src="/assests/images/หน้าแรก(5).JPG"
              alt="Description of the image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="px-40 py-8">
          <p className="text-[#c53232] text-6xl font-bold">
            ประวัติชุมชนบ้านปูน
          </p>
          <div className="flex flex-row mt-5">
            <div className="h-[500px] bg-gray-400 w-1/2 rounded-[50px]" />
            <p className="text-black w-1/2 ml-5 text-2xl text-justify">
              ชุมชนบ้านปูนนั้นตั้งอยู่ในบริเวณสะพานพระรามแปดฝั่งธนบุรีของเขตบางพลัด
              กรุงเทพมหานคร จากปากคำบอกเล่าของผู้ใหญ่ในชุมชนเล่าว่า
              ผู้คนได้ย้ายเข้ามาพร้อมๆ กับการอพยพของกลุ่ม คนหลายๆกลุ่ม
              จากกรุงศรีอยุธยา เช่นชุมชนบ้านครัวเป็นต้น
              ชุมชนบ้านปูนในอดีตนั้นประกอบไปด้วยตระกูลเก่าแก่ 5 ตระกูล ได้แก่
              ตระกูลธนภูมิดาระสวัสดิ์ ศศิบุตร ติณณรัตน์ และรามสมภพ
              ซึ่งในปัจจุบันยังมีทายาทของคนในตระกูลเหล่านี้อาศัยอยู่ในชุมชนบ้านปูนและมีบางส่วนได้ย้ายออกจากชุมชนไปแล้วตระกูลเก่าแก่ในชุมชนฯเป็นตระกูลใหญ่ที่สมาชิกในตระกูลมีศักดินาทำให้มีฐานะทางเศรษฐกิจที่ดีกว่าสมาชิกในชุมชนฯอื่นๆ
            </p>
          </div>
          <p className="text-black text-2xl text-justify mt-5">
            ที่ที่ดินเป็นของตนเองภายในชุมชนฯ
            คนในตระกูลเหล่านี้โดยเฉพาะตระกูลเหล่านี้
            โดยเฉพาะตระกูลธนภูมิและดาราสวัสดิจึงสร้างบ้านในชุมชน
            เพื่อให้ชาวบ้านมาเช่าและประกอบกิจการต่างๆโดยคิดค่าเช่าในราคาถูกและมีการให้คำมั่นสัญญากับชาวบ้านที่เช่าบ้านว่าจะไม่คิดราคาที่แพงเกินไป
            ซิ่งเป็นสัญญาที่มีมาถึงปัจจุบัน ซึ่งชื่อ บ้านปูน
            หมายถึงหมู่บ้านที่ประกอบอาชีพทำปูนขาย
            ซึ่งปูนในที่นี้หมายถึงปูนที่ไว้ใช้ตำหมากพลู
            เมื่อก่อนชาวบ้านบ้านปูนยึดอาชีพทำปูนขายซึ่งในปัจจุบันยังคงหลวงเหลือให้เห็นเป็นหลักฐานอยู่
            หลักฐานอีกอย่างหนึ่งที่แสดงถึงความเก่าแก่ของชุมชนก็คือ
            เรือนไม้ทรงไทยที่อยู่บริเวณศาลาโรงธรรมอันเป็นสมบัติของตระกูลธนภูมิ
            ซึ่งสร้างชึ้นในสมัยใดยังไม่ปรากฏแต่เป็นเรือนไม้ที่ภายในมีโบราณวัตถุหลายอย่าง
            เช่นกระจกในสมัยรัชกาลที่5
            เรือนไทยทายาทเล่าให้ฟังว่าเป็นที่อยู่ของทาสในสมัยรัชกาลที่5ส่วนบนของเรือนเป็นที่อยู่อาศัย
            ส่วนใต้ถุนบ้านเป็นคุกขังทาสในสมัยนั้นนอกจากนั้นแล้วในชุมชนบ้านปูนก็ยังมีโบราณสถานอีกอย่างหนึ่งก็คือ
            ศาลาโรงธรรม
            ที่ตั้งอยู่ใจกลางชุมชนศาสาโรงธรรมแห่งนี้มีตำนานที่เบ่าว่าถูกสร้างขึ้นตั้งแต่สมัยรัชกาลที่2
            ด้วยไม้สักทองทั้งหลังภายในประดิษฐานพระพุทธรูป
            3องค์จากเดิมที่ประดิษฐานอยู่9องค์ แต่ภายหลังถูกขโมยออกไป
            ตามประวัติชุมชนที่ได้กับถามจากผู้ใหญ่ชุมชนเล่าว่า
            ศาลาโรงธรรมที่สร้างขึ้นโดยตระกูล ดาราสวัสดิและธนภูมิโดยมีจุดมุ่งหมาย
            เพื่อคนในชุมชน สมัยก่อนได้ที่สถานที่ในการประกอบกิจการงานบุญ เช่น
            การถวายภัตตาหาร การฟังเทศน์ฟังธรรม ศาลาโรงธรรมได้จดทะเบียน
            ขึ้นเป็นโบราณสถานของกรมศิลปากรแล้ว
            ศาลาโรงธรรมถือศาลเจ้าชื่อตั้งอยู่บริเวณใกล้เคียงกัน
            ศาลเจ้าแห่งนี้เป็นศูนย์รวมใจของคนเชื้อสายจีน
            ภายหลังคนเชื้อสายจีนเข้ามาในชุมชนและประกอบอาชีพทำเตาอั่งโล่ขาย
            โดยจากการสัมภาษณ์เป็นชุมชนโรงทำเตาอั่งโล่ที่มีทั้งหมด 4 - 5 โรง
            การทำเตาอั่งโล่ในชุมชนเป็นอาชีพนั้นเกิดหลังจากที่บ้านปูนประกอบอาชีพทำปูนขาย
            ปัจจุบันโรงทำเตายังเหลืออยู่ในประวัติศาสตร์อยู่ 1 โรง
            นอกจากนี้คนในชุมก็ยังประกอบอาชีพอื่นๆอีกมากมาย
            ซึ่งในปัจจุบันบางแห่งยังมีหลักฐานหลงเหลืออยู่ เช่น โรงขนมจีน เป็นต้น
            ส่วนโรงงานเก่าแก่ในชุมชนอื่นๆที่ถูกรื้อถอนไปแล้วก็ได้แก่
            โรงผักกาดดอง โรงยาฝิ่น โรงงานทำมีด โรงหลอมตะกั่ว และโรงสุราบางยี่ขัน
            ซึ่งโรงสุราบางยี่ขันนี้เป็นสถานที่ที่ปรากฏอยู่ในนิราศภูเขาทองของสุนทรภู่ในความหนึ่งที่ว่า
          </p>
          <div className="justify-self-center">
            <p className="text-black text-2xl mt-5 leading-loose">
              ถึงโรงเหล้าเตากลั่นควันโขมง
              <span className="mx-6" /> มีคันโพงผูกสายไว้ปลายเสา
              <br />
              โอ้บาปกรรมน้ำนรกเจียวอกเรา <span className="mx-[18px]" />
              ให้มัวเมาเหมือนหนึ่งบ้าเป็นน่าอาย
              <br />
              ทำบุญบวชกรวดน้ำขอสำเร็จ <span className="mx-[28px]" />
              สรรเพชญโพธิญาณประมาณหมาย
              <br />
              ถึงสุราพารอดไม่วอดวาย <span className="mx-[44px]" />
              ไม่ใกล้กรายแกล้งเมินก็เกินไป
              <br />
              ไม่เมาเหล้าแล้วแต่เรายังเมารัก <span className="mx-[18px]" />
              สุดจะหักห้ามจิตคิดไฉน
              <br />
              ถึงเมาเหล้าเช้าสายก็หายไป
              <span className="mx-[35px]" /> แต่เมาใจนี้ประจำทุกค่ำคืน
            </p>
          </div>
          <p className="text-black text-2xl text-justify mt-5">
            นอกจากนั้น เมื่อก่อนชุมชุนบ้านปูนยังมีค่ายมวยที่มีชื่อเสียงชื่อ
            ค่ายมวยศิลปกร ซึ่งเป็นค่ายมวยที่มีนักมวยที่มีความสามารถมากมาย
            แต่ในปัจจุบันค่ายมวยดังกล่าวได้ถูกยุบไปแล้ว
            ความเป็นชุมชนของชุมชนบ้านปูนนั้นเป็นไปอย่างสุขสงบ
            จากการสอบถามจากใหญ่ชุมชนท่านเล่าให้ฟังว่า
            เมื่อก่อนคนในชุมชนสามารถเปิดบ้านทิ้งไว้ได้ตลอดเวลาโดยไม่ต้องกลัวว่าจะมีขโมย
            หรือผู้ร้ายเข้ามาขโมยของทุกคนในชุมชนดูแลซึ่งกันและกันเป็นอย่างดี
            ช่วงชุมชนบ้านปูนต้องเผชิญกับเหตุการณ์สำคัญในประวัติศาสตร์มากมาย
            ทั้งสงครามโลกครั้งที่2
            ในพื้นที่บริเวณบ้านปูนเกือบจะถูกทหารฝ่ายสัมพันธมิตรทิ้งระเบิดใส่ชุมชน
            การเผชิญกับอุทกภัยครั้งใหญ่ของประเทศไทยถึง 2 ครั้ง ในปี พ.ศ. 2538
            และปี พ.ศ. 2554
            และการต่อสู้เพื่อเรียกร้องสิทธิในที่อยู่อาศัยของตนเองเมื่อมีโครงการสร้างสะพานพระราม
            8 ในปี พ.ศ. 2538
            ในปัจจุบันชุมชนบ้านปูนเหมือนกับชุมชนอื่นๆในกรุงเทพมหานครที่มีการอพยพเข้ามาของผู้คนจากต่างจังหวัดที่เข้าหางานทำในเมืองหลวง
            ชุมชนบ้านปูนในวันนี้จึงมีผู้คนมากหน้าหลายตาจากถิ่นอื่นเข้ามาอยู่อาศัยแต่ยังมีชาวบ้านอีกกลุ่มหนึ่งซึ่งอาศัยอยู่ในบ้านปูนมาแต่เดิม
          </p>
          <div className="h-[500px] bg-gray-400 mx-80 mt-6 rounded-[50px]" />
          <p className="text-black text-2xl text-justify mt-5">
            บ้านปูนวังหลัง เป็นคนละแห่งกันบ้านปูนบางยี่ขัน การที่เรียกว่า
            บ้านปูน เหมือนกันนั้น สันนิษฐานว่าเคยเป็นหมู่บ้านที่มีการทำปูน
            (ปูนกินหมาก) หรือปูนแดง มาตั้งแต่ครั้งกรุงศรีอยุธยาเป็นราชธานีของไทย
            เนื่องจากโดยปกติคนไทย รวมทั้ง คนจีนที่เข้ามาทำมาหากินในประเทศไทย
            ส่วนใหญ่นิยมกินหมากจนติดเป็นนิสัย และบริเวณบ้านปูนวังหลังตั้งอยู่
            ใกล้ชิดกับเมืองธนบุรี ซึ่งเป็นเมืองด่าน
            มีทางออกทะเลไปตามคำน้ำเจ้าพระยาจนถึงเมืองสมุทรปราการทางหนึ่ง
            กับไปตามคลองบางกอกใหญ่ (คลองบางหลวง) ผ่านคลองด่าน
            เข้าคลองบางขุนเทียนหรือคลองมหาชัยชลมารค ไปออกทะเลที่เมืองสมุทรสาคร
            (เมืองท่าจีน) หรือไปออกคลองลัดสุนัขหอน
            (คลองขุดลัดระหว่างแม่น้ำท่าจีนกับแม่น่า แม่กลอง)
            ไปออกเมืองสมุทรสงครามก็ได้ ดังนั้น
            บริเวณเมืองธนบุรีและอาณาเขตใกล้เคียงจึงเป็นชุมชนขนาดใหญ่
            เป็นย่านของการทำมาค้าขาย ซึ่งมีคนที่กินหมากจำนวนมาก
            จึงน่าจะมีการทำปูนที่ตำบลบ้านปูนวังหลังมาก่อน
            ต่อมาเมื่อต้นกรุงรัตนโกสินทร์ รัชกาลที่ ๑ ได้ปูนบำเหน็จความชอบ
            พระยาสุริยอภัต (ทองอิน) ซึ่งมีบ้านเรือนอยู่ที่บริเวณบ้านปูน
            ขึ้นเป็นกรมพระราชวังบวรสถานพิมุข หรือ วังหลัง น่าจะได้มีการ
            ขยายเขตบ้านเดิมของพระยาสุริยอภัยขึ้นเป็นพระราชวังหลัง
            เป็นเหตุให้สถานที่ทำปูนที่บ้านปูนวังหลังต้องล้มเลิก หรือย้ายออกไป
            แต่คนทั่วไปยังเรียกบริเวณดังกล่าวว่า บ้านปูน ตามที่เคยเป็นมาในอดีต
            ในพระราชพงศาวดารฉบับพระราชหัตถเลขา
            กล่าวถึงเรื่องราวในตอนผลัดแผ่นดินจากพระ
            ราชวงศ์ตากสินกรุงธนบุรีมาเป็นพระราชวงศ์จักรี ได้กล่าวถึง
            เจ้ารามลักษณ์ พระเจ้าหลานเธอในสมเด็จพระเจ้า กรุงธนบุรี
            ทำกลอุบายจุดไฟล้อมบ้านพระยาสุริยอภัย ซึ่งตั้งอยู่ที่บ้านปูน
            สวนลิ้นจี่ ข้อสันนิษฐานที่ว่าเคยมีการทำปูนวังหลังอีกประการหนึ่งก็คือ
            มีตำบลบ้านขมิ้น อยู่ใกล้เคียงกับบ้านปูน
            ขมิ้นเป็นวัตถุดิบสำคัญที่ใช้ผสมกับปูนขาวให้มีสีแดงเป็นปูนกินหมาก
          </p>
          <p className="text-[#c53232] text-6xl font-bold mt-[100px]">
            อาชีพคนในชุมชน
          </p>
          <div className="flex flex-row">
            <div className="flex flex-col w-1/3 items-center">
              <p className="text-black text-5xl font-bold mt-[60px]">
                อาชีพในอดีต
              </p>
              <div className="h-[400px] bg-gray-400 mt-6 rounded-[50px] w-full" />
              <div className="h-[400px] bg-gray-400 mt-6 rounded-[50px] w-full" />
              <div className="h-[400px] bg-gray-400 mt-6 rounded-[50px] w-full" />
            </div>
            <div className="text-black text-[36px] text-justify w-2/3 pt-[120px] pl-[50px]">
              <p>กลุ่มคนไทยที่เข้าไปอยู่ในบ้านปูนบางยี่ขัน</p>
              <ul className="list-disc pl-6 ml-6">
                <li>
                  กลุ่มหลัง เป็นกลุ่มที่เข้าไปอยู่ในภายหลัง
                  บางกลุ่มก็ไปรวมกับกลุ่มเดิมในฐานะเครือญาติ
                  หรือมีความสัมพันธ์ทางครอบครัวและเพื่อนฝูง
                  บางกลุ่มไปอยู่เป็นอิสระเพื่อประกอบอาชีพของตน เช่น ค้าขาย
                  ทำราชการ และเป็นลูกจ้าง เป็นต้น
                </li>
              </ul>
              <br />
              <p>
                กลุ่มคนจีนที่เข้าไปอยู่ในบ้านปูนบางยี่ขันอาจแยกได้เป็น 2 กลุ่ม
                คือ
              </p>
              <ul className="list-disc pl-6 ml-6">
                <li>
                  กลุ่มแรก ส่วนใหญ่น่าจะเข้าไปอยู่พร้อม ๆ กับการตั้งโรงงานสุรา
                  เมื่อประมาณต้นรัชกาลที่ 2 คนจีนกลุ่มแรกนี้อาชีพเป็นคนงาน
                  (จับกัง) ในโรงงานต้นกลั่นสุรา
                  มีหัวหน้าควบคุมและขึ้นอยู่ในบังคับบัญชาของนายอากรที่รับผูกขาดการทำและจำหน่ายสุรา
                  โดยเสียค่าอากรสุราให้รัฐบาล
                  ต่อมาภายหลังเมื่อเปลี่ยนแปลงการปกครอง พ.ศ. ๒๔๗๕ แล้ว
                  รัฐบาลได้ยกเลิกการผูกขาดต้มกลั่นและจำหน่ายสุรา
                  โดยให้กรมสรรพสามิตไปควบคุม
                  แต่คนจีนที่เป็นหัวหน้าหรือนายอากรที่ผูกขาดเรื่องสุราก็ยังปฏิบัติงานอยู่ต่อไป
                  โดยแปรสภาพเป็นข้าราชการในสังกัดกรมสรรพสามิต กระทรวงการคลัง
                  หัวหน้าคนจีนคนสุดท้ายที่บรรดาศักดิ์เป็น หลวงสิทธิสุโรปกรณ์
                  มีชื่อว่า หลงจี้บั๊ก
                </li>
                <li>
                  กลุ่มหลัง บางคนก็เป็นลูกหลานของคนจีนกลุ่มแรก ดังนั้น
                  จึงมักจะทำงานในโรงงานสุราสืบทอดจากบรรพบุรุษของคน
                  บางคนก็แยกไปประกอบอาชีพอิสระ เช่น ค้าขาย รับจ้างทั่วไป
                  ในกลุ่มหลังที่ใกล้ชิดกับกลุ่มแรกนี้มีอาชีพควบคู่กับการทำโรงงานสุรา
                  คือ จัดตั้งโรงงานฝิ่น สำหรับบริการคนงาน โรงงานสุราและคนอื่น
                  เป็นอาชีพสำคัญของคนจีนในบ้านปูนอีกประการหนึ่ง
                </li>
              </ul>
            </div>
          </div>
          <p className="text-black text-5xl font-bold mt-[60px] pl-[130px]">
            อาชีพปัจจุบัน
          </p>
          <p className="text-black text-[36px] mt-[40px] pl-[190px]">
            สิ่งที่ทำให้อาชีพของคนในชุมชนบ้านปูนต้องมีการปรับตัวหลายๆด้าน
            จึงทำให้ในปัจจุบันคนในชุมชนประกอบอาชีพพนักงานบริษัทหรือออกไปทำงานด้านนอกเป็นส่วนใหญ่
            ยังมีอาชีพค้าขายอยู่บ้างในชุมชน มีร้านอาหาร ร้านขายของชำ บายศรี
          </p>
          <div className="flex flex-row mt-[40px]">
            <div className="h-[400px] bg-gray-400 mr-6 rounded-[50px] w-full" />
            <div className="h-[400px] bg-gray-400 mr-6 rounded-[50px] w-full" />
            <div className="h-[400px] bg-gray-400  rounded-[50px] w-full" />
          </div>
          <p className="text-black text-5xl font-bold mt-[80px] justify-self-center mb-[50px]">
            แผนที่ชุมชน
          </p>
          <div className="h-[400px] bg-gray-400 mr-6 rounded-[50px] w-full" />
        </div>
      </main>
    </>
  );
}
