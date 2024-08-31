import React from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
function HeaderLogin() {
  const navigate= useNavigate();
  const login = () => {
    navigate("Login")
  }
  const sign = () => {
    navigate("Signup")
  }
  return (
    <>
      <div className=' h-[40%] p-4 w-full'>
        <div className='w-full h-[40%] '>
          <div className='flex justify-evenly w-full h-[20%] p-4'>
            <button onClick={sign} className="bg-yellow-600 w-[10%] h-[80%] ">SignUp</button>
            <button onClick={login} className="bg-yellow-600 w-[10%] h-[80%] ">LogIn</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderLogin