import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

export default function StoreCoursesForm() {
  const token = localStorage.getItem('authToken');
  const navigate = useNavigate()

  const handleAddCourse = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const badge_text = form.badge_text.value;
    const badge_color = form.badge_color.value;
    const instructor_name = form.instructor_name.value;
    const newCourse = {title,description,badge_text,badge_color,instructor_name}
    // console.log(newCourse)

    // send data to the server
    try{
      fetch('https://react-interview.crd4lc.easypanel.host/api/course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newCourse), 
      })
      .then(res => res.json())
      .then(data => {
      // console.log(data)
      if(data.status == true){
        Swal.fire({
        title: 'Success',
        text: 'Course added successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
        })
      }
        form.reset()
        navigate('/')
    })
  }
  catch (err) {
      Swal.fire({
          title: 'Error',
          text: 'Course added unsuccessfull',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
  }
    
  }
  return (
    <div className='w-10/12 mx-auto py-7'>
      <Helmet>
        <title>Store-Course | Store Courses Form</title>
      </Helmet>
      <div className=' bg-base-200 rounded-xl p-10'>
        <h2 className='text-center text-4xl font-bold text-[#374151]'>Add Courses</h2>
        <form onSubmit={handleAddCourse}>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Title</span>
                </div>
                <input type="text" placeholder="Enter Title*" name='title' className="input input-bordered w-full" required />
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Description</span>
                </div>
                <textarea type="text" placeholder="Enter Description*" name='description' className="textarea" required></textarea>
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Badge Text</span>
                </div>
                <input type="text" placeholder="Enter badge text*" name='badge_text' className="input input-bordered w-full" required />
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Badge Color</span>
                </div>
                <input type="text" placeholder="Enter badge Color*" name='badge_color' className="input input-bordered w-full" required />
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Instructor Name</span>
                </div>
                <input type="text" placeholder="Enter Instructor Name*" name='instructor_name' className="input input-bordered w-full" required />
                </label>
            </div>
        </div>

        <div className='mt-6'>
            <input type="submit" value="Add Course" className="btn w-full font-bold border-white bg-cyan-900 text-white" />
        </div>
        </form>
        </div>
    </div>
  )
}
