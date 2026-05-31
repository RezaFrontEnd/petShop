import React from "react";

function AnimalFoodCard({ title, image }) {
  return (
    <div className="w-65 h-20 bg-white rounded-lg">
      <div className="text-right mr-3 flex relative">
        <div>
          <h3 className="text-lg text-black font-bold">
            {title}
          </h3>

          <div
            className="text-xs text-white font-bold mt-3 h-4 w-25 bg-orange-500
            rounded flex justify-center items-center"
          >
            مشاهده محصولات
          </div>
        </div>
          
        <figure>
          <img
            src={image}
            alt={title}
            width="140"
            className="absolute -top-5 -left-1"
          />
        </figure>
      </div>
    </div>
  );
}

export default AnimalFoodCard;