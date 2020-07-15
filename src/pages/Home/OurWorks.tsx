import React from 'react'

export default function OurWorks() {
  return (
    <section>
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <a
              className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              href="#"
            >
              Our works
            </a>
          </div>
        </nav>

        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-1/3 p-3 cursor-pointer">
            <img
              className="mb-3"
              src="https://www.sgethai.com/wp-content/uploads/2019/02/รีวิวตู้อบลมร้อน-1-400x400.jpg"
            />
            <span className="flex text-xl text-left">
              ต.หนองบัวใต้ อ.เมืองตาก จังหวัด ตาก วันที่ ‎29 ‎มกราคม ‎2562
            </span>
          </div>
          <div className="w-full md:w-1/3 p-3 cursor-pointer">
            <img
              className="mb-3"
              src="https://www.sgethai.com/wp-content/uploads/2019/02/รีวิวลูกค้าซื้อตู้อบ-400x400.jpg"
            />
            <span className="flex text-xl text-left">
              ต.หนองบัวใต้ อ.เมืองตาก จังหวัด ตาก วันที่ ‎29 ‎มกราคม ‎2562
            </span>
          </div>
          <div className="w-full md:w-1/3 p-3 cursor-pointer">
            <img
              className="mb-3"
              src="https://www.sgethai.com/wp-content/uploads/2019/02/ทดลองอบปลาดุกฟู-400x400.jpg"
            />
            <span className="flex text-xl text-left">
              ต.หนองบัวใต้ อ.เมืองตาก จังหวัด ตาก วันที่ ‎29 ‎มกราคม ‎2562
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
