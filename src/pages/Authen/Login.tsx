import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className="m-auto antialiased font-sans font-serif font-mono text-center">
      <section className="bg-white py-8">
        <div className="w-full flex justify-end items-center py-24 md:py-16 login-section">
          <div className="container mx-auto flex flex-col md:flex-row justify-around flex-wrap pt-4 pb-12">
            <div className="w-full opacity-75 md:rounded-lg bg-gray-300 text-black text-left md:w-2/4 px-8 mb-10 md:mb-0 p-2">
              <h1 className="text-3xl font-bold">ทำไมถึงต้องเลือกเรา SGE</h1>
              <p className="text-2xl mt-4 p-2">
                เพราะทางเราคัดสรรสินค้า บริการ และ
                คำแนะนำที่ดีที่สุดให้กับลูกค้าทุกท่าน
                อีกทั้งยังพร้อมใส่ใจให้คำแนะนำ การเติบโต
                ในขณะที่ยังตอบโจทย์ทุกอย่างที่ลูกค้าต้องการให้มากที่สุด
              </p>
            </div>

            <div className="sm:w-3/4 md:w-1/4 flex flex-col bg-gray-300 md:rounded-lg border-2 p-10">
              <input className="rounded-lg p-2 mb-2" placeholder="Username" />
              <input className="rounded-lg p-2 mb-2" placeholder="Password" />
              <button className="bg-green-300 rounded-lg text-black p-2">
                Login
              </button>
              <button className="bg-blue-700 rounded-lg text-white p-2 mt-2">
                <i className="fa fa-facebook" aria-hidden="true" /> Login with
                Facebook
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
