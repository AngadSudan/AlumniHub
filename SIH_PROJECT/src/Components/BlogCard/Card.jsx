import React from 'react'

function Card({img,Title,preview}) {
  return (
    <div className='k h-auto w-[20%] p-4'>
        <img src={img} alt={Title} className='h-[10rem] w-full  mb-2' />
        <h2 className='text-center border-b-4 border-[#c69c33]'>{Title}</h2>
        <p className='text-center my-4'>{preview}</p>
        <a href="#" className='text-left text-[#c69c33]'>Continue Reading...</a>
    </div>
  )
}

export default Card