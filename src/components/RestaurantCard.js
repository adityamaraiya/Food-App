import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  avgRating,
  cuisines,
  slaString,
  costForTwoString,
}) => {
  return (
    <div className="m-[10px]  w-56 bg-rose-50 p-[10px] shadow-lg">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="image" />
      <h2 className="break-words text-[17px] font-medium">{name}</h2>
      <h4 className="... truncate text-[#686b78]">{cuisines.join(", ")}</h4>
      <div className="flex justify-between text-center text-[12px]  text-[#535665]">
        <div>{avgRating}</div>
        <div>•</div>
        <div>{slaString}</div>
        <div>•</div>
        <div>{costForTwoString}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
