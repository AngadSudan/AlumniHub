import React from 'react'
import src from '../Assets/Team.png'
import sr from "../Assets/Logo.jpg"
import {Oppo} from "../Components/index"
function Oppurtunity() {
  return (
    <div className='p-4'>
      <div className='flex justify-around w-[90%]'>
        <img src={src} alt='img' className='h-[10%] w-[20%] ' />
        <h1 className='text-[4rem] my-auto'>OUR OPPORTUNITIES</h1>
      </div>
      <h1 className='text-3xl mb-8 text-center'>Navigate Carrier Options</h1>
      <Oppo src={sr}  heading="Internship Program" content1="QQWERTYUIOPASDFGHJKLZXCVBNM" content2="MNBVCXZLKJHGFDSAPOIUYTREWQ"/>
      <Oppo src={sr}  heading="Recommendation" content1="QQWERTYUIOPASDFGHJKLZXCVBNM" content2="MNBVCXZLKJHGFDSAPOIUYTREWQ"/>
      <Oppo src={sr}  heading="Start up Programs" content1="QQWERTYUIOPASDFGHJKLZXCVBNM" content2="MNBVCXZLKJHGFDSAPOIUYTREWQ"/>
    </div>
  )
}

export default Oppurtunity