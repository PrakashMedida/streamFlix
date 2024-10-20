import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MOVIE_LIST, POPULAR_MOVIES } from '../utils/constants';
import { addPopularMovies } from '../utils/MovieSlice';

const usePopular = () => {
  const movie= useSelector(store => store.movie?.poppularMovies)
    const dispatch=useDispatch();
const Movie =async ()=>{
    const data = await fetch(POPULAR_MOVIES,MOVIE_LIST).catch(()=>{
        const errorMessage = "fail to fetch"
    });
     const json = await data.json();
     dispatch(addPopularMovies(json.results));
   }
   
 
   useEffect(() =>{
    !movie && Movie();
   },[])

}

export default usePopular
