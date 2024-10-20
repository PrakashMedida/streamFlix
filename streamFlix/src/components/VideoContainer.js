import { useDispatch, useSelector } from "react-redux";
import Title from "./Title";
import Video from "./Video";
import { addMovieId, addMovieoriginal_title, addMovieoverview } from "../utils/videoConSlice";

const 
VideoContainer = () => {
  const dispatch = useDispatch();
  const movie = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movie) return;
  const filteredMovie = movie[4];
  const { original_title, overview, id } = filteredMovie;
  dispatch(addMovieId(id));
  dispatch(addMovieoriginal_title(original_title));
  dispatch(addMovieoverview(overview));
  
  return (
    <div className=" md:py-0 py-20 bg-black w-screen md:h-[1080px] h-screen aspect-video">
      <Title  />
      <Video  />
    </div>
  );
};

export default VideoContainer;
