import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="w-full bg-footer">
        <footer className="container mx-auto py-8 border-t border-gray-400">
          <div className="container flex px-3 py-8 ">
            <div className="w-full mx-auto flex flex-wrap">
              {/* About */}
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
              {/* End About */}

              {/* About Info */}
              <div className="flex flex-col md:flex-row w-full lg:w-2/3">
                <div className="w-full lg:w-1/3 px-4 p-4 lg:py-0 md:px-1">
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

                <div className="w-full lg:w-1/3 flex flex-col px-4 p-4 lg:py-0 md:px-1">
                  <h3 className="font-bold text-gray-900">Verified by</h3>
                  <img src="https://www.sgethai.com/wp-content/uploads/2019/04/DBD-Registered.png" />
                </div>

                <div className="w-full lg:w-1/3 flex flex-col px-4 p-4 lg:py-0 md:px-1">
                  <h3 className="font-bold text-gray-900">Alliances</h3>
                  <ul className="items-center pt-3">
                    <li className="flex items-center">
                      <i className="w-1/6 text-black text-center text-2xl mx-1 fa fa-globe" />
                      <div className="w-5/6 flex flex-col">
                        <span className="p-1 font-bold text-lg">SGE Chem</span>
                        <a
                          className="w-5/6 text-white hover:text-black hover:underline"
                          href="https://sgechem.com/"
                        >
                          https://sgechem.com/
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <i className="w-1/6 text-black text-center text-2xl mx-1 fa fa-globe" />
                      <div className="w-5/6 flex flex-col">
                        <span className="p-1 font-bold text-lg">
                          Agricultural Drones
                        </span>
                        <a
                          className="w-5/6 text-white hover:text-black hover:underline"
                          href="http://www.sgedrone.com/"
                        >
                          http://www.sgedrone.com/
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <i className="w-1/6 text-black text-center text-2xl mx-1 fa fa-globe" />
                      <div className="w-5/6 flex flex-col">
                        <span className="p-1 font-bold text-lg">
                          Kacha; Electric hoist
                        </span>
                        <a
                          className="w-5/6 text-white hover:text-black hover:underline"
                          href="https://www.kachathailand.com/"
                        >
                          https://www.kachathailand.com/
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End About Info */}
            </div>
          </div>
        </footer>
      </div>

      {/* powered by */}
      <div className="w-full text-center p-2">
        Copyright 2019 Spring Green Evolution | All Rights Reserved | Powered by
        SGE
      </div>
      {/* end powered by */}
    </>
  )
}
