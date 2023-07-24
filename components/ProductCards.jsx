import React from "react"
import Image from "next/image"
const ProductCards = (props) => {
  return (
    <div>
         <div>
       <div class="max-w-2xl mx-auto">
        <div class="bg-white shadow-md  rounded-lg max-w-sm ">
          <a
            href="#"
            className="h-[200px] overflow-hidden"
          >
            <Image
              class="rounded-t-lg min-w-full h-44"
              src={props.image}
              alt="product image"
            />
          </a>
          <div class="px-2 pb-5">
            <a href="#">
              <h3 class=" font-semibold text-[21px] tracking-tight text-black">
               {props.text}
              </h3>
            </a>
            <p>{props.author}</p>
            <div class="flex items-center mt-2.5 mb-5">
              {props.rating}
              {/* i used the rating where am outputing the values  */}
              {/* <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                5.0
              </span> */}
            </div>
            <div class="flex items-center justify-between">
              <span class="text-1xl font-bold text-gray-900 ">{props.price}</span>
              <a
                href="#"
                class="text-blue-500 w-full  focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 font-semibold text-right dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 break-words"
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