import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice=createSlice({
    name:"Theme",
    initialState:{
        mode:"light"
    },
    reducers:{

        ToggleTheme:(state)=>{
            state.mode =state.mode === "light" ? "dark" :"light";
        },
        setTheme:(state,action)=>{
            state.mode=action.payload;
        },

    }
});
export const {ToggleTheme,setTheme}=ThemeSlice.actions;
export default ThemeSlice.reducer;