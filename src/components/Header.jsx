import { useState } from 'react'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp
} from 'react-icons/md'

const Header = () => {
  const [actve, setActive] = useState(false)

  return (
    <header className='flex items-center justify-between p-6 h-12 bg-[#f5faff] border border-b-[#d1e4f5] '>
      <div>
        <img src='/assets/waveLogo.png' alt='Logo' className='w-full h-6' />
      </div>

      <div
        className='flex items-center justify-between gap-12 bg-[#e6f3ff] hover:bg-[#d1e4f5] px-8 py-1.5 rounded-md
       hover:cursor-pointer  active:ring-4 active: ring-[#aabbee] '
        onClick={() => setActive(!actve)}
      >
        <span>name</span>
        {actve ? (
          <MdOutlineKeyboardArrowUp size={22} className='ml-6 ' />
        ) : (
          <MdOutlineKeyboardArrowDown size={22} className='ml-6' />
        )}
      </div>
    </header>
  )
}

export default Header
