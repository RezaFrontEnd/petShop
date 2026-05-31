import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DryFoodCard from "./DryFoodCart";

function DryFood() {
  const dryFood = [
    {
        id:1,
        title:"غذای خشک گربه نوع 1" ,
        setare:<FaStar/>,
        price:"400 هزار تومن",
        option:"انتخاب گزینه ها",
        img:"../images/catFood1.jpg"
        
    },
    {
       id:2,
       title:"غذای خشک گربه نوع 2" ,
        setare:<FaStar/>,
        price:"400 هزار تومن" ,
        option:"انتخاب گزینه ها",
        img:"../images/dryfood2.jpg"
    },
    {
      id:3,
      title:"غذای خشک گربه نوع 3",
      setare:<FaStar/>,
      price:"400 هزار تومن" ,
      option:"انتخاب گزینه ها",
       img:"../images/dryfood3.jpg"
    },
    {
      id:4,
      title:"غذای خشک گربه نوع 4",
      setare:<FaStar/>,
      price:"400 هزار تومن" ,
      option:"انتخاب گزینه ها",
       img:"../images/dryfood4.jpg"
    }

  ]
  return (
            <div className="max-w-7xl mx-auto px-20 mt-10 relative flex space-x-5 bg-[#FFFAEE]">
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
              className="absolute -bottom-10 right-26"
            />

              </div>
              {dryFood.map((food)=>{
                return <DryFoodCard {...food}/>
              })}
        </div>

        

    
)
}


export default DryFood;


{/* <Swiper
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


 
    
  </SwiperSlide>
    <SwiperSlide>

  </SwiperSlide>
</Swiper> */}