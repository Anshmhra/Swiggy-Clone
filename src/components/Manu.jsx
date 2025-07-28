import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import RestaurantMenu from "./RestaurentMenu";
import { useSelector } from "react-redux";
import { FaMagnifyingGlass } from "react-icons/fa6";
// import {cloudinaryImageId} from "./Display"
function Manu({restId,restInfo,cards,restDetails,restaurantImageId}){

   
   const {addToCart,CartItems,removeFromManu,additionInItem,decreasInItem}=useCart();
    const [required ,setRequired]=useState("");
    // const [display ,setDisplay]=useState();
    const Info=cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const again=Info?.card?.card?.carousel?.dish?.info;
    const theme=useSelector((state)=>state.theme.mode);
    

    return(
     
        <div className="-ml-12"> 
            <h1 className={ theme=== "dark"? "bg-black text-[17px] font-bold flex text-gray-700 ml-100 mt-15" : " text-[17px] font-bold flex text-gray-700 ml-100 mt-15"}>--M E N U--</h1>
            <div >
            <input type="search" value={required} onChange={(e)=>setRequired(e.target.value)} placeholder= "  serach for dishes  " 
            className={ theme=== "dark"? "bg-gray-700 text-[16px] font-semibold ml-2 mt-5 border w-230 h-12 rounded-2xl" : " text-[16px] font-semibold ml-2 mt-5 border w-230 h-12 rounded-2xl bg-gray-100"}
            />
             <FaMagnifyingGlass className="ml-214 -mt-7"/>       
            </div>

            <hr className="mt-20 w-235 text-2xl text-gray-400 font-extrabold"></hr>

            <div>
              {
                
                Info?.map((section,id)=>{
                   const more= section?.card?.card?.itemCards;
                   
                       if (!Array.isArray(more)) return null;

                        const filter=more.filter((prod)=>{
                            const name=prod?.card?.info?.name || "";
                            return name.toLowerCase().includes(required );
                        })
                    
                    
                      return filter.map((prod,idx)=>{
                        const dtail=prod.card?.info;
                          if (!dtail) return null;


                       const {name,description,imageId,defaultPrice, price,category ,title,subTitle} = dtail;


                       const pop=dtail?.itemAttribute?.vegClassifier;
                       const Cartaction=CartItems.some((CartObj) => CartObj.item?.id === dtail.id);
                              const isInCart = !!Cartaction;
                      


                       return(
                        
                       <div key={dtail.id} className="shadow m-5 rounded-2xl  h-65 p-3 w-230">

                        {
                          pop ==="VEG" && (
                            <img src="data:image/png;base64,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"
                            
                            className="w-7 h-6 ml-4 mt-4"
                            />
                          )
                        }
                        {
                          pop==="NONVEG" &&(
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///+lKiqkJyejISGhGBieAADToaGgERHiv7+pOjqiHR315+fFiIjDf3+iGxvMlpagDAzbsbH47+/p0NCpMjLs1dWgFBTx4eHdt7eoNTWvTEy0U1PCeXmnLi768/POlZW7aGiuRESyUFDVpaW+b2/Xq6u2W1u4YWHIjY3kqCW3AAADP0lEQVR4nO3ca1PiMBSAYZNSi6hYuXphAdcb//8XrjhoEdI26SbhZHyf78n6TjM9gpk9OwMAAAAAAAAAAAAAAAAAAABg57zMYhrcxy+c6agu4hf2lBrEotVpCgdXkWweTvQM82j/2HVGYQAUekVhEBR6RWEQFHpFYRAUekVhEBR6RWEQFHpFYRAUekVhEF0LH+cdFqVUeJs/dFiVUOFI6fLOfVlChYuh0n+WzsvSKRznSqnhtfO6dAon+qNQlWPXdckUrnrbQKWfXBemUjjPPh+hUsW548pUCteZ2ikv3VYmUnhXfgWq7M1taRqFS62/C1Vx67Q2jcKPUVjRE6ehmEThNFf7elcui5MofNI/ClUxdVicQuHN7Geg21BMoPB7FO49RIehmEBhNQor5ch6ufzCfnkcqLK19Xr5hfrojH6eU+tPiuILr4emQKXvbYei9MKp6YxuWQ9F6YV/Da+Z3Tm1HIrCC58PR+Hey8byaynZhZcD42tm9xCfrfaQXWgahdXLpmc1FEUX9vOGwI9z+mKziejC41/XDs5p32ITyYVXveZApS8shqLgwmn9e/SLzVAUXPjY9JrZKduHotzC16I90OaTotjCUdtrZvcQX9s2Elu4HtgEKp21DUWphS2jsDJYtOwktXBidUa32oai0MJN2yjcO6ctP7/Mwql9oFKzTeNeMgvfLEZhJW+8wCCy8Lbug71Z9ti0mcTCkfnLp3pF01CUWPhiNworWjUMRYGFY9tRWBk2DEWBhReOZ3SrqL/AIK9w5TIpvjT8Bi6ucN705VO92apuQ3GFbqOwktddYJBWeOc2Ciu1FxiEFS7tPhWa1F1gEFa4MP8dxoaemIeirMJx1zO6VXOrT1bh4ZUEN7lxKIoqPLqS4MY8FCUVdhyFFeMFBkmF7x1HYWVmGIqCCjuPwkr2frytnMJl8Z9ndMtwgUFOYc2VBDeGCwxiCsd5b+hBfjQUxRS+rm682Bw+RDGFwVAYBIVeURgEhV5RGASFXlEYBIVeURgEhV5RGASFXlEYBIVenazwMpLR4kSFKo8lO9H/Oh/TKQrzIqZSRS+c9yOLXggAAAAAAAAAAAAAAAAAAAAAAAAAwO/0Dw3jSYf0UtTrAAAAAElFTkSuQmCC"
                            className="w-10 h-10 ml-4 mt-4"
                            
                            />
                          )
                        }
                       
                        {
                           <div className="relative w-fit">
                           <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId || restaurantImageId }`}
                            alt={name}
                            className="w-40 h-35 rounded-2xl  -mt-1 ml-180"
                            />
                            
                            
                           </div>
                        }
                       

                        
                        {
                          isInCart?(
                              <div  className="border-emerald-700">
                              <div className=" flex  w-28 -mt-2 h-10  ml-185 gap-5 font-extrabold absolute z-20 rounded-2xl shadow-2xl bg-white hover:cursor-pointer overflow-hidden hover:bg-gray-300 ">
                              <button onClick={()=>decreasInItem(dtail.id)}
                                className="text-emerald-800 ml-3 text-2xl hover:scale-95"
                                
                                >-</button >
                                   <span className="ml-2 mt-2 text-emerald-800">{CartItems.find((jo) => jo.item.id === dtail.id)?.quantity || 1}</span>
                              <button onClick={()=>additionInItem(dtail.id)}
                              className="text-emerald-800 ml-2 text-2xl hover:scale-95 ">+</button>
                              </div>

                            </div>
                            

                          ):(
                          
                            <div>
                            <button onClick={()=>addToCart(dtail,restDetails?.cloudinaryImageId,restDetails?.areaName ,restDetails?.name)}
                               className="ml-185 -mt-2 w-30 h-10 absolute bg-neutral-100 rounded-2xl shadow-2xl hover:cursor-pointer overflow-hidden hover:bg-gray-300 text-emerald-700 font-bold"

                              >Add</button>
                          
                            </div>
                            
                          )
                        }
                        {
                            <p className={ theme=== "dark"? " text-[17px] flex ml-188 mt-7 text-gray-600 font-[10px]" : " text-[17px]  flex  ml-188 mt-7 text-gray-600 font-[10px]"}>Customiable</p>
                        }
                        
                        {name &&( <p className="-mt-40 ml-4 font-bold text-[19px] text-gray-600">{name}</p>)
                           
                        }
                        <div className="flex">
                        {
                            <p className=" ml-6 font-bold mt-2">₹{(defaultPrice || price ||0)/100}</p>
                        }
                        {
                          <p>{title}</p>
                        }
                        {
                          <p>{subTitle}</p>
                        }
                        </div>
                        <div className="flex mt-1  ">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAADbCAMAAABOUB36AAAAh1BMVEX///8pbCkJYQnR29EAXgAAXQAlaiUAYAAiaSIfaB8aZhoTZBMXZRccZxwjaSMGYQb5+/mjuqO5yrnf59/s8exfi18xcTHd5d1QglBxl3E4dDiLqYubtJt3m3fm7OaovahGfEY8djxlj2XAz8CBoYHL2MuSrZK1x7V9n30AVgBNgE1rk2tYh1i5ARyhAAAH30lEQVR4nN2djULqMAyFLexf/hREVAQFRK/6/s93h6DAlm5taZK23wuY6nFna0+TqytyJvf0P5OB2yfuCkh4ENwVkJBGY+4SCFh3enPuGgh4zpNX7hoI6AiRLriLQOetXGbvhrsKdD76QgxeuKtAp0iEENGEuwxkusNylaK35K4DmU1/t8zsk7sOZHo7zQoRh63avWaFuA5btU/9/TKzb+5KUBF7zZZvCCGr9j49rFJcv3PXgsi2+F1mdsddCyLTX82Wbwgj7mLQOGo2aNXOi+MysxV3NWg8HjUbsGrHJ5otVXvLXQ8S897pMvMv7nqQeBmcLlN0uOvBYRGJ82WuuStC4aZ3vsz8mbsiFCqaFWLIXREGk7iyStF5464JgWWvusz+B3dNCMyqmi2tk7sm+0yi2ipDVO37dX2Z/Q13Vdb5zurLTHLuqmwzSuurLC2ly12XZSDNlqoN7eB6BWg2PNWOau8Ge9Kw4ha3oGaFKLbclVnlK4eXmUy5K7MJ/JwNTrXrjmyZQan2QaLZUrWP3LVZRPrHFCKgkJBcs0IEFBJ6lmq2VG04IaGhfJWlakMJCb01aDagkNCm37TMYEJCRdK0zFBCQt3Gf81gQkJPjZotVTvjrtAKebNmAwkJdaWv7b8EERJq02wgIaGkTbNBHFzft2o2iLjFtmhfZgAhoWm7ZoVIfVftWEGzAcQt5gqaFSL3PST0qKJZ75+11ViFVLV+xy2qsQqpah+4K72IWqxChtdxi4XSc3aH1yEhVc16HhL6VNWs13ELKFYhVa2/cYt6FEiOxyEhIArU8OfkrtYU2RF1YKqFYxVS1foaEroDYxUyfI1byI+oYTwNCcliFTI8DQnBUSA5ScJdsQm6mvU0bqGrWU/jFrIokJzEx54s2pr1UrVNsQoZhX9xC3kUSA5iSKiLROsBEURnjVTN1WT2r4OBySrLj2uMUv7Ndgeoy1htL9VTkvhwfDqeKm2N+0kxPablng2e/n6Qnm2l3Q41X0D9IBtWzqAmL9rvZu5z/VIPb2xDexIlMfiO3O0bOLq75IXkM31015LH8onhnfwscRnpbDk6zJ9ZwoynGjvI7nJqljDPGgcCrpIqnDutO55baM0sYSafXlsoZJYwHltoEmtsg3Zzo89FfvJC6yRmtPLSQjsNZgnjoYUmscEliMWjZxZaTM02Bj+8ehKlxtEijyw0Sy9IN05mnlioulnCeGGhWmYJ082ct1BNs4QZfTm+H6ZvljDLyOEnkZFZwixenbVQU7OE2Tj6JDI3S5j1tYP7YReZJcxoZnj6g8elZgkzd0u4FswS5l44ZKF5Dy/j546F2jJLmPfUia9Qi2YJ48RXaPs27OV8sG/kqmzDXs6a9ywUwSxhWDdyccwShu0rFM0sYZi+Qq18WeowWjFYKK5ZwixjYgtFN0sYYgulMEuYTUT3JKIxSxiyjVwys4SZ0HyFUpolDMFXKLFZwqBbKLlZSsD9CuUwS5h3vLNQJrOEWbwirTNhM0sYpOCxY+PGVLoCmeBYJyGVrkAmODa4SakrkAlOdRJS6wpkglOdhOZo3ypODW56xXvh67ijWtWuQEbLdKcni3qHFX0c6iSk3BXIhJR7db/Uhy3ZxJnuFjodVvTJXenJotEVyARHOglNkHdsHVHtEvlExZGeLNCwJZskfe4V7hihn3c60ZNFryuQCU70ZNHrCmSCC6rV62RlRsqvWv0OK/o4oNoVQZaPvyeLflcgE9h7sph0WNGHvZOQSYcVfdjHjRFdJUt5N99pNMs+uKlp2JJNmMeNkV1/ZB3c1DxsySasg5s+yLJerIObWoYtwfSNfjeMg5veTP41o41RsJFxcFPzgDCQn4DPW6H/gB58si2zddhSjUPAZ/St/+xiG9zUPmypwkkHnxvtHBzb4Kb2YUvn5P2Tz+N73T5pA67BTQrDlk6pdvB50BQD07NWL1YxiGqiu021tpGY4hZasYoeFPDR65PGNLhJJ1YRSdKwTzoWyhK30NBsNpQeOetYKItq1YYt/ZTXlIbVsFCWwU2Kw5Zk7e6OqFtoTK/aseLRyZlZwihbKMPgJsUoUFO7uyOKFsoQElKKAiV1s4RRtNAhtWqVhi0VQnkbWc1CyUNCKlEgvaYEKhZKPripPVaRpZo2p2KhxHGL9mFLBldHFCyUOG7RFgUyvDrSaqHEIaGWYUvGV0dau3WTDm5qia9dcnWkpdUoqWobYxUXXh1pvqFOGhJqigJdfM+y8YY65eCmpiNqG/csmzZyCUNCcs0q9oZto6HVKGHcQjpsydo9S3mrUbrBTbL4mtV7ltJWo2RxC0kUyHIHn7HkhnpBpVp42FLn2/ZXEtzkhSwkBD1nUe5ZwhZKpFooVmG33d0foIUShYSAKJDtdndHAAslilvU/pioTQmAG+oRRUioFqtAbkpQt1CSkFAlCkTQlKBqockr9k+8qmoWs93dH9UmLwQhoXPN2jdLmHMLJQgJncYqCJsSnDV5IQgJnUSBkMwS5qxbN3qfgO7xsYdnljAnFooeEvqLVWhvw17O0UIHM+QflR1+oywdfI590pDjFocoEFsHn98+acghob1mScwS5mChGW5I6EezVGYJs++ThnpwvYtVsHfw+bFQ1LjFtqA1S5idhaKGhKYDarOEmccJYkhoHPO2uzvSzWK8SraP7jRjWuE9a52anr3UUe1/sO+PKZS8s/cAAAAASUVORK5CYII="                     
                        className="w-3 h-3 ml-5 mt-1 "
                        />
                        {    
                             
                            <p className="text-emerald-800 font-medium ml-2 ">{dtail?.ratings?.aggregatedRating?.rating || "No rating"}</p>
                        }</div>

                      

                        {
                          <p className=" line-clamp-2  w-155 text-sm text-gray-600 text-[15px] mt-3  ml-5 font-semibold ">{description?.trim() ? description:"No description avialable"}</p> 

                            
                        } <h2 className="ml-161 -mt-6 font-bold text-gray-700 ">more</h2>
                        
                            
                        </div>
                       )
                    })
                    

                })
              }
             
               
              
             
            </div>
           
        </div>
    )
}
export default Manu;