import React from 'react'
import {Link, NavLink} from 'react-router-dom'
function HeaderLogin() {
  return (
    <>
      <div className=' h-[20%] p-4 w-full bg-yellow-700'>
        <div className='w-full h-[20%] '>
          <div className='flex justify-evenly w-full h-[20%] p-4'>
            <NavLink  to="Signup" className="bg-yellow-600"> <button className="bg-yellow-600 w-[10%] h-[80%] " >SignUp</button></NavLink>
            <NavLink  to="Login" className="bg-yellow-600"><button className="bg-yellow-600 w-[10%] h-[80%] " >LogIn</button></NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderLogin