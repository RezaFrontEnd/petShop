import React from "react";
import AnimalFoodCard from "./animalFoodCart";
function AnimalFoods() {
  const foods = [
    {
      title: "غذای گربه ها",
      image: "../images/cat3.png",
    },
    {
      title: "غذای ماهی ها",
      image: "../images/fish.png",
    },
    {
      title: "غذای پرندگان",
      image: "../images/bird.png",
    },
    {
      title: "غذای سگ ها",
      image: "../images/dog.png",
    },
  ];
  return (
    <div>
      <section>
        <div
          className="max-w-7xl mx-auto mt-12 flex justify-center items-center space-x-10
                bg-[#FFFAEE]">
           {foods.map((food)=>(
            <AnimalFoodCard key={food.title} {...food}/>
           ))}       

        </div>
      </section>
    </div>
  );
}
export default AnimalFoods;
