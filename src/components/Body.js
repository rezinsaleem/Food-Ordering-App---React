import { MAIN_URL } from "../utils/constant";
import RestCard from "./RestCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Offline from "./Offline";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MAIN_URL);
    const json = await data.json();
    let restaurants =
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurant(restaurants);
    setFullData(restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <Offline />;
  }

  if (listOfRestaurant.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="main-body">
      <div className="flex justify-center items-center m-5">
        <input
          type="text"
          className="w-1/2 p-2.5 px-5 text-gray-500 border-2 border-custom-gray rounded-20px-0-0-20px outline-none text-base transition-border-color duration-300 ease shadow-custom focus:border-gray-500"
          placeholder="Search for restaurants and foods"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="p-2.5 px-5 border-2 border-gray-500 bg-gray-500 text-white rounded-0-20px-20px-0 cursor-pointer text-base transition-all duration-300 ease shadow-custom hover:bg-gray-600 hover:border-gray-600"
          onClick={() => {
            if (searchText.trim()) {
              let filteredData = fullData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              filteredData.length
                ? setListOfRestaurant(filteredData)
                : setListOfRestaurant(fullData);
            } else {
              setSearchText("");
            }
          }}
        >
          search
        </button>
      </div>
      <div className="flex justify-center gap-2.5 m-5">
        <button
          className="p-2 px-5 border-2 border-gray-400 bg-white text-gray-500 rounded-full cursor-pointer text-base transition-all duration-300 ease hover:bg-gray-600 hover:text-white hover:shadow-custom"
          onClick={() => {
            let filteredData = fullData.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestaurant(filteredData);
          }}
        >
          Top-Rated
        </button>
        <button
          className=" p-2 px-5 border-2 border-gray-400 bg-white text-gray-500 rounded-full cursor-pointer text-base transition-all duration-300 ease hover:bg-gray-600 hover:text-white hover:shadow-custom"
          onClick={() => {
            let filteredData = fullData.filter(
              (res) => res.info.sla.deliveryTime < 31
            );
            setListOfRestaurant(filteredData);
          }}
        >
          Fast-Delivery
        </button>
        <button
          className="p-2 px-5 border-2 border-gray-400 bg-white text-gray-500 rounded-full cursor-pointer text-base transition-all duration-300 ease hover:bg-gray-600 hover:text-white hover:shadow-custom"
          onClick={() => {
            setListOfRestaurant(fullData);
          }}
        >
          All-Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {listOfRestaurant.map((restaurant) => (
          <RestCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
