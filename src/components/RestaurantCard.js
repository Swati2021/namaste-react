import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {name, cuisines, avgRatingString, sla} = props?.resData?.info
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" src={CDN_URL + props?.resData?.info?.cloudinaryImageId } />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} Stars</h4>
            <h4>⌛ {sla?.slaString}</h4>
        </div>
    )
}

//Higher order component => takes a component returns a component
export const WithPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white p-2 m-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;