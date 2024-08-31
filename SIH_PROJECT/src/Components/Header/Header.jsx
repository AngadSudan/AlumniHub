import React from 'react'
import logo from "../../Assets/Logo.png"
import {Link, NavLink, useNavigate} from 'react-router-dom'
import './Header.css'
function Header() {
  const navigate= useNavigate()
  const move=function(){
    console.log("redirect to the user site")
    navigate("User/")
  }
  return (
    <>
        <img src={logo} className='h-[5rem] w-[10%] ml-8' alt="Alumni-HUB"/>
        <div id="Header" className='text-slate-100   flex justify-evenly'>
            {/* <div> */}
                <ul className='flex justify-evenly p-4 pl-16'>
                  <li><NavLink className='mr-16' to="Home">Home</NavLink></li>
                  <li><NavLink className='mr-16' to="Blogs">Blog</NavLink></li>
                  <li><NavLink className='mr-16' to="Member">Members</NavLink></li>
                  <li><NavLink className='mr-16' to="Oppurtunity">Opportunities</NavLink></li>
                  <li><NavLink className='mr-16' to="Aboutus">About Us</NavLink></li>
                </ul>
            {/* </div> */}
            <button onClick={move} className='bg-yellow-600 my-2 h-[2.6rem] w-[10rem] text-3xl'><b>Join Us</b></button>
        </div>
    </>
  )
}

export default Header