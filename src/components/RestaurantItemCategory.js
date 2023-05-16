import { useState } from "react";
import MenuItem from "./MenuItem";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const RestaurantItemCategory = ({
  itemCategory,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  // const [isVisible, setIsVisible] = useState(false);

  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };

  return (
    <div className="border-b-[16px] border-[#f1f1f6] p-5">
      <div className="flex items-center justify-between">
        <h3 className="cursor-pointer text-lg font-bold">
          {itemCategory?.title} ({itemCategory?.itemCards?.length})
        </h3>
        {isActiveSection ? (
          <SlArrowUp onClick={toggleSection} className="cursor-pointer" />
        ) : (
          <SlArrowDown onClick={toggleSection} className="cursor-pointer" />
        )}
      </div>
      {isActiveSection && (
        <div className="flex flex-col justify-evenly">
          {itemCategory?.itemCards?.map((item) => (
            <MenuItem key={item?.card?.info?.id} item={item?.card?.info} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantItemCategory;
