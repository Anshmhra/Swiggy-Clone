import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import UseLocation from "../Hooks/UseLoaction";
import { useSelector, useDispatch } from "react-redux";
import { debounce } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { BiSolidOffer, BiClipboard } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { setQuery } from "../Feature/querySlice.jsx";

function Navbar() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const [inputValue, setInputValue] = useState(query || "");

  const { CartItems } = useCart();
  const location = UseLocation();
  const theme = useSelector((state) => state.theme.mode);

  const debouncedSetQuery = useMemo(
    () => debounce((value) => {
      dispatch(setQuery(value.toLowerCase()));
    }, 300),
    [dispatch]
  );

  useEffect(() => {
    return () => {
      debouncedSetQuery.cancel();
    };
  }, [debouncedSetQuery]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedSetQuery(value);
  };

  return (
    <div className="-mt-8">
      <nav className="flex flex-wrap md:flex-nowrap items-center justify-between shadow-2xl rounded-2xl p-4">
        <Link to="/">
          <button>
            <img
              src="data:image/png;base64,..."
              alt="oopsy"
              className="w-16 rounded-full hover:scale-95"
            />
          </button>
        </Link>

        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <h1 className="text-sm font-bold hover:text-amber-600 cursor-pointer">Other -</h1>
          <p className="text-xs font-extrabold hover:text-amber-600 cursor-pointer">________</p>
          <p className="text-sm text-gray-500">{location}</p>
          <FaChevronDown />
        </div>

        <div className="mt-4 md:mt-0 w-full md:w-auto">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Search for the restaurant and food"
              className={`w-full md:w-80 h-12 pl-4 pr-10 rounded-2xl ${theme === "dark" ? "bg-gray-800 text-gray-100" : "bg-white text-black"}`}
            />
            <FaMagnifyingGlass className="absolute right-3 top-3.5" />
          </div>
        </div>

        <ul className="flex flex-col md:flex-row items-start md:items-center mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6 font-bold">
          <li>
            <Link to="/SwiggyCorporate" className="hover:text-amber-600 flex items-center gap-1">
              <BiClipboard className="w-5 h-5" />
              <p>Swiggy Corporate</p>
            </Link>
          </li>

          <li>
            <Link to="/Offers" className="hover:text-amber-600 flex items-center gap-1">
              <BiSolidOffer className="w-5 h-5" />
              <p>Offers</p>
            </Link>
          </li>

          <li>
            <Link to="/Cart" className="hover:text-amber-600 flex items-center gap-1">
              <BsCart3 className="w-5 h-5" />
              <p>Cart</p>
              <div className="-mt-3 ml-1 bg-emerald-700 text-white w-6 h-6 rounded-full flex justify-center items-center text-xs">
                {CartItems?.length}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
