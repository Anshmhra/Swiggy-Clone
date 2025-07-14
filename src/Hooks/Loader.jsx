import { useState,useEffect } from "react";

function Loader(){

    const [Loaded,setLoad]=useState(true);


    useEffect(()=>{
        const Timer=setTimeout(()=>setLoad(false),2000);
        return()=>clearTimeout(Timer);
    },[]);
    
    return Loaded;
}
export default Loader;