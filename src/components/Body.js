import { MAIN_URL } from "../utils/constant";
import RestCard from "./RestCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body =()=>{
  const [listOfRestaurant,setListOfRestaurant] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    fetchData();
  },[]);

const fetchData = async () => {
const data = await fetch (
MAIN_URL
);
const json = await data.json();
let restaurants=json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
setListOfRestaurant(restaurants)
setFullData(restaurants)
}

if(listOfRestaurant.length==0){
  return (
    < Shimmer />
  )
}
  
  return (
    <div className="main-body">
      <div className="search">
        <input type="text" placeholder="Search for restaurants and foods" value={searchText} onChange={(e)=>{setSearchText(e.target.value);}}></input>
        <button className="searchBtn" onClick={() => {
          if(searchText.trim()){
          let filteredData = fullData.filter((res)=>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          filteredData.length? setListOfRestaurant(filteredData):setListOfRestaurant(fullData);
          }else{
          setSearchText('')
          }
        }}>search</button>
      </div>
      <div className="filterButtons">
    <button className="filter-btn" onClick={()=>{
      let filteredData = fullData.filter((res)=>res.info.avgRating>4.3);
      setListOfRestaurant(filteredData);
    }}>Top-Rated</button>
    <button className="filter-btn" onClick={()=>{
      let filteredData =fullData.filter((res)=>res.info.sla.deliveryTime<31);
      setListOfRestaurant(filteredData)
    }}>Fast-Delivery</button>
    <button className="filter-btn" onClick={()=>{
      setListOfRestaurant(fullData);
    }}>All-Restaurants</button>
    </div>
      <div className="restCardGroup">
      {listOfRestaurant.map((restaurant)=>
        (<RestCard key={restaurant.info.id} resData={restaurant}/>)
      )}
      </div>
    </div>
  )
}

export default Body;