import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <div className='min-h-[calc(100vh-370px)]'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}
