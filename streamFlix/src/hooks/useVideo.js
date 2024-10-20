import { useEffect } from 'react'
import { MOVIE_LIST } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/videoConSlice';

const useVideo = () => {
    const dispatch =useDispatch();
    const movieId=useSelector(store => store.mainTrailer?.movieId?.id)
   
   const video = async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos', MOVIE_LIST)
         const json= await data.json();
         if(!json.results) return
         const filteredMovie=json.results.filter((e)=> e.type==="Trailer");
         const trailerVideo= filteredMovie.length ? filteredMovie[0] :json.results[0];
         dispatch(addTrailerVideo(trailerVideo))
        }
useEffect(()=>{
movieId && video();
 
},[])

}

export default useVideo
