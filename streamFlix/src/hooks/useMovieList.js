import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies} from "../utils/MovieSlice";
import { MOVIE_LIST } from "../utils/constants";
import { useEffect } from "react";


 const useMovieList=()=>{
    const dispatch=useDispatch();
    const movie=useSelector(store => store.movie?.nowPlayingMovies)
const Movie =async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',MOVIE_LIST).catch(()=>{
        const errorMessage = "fail to fetch"
    });
     const json = await data.json();
     dispatch(addNowPlayingMovies(json.results));
   }
   
 
   useEffect(() =>{
     !movie && Movie();
   },[])

}
export default useMovieList