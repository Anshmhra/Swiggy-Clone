import {configureStore} from "@reduxjs/toolkit"
import ThemeReducer from "../Feature/Theme.js"

const leon=configureStore({
    reducer:{
        theme:ThemeReducer,
    }
});

export default leon;