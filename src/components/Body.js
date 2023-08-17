import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurat] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurat(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return listOfRestaurants?.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                    onChange={ (e) => {setSearchText(e.target.value)}} />
                    <button
                    onClick={
                        () => {
                           console.log("hi search",searchText) 
                           const filteredSearchData = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                           setFilteredRestaurat(filteredSearchData);
                        }
                    }
                    >Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredResList = resList.filter((res) => res.info.avgRating > 4 );
                    setListOfRestaurants(filteredResList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="search">Search</div>
            <div className="res-container">
            {
            filteredRestaurant?.map((restaurant) => (
             <Link style={{  color: 'inherit', textDecoration: 'inherit' }} key = {restaurant?.info?.id} to={"/restaurant/" + restaurant?.info?.id}>
                <RestaurantCard resData = {restaurant} />
             </Link>
            ))
            }
            </div>
        </div>
    )
}

export default Body