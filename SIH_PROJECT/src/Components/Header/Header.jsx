import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Header.css'
function Header() {
  const move=function(){
    console.log("redirect to the user site")
  }
  return (
    <>
        <img  className='h-8 w-full ' alt="Alumni-HUB"/>
        <div className='text-slate-100 bg-green-600  flex justify-evenly'>
            {/* <div> */}
                <ul className='flex justify-evenly p-4 pl-16'>
                  <li className='mr-16' to="#">Home</li>
                  <li className='mr-16' to="#">Blog</li>
                  <li className='mr-16' to="#">Members</li>
                  <li className='mr-16' to="#">Opportunities</li>
                  <li className='mr-16' to="#">About Us</li>
                </ul>
            {/* </div> */}
            <button onClick={move} className='bg-yellow-600 my-2 h-[2rem] w-[10rem] text-2xl'><b>Login</b></button>
        </div>
    </>
  )
}

export default Header