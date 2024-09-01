import React from 'react'

function Navlogo({icon,usage}) {
  return (
    <div className="h-12 w-12 rounded-lg">
        <p className='font-[70px] w-[100%] h-[80%]'>{icon}</p>
        <h1 className='text-center text-xl'>{usage}</h1>
    </div>
  )
}

export default Navlogo