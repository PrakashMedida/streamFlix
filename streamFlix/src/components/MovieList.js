import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movieList }) => {
  if (!movieList) return;
  return (
    <div className="pl-0 md:ml-[9rem]">
      <h1 className="text-white text-2xl font-bold m-4">{title}</h1>
      <div className=" overflow-scroll no-scrollbar  p-3 ">
        <div className="flex gap-3">
          {movieList.map((e) => (
            <Link key={e?.id} to={"/browse/watch?v="+e?.id}>
              <MovieCard  poster_path={e?.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
