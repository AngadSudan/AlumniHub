import React from 'react'
import src from '../../Assets/Logo.png'
function Oppo({img,heading,content1, content2}) {
  return (
      <div className='flex justify-evenly border-t-4 w-[90%] mx-auto mb-8 border-[#c89e36]'>
        <img src={src} alt={heading} className='my-auto'/>
        {/* <img src={img}  /> */}
        <div className='my-8'>
          <h1 className=' p-4 text-[33px] text-center mb-8 font-bold bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6]'>{heading}</h1>
          <ul className='text-[20px] mb-8 font-semibold text-[#27827d] list-disc'>
            <li>{content1}</li>
            <li>{content2}</li>
          </ul>
          <button className='h-[4rem] w-[60%] border-2 bg-[#c89e36] font-bold border-black'>Have A Look and Join</button>
        </div>
      </div>
  )
}

export default Oppo