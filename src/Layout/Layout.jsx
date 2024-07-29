import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'

function Layout() {
  return (
    <>
        <div className="flex ">
        <Sidebar />
        <div className=' w-full ml-14 min-h-screen bg-secondary'>
        <Header />
        <Outlet />
        </div>
        </div>
      </>
  )
}

export default Layout