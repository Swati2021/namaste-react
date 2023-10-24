import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    const handleClick = () => {
        showItems ? setShowIndex(null) : setShowIndex();
        console.log("clicked",showItems)
    }
    return (
        <div>
         {/* header */}
         <div className="w-6/12 bg-gray-50 shadow-lg mx-auto my-4 p-2">
            <div onClick={handleClick} className="flex justify-between cursor-pointer">
                <span className="text-m font-bold">{data?.title}({data?.itemCards?.length})</span>
                <span>⬇️</span>
            </div>
           {showItems && <ItemList item={data?.itemCards} />}
         </div>

        </div>
    )
}

export default RestaurantCategory;