import { useState ,useEffect} from "react"

function UseRestaurentMenu(restId){
     const[ restInfo, SetRestinfo] =useState();
    
       useEffect(()=>{
        if (!restId) return; 
        navigator.geolocation.getCurrentPosition((position)=>{
            const {latitude,longitude}=position.coords;
               fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`)
        .then((Response)=> Response.json())
        .then((roy)=>{SetRestinfo(roy)
            console.log(roy);
        })
        })

        
    
     
    
    
        
    
       },[restId]);
    return restInfo;
}
export default UseRestaurentMenu;
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER