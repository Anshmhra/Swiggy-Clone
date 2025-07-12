import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './index.css'
// import App from './App.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
// import SwiggyCorporate from './components/SwiggyCorporate';

// import Error from './components/Error.jsx';
import Display from './components/Display.jsx';
import Token from './components/Token.jsx';
import Fetch from './components/Fetch.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
// import Offer from './Offers.jsx'
// import Cart from './Cart.jsx'
// import RestaurantMenu from './components/RestaurentMenu.jsx'
import { CartProvider } from './context/CartContext.jsx'
import UseLoad from './Hooks/UseLoad.jsx'




function Main(){
   
  const SwiggyCorporate=lazy(()=>import("./components/SwiggyCorporate"));
   
  const Offer=lazy(()=>import("./Offers.jsx"));
   
  const Cart=lazy(()=>import("./Cart.jsx"));

    const RestaurantMenu=lazy(()=>import("./components/RestaurentMenu.jsx"));
 
    const App=lazy(()=>import("./App.jsx"));
  const Error=lazy(()=>import("./components/Error.jsx"));
  
    // const Fetch=lazy(()=>import("./components/Fetch.jsx"));
  const load=UseLoad();


  
  



 const [get,setget]=useState([]);
    const [query,setQuery]=useState([]);
     
  const router=createBrowserRouter([
  {
    path:"/",
    element: <Suspense><App setQuery={setQuery} query={query}/></Suspense>,
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
        element:<Suspense fallback={<load/>}>
          <SwiggyCorporate/>
        </Suspense>
      },
      {
        path:"Offers",
        element:<Suspense fallback={<load/>}>
          <Offer/>
        </Suspense>
      },
       {
        path:"Cart",
        element:<Suspense fallback={<load/>}>
          <Cart/>
        </Suspense>
      },
       {
        path:"restaurents/:restId",
        element:<Suspense>
          <RestaurantMenu/>
        </Suspense>
      },
    ],

    errorElement:<Suspense>
      <Error/>
    </Suspense>
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
