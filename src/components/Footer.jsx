import { useSelector } from "react-redux";
import { FaChevronDown } from "react-icons/fa";
function Footer(){


   const theme=useSelector((state)=>state.theme.mode);
    return(
        <div className="mt-25 " >
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
            
            
            />

            <h1 className={theme=== "dark"? " text-gray-700 p-2 rounded-2xl mt-8 ml-31 font-bold text-[25px]" : " text-gray-700 p-2 rounded-2xl mt-8 ml-31 font-bold text-[25px] " }>Cities with food delivery</h1>
            <div className="flex flex-wrap gap-10 ml-32 mt-5">
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order food online in Bangalore</p>
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order food online in Hydrabad</p>
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order food online in Delhi</p>
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order food online in Mumbai</p>
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order food online in Pune</p>
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order food online in kolkata</p>
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order food online in Chennai</p>
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order food online in Ahmedabad</p>
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order food online in Chandigarh </p>
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order food online in Jaipur</p>
                <div>
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold  hover:text-amber-700">Show more</p>
                 <FaChevronDown className={theme=== "dark"? "hover:text-amber-700 ml-30 -mt-8  " : " hover:text-amber-700 -ml-13 mt-5" }/>
                 
                 </div>

            </div> 
             <h1 className={theme=== "dark"? " text-gray-700 p-2 rounded-2xl mt-8 ml-31 font-bold text-[25px]" : " text-gray-700 p-2 rounded-2xl mt-8 ml-31 font-bold text-[25px] " }>Cities with Grocery delivery</h1>
            <div className="flex flex-wrap gap-10 ml-32 mt-5">
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order grocery online in Bangalore</p>
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order grocery online in Hydrabad</p>
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order grocery online in Delhi</p>
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order grocery online in Mumbai</p>
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order grocery online in Pune</p>
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order grocery online in kolkata</p>
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order grocery online in Chennai</p>
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order grocery online in Ahmedabad</p>
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order grocery online in Chandigarh </p>
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold">Order grocery online in Jaipur</p>
                <div className="flex hover:text-amber-700">
                <p className="border w-45 justify-center align-middle rounded-2xl p-4 hover:cursor-pointer hover:scale-92 duration-100 text-gray-700 hover:shadow-2xl font-bold hover:text-amber-700">Show more</p>
                <FaChevronDown className={theme=== "dark"? "hover:text-amber-700  -ml-13 mt-5  " : " hover:text-amber-700 -ml-13 mt-5" }/>
                 </div>


                 <div className="mt-30 bg-gray-200 w-400 h-170 -ml-92">
                 <img src="data:image/png;base64,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"
                  className="ml-75 mt-6 rounded-full w-20 h-20 "
                  />
                  <h3 className="text-amber-600 font-bold ml-100 text-2xl -mt-13">Swiggy</h3>
                  <p className="text-gray-600 ml-80 mt-6">© 2025 Swiggy Limited</p>
                

                <div className="ml-166 ">
                <p className="-mt-25 font-bold ">Company</p>
                 <ul className="mt-4 text-gray-600 font-medium ">
                    <li className="mt-4">About Us</li>
                    <li className="mt-4">Swiggy Corporate</li>
                    <li className="mt-4">Career</li>
                    <li className="mt-4">Team</li>
                    <li className="mt-4">Swiggy One</li>
                    <li className="mt-4">Swiggy Instamart</li>
                    <li className="mt-4">Swiggy Dineout</li>
                    <li className="mt-4">Swiggy Genie</li>
                    <li className="mt-4">Minis</li>
                    <li className="mt-4">Pyng</li>
                 </ul>
                 </div>
                  <div className="ml-220 -mt-105 ">
                <p className="-mt-25 font-bold ">Contact Us</p>
                 <ul className="mt-4 text-gray-600 font-medium ">
                    <li className="mt-4">Help & support</li>
                    <li className="mt-4">Partner With Us</li>
                    <li className="mt-4">Ride With Us</li>
                    
                 </ul>
                 </div>
                  <div className="ml-265 -mt-36 ">
                <p className="-mt-25 font-bold ">Available in:</p>
                 <ul className="mt-4 text-gray-600 font-medium ">
                    <li className="mt-4">Bangalore</li>
                    <li className="mt-4">Gurgaon</li>
                    <li className="mt-4">Hydrabad</li>
                    <li className="mt-4">Delhi</li>
                    <li className="mt-4">Mumbai</li>
                    <li className="mt-4">Pune</li>
                    <p className="border p-4 w-30 rounded-2xl -ml-3 mt-3 h-10 justify-center align-middle">685 cities</p>
                    
                 </ul>
                 </div>

                 <div className="ml-310 -mt-79 ">
                <p className="-mt-25 font-bold ">Life at Swiggy</p>
                 <ul className="mt-4 text-gray-600 font-medium ">
                    <li className="mt-4">Explore With Swiggy</li>
                    <li className="mt-4">Swiggy News</li>
                    <li className="mt-4">Snackables</li>
                    
                 </ul>
                 </div>

                  <div className="ml-220 mt-50 ">
                <p className="-mt-25 font-bold ">Legal</p>
                 <ul className="mt-4 text-gray-600 font-medium ">
                    <li className="mt-4">Terms & Condition</li>
                    <li className="mt-4">Cokkie Policy</li>
                    <li className="mt-4">Privacy Policy</li>
                    
                 </ul>
                 </div>
               
                 
                   <hr className="mt-18 text-5xl text-gray-600 w-320 ml-66"></hr>
                     
                   <p className=" ml-110 mt-17 text-2xl font-bold text-gray-700">For better experience, download the Swiggy app now</p>
                    <div className="flex -mt-12 ml-270 gap-2">
                   <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
                   className="hover:scale-105 duration-100 hover:shadow-2xl"
                   />
                     <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
                    className="hover:scale-105 duration-100 hover:shadow-2xl"
                   />

                   </div>
                 </div>
                 
             


            </div> 
        </div>
    )
}
export default Footer;