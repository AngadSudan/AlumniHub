import React from 'react'
import {Profile} from '../Components/index'
import src from "../assets/react.svg"
function Chat() {
  const done=()=>{
    alert("ok your message is sent")
  }
  return (
    <div className='p-4  h-[87svh]  mt-[6rem]'>
      <div className='h-[100%] w-[90%] mx-auto p-4  flex'>
        <div className=' h-[100%] w-[30%] border-2 p-4 overflow-scroll scroll-black border-black  mx-auto'>
          <Profile img={src} Title="Angad Sudan" prevmsg="hi" />
          <Profile img={src} Title="Angad Sudan" prevmsg="hi" />
          <Profile img={src} Title="Angad Sudan" prevmsg="hi" />
        </div>
        <div className=' h-[100%] w-[75%] border-2 border-black mx-auto pt-4 overflow-scroll'>
          <div className='relative bottom-0 left-0'>
            <form className='flex'>
              <div className='mr-4'>😀</div>
              <input type="text" placeholder="type here" className='w-[80%] rounded-md h-[30%] border-2 border-black mr-4'/>
              <div>🔗</div>
              <button type="Submit" onClick={done}>📩</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat