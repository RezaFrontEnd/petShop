import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/autoplay'; // اگر از autoplay استفاده می‌کنی
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Navigation, Pagination, Autoplay } from 'swiper/modules';
    import HeroSlide from './HeroSlide';


function UnderHeader() {
const slides = [
  {
    id: 1,
    title: "هدف وودمارت آسایش حیوانات خانگی شماست",
    image: "/images/cat2.jpg",
    shape: "w-[400px] h-[450px]",
  },
  {
    id: 2,
    title: "با کیفیت ترین محصولات فقط با وودمارت",
    image: "/images/cat2.jpg",
    shape: "w-[320px] h-[540px]",
  },
]
      
    return (
    <div>
        
        <Swiper
            style={{
                '--swiper-navigation-color': '#000',
                '--swiper-pagination-color': '#273544',
                height: '700px',
                width: '100%',
            }}
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            slidesPerView={1}
        >

{slides.map((slide)=>(
  <SwiperSlide
  key={slide.id}
  className="
  [&.swiper-slide-active_.content]:translate-y-0
  [&.swiper-slide-active_.content]:opacity-100
"
>

  <HeroSlide {...slide}/>
</SwiperSlide>
))}

        </Swiper>
        
    </div>
    
    );
}

export default UnderHeader;
