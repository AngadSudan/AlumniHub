import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderLogin from './HeaderLogin'
function User() {
  return (
    <>
      <div className='h-[80%] w-full'>
        <HeaderLogin />
        <Outlet/>
      </div>
    </>
  )
}

export default User