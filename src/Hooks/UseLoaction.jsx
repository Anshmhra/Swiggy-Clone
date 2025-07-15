import { useState, useEffect} from "react"
function UseLocation(){

    const [location,setLocation]=useState("loading...");

    useEffect(()=>{

        navigator.geolocation.getCurrentPosition((position)=>{
            const {latitude,longitude}=position.coords;

            
         fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
         .then((Response)=>Response.json())
         .then((data)=>{
            const place =
          data?.address?.suburb ||
          data?.address?.city ||
          data?.address?.town ||
          data?.address?.state ||
          "Unknown";

          setLocation(place);
         })
          .catch((error)=> setLocation("error while loading"));
        })
      

        
    },[])

    return location;
}
export default UseLocation;
