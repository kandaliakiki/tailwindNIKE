import React from "react";

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${
        bigShoeImg === imgUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      }`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40 max-sm:p-4">
        <img
          src={imgUrl.bigShoe}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        ></img>
      </div>
    </div>
  );
};

export default ShoeCard;
