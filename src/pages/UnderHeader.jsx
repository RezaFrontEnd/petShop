import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/autoplay'; // اگر از autoplay استفاده می‌کنی
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Navigation, Pagination, Autoplay } from 'swiper/modules';


function UnderHeader() {

      
    return (
    <div>
        
        <Swiper
            style={{
                '--swiper-navigation-color': '#000',
                '--swiper-pagination-color': '#273544',
                height: '700px',
                width: '100%',
            }}
            modules={[Navigation, Pagination,Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            slidesPerView={1}
        >
            <SwiperSlide>
                <section className="h-full w-full flex items-center justify-center">
                    {/* div اصلی: padding داخلی را حذف کردیم و max-w-7xl را حذف تا عرض را کامل بگیریم */}
                    <div className="flex justify-between items-center   h-[700px] w-full p-0 max-w-7xl mx-auto"> {/* p-0 */}
                        {/* ستون چپ (محتوا) */}
                        {/* عرض را کمی کمتر کردیم تا فضای کافی برای عکس باشد */}
                        <div className="w-3/5 flex items-center justify-center h-full"> {/* w-3/5 به جای w-1/2 */}
                            <div className="w-full h-full bg-white p-5 flex flex-col justify-center items-end">
                                <div className="mt-15 w-full max-w-lg text-right">
                                    {/* عکس کوچک گربه */}
                                    <div className="w-50 h-14 bg-orange-400 rounded-full  flex items-center 
                     justify-center">
                                        <div className="w-10 h-10">
                                            <figure>
                                                <img src="../images/cat.jpg" alt="" className="rounded-full" />
                                            </figure>
                                        </div>
                                        <h3 className="text-right 
                         text-white font-bold text-xs mr-1">غذاهای وودمارت خیلی خوبن</h3>
                                    </div>


                                    {/* عنوان اصلی */}
                                    <div className="mb-5 flex">
                                        <p className="text-4xl text-black font-bold leading-tight">
                                           هدف وودمارت آسایش حیوانات خانگی شماست
                                        </p>
                                        <figure>
                                            <img src="../images/arrow.png" alt="" width="360" />
                                        </figure>
                                    </div>

                                    {/* توضیحات */}
                                    <div className="mb-5">
                                        <p className="text-base text-gray-600 leading-relaxed">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت.
                                        </p>
                                    </div>

                                    {/* دکمه‌ها */}
                                    <div className="flex mt-8">
                                        <div className="w-40 h-12 bg-[#273544] rounded-full mr-3 text-white flex items-center justify-center font-semibold cursor-pointer hover:bg-blue-800 transition-colors">
                                            مشاهده محصولات
                                        </div>
                                        <div className="w-28 h-12 bg-transparent border border-[#273544] text-[#273544] rounded-full flex items-center justify-center font-semibold cursor-pointer hover:bg-gray-200 transition-colors mr-3">
                                            تماس باما
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ستون راست (عکس گربه بزرگ) */}
                        {/* عرض را کمی بیشتر کردیم */}
                        <div className="w-2/5 flex items-center justify-center h-full bg-white"> {/* w-2/5 به جای w-1/2 */}
                            <div className="relative w-[320px] h-[540px] rounded-[160px] bg-[#f3c0ad] 
              border-[14px] border-[#e7dcc8] shadow-[0_18px_40px_rgba(0,0,0,0.08)] 
              overflow-hidden flex items-center justify-center ml-30">
                                <img src="../images/cat2.jpg" alt="Large Cat" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>
            </SwiperSlide>

            {/* اسلاید دوم */}
            <SwiperSlide>
                <section className="h-full w-full flex items-center justify-center">
                    {/* div اصلی: padding داخلی را حذف کردیم و max-w-7xl را حذف تا عرض را کامل بگیریم */}
                    <div className="flex justify-between items-center  h-[700px] w-full p-0 max-w-7xl mx-auto"> {/* p-0 */}
                        {/* ستون چپ (محتوا) */}
                        {/* عرض را کمی کمتر کردیم تا فضای کافی برای عکس باشد */}
                        <div className="w-3/5 flex items-center justify-center h-full"> {/* w-3/5 به جای w-1/2 */}
                            <div className="w-full h-full bg-white p-5 flex flex-col justify-center items-end">
                                <div className="mt-15 w-full max-w-lg text-right">
                                    {/* عکس کوچک گربه */}
                                    <div className="w-50 h-14 bg-green-600 rounded-full  flex items-center 
                     justify-center">
                                        <div className="w-10 h-10">
                                            <figure>
                                                <img src="../images/cat.jpg" alt="" className="rounded-full" />
                                            </figure>
                                        </div>
                                        <h3 className="text-right 
                         text-white font-bold text-xs mr-1">غذاهای وودمارت خیلی خوبن</h3>
                                    </div>


                                    {/* عنوان اصلی */}
                                    <div className="mb-5 flex">
                                        <p className="text-4xl text-black font-bold leading-tight">
                                          با کیفیت ترین محصولات فقط با وودمارت
                                        </p>
                                        <figure>
                                            <img src="../images/arrow.png" alt="" width="700" />
                                        </figure>
                                    </div>

                                    {/* توضیحات */}
                                    <div className="mb-5">
                                        <p className="text-base text-gray-600 leading-relaxed">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت.
                                        </p>
                                    </div>

                                    {/* دکمه‌ها */}
                                    <div className="flex mt-8">
                                        <div className="w-40 h-12 bg-[#273544] rounded-full mr-3 text-white flex items-center justify-center font-semibold cursor-pointer hover:bg-blue-800 transition-colors">
                                           همکاری با وودمارت
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ستون راست (عکس گربه بزرگ) */}
                        {/* عرض را کمی بیشتر کردیم */}
                        <div className="w-2/5 flex items-center justify-center h-full bg-white"> {/* w-2/5 به جای w-1/2 */}
                            <div className="relative w-[320px] h-[540px] rounded-[160px] bg-[#f3c0ad] 
                                border-[14px] border-[#e7dcc8] shadow-[0_18px_40px_rgba(0,0,0,0.08)] 
                                overflow-hidden flex items-center justify-center ml-30">
                                <img src="../images/cat3.jpg" alt="Large Cat" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>
            </SwiperSlide>

        </Swiper>
        
    </div>
    
    );
}

export default UnderHeader;
