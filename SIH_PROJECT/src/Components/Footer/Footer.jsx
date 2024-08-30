import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <div className='h-[20%] w-full p-4 border-2 border-black'>
        <div className='flex justify-evenly p-16'>
          <ul>
            <li className='mr-16 mb-4' to="#">Home</li>
            <li className='mr-16 mb-4' to="#">Blog</li>
            <li className='mr-16 mb-4' to="#">Members</li>
            <li className='mr-16 mb-4' to="#">Opportunities</li>
            <li className='mr-16 mb-4' to="#">About Us</li>
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
        <a>Facebook</a>
        <a>Linkedin</a>
        </span>
      <h1 className='text-center text-3xl mt-16'>copyright reserved- 2024</h1>
    </>
  )
}

export default Footer