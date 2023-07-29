import React from "react"
import Image from "next/image"
const ProductCards = (props) => {
  return (
    // I passed the card as props to homepageCards
    <div>
         <div>
       <div class="max-w-2xl mx-auto">
        <div class="bg-white shadow-md  rounded-lg max-w-sm ">
          <a
            href="#"
            className="h-[200px] overflow-hidden"
          >
            <img
              class="rounded-t-lg min-w-full h-44"
              src={props.image}
              alt="product image"
            />
          </a>
          <div class=" pb-5 px-2">
            <a href="#" className="mx-2">
              <h3 class=" px-2 font-semibold lg:text-2xl md:text-xl sm:text-xl tracking-tight text-black">
               {props.text}
              </h3>
            </a>
            <p className="px-2">{props.author}</p>
            <div class="flex items-center mt-2.5 mb-5">
              {props.rating}
              {/* i used the rating where am outputing the values  */}
            </div>
            <div class="flex items-center justify-between">
              <span class="text-1xl font-bold text-gray-900 ml-2 ">{props.price}</span>
              <a
                href="#"
                class="text-blue-500 w-full sm:-ml-5  focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 font-semibold text-right dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 break-words"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductCards