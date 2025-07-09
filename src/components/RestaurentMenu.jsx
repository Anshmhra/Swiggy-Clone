import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";
import Manu from "./Manu";
import UseRestaurentMenu from "../Hooks/UseRestaurentMenu";

function RestaurantMenu(){

   const {restId} =useParams();

  const restInfo=UseRestaurentMenu(restId);


     const cards = restInfo?.data?.cards;

  const restDetails = cards?.[2]?.card?.card?.info;
  const tabs = cards?.[1]?.card?.card?.tabs;


  const offer= cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
  

    return (
        <div className=" ml-58 mt-10">
            <h1 className="text-3xl font-bold mt-10">{restDetails?.name}</h1>
            
           <div className="flex gap-5 font-bold mt-7 ">
           <h3 className="text-amber-600">{tabs?.[0]?.title }</h3>
          
           <h3>{tabs?.[1]?.title}</h3>
           </div>
           <hr className="w-220 h-5 -ml-3"></hr>

           <div className=" border-1 border-b-gray-600  border-t-gray-600   border-x-gray-600 mt-3 w-220 h-38 rounded-2xl shadow-2xl ">
            <div className="flex gap-1 font-semibold ml-3 mt-3">
            <p>⭐{restDetails?.avgRating} - </p>
            <p>{restDetails?.totalRatingsString}</p>
            <p className="text-2xl text-gray-600 -mt-3 ml-1">.</p>
            <p className="ml-2 ">{restDetails?.costForTwoMessage}</p>
            </div>
             
           <p className="flex  gap-3 ml-4 mt-1 text-amber-700 font-semibold underline ">{restDetails?.cuisines.join(", ")}</p>
              
              <div className="flex gap-5 ml-7 mt-3 font-bold">
                <p>Outlet</p>
                <p className="text-gray-600 font-normal"> {restDetails?.areaName}</p>
              </div>
              <div className="flex ml-7 mt-2  font-bold">
              <p>{restDetails?.sla.minDeliveryTime}-</p>
               <p>{restDetails?.sla.maxDeliveryTime} mins</p>
              </div>

           </div>
           <p className="text-2xl font-bold mt-6">Deals for you</p>

           <div className=" flex gap-12 mt-5 flex-wrap  ">

            {
              offer?.[0]?.info &&(
                 <div className="  border p-2 h-18 rounded-2xl  w-78">
          
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/deal-of-day"
            
            className="w-12 "
            />
            <div className="-mt-12">
           <p className="font-extrabold ml-18">{offer?.[0]?.info?.header}</p>   
           <p className="text-gray-700 font-bold ml-18">{offer?.[0]?.info?.description}</p>
           </div>
          </div>
              )
            }

          
            {
              offer?.[1]?.info &&(
                 <div className="   border p-3 rounded-2xl w-80">
          
           <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"
           
             className="w-12 "
           />
           <div className="-mt-12">
           <p className="font-extrabold ml-12">{offer?.[1]?.info?.header}</p>   
           <p className="text-gray-700 font-bold ml-12">{offer?.[1]?.info?.description}</p>
           </div>
          </div>
              )
            }
          
              {
                offer?.[2]?.info &&(
                  <div className="   border p-3 rounded-2xl w-80">
          
           <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"
           
           className="w-12"
           />
           <div className="-mt-12">
           <p className="font-extrabold ml-12">{offer?.[2]?.info?.header}</p>   
           <p className="text-gray-700 font-bold ml-12">{offer?.[2]?.info?.description}</p></div>
          </div>
                )
              }
              
          {
            offer?.[3]?.info &&(
                 <div className="  border p-3 rounded-2xl w-80">
          
           <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2025/5/27/47401195-2e95-4f53-bb7c-367fa0316dc7_AMEXMenuLogo.png"
           
           
           className="w-12"/>
           <div className="-mt-12">
           <p className="font-extrabold ml-12">{offer?.[3]?.info?.header}</p>   
           <p className="text-gray-700 font-bold ml-12">{offer?.[3]?.info?.description}</p></div>
          </div>
            )
          }

        
          {
            offer?.[4]?.info &&(
               <div className="   border p-3 rounded-2xl w-80">
          
           <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2025/6/2/cbcaf732-4dd1-40d7-a756-e78def3542f1_OneCardMenuVisibilityNewLogo.png"
          
          className="w-12"
          />
           <div className="-mt-12 ">

         
           <p className="font-extrabold ml-12">{offer?.[4]?.info?.header}</p>   
           <p className="text-gray-700 font-bold ml-12">{offer?.[4]?.info?.description}</p>  </div>
          </div>

            )
            
          }

           

          </div>

           <Manu restId={restId} restInfo={restInfo} cards={cards} restDetails={restDetails} />
         
         
        </div>
    )
}
export default RestaurantMenu;
 
 