import React from 'react'

function Profile({img, Title, prevmsg}) {
  return (
    <div className=' border-2 border-black mb-4  flex'>
        <img src={img} className='w-[20%]' />
        <div className='w-[80%] p-4'>
            <h1>{Title}</h1>
            <p>{prevmsg}</p>
        </div>
    </div>
  )
}

export default Profile