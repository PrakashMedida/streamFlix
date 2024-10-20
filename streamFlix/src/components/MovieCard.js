import React from "react";
import { POSTER_CDN } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ poster_path }) => {
  const navigate =useNavigate()
  if (!poster_path) return;
  return (
      <img
        alt="MoviePoster"
        className="max-w-36 rounded-lg cursor-pointer  "
        src={POSTER_CDN + poster_path}
      />
    
  );
};

export default MovieCard;
