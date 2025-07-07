import { useCart } from "./context/CartContext";
import { useState } from "react";
import Manu from "./components/Manu";

function Cart(){
    const {CartItems,remove}=useCart();
    



    return (
      
    <div className="mt-30 max-w-4xl  ">
      { CartItems.length === 0 ? (
        <div>
          <img
            src="data:image/jpeg;base64,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" 
            alt="Empty Cart"
            className="ml-125 mt-20 w-80"
          />
          <h1 className="mt-8 ml-140 text-2xl font-bold text-gray-800">
            Your cart is empty
          </h1>
          <p className="ml-120 mt-2 font-semibold text-gray-600">
            You can go to homepage to view more restaurants
          </p>
          <div className="text-amber-600 ml-135 bg-amber-600 mt-5 p-3 w-55">
            <p className="text-amber-50 font-bold">
              See restaurants near you
            </p>
           
          </div>
          <div className=" ml-135 bg-gray-900 mt-5 p-3 w-55">
           <p className="text-amber-50 font-bold">Oops! Something wrong</p></div>
        </div>
      ) : (
        <div className="shadow-2xl w-120 ml-200 -mt-12 rounded-2xl p-2">
         {
          CartItems.length > 0 && CartItems[0]?.restaurantImageId && (
            <div>
               <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${CartItems[0]?.restaurantImageId}`}
            className="w-15 ml-7 mt-4 rounded-2xl "
            />
             <p className="ml-26 -mt-15  font-semibold text-[18px]">{CartItems[0]?.locality}</p> 
          <h2 className="ml-26 font-semibold text-gray-600">{CartItems[0]?.restaurantName}</h2>


            </div>

          )
           
          
         }

            
         
        
         
        <ul className="">
            {CartItems.map((CartItem,idx)=>{
              const {item, restaurantImageId}= CartItem;
         
              return(
                <li className="flex  mt-8 "key={item.id}>
                  <span className="">{

                    item.itemAttribute?.vegClassifier==="VEG" &&(
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1024px-Veg_symbol.svg.png"
                      alt="Oopsy! image not rendering"
                      className="w-13 h-7"
                     
                      />
                    )
                    }
                    {
                      item.itemAttribute?.vegClassifier==="NONVEG" && (
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/1024px-Non_veg_symbol.svg.png"
                          alt="Oopsy! image not rendering"
                        className="w-13 h-7 "
                        />
                      )
                    }
                    
                    </span>
                <span className="text-left ">{item?.name}</span>
                <span className="flex justify-between align-middle ml-28">{
                  <div className=" ">
                  
                  <div className="flex   border p-3 gap-4 ">
                    <button type="button" className="font-bold hover:scale-95 hover:text-green-800 hover:cursor-pointer" onClick={()=>remove(item?.id)}>-</button>
                    <button className="font-bold hover:scale-95 hover:text-green-800 hover:cursor-pointer ">+</button>
                  </div>
                  </div>
         
                  
                  }</span>
                <span className="text-right ml-28">₹{(item?.defaultPrice || item.price ||0)/100}</span>
                </li>

              )
            })}
              
            
           
            
        </ul>
        </div>
      )}
    </div>
  );
}
export default Cart;
  //  https://www.nykaa.com/app-api/index.php/react/navigation?forDevice=desktop
            