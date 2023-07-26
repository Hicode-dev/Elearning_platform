import React, { useState } from "react";
import Image from "next/image";
// import nn from '../public/SLM- Logo (1).png'
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";
import { BsSearch, BsCart } from "react-icons/bs";
const MainNav = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <main>
      <div class="bg-white   fixed top-0 z-10 left-0 right-0 shadow-lg ">
        <div className="max-w-[1240]  py-4 flex  justify-between items-center container  capitalize h-25 mx-auto px-5 sticky top-0">
          dkf
          <ul className="hidden sm:flex  font-bold text-gray-400">
            <li className="p-3 cursor-pointer">Courses</li>
            <li className="p-3 cursor-pointer">Blog</li>
            <li className="p-3 cursor-pointer"> Template</li>
            <li className="p-3 cursor-pointer"> Become A Tutor</li>
          </ul>
          <div className="gap-6 flex items-center">
            <BsSearch />
            <BsCart />
            <button className="border hidden sm:inline-block rounded-md px-6 py-2 text-bold">
              login
            </button>
            <button className="border hidden sm:inline-block rounded-md bg-blue-800 text-white px-6 py-2 text-bold">
              Sign up
            </button>
          </div>
          <div onClick={handleClick} className="block sm:hidden">
            {!nav ? (
              <AiOutlineMenuFold
                className="fixed right-0 top-3.5 mr-5 ease-in-out duration-700"
                size={30}
              />
            ) : (
              <AiOutlineClose
                className="fixed right-0 top-3.5 mr-5 ease-in-out duration-700"
                size={30}
              />
            )}
          </div>
          <div
            className={
              nav
                ? "fixed top-0 bg-white z px-4 left-0 w-[60%]  border-r h-full  border-r-gray-600 ease-out duration-700"
                : "fixed left-[-100%]   duration-1000"
            }
          >
            <h1 className=" text-3xl p-3 font-bold pt-3 text-[#3e873e] uppercase ">
              k
            </h1>

            <ul>
              <li className="p-3 cursor-pointer">home</li>
              <li className="p-3 cursor-pointer">about</li>
              <li className="p-3 cursor-pointer"> songs</li>
              <li className="p-3 cursor-pointer"> services</li>
            </ul>
            <div className="gap-6 grid ">
              <button className="border   rounded-md  py-2 text-bold ">
                login
              </button>
              <button className="border    rounded-md bg-blue-800 text-white  py-2 text-bold ">
                Sign up
              </button>
              <button className="border-dashed border-4 py-1  ">
              book a session{" "}
            </button>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainNav;
