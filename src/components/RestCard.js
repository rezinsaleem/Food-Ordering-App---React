import CDN_URL from "../utils/constant";

const RestCard = (props) =>{
  const {resData} = props;
  const {name,cloudinaryImageId,cuisines,avgRating,costForTwo} = resData?.info;
  const {deliveryTime} = resData?.info.sla;
  return (
    <div className="card">
      <img className="restImg" src={CDN_URL +cloudinaryImageId} alt="img" />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{costForTwo}</h4>
      <h5>{avgRating} stars</h5>
      <h5>{deliveryTime} minutes</h5>
    </div>
  )
}

export default RestCard;