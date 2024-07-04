import Shimmer from "./Shimmer";
import GroCard from "./GroCard";
import { useEffect, useState } from "react";
import { GRO_URL } from "../utils/constant";

const Grocery =(()=>{
 
  const [groData,setGroData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async () => {
    const data = await fetch (GRO_URL);
    const json = await data.json();
    
    setGroData(json?.data?.widgets[1]?.data)
    setFullData(json?.data?.widgets[1]?.data)
    }
    

if(groData.length==0){
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
          let filteredData = groData.filter((item)=>
            item.displayName.toLowerCase().includes(searchText.toLowerCase())
          );
          if(filteredData.length){
            setGroData(filteredData)
          }else{
            setGroData(fullData)
          setSearchText('')
          }}
        }}>search</button>
      </div>
      <div className="restCardGroup">
      {groData.map((item)=>
        (<GroCard key={item.nodeId} groData={item}/>)
      )}
      </div>
      </div>
  )

   
})

export default Grocery;