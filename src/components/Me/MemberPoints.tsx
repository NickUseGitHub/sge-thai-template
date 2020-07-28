import React from 'react'

export default function MemberPoints() {
  return (
    <div className="w-full px-4 mb-5 mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between text-left text-2xl font-bold">
        <span>คะแนนสะสมของท่าน</span>
      </div>

      <div className="flex justify-between items-center text-green-400 rounded-md border-4 border-ping-300 p-3">
        <i className="text-4xl fa fa-rub" aria-hidden="true" />
        <span className="text-4xl font-bold">3,900</span>
      </div>
    </div>
  )
}
