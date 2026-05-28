import React from "react"
function WhyUs() {
    return (
        <div>
            <div className="relative overflow-hidden bg-green-500 pt-20 pb-10"> {/* بخش سبز رنگ */}
                <div
                    className="absolute top-0 left-0 w-full h-24 bg-white" // این div موج ماست
                    style={{
                        clipPath: 'polygon(0% 0%, 100% 0%, 0% 0%, 100% 50%, 100% 0%, 100% 0%)'

                        // شما باید این مقادیر polygon رو با توجه به تصویر دقیق تنظیم کنید
                        // یا از مقادیر پیچیده‌تر SVG استفاده کنید
                    }}
                ></div>
                <div className="mx-8">
                    <div className="w-full h-60 bg-gradient-to-br from-green-400 to-green-500 rounded-4xl">
                        <div className="mr-6 flex">
                            <h3 className="text-white text-right pt-4 text-3xl font-bold">چرا از وودمارت خرید کنیم؟</h3>
                            <p className="pt-6 text-white pl-6 text-lg pr-20">لورم ایبسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاب و با استفاده از طراحان گرافیک است</p>
                        </div>
                        <figure>
                            <img src="../images/vector.png" className="mt-4 mr-6" alt="" width="100" />
                        </figure>
                        <div className="flex justify-center items-center">
                            <div className="w-60 h-22 rounded-3xl bg-white mt-6 mr-2">
                                <div className=" flex items-center h-8 w-55 bg-orange-100 mt-3
                                rounded-lg mx-auto">
                                    <div className="w-7 h-7 mr-2 rounded-md bg-orange-300">
                                        <i></i>
                                    </div>
                                    <h3 className="text-sm font-bold mr-1 text-black">ارسال سریع سفارش ها</h3>
                                </div>
                                <p className="text-[0.6rem] text-right pr-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>
                            <div className="w-60 h-22 rounded-3xl bg-white mt-6 mr-2">
                                <div className=" flex items-center h-8 w-55 bg-orange-100 mt-3
                                rounded-lg mx-auto">
                                    <div className="w-7 h-7 mr-2 rounded-md bg-orange-300">
                                        <i></i>
                                    </div>
                                    <h3 className="text-sm font-bold mr-1 text-black">تضمین بهترین قیمت</h3>
                                </div>
                                <p className="text-[0.6rem] text-right pr-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>
                            <div className="w-60 h-22 rounded-3xl bg-white mt-6 mr-2">
                                <div className=" flex items-center h-8 w-55 bg-orange-100 mt-3
                                rounded-lg mx-auto">
                                    <div className="w-7 h-7 mr-2 rounded-md bg-orange-300">
                                        <i></i>
                                    </div>
                                    <h3 className="text-sm font-bold mr-1 text-black">برداخت در محل</h3>
                                </div>
                                <p className="text-[0.6rem] text-right pr-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>                          
                        </div>
                        
                    </div>
                    
            

                </div>
            </div>
                    
        </div>
       
    )
}
export default WhyUs