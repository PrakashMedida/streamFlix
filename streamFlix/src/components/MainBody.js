import React from 'react'
import VideoContainer from './VideoContainer'
import SecondaryContainer from './SecondaryContainer'
import Footer from './Footer'

const MainBody = () => {
    
  return (
    <div className='w-screen overflow-x-hidden'>
      <VideoContainer/>
      <SecondaryContainer/>
      <Footer/>
    </div>
  )
}

export default MainBody
