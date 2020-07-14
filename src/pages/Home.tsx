import React from 'react'
import Banner from '../components/Banner'
import MapContact from '../components/MapContact'

export default function Home() {
  return (
    <div className="m-auto antialiased font-sans font-serif font-mono text-center">
      <Banner />
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 h-64 md:h-auto">
          <MapContact />
        </div>
        <div className="w-full flex flex-col md:w-2/3 py-5">
          <span className="w-full text-center text-black font-bold text-2xl mb-10">
            บริษัท สปริงกรีนอีโวลูชั่น จำกัด
          </span>
          <div className="w-full flex flex-col justify-center">
            <a
              className="flex justify-center"
              href="https://line.me/R/ti/p/%40vea5348r"
            >
              <img src="https://scdn.line-apps.com/n/line_add_friends/btn/en.png" />
            </a>
            <div className="flex text-center justify-center">
              <img src="http://qr-official.line.me/L/8d-QH7EIdd.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
