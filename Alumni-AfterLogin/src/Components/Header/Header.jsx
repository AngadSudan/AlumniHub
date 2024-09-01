import React from 'react'
import Logo from '../../assets/react.svg'
import {NavLink} from 'react-router-dom'
import "./Header.css"
function Header() {
  return (
    <div className=' fixed top-0 left-0 z-10 w-full flex bg-[#1c7c77] p-4'>
      <img src={Logo}className='mr-4 w-[20%] h-[4rem]'/>
      <ul className='mr-36 my-auto  w-[55%] text-white list-none flex justify-evenly'>
        <NavLink to="Home"><li>Home</li></NavLink>
        <NavLink to="Donation"><li>Donation</li></NavLink>
        <NavLink to="HR"><li>HR</li></NavLink>
        <NavLink to="Chat"><li>Chat</li></NavLink>
      </ul>
      <div className='my-auto'>
        <NavLink to="Profile" className=" text-white">Profile</NavLink>
      </div>
    </div>
  )
}

export default Header