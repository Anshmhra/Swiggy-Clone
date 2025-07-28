import UseLocation from "../Hooks/UseLoaction";
import { useDispatch, useSelector} from "react-redux";
import { ToggleTheme } from "../Feature/Theme";
function Token(){
    const location=UseLocation();
    const theme=useSelector((state)=>state.theme.mode);
    const dispatch=useDispatch();

    
    return (
        <div className="-ml-20">
            <h1 className={ theme=== "dark"? "bg-black text-gray-500 ml-30 mt-15 font-bold text-2xl" : " text-black ml-30 mt-15 font-bold text-2xl"} >Restaurents With online food delivery in {location}</h1>
            <div className="ml-180   items-center -mt-7 mr-4 ">
            <button onClick={()=>dispatch(ToggleTheme())}
                className={theme=== "dark"? "bg-gray-800 text-white p-2 rounded-2xl" : "bg-gray-800 text-white p-2 rounded-2xl " }
                >
                    {theme ===" light"? "dark" : "light"} mode

            </button>
            </div>



            <div className="flex gap-5 ml-25 mt-7 font-semibold  ">
                <button className={theme==="dark"? "bg-gray-900 text-white p-2 w-25 rounded-2xl shadow-2xl hover:scale-102 hover:cursor-pointer" : "bg-white text-black p-2 w-25 rounded-2xl shadow-2xl hover:scale-102 hover:cursor-pointer"}>Filter</button>
                <button className={theme==="dark"? "bg-gray-900 text-white p-2 w-25 rounded-2xl shadow-2xl hover:scale-102 hover:cursor-pointer" : "bg-white text-black p-2 w-25 rounded-2xl shadow-2xl hover:scale-102 hover:cursor-pointer"}>Sort By </button>
                <button className={theme==="dark"? "bg-gray-900 text-white p-2 w-35 rounded-2xl shadow-2xl hover:scale-102 hover:cursor-pointer" : "bg-white text-black p-2 w-35 rounded-2xl shadow-2xl hover:scale-102 hover:cursor-pointer"}>Fast Delivery</button>
                <button className={theme==="dark"? "bg-gray-900 text-white p-2 w-35 rounded-2xl shadow-2xl hover:scale-102 hover:cursor-pointer" : "bg-white text-black p-2 w-35 rounded-2xl shadow-2xl hover:scale-102 hover:cursor-pointer"}>New on Swiggy</button>
                <button className={theme==="dark"? "bg-gray-900 text-white p-2 w-30 rounded-2xl shadow-2xl hover:scale-102 hover:cursor-pointer" : "bg-white text-black p-2 w-30 rounded-2xl shadow-2xl hover:scale-102 hover:cursor-pointer"}>Rating 4.0+</button>
                <button className={theme==="dark"? "bg-gray-900 text-white p-2 w-25 rounded-2xl shadow-2xl hover:scale-102 hover:cursor-pointer" : "bg-white text-black p-2 w-25 rounded-2xl shadow-2xl hover:scale-102 hover:cursor-pointer"}>Pure veg</button>
                <button className={theme==="dark"? "bg-gray-900 text-white p-2 w-25 rounded-2xl shadow-2xl hover:scale-102 hover:cursor-pointer" : "bg-white text-black p-2 w-25 rounded-2xl shadow-2xl hover:scale-102 hover:cursor-pointer"}>Offers</button>
                <button className={theme==="dark"? "bg-gray-900 text-white p-2 w-35 rounded-2xl shadow-2xl hover:scale-102 hover:cursor-pointer" : "bg-white text-black p-2 w-35 rounded-2xl shadow-2xl hover:scale-102 hover:cursor-pointer"}>Rs. 300-Rs. 600</button>
                <button className={theme==="dark"? "bg-gray-900 text-white p-2 w-35 rounded-2xl shadow-2xl hover:scale-102 hover:cursor-pointer" : "bg-white text-black p-2 w-35 rounded-2xl shadow-2xl hover:scale-102 hover:cursor-pointer"}>Less than Rs. 300</button>
            </div>

        </div>
    )
}
export default Token;
// p-2 w-25 rounded-3xl shadow-2xl hover:scale-102 hover:cursor-pointer -{ 