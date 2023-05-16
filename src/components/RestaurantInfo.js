import { IMG_CDN_URL } from "../config";

const RestaurantInfo = (restaurant) => {
  return (
    <div className="flex h-60 basis-full items-center justify-evenly bg-slate-500 p-8">
      <img
        className="h-[165px] w-[254px]"
        src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
        alt={restaurant?.name}
      />
      <div className="m-5 flex flex-col">
        <h3 className="max-w-[538px] text-3xl font-semibold">
          {restaurant?.name}
        </h3>
        <p className="max-w-[538px] overflow-hidden whitespace-nowrap text-[15px]">
          {restaurant?.cuisines?.join(", ")}
        </p>

        <div className="mt-5 flex items-center justify-between pb-2.5 text-sm font-semibold">
          <div className="">
            <span>{restaurant?.avgRating}</span>
          </div>
          <div>|</div>
          <div>{restaurant?.sla?.slaString}</div>
          <div>|</div>
          <div>{restaurant?.costForTwoMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
