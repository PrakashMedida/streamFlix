import { useEffect } from 'react'
import { MOVIE_LIST, UPCOMING_MOVIES } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUpComingMovies } from '../utils/MovieSlice';

const useUpcoming = () => {
  const movie=useSelector(store => store.movie?.upComingMovies)
    const dispatch=useDispatch();
const Movie =async ()=>{
    const data = await fetch(UPCOMING_MOVIES,MOVIE_LIST).catch(()=>{
        const errorMessage = "fail to fetch"
    });
     const json = await data.json();
     dispatch(addUpComingMovies(json.results));
   }
   
 
   useEffect(() =>{
    !movie && Movie();
   },[])

}

export default useUpcoming
