import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { useCart } from "../context/CartContext";
import { useSelector } from "react-redux";
import { FaMagnifyingGlass } from "react-icons/fa6";

function SWIGGY_IMG(id, w = 660) {
  if (!id) return "";
  // Cloudinary recommended params
  return `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_${w}/${id}`;
}

// REGULAR cards safely extract
function getRegularCards(cards) {
  if (!Array.isArray(cards)) return [];
  const grouped = cards.find((c) => c?.groupedCard)?.groupedCard;
  return grouped?.cardGroupMap?.REGULAR?.cards || [];
}

// Flatten ItemCategory + NestedItemCategory into [{title, items[]}]
function buildSections(cards) {
  const regular = getRegularCards(cards);
  const out = [];

  for (const rc of regular) {
    const cc = rc?.card?.card;
    if (!cc || !cc["@type"]) continue;

    const t = cc["@type"];
    if (t === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
      const items =
        (cc.itemCards || [])
          .map((x) => x?.card?.info)
          .filter(Boolean) || [];
      if (items.length) out.push({ title: cc.title, items });
    } else if (
      t ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    ) {
      (cc.categories || []).forEach((sub) => {
        const items =
          (sub.itemCards || [])
            .map((x) => x?.card?.info)
            .filter(Boolean) || [];
        if (items.length)
          out.push({ title: `${cc.title} • ${sub.title}`, items });
      });
    }
  }
  return out;
}

function rupees(paise) {
  const n = typeof paise === "number" ? paise : 0;
  return (n / 100).toFixed(0);
}

function Manu({ restId, restInfo, cards, restDetails, restaurantImageId }) {
  const { addToCart, CartItems, removeFromManu, additionInItem, decreasInItem } =
    useCart();
  const [required, setRequired] = useState("");
  const theme = useSelector((state) => state.theme.mode);

  // Build sections from the FULL cards array (not cards[4]…)
  const sections = useMemo(() => buildSections(cards), [cards]);

  const q = required.toLowerCase().trim();

  return (
    <div className="-ml-12">
      <h1
        className={
          theme === "dark"
            ? "text-[17px] font-bold flex text-gray-700 ml-100 mt-15"
            : "text-[17px] font-bold flex text-gray-700 ml-100 mt-15"
        }
      >
        --M E N U--
      </h1>

      <div>
        <input
          type="search"
          value={required}
          onChange={(e) => setRequired(e.target.value)}
          placeholder="  search for dishes"
          className={
            theme === "dark"
              ? "bg-gray-700 text-[16px] font-semibold ml-2 mt-5 border w-230 h-12 rounded-2xl"
              : "text-[16px] font-semibold ml-2 mt-5 border w-230 h-12 rounded-2xl bg-gray-100"
          }
        />
        <FaMagnifyingGlass className="ml-214 -mt-7" />
      </div>

      <hr className="mt-20 w-235 text-2xl text-gray-400 font-extrabold" />

      <div>
        {sections.map((section) => {
          // filter items by search
          const filtered =
            q.length === 0
              ? section.items
              : section.items.filter((it) =>
                  (it?.name || "").toLowerCase().includes(q)
                );

          if (!filtered.length) return null;

          return (
            <div key={section.title}>
              <h2 className="text-xl font-bold ml-5 mt-6">{section.title}</h2>

              {filtered.map((dtail) => {
                if (!dtail) return null;

                const {
                  id,
                  name,
                  description,
                  imageId,
                  defaultPrice,
                  price,
                  itemAttribute,
                  ratings,
                } = dtail;

                const vegType = itemAttribute?.vegClassifier; // "VEG" | "NONVEG"
                const inCart =
                  Array.isArray(CartItems) &&
                  CartItems.some((c) => c?.item?.id === id);

                return (
                  <div
                    key={id}
                    className="shadow m-5 rounded-2xl h-65 p-3 w-230 relative"
                  >
                    {/* VEG / NONVEG dot */}
                    {vegType === "VEG" && (
                      <span
                        className="absolute left-4 top-4"
                        title="VEG"
                        aria-label="VEG"
                      >
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAllBMVEX..."
                          className="w-7 h-6"
                        />
                      </span>
                    )}
                    {vegType === "NONVEG" && (
                      <span
                        className="absolute left-4 top-4"
                        title="NON-VEG"
                        aria-label="NON-VEG"
                      >
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX..."
                          className="w-10 h-10"
                        />
                      </span>
                    )}

                    {/* Item image (fallback to restaurant image) */}
                    <div className="relative w-fit">
                      {imageId || restaurantImageId ? (
                        <img
                          src={
                            imageId
                              ? SWIGGY_IMG(imageId, 400)
                              : SWIGGY_IMG(restaurantImageId, 400)
                          }
                          alt={name}
                          className="w-40 h-35 rounded-2xl -mt-1 ml-180 object-cover"
                          loading="lazy"
                        />
                      ) : null}
                    </div>

                    {/* Add / Qty controls */}
                    {inCart ? (
                      <div className="border-emerald-700">
                        <div className="flex w-28 -mt-2 h-10 ml-185 gap-5 font-extrabold absolute z-20 rounded-2xl shadow-2xl bg-white hover:cursor-pointer overflow-hidden hover:bg-gray-300">
                          <button
                            onClick={() => decreasInItem(id)}
                            className="text-emerald-800 ml-3 text-2xl hover:scale-95"
                          >
                            -
                          </button>
                          <span className="ml-2 mt-2 text-emerald-800">
                            {CartItems.find((jo) => jo.item.id === id)
                              ?.quantity || 1}
                          </span>
                          <button
                            onClick={() => additionInItem(id)}
                            className="text-emerald-800 ml-2 text-2xl hover:scale-95 "
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <button
                          onClick={() =>
                            addToCart(
                              dtail,
                              restDetails?.cloudinaryImageId,
                              restDetails?.areaName,
                              restDetails?.name
                            )
                          }
                          className="ml-185 -mt-2 w-30 h-10 absolute bg-neutral-100 rounded-2xl shadow-2xl hover:cursor-pointer overflow-hidden hover:bg-gray-300 text-emerald-700 font-bold"
                        >
                          Add
                        </button>
                      </div>
                    )}

                    <p
                      className={
                        theme === "dark"
                          ? "text-[17px] flex ml-188 mt-7 text-gray-600 font-[10px]"
                          : "text-[17px] flex ml-188 mt-7 text-gray-600 font-[10px]"
                      }
                    >
                      Customizable
                    </p>

                    {name && (
                      <p className="-mt-40 ml-4 font-bold text-[19px] text-gray-600">
                        {name}
                      </p>
                    )}

                    <div className="flex">
                      <p className="ml-6 font-bold mt-2">
                        ₹{rupees(defaultPrice ?? price ?? 0)}
                      </p>
                    </div>

                    <div className="flex mt-1">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAADbCAMAAABOUB36AAAAh1BMVEX///8..."
                        className="w-3 h-3 ml-5 mt-1"
                      />
                      <p className="text-emerald-800 font-medium ml-2 ">
                        {ratings?.aggregatedRating?.rating || "No rating"}
                      </p>
                    </div>

                    <p className="line-clamp-2 w-155 text-sm text-gray-600 text-[15px] mt-3 ml-5 font-semibold ">
                      {description?.trim()
                        ? description
                        : "No description available"}
                    </p>
                    <h2 className="ml-161 -mt-6 font-bold text-gray-700 ">
                      more
                    </h2>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Manu;
