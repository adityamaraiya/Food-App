import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const MenuItem = ({ item }) => {
  const { id, name, imageId, description, price, defaultPrice } = item;

  const [itemCount, setItemCount] = useState(0);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setItemCount(itemCount + 1);
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
    let count = itemCount > 0 ? itemCount - 1 : 0;
    setItemCount(count);
  };

  return (
    <div className="border-gray flex max-h-[180px] basis-[848px] justify-between border-b p-5">
      <div className="flex basis-[400px] flex-col">
        <h3 className="w-3/5 text-lg font-bold">{name}</h3>
        <p className="mt-1 text-base font-normal">
          ₹ {price / 100 || defaultPrice / 100}
        </p>
        <p className="text-gray-desc mt-3.5 w-4/5 overflow-hidden text-base leading-5 ">
          {description}
        </p>
      </div>
      <div className="flex h-[150px] w-[118px] flex-col items-center justify-center">
        <img
          className="h-[96px] w-[118px]"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            imageId
          }
          alt={name}
        />
        <div className=" text-gray-count border-gray mt-2.5 flex h-[34px] w-[100px] items-center justify-evenly border bg-white outline-none ">
          <button
            className="text-gray-count text-xl font-semibold"
            onClick={() => handleRemoveItem(id)}
          >
            {" "}
            -{" "}
          </button>
          <span className="text-green text-base"> {itemCount} </span>
          <button
            className="text-green text-xl"
            onClick={() => handleAddItem(item)}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
