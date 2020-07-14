import React from 'react'

export default function Footer() {
  return (
    <div className="w-full bg-footer">
      <footer className="container mx-auto py-8 border-t border-gray-400">
        <div className="container flex px-3 py-8 ">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full lg:w-1/3 ">
              <div className="px-3 md:px-0">
                <h3 className="font-bold text-gray-900">About</h3>
                <p className="py-4 text-white">
                  บริษัท สปริงกรีนอีโวลูชั่น จำกัด หรือแบรนด์ SGE
                  มุ่งเน้นพัฒนาเครเครื่องจักรหรือเครื่องใช้ไฟฟ้าคุณภาพ เช่น
                  เครื่องซีลสูญญากาศ ถุงซีลสูญญากาศ ตู้อบลมร้อน เตาอบเบเกอรี่
                  พร้อมบริการหลังการขายแบบครบวงจร
                </p>
              </div>
            </div>
            <div className="flex w-full lg:w-2/3">
              <div className="w-full lg:w-1/3 px-4">
                <h3 className="font-bold text-gray-900">Contact us</h3>
                <ul className="items-center pt-3">
                  <li className="flex items-center">
                    <i className="w-1/6 text-black fa fa-car" />
                    <a
                      className="w-5/6 text-white hover:text-black hover:underline"
                      href="#"
                    >
                      658 ซ.เจริญกกรุง 67 ยานนาวา สาทร กรุงเทพ
                    </a>
                  </li>

                  <li className="flex items-center">
                    <i className="w-1/6 text-black fa fa-phone" />
                    <a
                      className="w-5/6 text-white hover:text-black hover:underline"
                      href="#"
                    >
                      02-212-8127
                    </a>
                  </li>
                  <li className="flex items-center">
                    <i className="w-1/6 text-black fa fa-envelope-o" />
                    <a
                      className="w-5/6 text-white hover:text-black hover:underline"
                      href="#"
                    >
                      sales@sgethai.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <i className="w-1/6 text-black fa fa-globe" />
                    <a
                      className="w-5/6 text-white hover:text-black hover:underline"
                      href="www.sgethai.com"
                    >
                      www.sgethai.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
