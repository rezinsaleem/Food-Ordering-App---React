import { Link } from "react-router-dom";
import {CDN_URL} from "../utils/constant";

const RestCard = (props) =>{
  const {resData} = props;
  const {name,cloudinaryImageId,cuisines,avgRating,costForTwo,id} = resData?.info;
  const {deliveryTime} = resData?.info.sla;
  return (
   <div className="w-[200px] h-auto relative bg-white shadow-xl ml-3.5 mt-3.5 pb-5 hover:cursor-pointer hover:border hover:border-gray-500">
     <Link to={`/restaurant/${id}`}>
      <img className="w-full h-[200px] object-cover" src={CDN_URL +cloudinaryImageId} alt="img" />
      <h3 className="mx-2.5 py-2.5 text-gray-600 font-medium text-lg">{name}</h3>
      <h4 className="mx-2.5 py-1 text-gray-500 font-normal text-md">{cuisines.join(', ')}</h4>
      <h4 className="mx-2.5 text-gray-500 font-normal text-md">{costForTwo}</h4>
      <h5 className="mx-2.5 pt-2.5 text-green-700 font-medium text-sm">{avgRating} stars</h5>
      <h5 className="mx-2.5 pb-1.5 text-green-700 font-medium text-sm">{deliveryTime} minutes</h5>
      </Link>
    </div>
  
  )
}

export default RestCard;