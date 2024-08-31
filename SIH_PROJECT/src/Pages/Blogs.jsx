import React from 'react'
import {Card} from "../Components/index"
import src from "../Assets/Logo.png"
import "../Assets/Styling/Blog.css"
function Blogs() {
  return (
    <>
    <div>

      <h1 className='text-[44px] pl-2'>BLOGS</h1>
      <div className='bg-[#f0eeee] h-[90svh] w-full p-2'>
      <h2 className='mb-8'>A Directory of Wonderful Things</h2>
        <div className='flex justify-evenly '>
          <Card img={src} Title="A Prescription for Success" preview="Abbhas Khanna,postmouth alumnus and founder of click chemist,shares his advice on how to properlly invest time into your passion....." />
          <Card img={src} Title="From ROCKBOTTOM,TO BRIGHTER DAYS" preview="A story of mental illnes from graduate,Vikas Verma,wants to share that hoe important mental heath is forhealty body and mind....."/>
          <Card img={src} Title="A SNAPSHOT, OF MY JOURNEY"  preview="A walk down the memory lane, today I just felt like writing about my graduation journey and sharing a few memories with all of you..." />
        </div>
      </div>
    </div>
    </>
  )
}

export default Blogs