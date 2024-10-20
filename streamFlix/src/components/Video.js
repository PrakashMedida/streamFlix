import React from "react";
import { useSelector } from "react-redux";
import useVideo from "../hooks/useVideo";

const Video = () => {
  useVideo();
   const trailerVideo =useSelector(store=> store.mainTrailer?.trailerVideo)
   if(!trailerVideo) return (<div className="w-screen h-screen flex items-center justify-center">
    <h1 className="text-3xl text-red-700">Video not found in the database! </h1>
   </div>)
  return (
    
    <div className="w-screen aspect-video ">
      <iframe className="w-screen aspect-video "
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1&loop=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; web-share"
        allowFullScreen
      ></iframe>
     
    </div>
  );
};

export default Video;
