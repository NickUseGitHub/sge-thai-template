import React from 'react'

interface CartItemProps {
  title: string
  thumbnail: string
  amount?: number
  readonly?: boolean
}

export default function CartItem({
  title,
  thumbnail,
  readonly,
  amount = 9,
}: CartItemProps) {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-stretch my-3 border-b-2 p-2">
      <div className="inline-flex w-full md:w-1/4 justify-center mb-2 md:mb-0">
        <img src={thumbnail} />
      </div>
      <div className="inline-flex flex-col justify-between w-full md:w-3/4">
        <div className="flex flex-col items-start">
          <span className="text-left text-xl">{title}</span>
          <span className="pt-1 text-gray-900">£9.99</span>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center mt-2">
          <div className="w-full flex justify-start items-center">
            {/* Amount controll */}
            {readonly && '9 '}
            {!readonly && (
              <div className="w-full inline-flex md:w-1/3 border-2 rounded-l-full rounded-r-full overflow-x-hidden mr-2">
                <button className="w-1/3 bg-green-300 border-r-2 text-center">
                  <i className="fa fa-caret-left" aria-hidden="true"></i>
                </button>
                <input
                  className="w-1/3 text-right px-2"
                  type="text"
                  value={amount}
                />
                <button className="w-1/3 bg-green-300 border-l-2 text-center">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                </button>
              </div>
            )}
            {/* Amount controll */}
            ชิ้น
          </div>

          {!readonly && (
            <button className="w-full md:w-1/3 text-white rounded-full bg-red-900 mt-1 p-2">
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
