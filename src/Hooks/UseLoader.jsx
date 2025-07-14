import { useState,useEffect } from "react";

function UseLoader(){

    const [Loaded,setLoad]=useState(true);


    useEffect(()=>{
        const Timer=setTimeout(()=>setLoad(false),2000);
        return()=>clearTimeout(Timer);
    },[]);
    
    return Loaded;
}
export default UseLoader;