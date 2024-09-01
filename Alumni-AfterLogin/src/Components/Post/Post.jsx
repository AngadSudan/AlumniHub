import React from 'react'

function Post({src,Title,content}) {
    const [likes, setLikes] = React.useState(0);
    const [shared, setShared] = React.useState(0);
    const [view, setView] = React.useState(0);

    const increase = () => {
        setLikes(likes + 1);
    };
    const increaseShared=()=>{
        setShared(shared+1);
    }
  return (
    <div className='p-4 h-auto w-[60%] border-2  border-black my-4'>
        <div className='flex justify-center mb-4'>
            <img src={src} alt="" className='h-[30%] w-[30%]' />
        </div>
        <div>
            <h1 className='text-3xl text-center mb-4'>{Title}</h1>
            <div className='h-[20%]'>
                <p className='text-xl'>{content}</p>
            </div>
        </div>
        <div className='flex justify-evenly'>
            <div className='flex justify-evenly w-[30%]'>
                <button onClick={increase}>{likes}👍</button>
                <button onClick={increaseShared}>{shared}📩</button>
            </div>
            <div >
                {view} views
            </div>
        </div>
    </div>
  )
}
export default Post