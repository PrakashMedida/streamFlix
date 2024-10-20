import { createSlice } from "@reduxjs/toolkit";



const movieSlice =createSlice(
    {
        name:"movie",
        initialState:{
            nowPlayingMovies:null,
            poppularMovies : null,
            upComingMovies : null,
            tvShows : null,
        },
        reducers:{
            addNowPlayingMovies:(state,action)=>{
              state.nowPlayingMovies =  action.payload
            },
            addPopularMovies:(state,action)=>{
                state.poppularMovies=action.payload
            },
            addUpComingMovies:(state,action)=>{
                state.upComingMovies=action.payload
            },
            addtvShows:(state,action)=>{
                state.tvShows=action.payload
            },
            
        }
    }
)


export const { addtvShows , addUpComingMovies, addPopularMovies, addNowPlayingMovies}=movieSlice.actions
export default movieSlice.reducer