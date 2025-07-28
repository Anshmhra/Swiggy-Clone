import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import UseLocation from "../Hooks/UseLoaction";
import { useSelector,useDispatch } from "react-redux";
import { debounce } from "lodash";
import { useEffect,useMemo,useState } from "react";
import { BiSolidOffer,BiClipboard } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";

import { FaChevronDown } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { setQuery } from "../Feature/querySlice.jsx"; 



function Navbar(){

    const dispatch = useDispatch();
const query = useSelector((state) => state.search.query);
     const [inputValue, setInputValue] = useState(query || "");

  const {CartItems}=useCart();
  const location=UseLocation();
      const theme=useSelector((state)=>state.theme.mode);


      const debouncedSetQuery=useMemo(()=> debounce((value)=>{
    dispatch(setQuery(value.toLowerCase()));
      },300),[dispatch]);

      useEffect(()=>{
        return()=>{
            debouncedSetQuery.cancel();
        };
      },[debouncedSetQuery]);

      const handleChange = (e) => {
        const value = e.target.value;
         setInputValue(value);       
         debouncedSetQuery(value);    
  };


    return(
        <div className="-mt-8  ">
            <nav className="flex shadow-2xl rounded-2xl " > 
                
                <Link to="/"><button><img src="data:image/png;base64,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"
            alt="oopsy"
            className=" ml-23  mt-0 w-20 rounded-b-full rounded-e-full rounded-l-full hover:scale-95"

            /></button></Link>
            
            <div className="flex">
            <h1 className="ml-2 mt-7 text-1xl font-bold hover:text-amber-600 hover:cursor-pointer" >Other - </h1>
            <p className="mt-10 -ml-15 hover:text-amber-600 font-extrabold hover:cursor-pointer">________</p>
            <p className="mt-7 ml-2 text-gray-500">{location}</p>
           <FaChevronDown className="mt-8 ml-3" />
            </div>
            

           <div >
            <input type="text"  value={inputValue} onChange={handleChange} placeholder="  Search for the restaurant and food"
            
            className={theme=== "dark"? "bg-gray-800 text-gray-100 w-80 h-14 rounded-2xl  ml-12 flex justify-end items-center mt-2 mr-4" : "bg-white text-black w-80 h-14 rounded-2xl  ml-12 flex justify-end items-center mt-2 mr-4"}
            />
            <FaMagnifyingGlass className="ml-85 -mt-8"/>
            </div>
          

            <ul className="flex ml-1 mt-6 gap-12 font-bold">
                <li className="ml-4">
                    
                    <div className="flex">
                       
                    <Link to="/SwiggyCorporate" className="hover:text-amber-600 flex mt-2 gap-2 "><BiClipboard className="-ml-5 w-5 h-5 "/><p  className="-ml-1  ">Swiggy Corporate</p></Link></div>
                </li>
                <div className="flex ml-4">
               
                <Link to="/Offers "className="hover:text-amber-600 -mt-3 flex mt-2 gap-2 "><BiSolidOffer className="-ml-5 w-8 h-6 "/><p className="-ml-1 ">Offers</p></Link></div>
                <li>
                    <div className="flex ">
                   
                    <Link to="/Cart" className="hover:text-amber-600 flex mt-2 gap-2"><BsCart3  className=" w-5 h-5 "/><p className="-ml-1 ">Cart</p><div className="-mt-4 -ml-2 overflow-hidden  bg-emerald-700 text-amber-50 w-7  h-7 p-1 rounded-full flex justify-center align-middle">{CartItems?.length}</div></Link></div>
                </li>
                

            </ul>
           
            
        
            </nav>


        </div>
    )
}
export default Navbar;
// bg-gray-100  w-80 h-14 rounded-2xl  ml-12 flex justify-end items-center mt-2 mr-4 