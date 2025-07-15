import React from 'react'
import logo from "../assets/netflixlogo.png"
const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img src={logo} alt="logo" srcset="" className='w-44' />
    </div>
  )
}

export default Header