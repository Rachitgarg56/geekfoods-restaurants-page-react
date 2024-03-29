
import './RestaurantCard.css';

const RestaurantCard = (props) => {

    const {name, rating, address, outcode, postcode, type_of_food} = props.restaurantDataObj;

    return (

        <div className="restaurant-card">

            <div className="restaurant-card-header">
              <div className="name-rating">
                <p className="name">{name}</p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 576 512"
                  class="w-5 h-5 text-yellow-400"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                </svg>
                <p className="rating">{rating}</p>
              </div>
              <div className="address">
                <i class="fa-solid fa-location-dot"></i>
                <p className="address">{address}</p>
              </div>
              <div className="outcode-postcode">
                <p className="outcode">{outcode}</p>
                <p className="postcode">{postcode}</p>
              </div>
            </div>

            <div className="restaurant-card-footer">
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 416 512"
                  class="inline mr-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"></path>
                </svg>
                <p className="type-of-food">{type_of_food}</p>
              </div>
              <p>Visit Menu</p>
            </div>

          </div>

    )

}

export default RestaurantCard;
