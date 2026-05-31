import { useState } from "react";
import Sidebar from "../pages/Sidebar";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaTwitter,
  FaPinterest
} from "react-icons/fa";
function Header() {
  const [open, setOpen] = useState(false);
  const [cartState, setCartState] = useState("empty");
  const [isFocused, setIsFocuse] = useState(false);


  const toggleMenu = () => setOpen((prev) => !prev);

  const menuClasses = `fixed top-0 left-0 h-full w-64 bg-white border shadow-lg z-50 
    transition-transform duration-300 ease-in-out 
    ${open ? "translate-x-0" : "-translate-x-full"}`;
  const navItems = [
  "خانه",
  "فروشگاه",
  "وبلاگ",
  "تماس با ما",
  "درباره ما"]

const socialIcons = [
  <FaFacebookF />,
  <FaTwitter />,
  <FaInstagram />,
  <FaYoutube />,
  <FaPinterestP />,
];
  return (
    <>
      <header>
        <div className="max-w-6xl mx-auto px-15 mt-3">
          <div className="flex w-full items-center justify-between rounded-xl border border-black p-2 bg-white">
            <div className="flex items-center">
              <i class="bi bi-telephone-fill">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
              </i>

              <div className="mr-3 flex gap-1">
                <p className="text-sm font-bold text-gray-500">
                  دریافت مشاوره و راهنمایی:
                </p>
                <p className="text-small font-bold text-black">
                  09123456789
                </p>
              </div>
            </div>

            <div className="flex items-start justify-between">
              <div className="flex gap-2">
                 {socialIcons.map((icon,index)=>(
                  <span key={index} className="cursor-pointer transition hover:text-black">{icon}</span>
                 ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto -mt-2 bg-[#FFFFFF]">
          <div className="flex min-h-[30px] w-full items-center justify-between rounded-xl border border-black p-4">
            <figure className="flex items-center">
              <img
                src="../images/header-logo.png"
                alt="logo"
                width="150"
                height="150"
              />
            </figure>

            <nav>
               <ul className="flex items-center space-x-3 text-sm">
                 {navItems.map((item)=>(
                  <li key={item} className= "transition duration-300 hover:text-orange-500">
                     <a href="">{item}</a>
                  </li>
                 ))}
               </ul>
            </nav>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  toggleMenu();
                  setCartState("empty");
                }}
                className="cursor-pointer text-sm text-black hover:text-gray-500"
              >
                ورود/ثبت نام
              </button>

              <div
                onClick={() => {
                  setOpen(true);
                  setCartState("por");
                }}
                className="bi bi-cart relative h-6 w-6 cursor-pointer rounded-full bg-orange-200 text-xs flex justify-center items-center "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
                <span className="absolute -left-1 top-0 z-10 flex h-3 w-3 items-center justify-center rounded-full bg-orange-300 text-[0.5rem]">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        menuClasses={menuClasses}
        setOpen={setOpen}
        cartState={cartState}
        isFocused={isFocused}
        setIsFocused={setIsFocuse}
      />
    </>
  );
}

export default Header;
