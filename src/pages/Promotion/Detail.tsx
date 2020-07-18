import React from 'react'
import Banner from '../../components/Banner'
import ProductListSection from '../Home/ProductListSection'
import PromotionList from '../../components/PromotionList'

export default function Detail() {
  return (
    <div className="m-auto antialiased font-sans font-serif font-mono text-center">
      <Banner />
      <section>
        <div className="container mx-auto flex flex-col md:flex-row justify-start pt-4 pb-12">
          {/* Thumbnail */}
          <div className="w-full md:w-1/3 inline-block">
            <div className="w-full">
              <img src="https://images.unsplash.com/photo-1577538928305-3807c3993047?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
            </div>
          </div>
          {/* End Thumbnail */}

          {/* Detail */}
          <div className="w-full md:w-2/3 inline-block p-4 md:pt-0">
            <div className="w-full text-left">
              <h2 className="text-2xl font-extrabold mb-2">Promotion</h2>
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
            </div>
          </div>
          {/* End Detail */}
        </div>
      </section>

      <ProductListSection title="สินค้าร่วมโปรโมชั่น" limit={4} />
      <PromotionList title="โปรโมชั่นอื่นๆ ที่หน้าสนใจ" />
    </div>
  )
}
