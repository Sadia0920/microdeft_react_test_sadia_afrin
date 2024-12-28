import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    
  return (
    <div className='bg-cyan-900 text-white py-4'>
    <div className="navbar w-10/12 mx-auto">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allCourses'>All Courses</NavLink></li>
    <li><NavLink to='/storeCoursesForm'>Store Courses Form</NavLink></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl"><i className="fa-brands fa-gg text-amber-200"></i>Store -<span className='text-amber-200'>Course</span></a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allCourses'>All Courses</NavLink></li>
    <li><NavLink to='/storeCoursesForm'>Store Courses Form</NavLink></li>
      </ul>
    </div>
    <div className="navbar-end">
    <NavLink to='/registrationForm' className="btn mr-3">Registration</NavLink>
    <NavLink to='/loginForm' className="btn">Login</NavLink>
    </div>
  </div>
  </div>
  )
}
