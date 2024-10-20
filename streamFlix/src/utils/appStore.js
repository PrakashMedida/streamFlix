

import { configureStore } from "@reduxjs/toolkit"
import userReducer from './userSlice'
import movieReducer from './MovieSlice'
import gptReducer from './gptSlice'
import mainTrailerReducer from './videoConSlice'
import watchReducer from "./watchSlice"

const appStore=configureStore(
    {
        reducer:{
            user: userReducer,
            movie: movieReducer,
            mainTrailer: mainTrailerReducer,
            gpt: gptReducer,
            watch:watchReducer,

        }
    }
)
export default appStore;