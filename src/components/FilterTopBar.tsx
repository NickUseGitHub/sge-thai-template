import React, { useState } from 'react'

interface FilterTopBarProps {
  title?: string
  cssClass?: string
  children?: any
}

export default function FilterTopBar({
  children,
  cssClass = 'md:hidden flex-col',
  title = 'Filters',
}: FilterTopBarProps) {
  const [isShowChildren, setIsShowChildren] = useState<boolean>(false)

  const handleBarOnClick = () => setIsShowChildren(!isShowChildren)

  return (
    <div className={`flex w-full w-f border-2 m-2 p-2 ${cssClass}`}>
      <div className="flex justify-between" onClick={handleBarOnClick}>
        <span className="text-md">{title}</span>
        <i className="fa fa-bars" aria-hidden="true" />
      </div>
      {isShowChildren && <div className="block w-f">{children}</div>}
    </div>
  )
}
