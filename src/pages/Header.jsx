import { useState } from "react";
import Sidebar from "../pages/Sidebar";

function Header() {
  const [open, setOpen] = useState(false);
  const [cartState, setCartState] = useState("empty")
  const [isFocused,setIsFocuse] = useState(false)
  const[isActive,setIsActive] = useState("false")

 const toggleMenu = () => setOpen((prev) => !prev);
 


  const menuClasses = `fixed top-0 left-0 h-full w-64 bg-white border shadow-lg z-50 
    transition-transform duration-300 ease-in-out 
    ${open ? "translate-x-0" : "-translate-x-full"}`;

  return (
    <>
      <header>
        <div className="mx-8 mt-3 bg-white">
          <div className="flex w-full items-center justify-between rounded-xl border border-black p-2">
            <div className="flex items-center">
              <i className="mr-4 text-xs">telephone</i>
              <div className="mr-3 flex gap-1">
                <p className="text-[0.6rem] font-bold text-gray-500">
                  دریافت مشاوره و راهنمایی:
                </p>
                <p className="text-[0.6rem] font-bold text-black">
                  09123456789
                </p>
              </div>
            </div>

            <div className="flex items-start justify-between">
              <div className="flex space-x-1 text-[0.5rem] text-gray-500">
                <i className="cursor-pointer transition duration-300 hover:text-black">
                  facebook
                </i>
                <i className="cursor-pointer transition duration-300 hover:text-black">
                  twitter
                </i>
                <i className="cursor-pointer transition duration-300 hover:text-black">
                  instagram
                </i>
                <i className="cursor-pointer transition duration-300 hover:text-black">
                  youtube
                </i>
                <i className="cursor-pointer transition duration-300 hover:text-black">
                  other
                </i>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-2 -mt-2 bg-white">
          <div className="flex min-h-[30px] w-full items-center justify-between rounded-xl border border-black p-4">
            <figure className="flex items-center">
              <img
                src="../images/header-logo.png"
                alt="logo"
                width="100"
                height="100"
              />
            </figure>

            <nav className="hidden md:flex">
              <ul className="flex items-center space-x-3 text-xs">
                <li className="transition duration-300 hover:text-orange-300">
                  <a href="">خانه</a>
                </li>
                <li className="transition duration-300 hover:text-orange-300">
                  <a href="">فروشگاه</a>
                </li>
                <li className="transition duration-300 hover:text-orange-300">
                  <a href="">وبلاگ</a>
                </li>
                <li className="transition duration-300 hover:text-orange-300">
                  <a href="">تماس با ما</a>
                </li>
                <li className="transition duration-300 hover:text-orange-300">
                  <a href="">درباره ما</a>
                </li>
              </ul>
            </nav>


            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  toggleMenu()
                  setCartState("empty")
                  
                }}
                className="cursor-pointer text-[0.6rem] text-black hover:text-gray-500"
              >
                ورود/ثبت نام
              </button>

              <div onClick={() => {
                setOpen(true)
                setCartState("por")
               
              }} className="relative h-6 w-6 cursor-pointer rounded-full bg-orange-200 text-xs ">
                <span className="absolute -left-1 top-0 z-10 flex h-3 w-3 items-center justify-center rounded-full bg-orange-300 text-[0.5rem]">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar menuClasses={menuClasses} setOpen={setOpen} cartState={cartState}
      isFocused={isFocused} setIsFocused={setIsFocuse} />       
     

    </>
  );
}

export default Header;
