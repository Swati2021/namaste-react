import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    console.log("props",props?.resData?.info?.cloudinaryImageId);
    const {name, cuisines, avgRatingString, sla} = props?.resData?.info
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <h3>{name}</h3>
            <img className="res-logo" src={CDN_URL + props?.resData?.info?.cloudinaryImageId } />
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} Stars</h4>
            <h4>⌛ {sla?.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;