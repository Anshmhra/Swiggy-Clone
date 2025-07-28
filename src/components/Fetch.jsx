import { useState,useEffect } from "react";
import Display from "./Display";
import Navbar from "./Navbar";
import Token from "./Token";
import Footer from "./Footer"
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGet } from "../Feature/getSlice.jsx";

function Fetch(){
    const dispatch = useDispatch();


  useEffect(()=>{
    // navigator.geolocation.getCurrentPosition((position)=>{
      
    //   const {latitude,longitude}=position.coords;
    //   console.log("📍 Your Coordinates:", latitude, longitude);
    const latitude=31.8443385;
    const longitude=75.6914986;
      fetch(` https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
    .then((response)=> response.json())
    .then((data)=> {


      const cards = data?.data?.cards || [];

      const restaurantCard=cards.find((card)=>
         card.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

       const Restaurant =
          restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          if(Restaurant){
              dispatch(setGet(Restaurant));
          }else{
             console.warn("⚠️ Restaurants not found in response", data)
          }

       
       console.log(data);
     })
    .catch((error)=> console.log(error));

   
  },[dispatch])

 return(
    <div className="mt-0 h-3 p-4  ">
    </div>
    )
   
       
}
export default Fetch;

  