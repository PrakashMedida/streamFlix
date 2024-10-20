import { createSlice } from "@reduxjs/toolkit";



const watchSlice =createSlice(
    {
        name:"movie",
        initialState:{
            Watch:false
        },
        reducers:{
            watchvideo:(state,action)=>{
              state.Watch =  action.payload
            }
            
        }
    }
)


export const { watchvideo}=watchSlice.actions
export default watchSlice.reducer