import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { IoSearch } from 'react-icons/io5'
import { LuSatelliteDish, LuUserPlus } from 'react-icons/lu'
import { RiArrowDownSLine } from 'react-icons/ri'

function Header() {
  return (
    <div className='bg-primary py-4 px-8 text-white flex  justify-between'>
      <div className='flex items-center gap-3'>
        <span className="nav-icons"><FiUser className='p-1 w-6 h-6 rounded-md bg-secondary' /></span>
        <h1 className='font-semibold text-xl'>Contacts</h1>
        <h1 className='font-semibold text-xl'>/</h1>
        <h1 className='bg-backColor text-blue-500 rounded-md p-1.5 font-bold text-sm'>Single</h1>
        <h1 className='font-semibold text-sm'>Import Contacts</h1>
      </div>
      <div className='hidden md:flex items-center gap-3 text-sm font-semibold '>
        <div className="relative group text-blue-500 border-[1.5px] rounded-sm border-blue-500">
          <div className=' py-1.5 px-3 flex gap-2'>
            <button className='flex items-center justify-center  gap-1 font-semibold text-sm'><BiPlus strokeWidth={1} /> PAYOUT</button>
            <button className=' border-l border-gray-400 flex items-center justify-center pl-1'><RiArrowDownSLine /></button>
          </div>
          <div className="absolute hidden group-hover:block text-white bg-slate-800 rounded-md overflow-hidden transition-all duration-500 text-nowrap">
            <div className="" role="none">
              <a href="#" className="block px-4 py-2 text-sm hover:bg-[#383E5A]">Bulk Payout</a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-[#383E5A]">Upload Invoice</a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-[#383E5A]">Add Contact</a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-[#383E5A]"> Team Member</a>
            </div>
          </div>
        </div>
        <IoSearch size={18} />
        <LuSatelliteDish size={18} color='orange' />
        <LuUserPlus size={18} />
      </div>
    </div>
  )
}

export default Header