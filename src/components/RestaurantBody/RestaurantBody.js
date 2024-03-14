import RestaurantCard from "../RestaurantCard/RestaurantCard.js";
import "./RestaurantBody.css";
import {restaurantsData} from '../../restaurants.js';
import { useState } from "react";

const RestaurantBody = () => {

  const [dataArr, setDataArr] = useState(restaurantsData);
  const [rating, setRating] = useState();

  const handleQuery = (e) => {

    const query = e.target.value.toLowerCase().trim();

    const queriedArr = restaurantsData.filter((dataObj) => {
      const name = dataObj.name.toLowerCase();
      return name.includes(query);
    })

    setDataArr(queriedArr);

  }

  const handleRating = (e) => {
    const queriedRating = Number(e.target.value);
    
    if (queriedRating === 0) {
      setDataArr(restaurantsData);
      return;
    }

    const queriedArr = restaurantsData.filter((dataObj) => {
      const rating = dataObj.rating;
      console.log(typeof rating);
      return rating === queriedRating;
    })
    setDataArr(queriedArr);
  }

  return (
    <section className="restaurant-body">
      <div className="restaurant-body-container">
        <form>
          <input type="text" placeholder="Search restaurants..." onChange={handleQuery} />
          <div className="rating">
            <label>Minimum Rating:</label>
            <input type="number" min={0} onChange={handleRating}/>
          </div>
        </form>

        <div className="restaurant-cards-container">

            {
              dataArr.map((restaurantDataObj) => {
                return <RestaurantCard restaurantDataObj={restaurantDataObj} />
              })
            }

        </div>

      </div>
    </section>
  );
};

export default RestaurantBody;
