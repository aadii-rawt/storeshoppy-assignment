import React, { useState } from 'react';
import { FiHome, FiPrinter, FiUser } from 'react-icons/fi';
import { CgArrowTopRight } from 'react-icons/cg';
import { FaRegFileAlt } from 'react-icons/fa';
import { LuStamp } from 'react-icons/lu';
import { TbLocation } from 'react-icons/tb';
import { BiBook } from 'react-icons/bi';
import { TiBookmark } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navLinks = [
    {
      icon: <FiHome size={20} />,
      name: "Home"
    },
    {
      icon: <CgArrowTopRight size={20} />,
      name: "Payouts"
    },
    {
      icon: <FaRegFileAlt size={20} />,
      name: "Account Statement"
    },
    {
      icon: <FiUser size={20} strokeWidth={3} />,
      name: "Contacts",
      isactive: true
    },
    {
      icon: <TiBookmark size={20} />,
      name: "Vendor Payments"
    },
    {
      icon: <LuStamp size={20} />,
      name: "Tax Payments"
    },
    {
      icon: <TbLocation size={20} />,
      name: "Payments Links"
    },
    {
      icon: <FiPrinter size={20} />,
      name: "Payroll"
    },
    {
      icon: <BiBook size={20} />,
      name: "Reports"
    },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-primary border-r border-gray-700 min-h-screen p-3 pt-4 text-sm fixed transition-all duration-200 ${
          isHovered ? 'w-60' : 'w-16'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex justify-center items-center mb-4">
          <img
            src={isHovered ? "logo.svg" : "x-logo.svg"}
            alt="Logo"
            className="transition-all duration-200"
            style={{height: isHovered ? '70' : '40px' }}
          />
        </div>
        <div className="space-y-6">
          {navLinks.map((item, index) => (
            <Link
              to=""
              key={index}
              className={`flex items-center text-white space-x-4 hover:bg-[#383E5A] p-2 rounded-md cursor-pointer ${item.isactive ? "bg-[#383E5A]" : ""}`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className={`whitespace-nowrap ${isHovered ? 'block' : 'hidden'}`}>
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
