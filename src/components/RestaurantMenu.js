import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const [showIndex, setShowIndex] = useState(0);
    const resInfo =  useRestaurantMenu(resId)


    if(resInfo === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[0].card?.card?.info;
    const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    console.log("resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap",resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(cat => cat?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    const setShowIndexProps = (index) => {
        if(index == showIndex){
            setShowIndex(null)
        }else{
            setShowIndex(index)
        }
    }
    console.log("categoriess",categories)
    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h2 className="font-bold">{cuisines.join(", ")} - {costForTwoMessage}</h2>
            {
                categories.map((cat, index) => (
                
                    //controlled component
                <RestaurantCategory key={cat?.card?.card?.title} data = {cat?.card?.card} showItems = {showIndex == index ? true : false} setShowIndex = {() => setShowIndexProps(index)}/>)
                )
            }
            
        </div>
    );
};

export default RestaurantMenu;