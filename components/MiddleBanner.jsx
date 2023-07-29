import React from "react";
import HomepageCardsA from "./HomepageCardsA";
import ExpandCards from "./ExpandCards";
// import SetApart from "./SetApart";
// import EmbrasePage from "./EmbrasePage";
// import UploadImage from "./UploadImage";
// import Testimonials from "./Testimonials";

const MiddleBanner = () => {
  return (
    <div className="my-12">
      <div className="middleBanner_text ">
        <h1 className="text-[#033484] lg:text-4xl md:text-3xl sm:text-3xl font-bold  w-full justify-center items-center">
          Expand Your <span className="text-[#F0A305]">Knowledge</span> with Our
          Newly Added Courses
        </h1>
        {/* <HomepageCardsA /> */}
        <ExpandCards />

        {/* Flex column on small screens */}
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1  gap-6 my-8">
          <h1 className="text-[#033484] text-[2rem] w-full flex-nowrap font-bold">
            Popular <span className="text-[#F0A305] mx-2">Courses</span>
          </h1>
          <div className="bg-blue-100 categ  py-2 px-3 rounded-lg max-w-xl overflow-x-auto flex-nowrap lg:w-fit flex items-center">
            <button className="bg-blue-900 rounded-xl pb-2 pt-1 px-3 text-white">
              All
            </button>
            <ul className="flex items-center">
              <li className="px-3 text-gray-500 font-semibold">Design</li>
              <li className="px-3 text-gray-500 font-semibold">Development</li>
              <li className="px-3 text-gray-500 font-semibold">Business</li>
              <li className="px-3 text-gray-500 font-semibold">Marketing</li>
              <li className="px-3 whitespace-nowrap text-gray-500 font-semibold">DataScience</li>
              <li className="px-3 text-gray-500 font-semibold">Design</li>
            </ul>
          </div>
        </div>

        <ExpandCards />
        <div className="py-5 mt-7">
          <h1 className="font-bold text-3xl font-poppins text-[#033484] text-center my-5">
            What Sets Us Apart
          </h1>
          <p className="text-xl text-center text-gray-500">
            Enjoy a multitude of the following advantages by learning with us
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default MiddleBanner;
