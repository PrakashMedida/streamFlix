import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState :{
        search:false,
    },
    reducers:{
        addSearchClick:(state,action)=>{
            state.search = action.payload
        }
    }
})

export const {addSearchClick }=gptSlice.actions
export default gptSlice.reducer