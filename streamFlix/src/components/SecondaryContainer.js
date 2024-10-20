import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const Nowplaying = useSelector((store) => store.movie);
  if(!Nowplaying) return
  return (
    <div className="bg-black mt-[7.25rem] md:mt-5 md:mt-0 ">
      <div className="relative -mt-[30rem] ">
        <MovieList
          title={"Now Playing"}
          movieList={Nowplaying?.nowPlayingMovies}
        />
      </div>
      <div>
      <MovieList
          title={"Popular Movies"}
          movieList={Nowplaying?.poppularMovies}
        />
      </div>
      <div>
      <MovieList
          title={"UpComing Movies"}
          movieList={Nowplaying?.upComingMovies}
        />
      </div>
      <div>
      <MovieList
          title={"Trending Tv Shows"}
          movieList={Nowplaying?.tvShows}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
