import RestaurantCard, {WithPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurat] = useState([]);
    const [searchText, setSearchText] = useState("");
    const { setUserName, loggedInUser} = useContext(UserContext)
    //higher order
    const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard)
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurat(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    console.log("listOfRestaurants",listOfRestaurants)
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return (
            <h1>You seem to be offline!!!!</h1>
        )
    }
    return listOfRestaurants?.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="search-box border border-solid border-black" value={searchText}
                    onChange={ (e) => {setSearchText(e.target.value)}} />
                    <button className="bg-green-100 m-4 px-4 py-1 rounded-lg"
                    onClick={
                        () => {
                           console.log("hi search",searchText) 
                           const filteredSearchData = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                           setFilteredRestaurat(filteredSearchData);
                        }
                    }
                    >Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        const filteredResList = resList.filter((res) => res.info.avgRating > 4 );
                        setListOfRestaurants(filteredResList);
                    }}>
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <input value={loggedInUser} className="border border-black" onChange={(e) => setUserName(e.target.value)}/>
                </div>
            </div>
            
            <div className="flex flex-wrap">
            {
            filteredRestaurant?.map((restaurant) => (
             <Link style={{  color: 'inherit', textDecoration: 'inherit' }} key = {restaurant?.info?.id} to={"/restaurant/" + restaurant?.info?.id}>
                {restaurant?.info?.veg ? <RestaurantCardPromoted resData = {restaurant}/> : <RestaurantCard resData = {restaurant} />}
                
             </Link>
            ))
            }
            </div>
        </div>
    )
}

export default Body