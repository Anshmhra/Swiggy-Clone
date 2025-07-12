import { createContext ,useState, useContext} from "react";

const CartContext=createContext();


export function CartProvider({children}){

   const [CartItems,setCartItems]=useState([]);

  //  const [removeItem,setRemoveItems]=useState([]);
   


   function addToCart(item ,restaurantImageId ,restaurantName,locality){
    setCartItems((prev)=>{
      if(!item?.id)return prev;
     const exitence=prev.find(
      (atom)=>atom.item?.id ===item.id
     );
     if (exitence)return prev;
     return[
      ...prev,{item,restaurantImageId ,restaurantName,locality,quantity:1}

     ]
     
    })
   
   }
  

   
 function remove(itemId){
  const removeCart= CartItems.filter((cartobj)=>cartobj.item.id!==itemId);
  setCartItems(removeCart);

  
}
function removeFromManu(itemId){
  setCartItems((prev)=>prev.filter((CartObj)=> CartObj.item.id !== itemId));

}
function additionInMenu(itemId){
  setCartItems()
}

    return(
        <CartContext.Provider value={{CartItems,addToCart,remove ,removeFromManu}}>{children}</CartContext.Provider>
    )
}

export function useCart(){
  return useContext(CartContext);
}
  //  setCartItems(prev=>[...prev,{item,restaurantImageId ,restaurantName,locality}]);