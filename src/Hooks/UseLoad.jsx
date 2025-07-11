import { useState,useEffect } from "react";

function UseLoad(){

    const [load,setLoad]=useState(true);


    useEffect(()=>{
        const Timer=setTimeout(()=>setLoad(false),1000);
        return()=>clearTimeout(Timer);
    },[]);
    
    return load;
}
export default UseLoad;