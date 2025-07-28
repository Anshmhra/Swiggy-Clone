import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Fetch from './components/Fetch'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import {useSelector} from "react-redux";
import UseLoader from './Hooks/UseLoader.jsx';
import { Suspense } from 'react'



function App() {

      

  return (
    <div>
      <Suspense fallback={<UseLoader />}>
                <Navbar/>
                </Suspense>
      
        <Outlet  />
    
    
     
    </div>
  )
}

export default App
