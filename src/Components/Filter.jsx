import React, { useState } from 'react';

function Filter() {
  const [filters, setFilters] = useState([
    {
      id: 1,
      title: 'All Contacts',
      status: true,
    },
    {
      id: 2,
      title: 'Vendors',
      status: false,
    },
    {
      id: 3,
      title: 'Employees',
      status: false,
    },
    {
      id: 4,
      title: 'Customers',
      status: false,
    },
  ]);

  const toggleFilter = (id) => {
    setFilters(filters.map(filter =>
      filter.id === id ? { ...filter, status: !filter.status } : filter
    ));
  };

  return (
    <div className='bg-filterBg px-8 py-4 flex flex-wrap items-center justify-between gap-2'>
      <div className='flex flex-wrap gap-2 items-center text-sm'>
        <h1 className='font-semibold my-2'>Quick Filters:</h1>
        {/* <div className='flex flex-col lg:flex-row  gap-2'> */}
          {filters.map((item) => (
            <div
              key={item.id}
              className='text-blue-500 flex items-center gap-2 cursor-pointer bg-[#121D42] px-4 py-2 font-semibold rounded-sm'
              onClick={() => toggleFilter(item.id)}
            >
              <img src={`${item.status ? 'check.svg' : 'uncheck.svg'}`} alt="" />
              <span>{item.title}</span>
            </div>
          ))}
        {/* </div> */}
      </div>
      <div>
        <select name="" id="" className='bg-transparent font-semibold text-sm outline-none'>
          <option value="">View More Filter</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
