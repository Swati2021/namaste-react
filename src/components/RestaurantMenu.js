import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants"

const RestaurantMenu = () => {
    useEffect(() => {
        fetchMenu()
    }, []);
    const [resInfo, setResInfo] = useState(null);  
    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json);
        console.log("data2", json);
        console.log("resInfo?.data?.cards[0].card?.card?.info",resInfo?.data?.cards[0].card?.card?.info?.name)
    }
    const {resId} = useParams();
    console.log("resid",resId)

    if(resInfo === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[0].card?.card?.info;
    const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>
            <h2>Menu</h2>
            <ul>
            {itemCards.map(item => <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} - {"Rs."}
                {item?.card?.info?.price/100}
                </li>) }
            </ul>
        </div>
    )
}

export default RestaurantMenu;