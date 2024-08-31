import React from 'react'
import {Testimonial} from "../Components/index"
import src from "../Assets/Logo.png"
import college from "../Assets/college.png"
function Home() {
  return (
    <>
      <div className='flex justify-evenly h-auto w-full p-4 mb-8'>
      <h1 className='text-wrap w-[40%] text-[30px] my-auto'>The greatest asset any Institution can have is its Alumni. Bridging the gap between Alumni, peers , mentors and thier alma matter.</h1>
      <img src={college} alt='Colleg-teamWork' />
      </div>

      <div className='mb-20'>
        <h1 className='text-[44px] pl-2 text-center '>More are the connections , More are the oppertunities .</h1>
        <p className='text-wrap w-[80%] font-semibold mx-auto my-4'><blockquote > The Alumni Hub team’s primary objective has continued to be outreach through regional, affinity, reunion and student programs to connect and engage alumni in the life of the university and students. <br/>
          Homecoming has been a major focus  collaborating with campus partners to provide alumni many reasons to come back and reconnect with their alma mater during this reunion weekend.<br/>
          The team has continued to work on the reporting capabilities of The Almaconnect, the division’s new constituent database, to guide programming and communication decisions and to create invitation lists
          for all-inclusive and segmented communication pieces. The team continues to move forward with the division’s strategic plan and implementing tactics that will improve the alumni engagement percentage 
          <br/></blockquote></p>
      </div>
      <div>
        <div className=' w-full'>
          <div className='w-full '>  </div>
        <div className='border-4 border-black w-[90%] mx-auto bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] h-[20%]'>
          <h1 className='text-center'>Most Used Alumni Platform</h1>
          <div className='w-full flex justify-evenly align-middle py-4 '>
            <h1>20+ Universities</h1>
            <h1>15000+ Alumni</h1>
            <h1>2500+ Weekly Active Members</h1>
          </div>
        </div>
      </div>

      <div className='p-4'>
        <h3 className='text-[100px]'>Our</h3>
        <h1 className='text-left text-[47px] mb-4'>Testimonials</h1>
        <div className='flex justify-evenly mb-8'>
          <Testimonial img={src} name="x" message="lorem ipsum" />
          <Testimonial img={src} name="x" message="lorem ipsum" />
          <Testimonial img={src} name="z" message="lorem ipsum" />
        </div>
        <h2 className='text-center mb-2 text-[25px] text-[#1a807c]'>our distinguished alumni members with a roaster </h2>
        <h2 className='text-center mb-2 text-[25px] text-[#1a807c]'>of noteworthy achievements </h2>
        <h2 className='text-center mb-2 text-[25px] text-[#1a807c]'>and accomplishments.</h2>
      </div>
      <div className='mx-auto'>
        <div className='border-black border-1 h-auto w-[80%] text-center mx-auto'>___________________________________________________________</div>
        <div className='border-black border-1 h-auto w-[40%] text-center mx-auto mb-8'>_______________________________</div>
      </div>
    </div>
    </>
  )
}

export default Home