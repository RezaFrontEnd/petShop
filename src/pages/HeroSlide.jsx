function HeroSlide({ title, image, shape }) {
  return (
    <section className="h-full w-full flex items-center justify-center">
      <div
        className="
          content
          flex justify-between items-center
          h-[700px] w-full p-0 max-w-7xl mx-auto
          translate-y-10
          opacity-0
          transition-all
          duration-700
          ease-in-out
        "
      >
        {/* ستون چپ */}
        <div className="w-2xl flex items-center justify-center h-full">
          <div className="w-full h-full bg-[#FFFAEE] p-5 flex flex-col justify-center items-end">
            <div className="-mt-20 w-full max-w-lg text-right">
              <div className="w-50 h-14 bg-orange-400 rounded-full flex items-center justify-center">
                <div className="w-10 h-10">
                  <figure>
                    <img
                      src="/images/cat.jpg"
                      alt=""
                      className="rounded-full"
                    />
                  </figure>
                </div>

                <h3 className="text-white font-bold text-xs mr-1">
                  غذاهای وودمارت خیلی خوبن
                </h3>
              </div>

              <div className="mb-5 flex">
                <p className="text-4xl text-black font-bold leading-tight">
                  {title}
                </p>

                <figure>
                  <img src="/images/arrow.png" alt="" width="360" />
                </figure>
              </div>

              <div className="mb-5">
                <p className="text-base text-gray-600 leading-relaxed">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت.
                </p>
              </div>

              <div className="flex mt-8">
                <button className="w-40 h-12 bg-[#273544] rounded-full mr-3 text-white font-semibold hover:bg-blue-800 transition-colors">
                  مشاهده محصولات
                </button>

                <button className="w-28 h-12 border border-[#273544] text-[#273544] rounded-full font-semibold hover:bg-gray-200 transition-colors mr-3">
                  تماس با ما
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ستون راست */}
        <div className="w-2/5 flex items-center justify-center h-full bg-[#FFFAEE] ml-25">
          <div
            className={`
              relative
              ${shape}
              rounded-[180px]
              bg-[#f3c0ad]
              border-[14px]
              border-[#e7dcc8]
              shadow-[0_18px_40px_rgba(0,0,0,0.08)]
              overflow-hidden
              flex items-center justify-center
              ml-30
            `}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSlide;
