import { useState } from "react";
import Sidebar from "./pages/Header";
import Header from "./pages/Header";
import UnderHeader from "./pages/UnderHeader";
import WhyUs from "./pages/WhyUs";
import AnimalFoods from "./pages/AnimalFoods";
import DryFood from "./pages/DryFood";
export default function App() {
 
  return (
   <>
     <Header/>
     <UnderHeader/>
     <WhyUs/>
     <AnimalFoods/>
     <DryFood/>
     
     
   </>

  );
}
