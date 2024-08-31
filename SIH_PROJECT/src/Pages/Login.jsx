import React, { useState } from 'react'

function Login() {
    const [username,setuser]= useState('');
    const [password,setpassword]= useState('');
    const [message,setmessage] = useState('');
    const updateuser=(e)=>{
        setuser(e.target.value);
    }
    const updatepassword=(e)=>{
        setpassword(e.target.value);
    }
    const checkuser=(e)=>{
        e.preventDefault();
        if(!localStorage.getItem(username)){
            setmessage("user doesn't exist. Sign up")
            alert('No Such User Found. Kindly use right Credentials')

        }else if(localStorage.getItem(username)!== password){
            setmessage("wrong password")
            alert("you have entered the wrong password.")
        }
        else{
            setmessage('Login Successful')
        }
    }
  return (
    <div className='flex  w-[100%] justify-center align-middle pt-24 mb-8 '>
        <form  onSubmit={checkuser} className='flex flex-col h-[25rem] w-[25rem] p-16  border-slate-300 border-2 ' >
            <span> <h1 className='text-center text-3xl mb-16'>Welcome Back!</h1></span>
            <select className='h-[15%] rounded-sm  border-slate-400 border-2 mb-8'>
                <option>Chitkara University</option>
                <option>Thapar University</option>
                <option> IIT Bombay</option>
                <option>IIT Delhi</option>
                <option>IIT CHENNAI</option>
            </select>
            <input type="text" value={username} onChange={updateuser} placeholder='email' className='h-[15%] rounded-sm mb-8 border-slate-400 border-2' />
            <input type="password" value={password} onChange={updatepassword} placeholder='password' className='h-[15%] rounded-sm mb-8 border-slate-400 border-2' />
            <button type='submit'className='rounded-md bg-black text-white h-[3rem]'>Log in</button>
            <span>{message}</span>
        </form>
    </div>
  ) 
}

export default Login