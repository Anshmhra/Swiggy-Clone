import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
function Manu({restId,restInfo,cards,restDetails}){

   
   const {addToCart}=useCart();
    const [required ,setRequired]=useState("");
    // const [display ,setDisplay]=useState();
    const Info=cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const again=Info?.card?.card?.carousel?.dish?.info;

    return(
     
        <div className="-ml-12"> 
            <h1 className="flex text-gray-700 ml-100 mt-15 ">--M E N U--</h1>
            <div>
            <input type="search" value={required} onChange={(e)=>setRequired(e.target.value)} placeholder= " serach for dishes  " 
            className="ml-2 mt-5 border w-230 h-12 rounded-2xl bg-gray-100"
            />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw7ioc38Ib77lcabaT4NGXYA-Wj2tRuhUfOzk6K1_o2F6QFq2x"
            
            className="w-16 ml-215 -mt-14  rounded-full bg-gray-100"
            />
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
                      


                       return(
                       <div key={`${id}-${idx}`} className="shadow m-5 rounded-2xl  h-62 p-3 w-230">

                        {
                          pop ==="VEG" && (
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAllBMVEX+/v739/cAgAH///8AewAAeAD++/3L38pdml7n8uj7+fpysXMXexfV5tQjgSPF3cX9//ve7d9Zmlqgw5wAcwAAbwDt9O3A18C30rfz+POjxaKRvI5TkVMAaQCqzKvP5dBlpWY6jTt7sHoWgRVUmVR/sIAugi5LlkyMvYqfyZw0iTE8kzwihiOSuZFFlkdfol1qoGtFikV1KTDVAAAF4UlEQVR4nO3da3OqOhQGYA8raLEiUCMFPVvxQu22Yt3//8+dUDs9ne42JLhWiG3emX7rCI+5AQmx9883Sq/rE8CMw9gah7E1DmNrvjlmCNeSfiOmn9xeSx7TYRNmMPKvI/wmaMaMvesI+5mYrutQQ5gOZlXNJhZntt6oY8T/QWxxIBrrYXoWx2FsjcPYGoexNQ5jaxzG1jiMrXEYW+MwtsZhbI3D2BqHsTUOY2scxtY4jK3pDtN/PQG0D+wI8zYxXE9DnIPxseYx9Znng8V8XWz/rXO3LcpJlqCIzGJqSHa7ehhv6imu13jeZjR+2D0OLvYYxIhTDX7v+cvE42cTq9x/juKLPKYwon2k2dMvLp0o9qf8dpnHrTlmMKJ2JZMD95snvn1+zIK2pWMEA3lYHeSF8q66TVtzDGAAEnXKmfOcpW009BhIF1v+RaP/srKxctCi6VBjAJalp0l54awq/S+OGAPxYtWCIsI2RajbcmgxkJajdpaas880NaQYCHatKbVm9KinIcTEkGwURhZZeKGlIcOIC5PB9JJyOWuOOp0aGQbFInq1o8aIQ4UBiC6sYq9hW40vkAoTbRDK5UVTaByUBAPLlsPLZ5pStabRYCC5Q7OI4XOSKx6WAiPGSjyLOOw4U3vuQYGBeIZpEV3aPukK04dwg2oRmucc4k4wkBY4vfK78FlHmHg2xbZ43i+lrxEdAwlugzmHHbvB4FeyOtNM4dDYGFgSVDIRtso7wFx0CyOJP2k+NjIGIpqCEdk1XtWgYxCvYz5kMzOMgeWIyiKO3nSJho1Zk1k8b9/UoeFiIPhDVstEF1CaxUywr8reh92FDYfHxMRwIiwYcfyGeoaKgZBqkDnHr+RXm7iYxYHSIuqZ/L4GF1ORFowYau6NYSA4kVxj/h++kFlwMYMjccn4pXTcRMVklB1zHfYsbTSomBlxLfO8g3SkQe0AKnIMHxjCQLqmx2SyLxMTkxTE7b9+SiMbNjExxON/HX8u684wMYM9PWZtDHOgx5zSr08AFXNPPczUA03aN4Qht9TzaN8IszNWzQxgnmXPm1AxtHczL5jCFMZEb7Y2hnn6RuNMsqXHVMYwNJMZ78MXhq7NemlJj5E+BMDExPT3M8zU/YyBO00mn0PHfQZAPdA0rKNBxZDf0Mg7s2t7biZ/2Iz7RHNOWzLsIG3/yJhsTIrxTw3HR8Vgrsz6DGNyFqAHqEuz/srB5PwMcT1rPjwuJqfsnFlleLb5kdCyioxi+hDQ1TO/kFMIVmjQPaIdN65rQsckVGtn2K7xvQD8VU1Ud2ijDCSPzIgwAdF6M4WlgAQrAR91XpZTDm9YnUGCiSGlmAzg607WaPbiDL/VsL3K+wAU65pz/OlAX2G5KdHy+WSLrOFzpRecaN7SyMaozcZXfaGCBBOjLqJhe/kNJi0mhhzzqkatwVBhRPIbNI3CgmZiDCRYqzXZXHkHFLpXG5E0rFR414QaE0P4B6GDFhb1l2gJXweG8OZSDfPVBhgDGEgufMLJ2ARU3mgygKlvB+bsgobjPym+BWgEI8abbNW6cHix1DoaMUZ8fC/ctru9Ec1Fe1MQ+j004rnKfjN/Fcs+0t9gy8DuJhAcReFotZ2XXqzFoQxsogOw2OtspcFGGq/Nm8bUTWeyO6h1bIw9FJEolaYnMd1h6s2aFqd9I0f8w7aMWm+kZWxLMMG5r24O/lc7gtUNha1OkxAaH491j6k5kGST0xPj/sciYsznbFfOBulF27UZ33kuCLPZenvw+ZRz3xd/U2HbF/PFfZhe0c5zb544TcJBls2q+XxezbIsCsMgv2zPuY4wZ0995vk5cQ9tu8YuNwVF3HTy9QPdDqeWxmFsjcPYGoexNQ5jaxzG1jiMrXEYW+MwtsZhbI3D2BqHsTU/GdPqhxSMRQ+zjRKrs9DAeIfdndWpt1dSxrz9mo+t8XQwV5Afh4keRtcRfgqGQzlmmIbXkiT/cO5/YUTZXEuGH8/8E8z1xmFsjcPYGoexNf8BAiA/PTPrgo4AAAAASUVORK5CYII="
                            
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
                            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`}
                            alt={name}
                            className="w-40 h-35 rounded-2xl  mt-2 ml-180"
                            />
                        }
                        <div className="-mt-8">
                        <button 
                        onClick={()=>addToCart(dtail,restDetails?.cloudinaryImageId,restDetails?.areaName ,restDetails?.name)}
                        className="ml-185 - w-30 h-10 bg-neutral-100 rounded-2xl shadow-2xl hover:cursor-pointer overflow-hidden hover:bg-gray-200 text-emerald-700 font-bold">Add</button>
                        <p className="ml-190 text-gray-600 font-[10px]">Customiable</p></div>
                        
                        {
                            <p className="-mt-40 ml-6 font-bold text-gray-700">{name}</p>
                        }
                        <div className="flex">
                        {
                            <p className=" ml-6 font-bold">₹{(defaultPrice || price ||0)/100}</p>
                        }
                        {
                          <p>{title}</p>
                        }
                        {
                          <p>{subTitle}</p>
                        }
                        </div>
                        <div className="flex mt-1  ">
                        <img src="data:image/jpeg;base64,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"
                        className="w-3 h-3 ml-5 mt-0.6 "
                        />
                        {    
                             
                            <p className="text-emerald-700 font-medium ml-2 -mt-1">{dtail?.ratings?.aggregatedRating?.rating || "No rating"}</p>
                        }</div>

                      

                        {
                          <p className=" line-clamp-2  w-155 text-sm text-gray-700 mt-3 ml-5 font-semibold ">{description?.trim() ? description:"No description avialable"}</p> 

                            
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