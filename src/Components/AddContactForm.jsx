import React, { useState } from 'react'
import { createPortal } from 'react-dom'

function AddContactForm({ setIsOpen, isOpen }) {
    const [Data, setData] = useState({
        name: "",
        type: "",
        phone: '',
        email: "",
    })

    function handleData(e) {
        const { name, value } = e.target    
        setData((prev) => {
            ({ ...prev, [name]: value })
        })
    }

    // function handle
    return (
        createPortal(
            <div className="min-h-screen fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-70" onClick={(e) => setIsOpen(!isOpen)}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md" onClick={(e) => e.stopPropagation()}>
                    {/* <form> */}
                        <div className="mb-4">
                            <label className="block text-gray-400 text-sm font-bold mb-2">
                                Contact Name *
                            </label>
                            <input
                                className=" rounded w-full py-2 px-3 text-gray-300 bg-[#2D3541] leading-tight focus:outline-none focus:shadow-outline"
                                name="name"
                                type="text"
                                value={Data.name}
                                onChange={handleData}
                                placeholder="Contact Name"
                                 />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-400 text-sm font-bold mb-2">
                                Contact Type
                            </label>
                            <select
                                className="rounded w-full py-2 px-3 text-gray-300 bg-[#2D3541] leading-tight focus:outline-none focus:shadow-outline"
                                name="type" onChange={handleData}>
                                <option value="" disabled defaultValue="">Select</option>
                                <option value="type1">Type 1</option>
                                <option value="type2">Type 2</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="phone">
                                Phone No.
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 rounded-l-md  bg-[#2D3541] text-gray-300 text-sm">
                                    +91
                                </span>
                                <input
                                    className="rounded-r w-full py-2 px-3 text-gray-300 bg-[#2D3541] leading-tight focus:outline-none focus:shadow-outline"
                                    name="phone"
                                    type="text"
                                    value={Data.phone}
                                    onChange={handleData}
                                    placeholder="Phone Number (optional)"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                                Email ID
                            </label>
                            <input
                                className="rounded w-full py-2 px-3 text-gray-300 bg-[#2D3541] leading-tight focus:outline-none focus:shadow-outline"
                                name="email"
                                type="email"
                                value={Data.email}
                                onChange={handleData}
                                placeholder="Email ID (optional)"
                            />
                        </div>
                        <div className="mb-4">
                            <button className="text-blue-500 text-sm"> Add more details
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-[#2D3541] text-white font-semibold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={(e) => setIsOpen(!isOpen)}>
                                CANCEL
                            </button>
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                NEXT
                            </button>
                        </div>
                    {/* </form> */}
                </div>
            </div>

            , document.getElementById("portal")
        )
    )
}

export default AddContactForm