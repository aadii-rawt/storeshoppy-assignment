import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { BsArrowDown } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { IoSearch } from 'react-icons/io5'
import { LuSatelliteDish, LuUserPlus } from 'react-icons/lu'
import { RiArrowDownSLine } from 'react-icons/ri'

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='bg-primary py-4 px-8 text-white flex  justify-between'>
      <div className='flex items-center gap-3'>
        <span className="nav-icons"><FiUser className='p-1 w-6 h-6 rounded-md bg-secondary' /></span>
        <h1 className='font-semibold text-xl'>Contacts</h1>
        <h1 className='font-semibold text-xl'>/</h1>
        <h1 className='bg-backColor text-blue-500 rounded-md p-1.5 font-bold text-sm'>Single</h1>
        <h1 className='font-semibold text-sm'>Import Contacts</h1>
      </div>
      <div className='hidden md:flex items-center gap-3 text-sm font-semibold text-blue-500'>
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="flex items-center gap-1 justify-center w-full px-4 py-2 text-sm font-medium text-blue-500 border-blue-500 border-[1.5px]"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <BiPlus />
              PAYOUT
             <RiArrowDownSLine />
            </button>
          </div>

          {isOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-slate-800 text-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-[#383E5A]"
                  role="menuitem"
                  id="menu-item-0"
                >
                  Bulk Payout
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-[#383E5A]"
                  role="menuitem"
                  id="menu-item-1"
                >
                  Upload Invoice
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-[#383E5A]"
                  role="menuitem"
                  id="menu-item-2"
                >
                  Add Contact
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-[#383E5A]"
                  role="menuitem"
                  id="menu-item-3"
                >
                  Team Member
                </a>
              </div>
            </div>
          )}
        </div>
        <IoSearch size={18} />
        <LuSatelliteDish size={18} color='orange' />
        <LuUserPlus size={18} />
      </div>
    </div>
  )
}

export default Header