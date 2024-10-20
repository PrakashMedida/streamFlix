import Header from './Header'
import useMovieList from '../hooks/useMovieList'
import usePopular from '../hooks/usePopular'
import useUpcoming from '../hooks/useUpcoming'
import useTv from '../hooks/useTv'
import MainBody from './MainBody'

const Browse = () => {
  useMovieList();
  usePopular();
  useUpcoming();
  useTv();
  

  return (
    <div className='bg-black' >
     <Header/>
     <MainBody/>
      
    </div>
  )
}

export default Browse
