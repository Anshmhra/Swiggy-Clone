import { useState ,useEffect } from "react"

function UseOnline(){
    const [Online,setOnline]=useState(navigator.onLine);

    useEffect(()=>{
        window.addEventListener("online",()=>setOnline(true));
         window.addEventListener("offline",()=>setOnline(false));
    },[]);


    return Online
}
export default UseOnline;