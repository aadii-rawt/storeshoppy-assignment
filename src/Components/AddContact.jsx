import { BiPlus } from 'react-icons/bi'
import { FiDownload } from 'react-icons/fi'
import { HiDotsVertical } from 'react-icons/hi'
import { IoMdRefresh } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { RiArrowDownSLine } from 'react-icons/ri'
import AddContactForm from './AddContactForm'
import { useState } from 'react'
function AddContact() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <h1 className='p-2 text-sm mx-8 my-4 rounded-md bg-[#282D4D]'><span className='p-1 mr-2 bg-[#C87F00] text-black text-[10px] font-bold rounded'>TEST</span> These are test contacts. Actual funds can only be transfered to contacts created in Live Mode. <Link to='' className='text-blue-500 ml-3' >Learn More</Link></h1>
            <div className='px-8 py-4 flex flex-wrap gap-y-3 items-center justify-between'>
                <h1 className='font-semibold'>Showing 1-6 active contacts • <span className='text-sm'>Sort by latest creation date</span></h1>
                <div className='flex items-center gap-1'>
                    <IoMdRefresh size={18} className='cursor-pointer w-9 h-9  hover:bg-hoverColor p-2 rounded' />
                    <div className='relative group'>
                        <HiDotsVertical size={18} className='mr-3 cursor-pointer w-9 h-9  hover:bg-hoverColor p-2 rounded' />
                        <div className=" absolute hidden group-hover:block  bg-slate-800 rounded-md overflow-hidden transition-all duration-500 text-nowrap">
                            <div className="" role="none">
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-[#383E5A]">View Contact Types</a>
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-[#383E5A]">Create Contact Types</a>
                            </div>
                        </div>
                    </div>
                    <button className='flex items-center gap-1 font-semibold text-sm border-[1.5px] border-blue-500 text-blue-500 px-3 py-1 rounded-sm'><FiDownload /> Export</button>
                    <div className='bg-blue-500 py-1.5 px-3 flex gap-2' onClick={() => setIsOpen(!isOpen)}>
                        <button className='flex items-center justify-center gap-1 font-semibold text-sm'><BiPlus strokeWidth={1} />  CONTACT</button>
                        <button className=' border-l border-gray-400 flex items-center justify-center pl-1'><RiArrowDownSLine /></button>
                    </div>
                </div>
            </div>

            {isOpen && <AddContactForm setIsOpen={setIsOpen} isOpen={isOpen} />}
        </div>
    )
}

export default AddContact