import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const[isSignInForm,setIsSignInForm]=useState(true)
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_small.jpg" alt="" srcset="" />
        </div>
        <form className='w-3/12 absolute p-12 my-36 mx-auto left-0 right-0 bg-black/70 text-white rounded-lg '>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
           {!isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-black/80 border border-gray-400 rounded-sm' />}  
            <input type="text" placeholder='Email' className='p-4 my-4 w-full bg-black/80 border border-gray-400 rounded-sm' />
            <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-black/80 border border-gray-400 rounded-sm' />
            <button className='p-2 my-1 w-full bg-red-700 rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>

            <p className='py-10'>{isSignInForm?"New to Netflix?":"Already registered?"} <span className='text-blue-700 cursor-pointer' onClick={toggleSignInForm}>{!isSignInForm?"Sign In":"Sign Up"}</span> now</p>

        </form>
    </div>
  )
}

export default Login