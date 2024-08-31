import React from 'react'
import src from '../Assets/Team.png'
import {Members} from '../Components/index'
import { useNavigate } from 'react-router-dom'
function Member() {
  const navigate = useNavigate()
  const move=function(){
    alert("lets go ");
    
  }
  
  return (
    <div className='p-4'>
      <div className='flex justify-evenly h-[90%]'>
          <img src={src} alt='team' className='h-[80%] w-[40%] my-auto' />
          <div className='w-[50%]'>
            <h1 className='text-[10svh] font-extrabold'>OUR</h1>
            <h1 className='text-[10svh] font-extrabold mb-16'>MEMBERS</h1>
            <button onClick={move} className='rounded-2xl bg-[#c89e36] h-[15%] w-[80%] font-extrabold text-2xl'>Join Our Association</button>
          </div>
        </div>
        <h1 className='text-center text-3xl w-[70%] mx-auto my-8'>JOIN AND GET THE OPPERTUNITY to INTERACT AND LEARN WITH THOUSANDS OF YOUR PEERS from VARIOUS INSTITUTIONS</h1>
        <div className='w-full p-4 mx-auto'>
          <Members  img={src} name="Chitkara University" email="blah@gmail.com" alumnicount="12345"/>
          <Members  img={src} name="Chitkara University" email="blah@gmail.com" alumnicount="12345"/>
          <Members  img={src} name="Chitkara University" email="blah@gmail.com" alumnicount="12345"/>
          <Members  img={src} name="Chitkara University" email="blah@gmail.com" alumnicount="12345"/>
        </div>
      </div>
  )
}

export default Member