import React from 'react'
import picture from '../assets/course.jpg'
import { NavLink } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='my-7'>
    <div>
    <img src={picture} alt="" className="h-[400px] w-10/12 mx-auto relative " />
    </div>
  <div className="hero-content text-neutral-content text-center">
  
    <div className="max-w-md absolute -mt-96 backdrop-blur-sm p-10 rounded-xl">
      <h1 className="mb-5 text-4xl font-bold"><i className="fa-brands fa-gg text-amber-200 mr-2"></i>Store -<span className='text-amber-200'> Course</span></h1>
      <p className="mb-5 font-bold test-xl">
        In our website you can store your information and course details.
      </p>
      <NavLink to='/storeCoursesForm'><button className="btn bg-white">Click here for storing<i className="fa-solid fa-right-to-bracket"></i></button></NavLink>
    </div>
  </div>
</div>
  )
}
