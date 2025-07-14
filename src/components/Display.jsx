import { Link } from "react-router-dom";
// import Token from "./Token";
import { useOutletContext } from "react-router-dom";
import { useCart } from "../context/CartContext";
import UseLoad from "../Hooks/Loader";
import { lazy, Suspense } from "react";

function Display({get,query}){

    const {addToCart}=useCart();
    const Load=UseLoad();

    const Token=lazy(()=>import("./Token"));

     if(Load){
  return(
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">Loading Please Wait...</h1>
    </div>
  )
}
      
   
    return(
        <div className="flex flex-wrap gap-10 justify-center -mt-8 ">
            <Suspense><Token/></Suspense>
             {
                
            get?.filter((rest)=>

                rest?.info?.name?.toLowerCase().includes(query)
              )
            .map((rest) =>(
                <Link to={`restaurents/${rest.info.id}`} state={{ restaurantImage: rest.info.cloudinaryImageId}}key={rest.info.id}> 
                    <div key={rest.info.id} className="w-65  hover:scale-94 duration-300 hover:cursor-pointer hover:shadow  rounded-3xl ">
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${rest.info.cloudinaryImageId}`} 
                    alt={rest.info.name}
                    className="rounded-3xl w-full h-[160px]  object-cover  "
                    />
                    
                    <div className="p-4">
                    
                    <h3 className="font-semibold mt-1 truncate">{rest.info.name}</h3>
                    <p className="">⭐{rest.info.avgRating} - {rest.info.sla.slaString}</p>
                    <p className=" text-gray-500 font-medium truncate">{rest.info.cuisines.slice(0,3).join(", ")}</p>
                    <p className="text-gray-500 font-medium">{rest.info.locality}</p>
                   
                    
                    
                    </div>
                      
                </div></Link>

              ))
             
            }
            
        </div>
       
    )
}
export default Display;