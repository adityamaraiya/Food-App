import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../config";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {
      const response = await fetch(RESTAURANT_MENU_URL + resId);
      const responseData = await response.json();

      const menuListItem =
        responseData?.data?.cards[2]["groupedCard"]?.cardGroupMap?.REGULAR
          ?.cards;

      const ItemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

      const NestedItemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

      const menu = menuListItem.map((item) => {
        if (
          item?.card?.card["@type"] === ItemCategory ||
          item?.card?.card["@type"] === NestedItemCategory
        ) {
          return item?.card?.card;
        }
      });

      const modifiedItems = {
        info: responseData?.data?.cards[0]?.card?.card?.info,
        menu: menu.filter((value) => value !== undefined),
      };

      console.log(modifiedItems.menu);

      setRestaurant(modifiedItems);

      // console.log(modifiedItems.info);
    } catch (error) {
      console.log(error);
    }
  }

  return restaurant;
};

export default useRestaurant;
