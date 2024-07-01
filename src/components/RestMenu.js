
import React from 'react';
import { useEffect, useState } from "react";
import { MENU_URL, CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from '../components/Shimmer'
import useRestMenu from '../utils/useRestMenu';

const RestMenu = () => {
  const { id } = useParams()

  const resInfo = useRestMenu(id);
 
  if (resInfo === null) return <Shimmer />

  const { name, cuisines, avgRating, cloudinaryImageId, areaName, totalRatingsString } = resInfo?.data?.cards[2]?.card?.card?.info
  const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card


  return (
    <div className="menuPage-container">
     
      <div className="restaurant-header">
        <img src={CDN_URL + cloudinaryImageId} alt={name} className="restaurant-image" />
        <div className="restaurant-info">
          <h1 className="restaurant-name">{name}</h1>
          <p className="restaurant-description">{cuisines.join(',')}</p>
          <p className="restaurant-rating">⭐{avgRating}({totalRatingsString})</p>
          <p className="restaurant-rating">{areaName} </p>
        </div>
        {/* <button> veg</button> */}
      </div>



      <div className="menu-category">
        <h2 className="category-name">Menu</h2>
        <div className="menu-items">
          {itemCards.map((item) => (
            <div key={item.card.info.id} className="menu-item">
              <div>
                <h3 className="item-name">{item.card.info.name}</h3>
                <p className="item-description">{item.card.info.category}</p>
                <p className="item-price">₹{item.card.info.price / 100}</p>
                <p className="item-price">{item.card.info.isVeg == 1 ? 'Veg.' : 'Non-Veg.'}</p>
                <button className="add-to-cart-button">Add to Cart</button>
              </div>
              <img src={CDN_URL + item.card.info.imageId} alt='' className="menu-image" />
            </div>
          ))}
        </div>
      </div>


     
      {/* <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total: $0.00</p>
        <button className="checkout-button">Checkout</button>
      </div> */}
      
    </div>
  );


};

export default RestMenu;




