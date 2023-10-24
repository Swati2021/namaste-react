import {CDN_URL} from "../utils/constants"
const ItemList = ({item}) => {
    console.log("itemssss",item)
    return (
        <div>
            {
                item?.map((item) => (
                    <div key={item?.card?.info?.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">                      
                        <div className="w-9/12">
                            <div className="py-2">
                                <span>{item?.card?.info?.name}</span>
                                <span> - ₹{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                            </div>
                            <p className="text-xs">{item?.card?.info?.description}</p>
                        </div>
                         <div className="w-3/12 p-4">
                            <div className="absolute">
                                <button className="bg-black text-white p-1 mx-2 rounded-md shadow-lg">Add +</button>
                            </div>
                           {item?.card?.info?.imageId && <img className="w-full" src={CDN_URL + item?.card?.info?.imageId} />}
                        </div>
                    </div>
                ))
            }
        </div>
    )

}

export default ItemList;