import React from "react";
import useFetch from "./Fetch";
const Patners = () => {
  const { data, error } = useFetch("http://localhost:1234/Articles");
  return (
    <div>
      <div className="my-10">
        <h1 className="text-blue-900 font-extrabold text-center lg:text-4xl md:text-3xl sm:text-2xl w-full">
          Articles & Updates
        </h1>
        <p className="text-gray-600 lg:text-xl md:text-xl text-medium   mt-4 text-start w-9/12 mx-auto">
          Discover the latest trends and strategies in marketing through our
          insightful blog, empowering you to elevate your brand and reach new
          heights
        </p>

        <div className="grid lg:grid-cols-4  md:grid-cols-2 mt-10 sm:grid-cols-1 gap-6">
          {data &&
            data.map((el, i) => (
              <div key={i} className="p-2 rounded-xl bg-white shadow-xl">
                <img
                  className="w-full  h-48 rounded-r-xl rounded-l-xl rounded-b-none "
                  src={el.image}
                  alt=""
                />
                <div className="bg-white ">
                  <div className="flex justify-between items-center">
                    <p className="text-blue-400 font-semibold my-2 text-xs">
                      {el.occupation}
                    </p>
                    <p className="text-gray-400 text-xs my-2">{el.date}</p>
                  </div>
                  <h5 className="text-m text-gray-500 font-bold">
                    {el.purpose}
                  </h5>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-400 text-xs ">{el.author}</p>
                    <p className="text-blue-600 text-xs  font-bold">
                      {el.read}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div>
        <button class="border border-gray-500 rounded-xl py-2 px-4 text-black font-medium bg-transparent hover:bg-black hover:text-white focus:outline-black focus:ring-2 focus:ring-black">
          Browse All
        </button>
      </div>
    </div>
  );
};

export default Patners;
