import React from 'react'

interface ProductListProps {
  title: string
}

export default function ProductListSection({ title }: ProductListProps) {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <a
              className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              href="#"
            >
              {title}
            </a>

            <div className="flex items-center" id="store-nav-content">
              <button className="rounded-full p-3 bg-theme">
                More products
              </button>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}
