import React from 'react'

function Members({img,name,email, alumnicount}) {
  return (
    <div>
         <div className='border-[#27827d] border-4 h-[4 0%] w-[90%] mb-16'>
        <div className='border-[#c89e36] border-4 h-[110%] w-[100%] ml-4 mt-2 p-4'>
          <div className='flex justify-evenly'>
            <img src={img} alt="foundation"className='my-auto w-[20%] h-[9rem]' />
            <div>
              <h1 className='font-extrabold text-3xl mb-1'>{name}</h1>
            {/* <h1>{name}</h1> */}
              <h1 className='font-semibold mb-2'>Email: {email}</h1>
              <h1 className='font-semibold mb-2'> Alumni Count {alumnicount}</h1>
              <button className='bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6] p-4 border-2 border-black font-bold'>View Community...</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Members