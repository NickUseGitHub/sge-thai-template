import React from 'react'
import './WhyUseUs.css'

export default function WhyUseUs() {
  return (
    <div className="w-full flex flex-col md:flex-row p-5 why-use-us text-left md:text-center">
      <div className="w-full md:w-1/2 p-2">
        <span className="text-bold p-3 text-5xl text-white">
          ทำไมต้องใช้บริการเรา
        </span>
        <p className="p-3 text-xl">
          เพราะทางเราคัดสรรสินค้า บริการ และ
          คำแนะนำที่ดีที่สุดให้กับลูกค้าทุกท่าน อีกทั้งยังพร้อมใส่ใจให้คำแนะนำ
          การเติบโต ในขณะที่ยังตอบโจทย์ทุกอย่างที่ลูกค้าต้องการให้มากที่สุด
        </p>
      </div>
      <div className="w-full md:w-1/2 p-2 flex flex-col items-center">
        <span className="text-bold p-3 text-5xl text-white">Our values</span>
        <ul className="w-full md:w-3/4 text-xl text-left text-green-400">
          <li>- สินค้าคุณภาพ มาตรฐานอุตสาหกรรม พร้อมรับประกัน</li>
          <li>- บริการขนส่งทั่วไทย ผ่าน EMS ไปรษณีย์ไทย รับของทันใจ</li>
          <li>- พร้อมด้วย บริการหลังการขาย ซ่อมบำรุง และ อะไหล่สำรอง</li>
          <li>- พร้อมให้ปรึกษาเกี่ยวกับสินค้า โดยทีมงานผู้เชี่ยวชาญ</li>
          <li>- คำสัญญาที่ให้จากทีมบริหาร</li>
        </ul>
      </div>
    </div>
  )
}
