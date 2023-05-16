// import { useState } from "react";
import RestaurantItemCategory from "./RestaurantItemCategory";
import RestaurantNestedItemCategory from "./RestaurantNestedItemCategory";
import { useState } from "react";

const RestaurantMenuList = ({ menu }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="mt-8">
      {menu?.map((item, index) =>
        item.categories ? (
          <RestaurantNestedItemCategory nestedItemCategory={item} key={index} />
        ) : (
          <RestaurantItemCategory
            itemCategory={item}
            key={index}
            isActiveSection={index === activeIndex}
            setActiveIndex={setActiveIndex}
            sectionIndex={index}
          />
        )
      )}
    </div>
  );
};

export default RestaurantMenuList;
