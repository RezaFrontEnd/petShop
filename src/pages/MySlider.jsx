import React from "react";
// وارد کردن کامپوننت‌های اصلی
import { Swiper, SwiperSlide } from "swiper/react";

// وارد کردن استایل‌های اصلی و استایل‌های ماژول‌ها (مثل Pagination)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// وارد کردن ماژول‌های مورد نیاز (مثلاً برای دکمه‌های ناوبری یا نقطه‌ها)
import { Pagination, Navigation } from "swiper/modules";

const MySlider = () => {
  return (
    <Swiper
      // تنظیم ماژول‌ها
      style={{ height: "300px", width: "100%", backgroundColor: "#f0f0f0" }}
      modules={[Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
};

export default MySlider;
