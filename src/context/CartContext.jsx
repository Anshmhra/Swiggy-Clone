import { createContext ,useState, useContext} from "react";

const CartContext=createContext();


export function CartProvider({children}){

   const [CartItems,setCartItems]=useState([]);

  //  const [removeItem,setRemoveItems]=useState([]);
   


   function addToCart(item ,restaurantImageId ,restaurantName,locality){
    setCartItems(prev=>[...prev,{item,restaurantImageId ,restaurantName,locality}]);
   }

   
 function remove(itemId){
  const removeCart= CartItems.filter((cartobj)=>cartobj.item.id!==itemId);
  setCartItems(removeCart);

  
}
function removeFromManu(itemId){
  setCartItems((prev)=>prev.filter((CartObj)=> CartObj.item.id !== itemId));

}

    return(
        <CartContext.Provider value={{CartItems,addToCart,remove ,removeFromManu}}>{children}</CartContext.Provider>
    )
}

export function useCart(){
  return useContext(CartContext);
}