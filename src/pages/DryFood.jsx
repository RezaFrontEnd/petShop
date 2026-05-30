import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function DryFood() {
  return (
    <div>
      <section>
        <div className="mx-75 mt-10 relative flex space-x-5 bg-[#FFFAEE]">
          <div className="w-45 h-65 mr-4 bg-green-400 rounded-2xl">
            <p className="text-3xl text-white font-bold text-center">
              آف پــــت وودمارت
            </p>
            <div
              className="w-22 h-7 bg-white mt-3 text-xs
                         rounded-md flex justify-center items-center mx-auto text-green-500"
            >
              مشاهده همه
            </div>
            <img
              src="../images/bear.png"
              alt=""
              width="130"
              className="absolute -bottom-10 right-10"
            />
          </div>
                    <Swiper
  style={{
    "--swiper-navigation-color": "#000",
    "--swiper-pagination-color": "#273544",
    height: "200px",
    width: "100%",
  }}
  modules={[Navigation, Pagination,Autoplay]}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  navigation={true}
  pagination={{ clickable: true }}
  loop={true}
  slidesPerView={1}
>
  <SwiperSlide>
    <div className="flex gap-2">
                <div className="w-52 h-65 bg-white rounded-lg mr-2">
            <div className="w-32 h-full mx-auto">
              <img src="../images/catFood1.jpg" alt="" />
              <h5 className="text-[0.8rem] mt-2 text-center">
                غذای خشک گربه نوع 1
              </h5>
              <span className="flex justify-center items-center">★★★★★</span>
              <p className="text-orange-500 text-md text-center">
                400.000تومان
              </p>

              <div
                className="group relative w-23 h-8 bg-orange-500
                overflow-hidden rounded-xl cursor-pointer
                flex justify-center items-center mx-auto mt-3"
              >
                <span
                  className="absolute transition-all duration-300
               group-hover:-translate-y-10 group-hover:opacity-0
               text-white text-xs"
                >
                  انتخاب گزینه ها
                </span>
                <span className="absolute translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-white">
                  <i class="bi bi-cart-dash">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cart-dash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </i>
                </span>
              </div>
            </div>
          </div>
          <div className="w-52 h-65 bg-white rounded-lg mr-2">
            <div className="w-32 h-full mx-auto">
              <img src="../images/dryfood2.jpg" alt="" />
              <h5 className="text-[0.8rem] mt-2 text-center">
                غذای خشک گربه نوع 2
              </h5>
              <span className="flex justify-center items-center">★★★★★</span>
              <p className="text-orange-500 text-md text-center">
                400.000تومان
              </p>

              <div
                className="group relative w-23 h-8 bg-orange-500
                overflow-hidden rounded-xl cursor-pointer
                flex justify-center items-center mx-auto mt-3"
              >
                <span
                  className="absolute transition-all duration-300
               group-hover:-translate-y-10 group-hover:opacity-0
               text-white text-xs"
                >
                  انتخاب گزینه ها
                </span>
                <span className="absolute translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-white">
                  <i class="bi bi-cart-dash">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cart-dash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </i>
                </span>
              </div>
            </div>
          </div>
          <div className="w-52 h-65 bg-white rounded-lg mr-2">
            <div className="w-32 h-full mx-auto">
              <img src="../images/dryfood3.jpg" alt="" />
              <h5 className="text-[0.8rem] mt-2 text-center">
                غذای خشک گربه نوع 3
              </h5>
              <span className="flex justify-center items-center">★★★★★</span>
              <p className="text-orange-500 text-md text-center">
                400.000تومان
              </p>

              <div
                className="group relative w-23 h-8 bg-orange-500
                overflow-hidden rounded-xl cursor-pointer
                flex justify-center items-center mx-auto mt-3"
              >
                <span
                  className="absolute transition-all duration-300
               group-hover:-translate-y-10 group-hover:opacity-0
               text-white text-xs"
                >
                  انتخاب گزینه ها
                </span>
                <span className="absolute translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-white">
                  <i class="bi bi-cart-dash">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cart-dash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </i>
                </span>
              </div>
            </div>
          </div>
          <div className="w-52 h-65 bg-white rounded-lg mr-2">
            <div className="w-32 h-full mx-auto">
              <img src="../images/dryfood4.jpg" alt="" />
              <h5 className="text-[0.8rem] mt-2 text-center">
                غذای خشک گربه نوع 4
              </h5>
              <span className="flex justify-center items-center">★★★★★</span>
              <p className="text-orange-500 text-md text-center">
                400.000تومان
              </p>

              <div
                className="group relative w-23 h-8 bg-orange-500
                overflow-hidden rounded-xl cursor-pointer
                flex justify-center items-center mx-auto mt-3"
              >
                <span
                  className="absolute transition-all duration-300
               group-hover:-translate-y-10 group-hover:opacity-0
               text-white text-xs"
                >
                  انتخاب گزینه ها
                </span>
                <span className="absolute translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-white">
                  <i class="bi bi-cart-dash">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cart-dash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </i>
                </span>
              </div>
            </div>
          </div>
    </div>
  </SwiperSlide>
    <SwiperSlide>
    <div className="flex gap-2">
                <div className="w-52 h-65 bg-white rounded-lg mr-2">
            <div className="w-32 h-full mx-auto">
              <img src="../images/catFood1.jpg" alt="" />
              <h5 className="text-[0.8rem] mt-2 text-center">
                غذای خشک گربه نوع 1
              </h5>
              <span className="flex justify-center items-center">★★★★★</span>
              <p className="text-orange-500 text-md text-center">
                400.000تومان
              </p>

              <div
                className="group relative w-23 h-8 bg-orange-500
                overflow-hidden rounded-xl cursor-pointer
                flex justify-center items-center mx-auto mt-3"
              >
                <span
                  className="absolute transition-all duration-300
               group-hover:-translate-y-10 group-hover:opacity-0
               text-white text-xs"
                >
                  انتخاب گزینه ها
                </span>
                <span className="absolute translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-white">
                  <i class="bi bi-cart-dash">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cart-dash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </i>
                </span>
              </div>
            </div>
          </div>
          <div className="w-52 h-65 bg-white rounded-lg mr-2">
            <div className="w-32 h-full mx-auto">
              <img src="../images/dryfood2.jpg" alt="" />
              <h5 className="text-[0.8rem] mt-2 text-center">
                غذای خشک گربه نوع 2
              </h5>
              <span className="flex justify-center items-center">★★★★★</span>
              <p className="text-orange-500 text-md text-center">
                400.000تومان
              </p>

              <div
                className="group relative w-23 h-8 bg-orange-500
                overflow-hidden rounded-xl cursor-pointer
                flex justify-center items-center mx-auto mt-3"
              >
                <span
                  className="absolute transition-all duration-300
               group-hover:-translate-y-10 group-hover:opacity-0
               text-white text-xs"
                >
                  انتخاب گزینه ها
                </span>
                <span className="absolute translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-white">
                  <i class="bi bi-cart-dash">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cart-dash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </i>
                </span>
              </div>
            </div>
          </div>
          <div className="w-52 h-65 bg-white rounded-lg mr-2">
            <div className="w-32 h-full mx-auto">
              <img src="../images/dryfood3.jpg" alt="" />
              <h5 className="text-[0.8rem] mt-2 text-center">
                غذای خشک گربه نوع 3
              </h5>
              <span className="flex justify-center items-center">★★★★★</span>
              <p className="text-orange-500 text-md text-center">
                400.000تومان
              </p>

              <div
                className="group relative w-23 h-8 bg-orange-500
                overflow-hidden rounded-xl cursor-pointer
                flex justify-center items-center mx-auto mt-3"
              >
                <span
                  className="absolute transition-all duration-300
               group-hover:-translate-y-10 group-hover:opacity-0
               text-white text-xs"
                >
                  انتخاب گزینه ها
                </span>
                <span className="absolute translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-white">
                  <i class="bi bi-cart-dash">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cart-dash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </i>
                </span>
              </div>
            </div>
          </div>
          <div className="w-52 h-65 bg-white rounded-lg mr-2">
            <div className="w-32 h-full mx-auto">
              <img src="../images/dryfood4.jpg" alt="" />
              <h5 className="text-[0.8rem] mt-2 text-center">
                غذای خشک گربه نوع 4
              </h5>
              <span className="flex justify-center items-center">★★★★★</span>
              <p className="text-orange-500 text-md text-center">
                400.000تومان
              </p>

              <div
                className="group relative w-23 h-8 bg-orange-500
                overflow-hidden rounded-xl cursor-pointer
                flex justify-center items-center mx-auto mt-3"
              >
                <span
                  className="absolute transition-all duration-300
               group-hover:-translate-y-10 group-hover:opacity-0
               text-white text-xs"
                >
                  انتخاب گزینه ها
                </span>
                <span className="absolute translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-white">
                  <i class="bi bi-cart-dash">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cart-dash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </i>
                </span>
              </div>
            </div>
          </div>
    </div>
  </SwiperSlide>
</Swiper>;
        </div>
      </section>
    </div>
  );
}
export default DryFood;


