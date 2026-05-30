import React from "react";

const Sidebar = ({
  menuClasses,
  setOpen,
  cartState,
  isFocused,
  setIsFocused,
  isActive,
}) => {
  return (
    <aside className={menuClasses}>
      {cartState === "empty" ? (
        <>
          <div className="p-4 flex items-center justify-between">
            <h4 className="font-bold text-lg">ورود</h4>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-700 transition hover:text-gray-900 duration-300 text-sm"
              aria-label="بستن سایدبار"
            >
              بستن
            </button>
          </div>

          <hr className="border-gray-200" />

          <div className="p-4">
            <h6 className="text-sm font-bold mb-3 text-gray-800">
              ثبت نام / ورود در فروشگاه وودمارت بلاس
            </h6>
            {!isFocused ? (
              <div className="relative">
                <input
                  onClick={() => {
                    setIsFocused(true);
                  }}
                  id="usernameInput"
                  type="text"
                  placeholder=" " // Placeholder is transparent, label handles visibility
                  className="peer w-full h-14 bg-white rounded-lg border border-gray-300 px-4 pt-5 pb-2 text-right outline-none
                               text-gray-900 placeholder-transparent transition-all duration-300
                               focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  aria-label="نام کاربری، ایمیل یا شماره همراه"
                />
                <label
                  htmlFor="usernameInput"
                  className="absolute right-3 top-1/2 -translate-y-1/2
                               text-gray-500 text-sm
                               peer-focus:-translate-y-9 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-red-500
                               peer-focus:bg-white peer-focus:px-2
                               transition-all duration-300 cursor-text z-10"
                >
                  شماره همراه / ایمیل / نام کاربری
                </label>
              </div>
            ) : (
              <fieldset className="w-full rounded-lg border border-red-400 px-4 pb-2 pt-1">
                <legend className="px-2 text-xs text-red-500 transition-transform ease-out duration-300">
                  شماره همراه / ایمیل / نام کاربری
                </legend>

                <input
                  autoFocus
                  type="text"
                  className="w-full bg-transparent outline-none text-right text-gray-900"
                  placeholder=" "
                />
              </fieldset>
            )}
            <div className="space-y-4">
              {/* Input field for Username/Email/Phone */}
            </div>

            {/* Login/Register Button */}
            <div className="mt-5">
              <button
                className="w-full h-12 rounded-lg bg-pink-500 text-white font-bold
                           transform-transition hover:-translate-y-[0.2rem] duration-300
                           hover:bg-pink-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75"
                aria-label="ثبت نام یا ورود"
              >
                ثبت نام / ورود
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="p-4 flex items-center justify-between border-b border-gray-200">
            <h3 className="font-bold text-lg">سبد خرید</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-700 transition hover:text-gray-900 duration-300"
              aria-label="بستن سبد خرید"
            >
              بستن
            </button>
          </div>

          <hr className="border-gray-200" />

          <div className="flex flex-col items-center justify-center h-[calc(100%-60px)] gap-4 p-4 text-center">
            <p className="text-gray-700">هیچ محصولی در سبد خرید نیست</p>
            <div className="w-32 h-10 rounded-xl bg-red-500 flex items-center justify-center transform-transition hover:-translate-y-[0.1rem] duration-300">
              <button className="text-white font-bold text-sm">
                بازگشت به فروشگاه
              </button>
            </div>
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
