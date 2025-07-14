import UseOnline from "./Hooks/UseOnline";
import UseLoad from "./Hooks/Loader";

function Offer(){
    const Online=UseOnline();
    const load=UseLoad();

    if(load){
  return(
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">Loading Please Wait...</h1>
    </div>
  )
}


     if(Online===false){
        return(
            <div className="flex justify-center items-center h-screen">
            <h1 className="font-bold text-2xl">Looks like you're offline, Please check your internet connection.</h1>
             </div>
        )
     }


        return(
        <div>
            <div>
            <div className="hover:scale-105 duration-100">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/DO_collectionBanner.png"
            
            className="w-6xl h-100 ml-23 mt-10 "
            />
            <div className="ml-35 text-amber-50 font-bold text-3xl -mt-50 mb-40 ">
            <p>Restaurents With Great Offers  </p>
            <p>Near Me</p>
            </div></div>
            <div className="flex gap-7 ml-35 text-xl font-bold">
                <h3 className=" text-gray-500 hover:cursor-pointer hover:scale-105">Order Online</h3>
                 <h3 className="text-amber-600 hover:cursor-pointer hover:scale-105">Dineout</h3>
            </div>
            <hr className=" mt-4 ml-30 w-274 text-4xl font-extrabold text-gray-600  "></hr>
            <ul className="flex gap-10 mt-10 ml-35 mb-10 ">
                <li className="border p-3 rounded-3xl text-gray-600 font-bold hover:scale-105 hover:shadow-2xl w-32">Filter</li>
                <li className="border p-3 rounded-3xl text-gray-600 font-bold hover:scale-105 hover:shadow-2xl w-32">Sort By</li>
                <li className="border p-3 rounded-3xl text-gray-600 font-bold hover:scale-105 hover:shadow-2xl w-32">Within 5km</li>
                <li className="border p-3 rounded-3xl text-gray-600 font-bold hover:scale-105 hover:shadow-2xl w-32">Rating 4+</li>

            </ul>

            <div className=" shadow ml-35 h-60 w-270 rounded-3xl ">
                <p className="ml-6 mt-5 text-2xl font-bold text-gray-600">Get the Best Offer on Food from Top Restaurants Near me</p>
                <p className="ml-6 mt-5 w-260 font-bold text-gray-600">Get ready for a delicious adventure packed with unbeatable dining offers at your favorite restaurants. Whether you’re craving a cheesy pizza, a juicy burger, or a delightful bowl of pasta, now is the perfect time to head out and indulge in your favorite meals—while saving big!</p>
                 <p className="ml-6 mt-2 w-260 font-bold text-gray-600">All the top-rated restaurants and popular eateries are offering enticing deals that are too good to pass up. From buy-one-get-one-free offers to</p>
                 <p className="ml-6  mt-2 w-260 font-bold text-amber-600">See more</p>
            </div>
            </div>
        </div>
    )
}
export default Offer;