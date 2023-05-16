import RestaurantItemCategory from "./RestaurantItemCategory";

const RestaurantNestedItemCategory = ({ nestedItemCategory }) => {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <h3 className="cursor-pointer text-lg font-bold">
          {nestedItemCategory?.title}
        </h3>
      </div>
      <div>
        {nestedItemCategory?.categories?.map((category, index) => (
          <RestaurantItemCategory itemCategory={category} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantNestedItemCategory;
