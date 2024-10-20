import React from 'react'
import { useSelector } from 'react-redux'

const Title = () => {
  const movieoriginal_title = useSelector(store=> store.mainTrailer.movieId?.original_title)
  const movieoverview = useSelector(store=> store.mainTrailer.movieId?.overview)
  
  return (
    <div className=' absolute z-0 md:w-screen  aspect-video  text-white bg-gradient-to-r from-black  '>
    <div className='md:my-[19rem] md:mx-[9rem] mt-[15rem] mb-[13rem] mx-[1rem]  '>
        <h1 className=' text-xl  font-bold md:text-3xl my-2  '>{movieoriginal_title}</h1>
        <p className='text-sm md:text-base  md:max-w-lg my-2  md:block'>{movieoverview}</p>
        <button className='bg-white cursor-not-allowed mx-3 border px-3 py-2 my-4 rounded-md font-bold text-black '>Play Now</button>
        <button className=' bg-white cursor-not-allowed mx-3 border px-3 py-2 my-4 rounded-md font-bold text-black '>More Info</button>
    </div>
</div>
  )
}

export default Title
