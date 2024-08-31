import React from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import './Header.css'
function Header() {
  const move=function(){
    console.log("redirect to the user site")
  }
  return (
    <>
        <img src='../Assets/Logo.png' className='h-8 w-full ' alt="Alumni-HUB"/>
        <div id="Header" className='text-slate-100 bg-green-600  flex justify-evenly'>
            {/* <div> */}
                <ul className='flex justify-evenly p-4 pl-16'>
                  <li><NavLink className='mr-16' to="Home">Home</NavLink></li>
                  <li><NavLink className='mr-16' to="Blogs">Blog</NavLink></li>
                  <li><NavLink className='mr-16' to="Member">Members</NavLink></li>
                  <li><NavLink className='mr-16' to="Oppurtunity">Opportunities</NavLink></li>
                  <li><NavLink className='mr-16' to="Aboutus">About Us</NavLink></li>
                </ul>
            {/* </div> */}
            <Link to="/Signup"><button onClick={move} className='bg-yellow-600 my-2 h-[2.6rem] w-[10rem] text-3xl'><b>Login</b></button></Link>
        </div>
    </>
  )
}

export default Header