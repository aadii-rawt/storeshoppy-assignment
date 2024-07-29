import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { FiDownload } from 'react-icons/fi'
import { HiDotsVertical } from 'react-icons/hi'
import { IoMdRefresh } from 'react-icons/io'
import { Link } from 'react-router-dom'
import ContactList from '../Components/ContactList'
import Filter from '../Components/Filter'

function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=' text-white'>
            <Filter />
            <div>
                <h1 className='p-2 text-sm mx-8 my-4 rounded-md bg-[#282D4D]'><span className='p-1 mr-2 bg-[#C87F00] text-black text-[10px] font-bold rounded'>TEST</span> These are test contacts. Actual funds can only be transfered to contacts created in Live Mode. <Link to='' className='text-blue-500 ml-3' >Learn More</Link></h1>
                <div className='px-8 py-4 flex flex-wrap gap-y-3 items-center justify-between'>
                    <h1 className='font-semibold'>Showing 1-6 active contacts • <span className='text-sm'>Sort by latest creation date</span></h1>
                    <div className='flex items-center gap-1'>
                        <IoMdRefresh size={18} className='mr-3 cursor-pointer' />

                        
                        <div className="relative inline-block text-left">
                            <div>
                                {/* <button
                                    type="button"
                                    className="flex items-center gap-1 justify-center w-full px-4 py-2 text-sm font-medium text-blue-500 border-blue-500 border-[1.5px]"
                                    id="menu-button"
                                    aria-expanded="true"
                                    aria-haspopup="true"
                                    onMouseEnter={() => setIsOpen(true)}
                                    onMouseLeave={() => setIsOpen(false)}
                                > */}
                                   <HiDotsVertical size={18} className='mr-3 cursor-pointer'
                                   id="menu-button"
                                   aria-expanded="true"
                                   aria-haspopup="true"
                                   onMouseEnter={() => setIsOpen(true)}
                                   onMouseLeave={() => setIsOpen(false)}
                                    />
                            
                            </div>
                            {isOpen && (
                                <div
                                    className="origin-top-right absolute left-0-0 mt-2 w-40 rounded-md shadow-lg bg-slate-800 text-white ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                                        >View Contact Types</a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm hover:bg-[#383E5A]"
                                            role="menuitem"
                                            id="menu-item-0"
                                        >Create Contact Types</a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <button className='flex items-center  gap-1 font-semibold text-sm border-[1.5px] border-blue-500 text-blue-500 px-3 py-1 rounded-sm'><FiDownload /> Export</button>
                        <select name="" id="" className='outline-none bg-blue-500 text-sm font-semibold px-3 py-1.5 rounded-sm'>
                            <option value=""><BiPlus />CONTACT </option>
                        </select>
                    </div>
                </div>
                <div className='px-8 py-4 border-b border-[rgba(231, 232, 236, .1)]'>
                    <hr className='bg-[rgba(231, 232, 236, .1)]' />
                    <ContactList />
                </div>
            </div>

            <div className='flex items-center justify-center gap-2 bg-[#6E6ED9] fixed bottom-10 right-10 py-2 px-3 cursor-pointer rounded-3xl'>
                <img src="x-logo.svg" alt="" className='w-8 h-8 p-2 bg-[#8B8BE1] rounded-full ' />
                <h1 className='font-bold '>Need Help?</h1>
            </div>
        </div>
    )
}

export default Contact