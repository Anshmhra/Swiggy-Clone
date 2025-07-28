import {configureStore} from "@reduxjs/toolkit"
import ThemeReducer from "../Feature/Theme.js"

import queryReducer from "../Feature/querySlice";
import getReducer from "../Feature/getSlice";

const leon=configureStore({
    reducer:{
        theme:ThemeReducer,
        search: queryReducer,
          get: getReducer,
    }
});

export default leon;