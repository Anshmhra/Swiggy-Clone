import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Fetch from './components/Fetch'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'


function App({setQuery,Query}) {

  return (
    <>
      <Navbar setQuery={setQuery} query={Query}/>
      
        <Outlet  />
    
    
     
    </>
  )
}

export default App
