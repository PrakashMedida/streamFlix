import { createSlice } from "@reduxjs/toolkit";

const videoConSlice=createSlice({
    name :"maintrailer",
    initialState:{
        movieId :{
            id:null,
            original_title:null,
            overview:null
        },
        trailerVideo: null,
    },
    reducers:{
        addMovieId:(state,action)=>{
            state.movieId.id=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo =action.payload
        },
        addWatch:(state,action)=>{
            state.movieId.id=action.payload
        },addMovieoriginal_title:(state,action)=>{
            state.movieId.original_title=action.payload
        },addMovieoverview:(state,action)=>{
            state.movieId.overview=action.payload
        }
    }
})

export const {addMovieId , addTrailerVideo , addWatch ,addMovieoriginal_title,addMovieoverview }=videoConSlice.actions

export default videoConSlice.reducer