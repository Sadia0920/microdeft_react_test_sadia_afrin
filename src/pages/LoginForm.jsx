import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Lottie from "lottie-react";
import registerLottieData from "../assets/animation/Animation-2.json"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

export default function LoginForm() {

  const navigate = useNavigate()
  const [showPassword,setShowPassword]=useState(false)

  const handleSubmitLoginForm = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginData = {email,password};
    // console.log(registrationData);

    try{
      fetch('https://react-interview.crd4lc.easypanel.host/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(loginData), 
      })
      .then(res => res.json())
      .then(data => {
      // console.log(data)
      const token = data.data.token;
      // console.log(token)
      localStorage.setItem('authToken', token);
      if(data.status == true){
        Swal.fire({
        title: 'Success',
        text: 'Login data added successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
        })
      }
        form.reset()
        navigate('/allCourses')
    })
  }
  catch (err) {
      Swal.fire({
          title: 'Error',
          text: 'Login data added unsuccessfull',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
  }
}
  return (
    <div>
  <Helmet>
    <title>Store-Course | Login Form</title>
  </Helmet>
  <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    <Lottie animationData={registerLottieData}></Lottie>
    </div>
    <div className="card bg-base-100 w-full shadow-2xl">
    <h1 className="text-3xl font-bold text-center mt-5">Login now!</h1>
      <form onSubmit={handleSubmitLoginForm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Enter Your Email*" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword?'text':'password'} placeholder="Enter Your Password*" name="password" className="input input-bordered" required />
          <a onClick={()=>setShowPassword(!showPassword)} className="btn btn-xs text-lg absolute mt-12 ml-[280px] md:ml-[480px] lg:ml-[420px]">{showPassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}</a>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-cyan-900 text-white">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
  </div>
  )
}
