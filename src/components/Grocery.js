import Shimmer from "./Shimmer";
import GroCard from "./GroCard";
import { useEffect, useState } from "react";
import { GRO_URL } from "../utils/constant";

const Grocery = () => {
  const [groData, setGroData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(GRO_URL);
    const json = await data.json();

    setGroData(json?.data?.widgets[1]?.data);
    setFullData(json?.data?.widgets[1]?.data);
  };

  if (groData.length == 0) {
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
              let filteredData = groData.filter((item) =>
                item.displayName
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              if (filteredData.length) {
                setGroData(filteredData);
              } else {
                setGroData(fullData);
                setSearchText("");
              }
            }
          }}
        >
          search
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {groData.map((item) => (
          <GroCard key={item.nodeId} groData={item} />
        ))}
      </div>
    </div>
  );
};

export default Grocery;
