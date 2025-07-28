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
import Footer from './components/Footer.jsx'
// import Offer from './Offers.jsx'
// import Cart from './Cart.jsx'
// import RestaurantMenu from './components/RestaurentMenu.jsx'
import { CartProvider } from './context/CartContext.jsx'
import UseLoader from './Hooks/UseLoader.jsx';
import { Provider } from 'react-redux';
import leon from './Redux/Tool.js';
import { useSelector } from 'react-redux';




function Main(){
       const theme=useSelector((state)=>state.theme.mode);
  const SwiggyCorporate=lazy(()=>import("./components/SwiggyCorporate"));
   
  const Offer=lazy(()=>import("./Offers.jsx"));
   
  const Cart=lazy(()=>import("./Cart.jsx"));

    const RestaurantMenu=lazy(()=>import("./components/RestaurentMenu.jsx"));
 
    const App=lazy(()=>import("./App.jsx"));
  const Error=lazy(()=>import("./components/Error.jsx"));
  const Navbar=lazy(()=>import("./components/Navbar.jsx"));
  
    // const Fetch=lazy(()=>import("./components/Fetch.jsx"));




  
  




     
  const router=createBrowserRouter([
  {
    path:"/",
    element: <Suspense><App /></Suspense>,
    children:[
      {
        path:"/",
        element:(
          <>
         
          <Display />
          </>
        )
      },
      {
        path:"SwiggyCorporate",
        element:<Suspense fallback={<UseLoader/>}>
          <SwiggyCorporate/>
        </Suspense>
      },
      {
        path:"Offers",
        element:<Suspense fallback={<UseLoader/>}>
          <Offer/>
        </Suspense>
      },
       {
        path:"Cart",
        element:<Suspense fallback={<UseLoader/>}>
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
    <div  className={theme === "dark" ? "bg-gray-950 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
    <Fetch />
    
        
        <CartProvider> 
          
            <RouterProvider router={router}/>
         
        </CartProvider>
   
 
  
    
    
 
  <Footer/>

 

  </div>
  
)
}
export default Main;
  
  


createRoot(document.getElementById('root')).render(
 <Provider store={leon}>
    <Main/>
    </Provider>
 
)
