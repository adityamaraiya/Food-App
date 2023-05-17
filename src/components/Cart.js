import { useSelector } from "react-redux";

const Cart = (item) => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <h2 className="m-2 text-xl">Cart Items - {cartItems.length}</h2>
      {cartItems.map((cartItem) => (
        <div className="border-gray flex max-h-[180px] basis-[848px] justify-between border-b p-5">
          <div className="flex basis-[400px] flex-col">
            <h3 className="w-3/5 text-lg font-bold">{cartItem.name}</h3>
            <p className="mt-1 text-base font-normal">
              ₹ {cartItem.price / 100 || cartItem.defaultPrice / 100}
            </p>
          </div>
          <div className="flex h-[150px] w-[118px] flex-col items-center justify-center">
            <img
              className="h-[96px] w-[118px]"
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                cartItem.imageId
              }
              alt={cartItem.name}
            />
            <div className=" text-gray-count border-gray mt-2.5 flex h-[34px] w-[100px] items-center justify-evenly border bg-white outline-none ">
              <button
                className="text-gray-count text-xl font-semibold"
                // onClick={() => handleRemoveItem(id)}
              >
                {" "}
                -{" "}
              </button>
              {/* <span className="text-green text-base"> {itemCount} </span> */}
              <button
                className="text-green text-xl"
                // onClick={() => handleAddItem(item)}
              >
                {" "}
                +{" "}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
