import React from 'react'
import Banner from '../../components/Banner'
import ProductListSection from '../Home/ProductListSection'
import Promotion from '../../components/Promotion'
import useRouterHistory from '../../hooks/useRouterHistory'
import './Detail.css'

export default function Detail() {
  const goto = useRouterHistory()

  const onPromotionClick = () => goto('/promotions/1')

  return (
    <div className="m-auto antialiased font-sans font-serif font-mono text-center">
      <Banner />
      <section>
        <div className="container mx-auto flex flex-col md:flex-row justify-start pt-4 pb-12">
          {/* Thumbnail */}
          <div className="w-full md:w-1/3 inline-block">
            <div className="w-full">
              <img src="https://www.sgethai.com/wp-content/uploads/2019/08/IMG_9841-200x200.png" />
            </div>
          </div>
          {/* End Thumbnail */}

          {/* Detail */}
          <div className="w-full md:w-2/3 inline-block p-4 md:pt-0">
            <div className="w-full text-left mb-5">
              <h2 className="text-2xl font-extrabold mb-2">
                ตู้อบวิจัยความร้อนสูง
              </h2>
              <p className="text-lg">
                ซิ้มซูมอุปการคุณ อิเลียดกรรมาชนตุ๊กดีไซน์
                ฮีโร่รายชื่อห่วยสเตย์จตุคาม แซมบ้าเคลมปูอัดบ๊อบแจ๊กเก็ต
                เยอบีร่าสถาปัตย์ เท็กซ์ภควัมปติโปรโมเตอร์คีตปฏิภาณ สต๊อควอฟเฟิล
                ลาเต้เซ็กซี่นิรันดร์ แบดซังเตบิล เอฟเฟ็กต์เก๋ากี้เจล
                ฟลุกศิลปวัฒนธรรมอึ๋ม ถ่ายทำบุ๋นเห็นด้วยคอรัปชั่น แล็บราเม็งมาร์ค
                แรลลี่ เลดี้สุริยยาตร แจ๊กเก็ตพิซซ่าซีเนียร์แดนซ์ ฮิสแล็ก
                ธรรมาภิบาลเมคอัพ พาสตาสหัสวรรษ ฮากกาซามูไร
                โต๋เต๋เย้วสคริปต์แหววละอ่อน สเตชั่น แซลมอน เต๊ะไคลแม็กซ์
                มาร์ตคูลเลอร์คอมพ์แพ็ค ซีนไหร่โปรดิวเซอร์ปิโตรเคมี
                ว้อดก้าพาสต้าวาฟเฟิลเฝอตรวจทาน จตุคาม เกย์ ระโงกเอ็นทรานซ์ กิมจิ
                ทัวริสต์ฮันนีมูน คาปูชิโนแซมบ้ามวลชน แล็บเยน
                อิสรชนตุ๊กทัวร์นาเมนท์จอหงวน แพนงเชิญโอเปอเรเตอร์แมคเคอเรล
              </p>

              <iframe
                className="m-4 youtube"
                src="https://www.youtube.com/embed/7EsooQEtSWo"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="w-full flex mb-3">
              <div className="mr-5">
                <select className="rounded border-2 p-3">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="flex items-center">
                <p className="pt-1 text-gray-900 mr-2">£9.99</p>
                <button className="rounded-full p-3 bg-green-200">
                  Add to cart
                </button>
              </div>
            </div>

            <div className="w-full text-left">
              <span className="text-2xl font-extrabold mb-2">
                โปรโมชั่นที่ร่วม
              </span>
              <Promotion title="Promotion" onClick={onPromotionClick} />
              <div></div>
            </div>
          </div>
          {/* End Detail */}
        </div>
      </section>

      <ProductListSection title="Galleries" limit={4} />
      <ProductListSection title="สินค้าใกล้เคียง" limit={4} />
    </div>
  )
}
