import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import SwiggyCorporate from './components/SwiggyCorporate';

import Error from './components/Error.jsx';
import Display from './components/Display.jsx';
import Token from './components/Token.jsx';
import Fetch from './components/Fetch.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Offer from './Offers.jsx'
import Cart from './Cart.jsx'
import RestaurantMenu from './components/RestaurentMenu.jsx'
import { CartProvider } from './context/CartContext.jsx'



function Main(){

 const [get,setget]=useState([]);
    const [query,setQuery]=useState([]);
  const router=createBrowserRouter([
  {
    path:"/",
    element: <App setQuery={setQuery} query={query}/>,
    children:[
      {
        path:"/",
        element:(
          <>
         
          <Display get={get}query={query}/>
          </>
        )
      },
      {
        path:"SwiggyCorporate",
        element:<SwiggyCorporate/>
      },
      {
        path:"Offers",
        element:<Offer/>
      },
       {
        path:"Cart",
        element:<Cart />
      },
       {
        path:"restaurents/:restId",
        element:<RestaurantMenu/>
      },
    ],

    errorElement: <Error/>
  },
 
])


  return      (
    <>
    <Fetch setget={setget}/>
        {/* <Navbar setQuery={setQuery}/> */}
        <CartProvider>  <RouterProvider router={router}/></CartProvider>
   
 
  
    
    
 
  <Footer/>
 

  </>
  
)
}
export default Main;
  
  


createRoot(document.getElementById('root')).render(
 
    <Main/>
 
)
