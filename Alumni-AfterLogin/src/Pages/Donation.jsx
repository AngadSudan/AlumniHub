import React from 'react'
import img from "../assets/box.png"
function Donation() {
  return (
    <div className='mt-[6rem] h-[87svh] w-full p-4 grid place-items-center'>
      <div className=''>
        <h1 className='text-center font-bold text-3xl'>No Donations Campaigns Active yet</h1>
        <img src={img} className="w-full"/>
      </div>
    </div>
  )
}

export default Donation