import React from 'react'

function Testimonial({img,name,message}) {
  return (
    <>
    <div className='h-auto w-[20%]'>
        <img src={img} alt='name' className='h-[5rem] w-[5rem] rounded-full border-2 border-black p-2 mx-auto mb-2 mt-2' />
        <h1 className='text-center text-[23px]'><b><u>{name}</u></b></h1>
        <p className='text-center text-[27px]'>{message}</p>
    </div>
    </>
  )
}

export default Testimonial