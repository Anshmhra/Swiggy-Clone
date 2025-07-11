import { useState ,useEffect} from "react"

function UseRestaurentMenu(restId){
     const[ restInfo, SetRestinfo] =useState();
    
       useEffect(()=>{
        if (!restId) return; 
    const latitude=31.8443385;
        const longitude=75.6914986;
        
    
        fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`)
        .then((Response)=> Response.json())
        .then((roy)=>{SetRestinfo(roy)
            console.log(roy);
        })
    
    
        
    
       },[restId]);
    return restInfo;
}
export default UseRestaurentMenu;