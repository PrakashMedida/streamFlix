import { useEffect } from "react";
import { MOVIE_LIST, TRENDING_TV_SHOWS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addtvShows } from "../utils/MovieSlice";

const useTv = () => {
  const movie=useSelector(store => store.movie?.tvShows)
    const dispatch=useDispatch();
    const Movie =async ()=>{
        const data = await fetch(TRENDING_TV_SHOWS,MOVIE_LIST).catch(()=>{
            const errorMessage = "fail to fetch"
        });
         const json = await data.json();
         dispatch(addtvShows(json.results));
       }
       
     
       useEffect(() =>{
         Movie();
       },[])

}

export default useTv
