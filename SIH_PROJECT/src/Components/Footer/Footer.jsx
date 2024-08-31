import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {
  return (
    <>
      <div className='h-[40svh] w-full p-4 pt-1 border-2 border-black mb-1'>
        <div className='flex justify-evenly p-16'>
          <ul>
          <li><NavLink className='mr-16' to="Home">Home</NavLink></li>
          <li><NavLink className='mr-16' to="Blogs">Blog</NavLink></li>
          <li><NavLink className='mr-16' to="Member">Members</NavLink></li>
          <li><NavLink className='mr-16' to="Oppurtunity">Opportunities</NavLink></li>
          <li><NavLink className='mr-16' to="Aboutus">About Us</NavLink></li>
          </ul>
          <div>
            <h1 className='text-[40px] text-right'>Alumni-Hub</h1>
            <span>A Network like Never Before</span>
            <div className='mt-8'>
              <ul>
                <li>Contact us </li>
                <li>Email: pD0wB@example.com</li>
                <li>PhoneNumber: +91 123456789</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <span className='w-full flex justify-center'>
        <a>Instagram</a>
        <a>Twitter</a>
        <a>Youtube</a>
        <a>Linkedin</a>
        {/* <a> <FontAwesomeIcon icon={faInstagram} /> </a>
        <a> <FontAwesomeIcon icon={faLinkedin} /> </a>
        <a> <FontAwesomeIcon icon={faYoutube} /> </a> */}
        {/* <a> <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" /> </a> */}
        </span>
      <p className='text-center text-xl mt-4 mb-8 '>copyright reserved- 2024</p>
    </>
  )
}

export default Footer