import React from 'react'

export default function Settings() {
  return (
    <div className="w-full px-4 mt-8 md:mt-0">
      <h1 className="text-left text-2xl font-bold">Profile</h1>

      <div className="w-full bg-gray-400 flex flex-col md:flex-row items-center md:items-start mt-2 rounded-lg py-8">
        <div className="w-1/2 flex justify-center md:w-1/3 m-4">
          <img
            className="md:w-2/3 rounded-full"
            src="https://i.imgur.com/hP1vqMN.png"
          />
        </div>
        <div className="w-full md:w-2/3 p-4">
          <ul className="w-full text-md md:text-2xl flex flex-col items-start justify-start mb-10">
            <li className="w-full flex justify-between mb-2">
              <span className="text-left font-bold mr-4">ชื่อ - นามสกุล</span>
              <span className="text-right text-sm md:text-xl">
                นกน้อย รักการบิน
              </span>
            </li>
            <li className="w-full flex justify-between mb-2">
              <span className="text-left font-bold mr-4">อีเมล์</span>
              <span className="text-right text-sm md:text-xl">
                email@email.com
              </span>
            </li>
            <li className="w-full flex justify-between mb-2">
              <span className="text-left font-bold mr-4">วันเกิด</span>
              <span className="text-right text-sm md:text-xl">
                20 กรกฏาคม 2563
              </span>
            </li>
            <li className="w-full flex justify-between mb-2">
              <span className="text-left font-bold mr-4">อายุ</span>
              <span className="text-right text-sm md:text-xl">30 ปี</span>
            </li>
            <li className="w-full flex justify-between mb-2">
              <span className="text-left font-bold mr-4">ที่อยู่การจัดส่ง</span>
              <span className="text-right text-sm md:text-xl">
                12/388 อ.​ อำเภอ ต.ตำบล จ.จังหวัด
              </span>
            </li>
            <li className="w-full flex justify-between mb-2">
              <span className="text-left font-bold mr-4">รหัสไปรษณีย์</span>
              <span className="text-right text-sm md:text-xl">10200</span>
            </li>
            <li className="w-full flex justify-between mb-2">
              <span className="text-left font-bold mr-4">จังหวัด</span>
              <span className="text-right text-sm md:text-xl">กรุงเทพ</span>
            </li>
          </ul>

          <div className="w-full flex justify-end mt-10">
            <button className="w-full md:w-3/5 lg:w-2/5 text-lg bg-green-400 rounded-lg p-3">
              <i className="fa fa-pencil" aria-hidden="true" /> แก้ไข
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
