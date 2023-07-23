import React from "react";
import HomepageCardsA from "./HomepageCardsA";
import ExpandCards from "./ExpandCards";
const MiddleBanner = () => {
  return (
    <div className="my-12">
      <div className="middleBanner_text ">
        <h1 className="text-[#033484] text-[2rem] font-bold flex justify-center items-center">
          Expand Your <span className="text-[#F0A305]">Knowledge</span> with Our
          Newly Added Courses
        </h1>
        {/* <HomepageCardsA /> */}

        <ExpandCards />
        <div className=" flex items-center justify-between my-6">
          <h1 className="text-[#033484] text-[2rem] font-bold  ">
            Popular <span className="text-[#F0A305] mx-2">Courses</span>
          </h1>
          <div className="bg-blue-100 py-1 px-3 rounded-lg  flex items-center ">
            <button className="bg-blue-900 rounded-xl pb-2 pt-1  px-3 text-white  ">
              All
            </button>
            <ul className="flex items-center ">
              <li className="px-3 text-gray-500 font-semibold">Design</li>
              <li className="px-3 text-gray-500 font-semibold">Development</li>
              <li className="px-3 text-gray-500 font-semibold">Business</li>
              <li className="px-3 text-gray-500 font-semibold">Marketing</li>
              <li className="px-3 text-gray-500 font-semibold">Data Science</li>
              <li className="px-3 text-gray-500 font-semibold">Design</li>
            </ul>
          </div>
        </div>

        <ExpandCards />

        <h1 className="font-bold text-3xl font-poppins text-[#033484] text-center my-3 ">
          What Sets Us Apart
        </h1>
        <p className="font-medium text-center text-gray-500 ">
          Enjoy a multitude of the following advantages by learning with us
        </p>

        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-6 mt-8 p-2" 
>
          <div className="bg-white rounded-lg shadow-md  grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-6 mt-8" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            odit iste a id quasi nobis magni nostrum ipsa distinctio! Tempora
            fugiat dolorem maxime, officiis fuga praesentium pariatur quos
            accusamus tenetur.
          </div>
          <div className="bg-white rounded-lg shadow-md  grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-6 mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            odit iste a id quasi nobis magni nostrum ipsa distinctio! Tempora
            fugiat dolorem maxime, officiis fuga praesentium pariatur quos
            accusamus tenetur.
          </div>
          <div className="bg-white rounded-lg shadow-md  grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-6 mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            odit iste a id quasi nobis magni nostrum ipsa distinctio! Tempora
            fugiat dolorem maxime, officiis fuga praesentium pariatur quos
            accusamus tenetur.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleBanner;