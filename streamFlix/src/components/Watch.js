import React from 'react'
import Header from './Header'
import {  useSearchParams } from 'react-router-dom'
import Video from './Video'

import { useDispatch ,useSelector } from 'react-redux';
import { addMovieId} from '../utils/videoConSlice';
import Footer from './Footer';

const Watch = () => {
  const trailerVideo =useSelector(store=> store.mainTrailer?.trailerVideo)
  const dispatch =useDispatch()
  const [search]=useSearchParams()
  const id= Number(search?.get("v"))
  dispatch(addMovieId(id))

  return (
    <div className='bg-black w-screen h-screen '>
        <Header/>
        <div className='md:hidden w-screen h-52 '></div>
        
       <Video/>
       {trailerVideo && <div className=' text-white p-2 bg-black text-2xl pb-[23rem] md:pb-[10rem]' >{trailerVideo.name}</div>}
        
        <div className=' text-center w-screen'><Footer/></div>
      
      
    </div>
  )
}

export default Watch
