import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import UseLocation from "../Hooks/UseLoaction";

function Navbar({query,setQuery}){

  const {CartItems}=useCart();
  const location=UseLocation();

    return(
        <div className="-mt-3.5  ">
            <nav className="flex shadow-2xl rounded-2xl " > 
                <Link to="/"><button><img src="data:image/png;base64,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"
            alt="oopsy"
            className=" ml-23  mt-0 w-20 rounded-bl-2xl hover:scale-95"

            /></button></Link>
            
            <div className="flex">
            <h1 className="ml-2 mt-7 text-1xl font-bold hover:text-amber-600 hover:cursor-pointer" >Other - </h1>
            <p className="mt-10 -ml-15 hover:text-amber-600 font-extrabold hover:cursor-pointer">________</p>
            <p className="mt-7 ml-2 text-gray-500">{location}</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT08USDXzXIVJQl7em2LsbtdK1vdH_EiSvAZu2yJNzBrhdFfFCK8o_z8lJ3qqWhrSNJy5U&usqp=CAU"
            
            className="w-4 h-4 rotate-180 bg-gray-300 rounded-2xl mt-8 ml-3"
            />
            </div>
            

           <div >
            <input type="text"  value={query} onChange={(e)=>setQuery(e.target.value.toLowerCase())} placeholder="  Search for the restaurant and food"
            
            className="bg-gray-100  w-80 h-14 rounded-2xl mt-3 ml-12"
            />
            <img src="data:image/png;base64,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"
              alt="oopsy" 
              className="w-6 h-5 ml-84 overflow-hidden object-cover -mt-9 rounded-xs rounded-b-full rounded-t-full bg-gray-600 "          
             />
            </div>
          

            <ul className="flex ml-1 mt-6 gap-12 font-bold">
                <li className="ml-4">
                    
                    <div className="flex">
                        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRH2resslaTp_qOWbrgXrWLh7hH7lrEOA4x4OkaDgYZ9dvOj9xV"
                        className="w-18 h-20 -mt-11 -mr-5  rounded-2xl "
                        />
                    <Link to="/SwiggyCorporate" className="hover:text-amber-600 ">Swiggy Corporate</Link></div>
                </li>
                <div className="flex ml-4">
                <img src="data:image/png;base64,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"
                    
                    className="w-10 h-10  -ml-4 -mt-2"

                    />
                <Link to="/Offers "className="hover:text-amber-600 ">Offers</Link></div>
                <li>
                    <div className="flex">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRepBANEbmt2mCCQ8blxIEVQ1DjBK_CmAnrcWeKFJRtthcfGBXu"
                    className="w-7 h-6  mt-1 mr-2 rounded-2xl "
                    />
                    <Link to="/Cart" className="hover:text-amber-600 ">Cart<div className="-mt-9 ml-7 overflow-hidden  bg-emerald-700 text-amber-50 w-7  h-7 p-1 rounded-full flex justify-center align-middle">{CartItems?.length}</div></Link></div>
                </li>
                

            </ul>
           
            

            </nav>


        </div>
    )
}
export default Navbar;