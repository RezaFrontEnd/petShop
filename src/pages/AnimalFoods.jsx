import React from "react";

function AnimalFoods() {
  return (
    <div>
      <section>
        <div
          className="mx-4 mt-8 flex justify-center items-center space-x-3
                bg-[#FFFAEE]
                "
        >
          <div className="w-65 h-20 bg-white rounded-lg ">
            <div className="text-right mr-3 flex relative">
              <div>
                <h3 className="text-lg text-black font-bold">غذای گربه ها</h3>
                <div
                  className="text-xs text-white font-bold mt-3 h-4 w-25 bg-orange-500 
                                rounded flex justify-center items-center"
                >
                  مشاهده محصولات
                </div>
              </div>
              <div>
                <figure>
                  <img
                    src="../images/cat3.png"
                    alt=""
                    width="140"
                    className="absolute -top-5 -left-1"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="w-65 h-20 bg-white rounded-lg ">
            <div className="text-right mr-3 flex relative">
              <div>
                <h3 className="text-lg text-black font-bold">غذای ماهی ها</h3>
                <div
                  className="text-xs text-white font-bold mt-3 h-4 w-25 bg-orange-500 
                                rounded flex justify-center items-center"
                >
                  مشاهده محصولات
                </div>
              </div>
              <div>
                <figure>
                  <img
                    src="../images/fish.png"
                    alt=""
                    width="140"
                    className="absolute -top-5 -left-1"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="w-65 h-20 bg-white rounded-lg ">
            <div className="text-right mr-3 flex relative">
              <div>
                <h3 className="text-lg text-black font-bold">غذای پرندگان</h3>
                <div
                  className="text-xs text-white font-bold mt-3 h-4 w-25 bg-orange-500 
                                rounded flex justify-center items-center"
                >
                  مشاهده محصولات
                </div>
              </div>
              <div>
                <figure>
                  <img
                    src="../images/bird.png"
                    alt=""
                    width="140"
                    className="absolute -top-5 -left-1"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="w-65 h-20 bg-white rounded-lg ">
            <div className="text-right mr-3 flex relative">
              <div>
                <h3 className="text-lg text-black font-bold">غذای سگ ها</h3>
                <div
                  className="text-xs text-white font-bold mt-3 h-4 w-25 bg-orange-500 
                                rounded flex justify-center items-center"
                >
                  مشاهده محصولات
                </div>
              </div>
              <div>
                <figure>
                  <img
                    src="../images/dog.png"
                    alt=""
                    width="140"
                    className="absolute -top-5 -left-1"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AnimalFoods;
