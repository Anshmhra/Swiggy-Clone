import { useState,useEffect } from "react";
import Display from "./Display";
import Navbar from "./Navbar";
import Token from "./Token";
import Footer from "./Footer"
import { Outlet } from "react-router-dom";




function Fetch({setget,}){



     useEffect(()=>{

    fetch(` https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
    .then((response)=> response.json())
    .then((data)=> {{
        setget(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
       console.log(data);
     }})
    .catch((error)=> console.log(error));
   },[]);


    return(
    <div className="mt-0 h-3 p-4  ">
          
          
       

       
        

    </div>
    )
   
       
}
export default Fetch;