import React from "react";

function AnimalFoods() {

    
    return (
        <div style={{backgroundColor:'#FFFAEE'}}>
            <section>
                <div className="mx-4 mt-8 flex justify-center items-center space-x-2">
                    <div className="w-55 h-15 bg-white rounded-lg ">
                        <div className="text-right mr-3 flex relative">
                            <div>
                                <h3 className="text-sm text-black font-bold">غذای گربه ها</h3>
                                <div className="text-[.7rem] text-white font-bold mt-3 h-4 w-25 bg-orange-500 
                                rounded flex justify-center items-center">مشاهده محصولات</div>
                            </div>
                            <div>
                                <figure>
                                    <img src="../images/cat3.png" alt="" width="100" className="absolute -top-4 -left-1" />
                                </figure>
                            </div>
                        </div>

                    </div>
                    <div className="w-55 h-15 bg-white rounded-lg bg-white ">
                        <div className="text-right mr-3 flex relative">
                            <div>
                                <h3 className="text-sm text-black font-bold">غذای ماهی ها</h3>
                                <div className="text-[.7rem] text-white font-bold mt-3 h-4 w-25 bg-orange-500 
                                rounded flex justify-center items-center">مشاهده محصولات</div>
                            </div>
                            <div>
                                <figure>
                                    <img src="../images/fish.png" alt="" width="100" className="absolute -top-4 -left-1" />
                                </figure>
                            </div>
                        </div>

                    </div>
                    <div className="w-55 h-15 bg-white rounded-lg bg-white ">
                        <div className="text-right mr-3 flex relative">
                            <div>
                                <h3 className="text-sm text-black font-bold">غذای پرندگان</h3>
                                <div className="text-[.7rem] text-white font-bold mt-3 h-4 w-25 bg-orange-500 
                                rounded flex justify-center items-center">مشاهده محصولات</div>
                            </div>
                            <div>
                                <figure>
                                    <img src="../images/bird.png" alt="" width="100" className="absolute -top-4 -left-1" />
                                </figure>
                            </div>
                        </div>

                    </div>
                    <div className="w-55 h-15 bg-red-500 rounded-lg bg-white ">
                        <div className="text-right mr-3 flex relative">
                            <div>
                                <h3 className="text-sm text-black font-bold">غذای سگ</h3>
                                <div className="text-[.7rem] text-white font-bold mt-3 h-4 w-25 bg-orange-500 
                                rounded flex justify-center items-center">مشاهده محصولات</div>
                            </div>
                            <div>
                                <figure>
                                    <img src="../images/dog.png" alt="" width="100" className="absolute -top-4 -left-1" />
                                </figure>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
export default AnimalFoods