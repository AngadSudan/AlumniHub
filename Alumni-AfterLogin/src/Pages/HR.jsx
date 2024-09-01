import React from 'react'
import img from "../assets/bell.png"
function Donation() {
  return (
    <div className='mt-[6rem] h-[87svh] w-full p-4 grid place-items-center'>
      <div className=''>
        <h1 className='text-center font-bold text-3xl mb-4'>Stay Tuned for Hiring Updates</h1>
        <img src={img} className="w-[90%] h-[90%]"/>
      </div>
    </div>
  )
}

export default Donation