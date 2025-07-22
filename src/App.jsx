import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Fetch from './components/Fetch'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import {useSelector} from "react-redux";


function App({setQuery,query}) {
      const theme=useSelector((state)=>state.theme.mode);

  return (
    <div className={theme === "dark" ? "bg-gray-950 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <Navbar setQuery={setQuery} query={query}/>
      
        <Outlet  />
    
    
     
    </div>
  )
}

export default App
