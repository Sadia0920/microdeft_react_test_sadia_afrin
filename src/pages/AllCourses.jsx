import React, { useState } from 'react'
import Swal from 'sweetalert2';
import Card from './../components/Card';
import { Helmet } from 'react-helmet-async';

export default function AllCourses() {
  const [courses,setCourses]=useState([])

  try{
    const token = localStorage.getItem("authToken");
   
    if (!token) {
      Swal.fire({
        title: 'Error',
        text: ' Authorization token not found. Please log in.',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }

    fetch('https://react-interview.crd4lc.easypanel.host/api/course', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${token}`
      },
    })
    .then(res => res.json())
    .then(data => {
      setCourses(data.data.data);
      // console.log(data.data.data)
  })
}
  catch (err) {
    Swal.fire({
        title: 'Error',
        text: 'Error',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
}

  return (
    <div className='w-10/12 mx-auto'>
      <Helmet>
          <title>Store-Course | All Courses</title>
      </Helmet>
      <h1 className='text-3xl font-bold text-center my-9'>All Courses</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-9'>
      {
        courses.map((course,idx) => <Card
          key={idx} 
          course={course}
          ></Card>)
      }
      </div>
    </div>
  )
}
