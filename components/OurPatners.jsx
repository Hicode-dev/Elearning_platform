import React from 'react'
import useFetch from "./Fetch";
const OurPatners = () => {
    const { data, error } = useFetch("http://localhost:1234/Patners");
  return (
    <div className="my-10">
    <h1 className="text-blue-900 font-extrabold text-center lg:text-4xl md:text-3xl sm:text-2xl w-full">
    Our Partners
    </h1>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-10 sm:grid-cols-1 gap-6">
      {data &&
        data.map((el, i) => (
          <div key={i} className="shadow p-2 rounded-xl">
            <div className="grid items-center ">
              <img className="w-full h-32" src={el.image} alt="" />
              <div className="grid ">
                <div className="flex items-center ">
                  <h6 className="w-full font-bold text-blue-900 text-m ">{el.name}</h6>
            
                </div>
                <p className="text-xs text-gray-500">{el.occupation}</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs ">{el.testimony}</p>
          </div>
        ))}
    </div>
  </div>
  )
}

export default OurPatners