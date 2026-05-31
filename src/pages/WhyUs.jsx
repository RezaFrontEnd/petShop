import React from "react";
import FeatureCard from "./FeatureCard";
import { FaTruck } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
function WhyUs() {
  const features = [
    {
      title: "ارسال سریع سفارش ها",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
      icon: <FaTruck/>,
    },
    {
      title: "تضمین بهترین قیمت",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
      icon:<FaMoneyBill/>,
    },
    {
      title: "پرداخت در محل",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
      icon:<FaHome/>,
    },
  ];
  return (
    <div>
      <div className="relative overflow-hidden bg-green-500 pt-20 pb-10">
        {" "}
        {/* بخش سبز رنگ */}
        <div
          className="absolute top-0 left-0 w-full h-24 bg-[#FFFAEE]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 0)",
          }}
        ></div>
        <div className="w-full h-70 bg-gradient-to-br from-green-400 to-green-500 rounded-4xl max-w-6xl mx-auto px-2 flex items-center justify-center">
          <div className="flex justify-center items-center gap-5">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhyUs;
