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
  
function decreasInItem(itemId){
  // const decearse=CartItems.find(find=>find.item.id!==itemId);
  setCartItems((prevItems)=>
  prevItems.map((obk)=>obk.item.id==itemId
  ? {...obk,quantity: obk.quantity-1}
  : obk
)   .filter((obj) => obj.quantity > 0))

}
   
 function remove(itemId){
  const removeCart= CartItems.filter((cartobj)=>cartobj.item.id!==itemId);
  setCartItems(removeCart);

  
}
function removeFromManu(itemId){
  setCartItems((prev)=>prev.filter((CartObj)=> CartObj.item.id !== itemId));

}
function additionInItem(itemId){
  const exist=CartItems.find(mole=>mole.item.id===itemId)
  if(exist){
     setCartItems((prevItems)=>
      prevItems.map((obj)=>obj.item.id===itemId
    ?{...obj,quantity:obj.quantity+1}:obj
  ));
  }
 
}

    return(
        <CartContext.Provider value={{CartItems,addToCart,remove ,removeFromManu,additionInItem,decreasInItem}}>{children}</CartContext.Provider>
    )
}

export function useCart(){
  return useContext(CartContext);
}
  //  setCartItems(prev=>[...prev,{item,restaurantImageId ,restaurantName,locality}]);