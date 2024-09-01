import React,{useState} from 'react'
function Signup() {
  const [username,setuser]= useState('');
  const [password,setpassword]= useState('');
  const [message,setmessage]=useState('');
  const [university,setUniversity]= useState('');
  const updateuser=(e)=>{
      setuser(e.target.value);
  }
  
  const updatepassword=(e)=>{
      setpassword(e.target.value);
  }
  const updateUniversity=(e)=>{
    setUniversity(e.target.value);
  }

  const checkuser = (e) => {
    e.preventDefault();
    console.log(university, username, password);

    if (!localStorage.getItem(username)) {
        // Store the user data as a JSON string
        const userData = JSON.stringify({ password, university });
        localStorage.setItem(username, userData);
        setmessage("Signup Successful, move to Login");
    } else {
        setmessage('Error in sign up');
        alert("User already exists, kindly login");
    }
}

  return (
    <div className='flex justify-center'>
        <form  onSubmit={checkuser} onChange={updateUniversity} className='flex flex-col h-[25rem] w-[25rem] p-16  border-slate-300 border-2 ' >
            <span> <h1 className='text-center text-2xl mb-16'>Create Your Account</h1></span>
            <select value={university} onChange={updateUniversity} className='h-[15%] rounded-sm  border-slate-400 border-2 mb-8'>
                <option value="Chitkara">Chitkara University</option>
                <option value="Thapar">Thapar University</option>
                <option value="IITB"> IIT Bombay</option>
                <option value="IITC">IIT CHENNAI</option>
                <option value="IITD">IIT Delhi</option>
            </select>
            <input type="text" value={username} onChange={updateuser} placeholder='email' required className='h-[15%] rounded-sm mb-8 border-slate-400 border-2' />
            <input type="password" value={password} onChange={updatepassword} placeholder='password' required className='h-[15%] rounded-sm mb-8 border-slate-400 border-2' />
            <button type='submit'className='rounded-md bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6] text-white h-[3rem] '>Sign Up</button>
            <span>{message}</span>
        </form>
    </div>
  )
}

export default Signup