import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderLogin from './HeaderLogin'
function User() {
  return (
    <>
      <div className='h-[100%] w-full'>

        <HeaderLogin />
        <div className='bg-red-800 '>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default User