import useRestaurant from "../utils/useRestaurant";

import RestaurantInfo from "./RestaurantInfo";

import RestaurantMenuList from "./RestaurantMenuList";
import { useParams } from "react-router-dom";

const RestaurantDetail = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  return (
    <div className="mt-24">
      <RestaurantInfo {...restaurant?.info} />
      <RestaurantMenuList menu={restaurant?.menu} />
    </div>
  );
};

export default RestaurantDetail;
