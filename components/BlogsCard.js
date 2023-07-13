import Image from "next/image"
import BlogA from '../public/Blog 1.png'
import BlogB from '../public/Business.png'
import BlogC from '../public/Design 2.png'
import BlogD from '../public/Design 3.png'
import BlogE from '../public/Photography.png'
import BlogG from '../public/Design 1.png'

const BlogsCard = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-bold">
            All <span className="text-[#F0A305]">Blogs</span>
          </h3>
        </div>
        <div className="flex">
          <div>

          </div>
        </div>

      </div>

      <div className="mx-auto w-full">
        <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3  mx-auto  gap-6 mt-8'>


          <div class="bg-white shadow-md items-center  rounded-lg max-w-xs ">
            <a href="#" className='h-[200px] overflow-hidden'>
              <Image class="rounded-t-lg bg-cover" src={BlogA} alt="product image" />
            </a>
            <div class="px-2 py-5">
              <div className="flex justify-between">
                <div>
                  <span className="text-blue-500">Web Development</span>
                </div>
                <div>
                  <span className="text-gray-500">May 27, 2023</span>
                </div>


              </div>
              <div className="mt-4">
                <a href="#">
                  <h3 class=" font-semibold text-[21px] tracking-tight text-black">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
                </a>


                <div class="flex items-center justify-between mt-5">
                  <span class="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
                  <a href="#"
                    class="text-blue-600  text-sm font-bold">Read post</a>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white shadow-md items-center  rounded-lg max-w-xs ">
            <a href="#" className='h-[200px] overflow-hidden'>
              <Image class="rounded-t-lg bg-cover" src={BlogB} alt="product image" />
            </a>
            <div class="px-2 py-5">
              <div className="flex justify-between">
                <div>
                  <span className="text-blue-500">Web Development</span>
                </div>
                <div>
                  <span className="text-gray-500">May 27, 2023</span>
                </div>


              </div>
              <div className="mt-4">
                <a href="#">
                  <h3 class=" font-semibold text-[21px] tracking-tight text-black">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
                </a>


                <div class="flex items-center justify-between mt-5">
                  <span class="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
                  <a href="#"
                    class="text-blue-600  text-sm font-bold">Read post</a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-md  rounded-lg max-w-xs ">
            <a href="#" className='h-[200px] overflow-hidden'>
              <Image class="rounded-t-lg bg-cover" src={BlogC} alt="product image" />
            </a>
            <div class="px-2 py-5">
              <div className="flex justify-between">
                <div>
                  <span className="text-blue-500">Web Development</span>
                </div>
                <div>
                  <span className="text-gray-500">May 27, 2023</span>
                </div>


              </div>
              <div className="mt-4">
                <a href="#">
                  <h3 class=" font-semibold text-[21px] tracking-tight text-black">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
                </a>


                <div class="flex items-center justify-between mt-5">
                  <span class="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
                  <a href="#"
                    class="text-blue-600  text-sm font-bold">Read post</a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-md  rounded-lg max-w-xs ">
            <a href="#" className='h-[200px] overflow-hidden'>
              <Image class="rounded-t-lg bg-cover" src={BlogD} alt="product image" />
            </a>
            <div class="px-2 py-5">
              <div className="flex justify-between">
                <div>
                  <span className="text-blue-500">Web Development</span>
                </div>
                <div>
                  <span className="text-gray-500">May 27, 2023</span>
                </div>


              </div>
              <div className="mt-4">
                <a href="#">
                  <h3 class=" font-semibold text-[21px] tracking-tight text-black">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
                </a>


                <div class="flex items-center justify-between mt-5">
                  <span class="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
                  <a href="#"
                    class="text-blue-600  text-sm font-bold">Read post</a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-md items-center  rounded-lg max-w-xs ">
            <a href="#" className='h-[200px] overflow-hidden'>
              <Image class="rounded-t-lg bg-cover" src={BlogE} alt="product image" />
            </a>
            <div class="px-2 py-5">
              <div className="flex justify-between">
                <div>
                  <span className="text-blue-500">Web Development</span>
                </div>
                <div>
                  <span className="text-gray-500">May 27, 2023</span>
                </div>


              </div>
              <div className="mt-4">
                <a href="#">
                  <h3 class=" font-semibold text-[21px] tracking-tight text-black">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
                </a>


                <div class="flex items-center justify-between mt-5">
                  <span class="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
                  <a href="#"
                    class="text-blue-600  text-sm font-bold">Read post</a>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white shadow-md items-center  rounded-lg max-w-xs ">
            <a href="#" className='h-[200px] overflow-hidden'>
              <Image class="rounded-t-lg bg-cover" src={BlogG} alt="product image" />
            </a>
            <div class="px-2 py-5">
              <div className="flex justify-between">
                <div>
                  <span className="text-blue-500">Web Development</span>
                </div>
                <div>
                  <span className="text-gray-500">May 27, 2023</span>
                </div>


              </div>
              <div className="mt-4">
                <a href="#">
                  <h3 class=" font-semibold text-[21px] tracking-tight text-black">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
                </a>


                <div class="flex items-center justify-between mt-5">
                  <span class="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
                  <a href="#"
                    class="text-blue-600  text-sm font-bold">Read post</a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-md  rounded-lg max-w-xs ">
            <a href="#" className='h-[200px] overflow-hidden'>
              <Image class="rounded-t-lg bg-cover" src={BlogB} alt="product image" />
            </a>
            <div class="px-2 py-5">
              <div className="flex justify-between">
                <div>
                  <span className="text-blue-500">Web Development</span>
                </div>
                <div>
                  <span className="text-gray-500">May 27, 2023</span>
                </div>


              </div>
              <div className="mt-4">
                <a href="#">
                  <h3 class=" font-semibold text-[21px] tracking-tight text-black">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
                </a>


                <div class="flex items-center justify-between mt-5">
                  <span class="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
                  <a href="#"
                    class="text-blue-600  text-sm font-bold">Read post</a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-md  rounded-lg max-w-xs ">
            <a href="#" className='h-[200px] overflow-hidden'>
              <Image class="rounded-t-lg bg-cover" src={BlogD} alt="product image" />
            </a>
            <div class="px-2 py-5">
              <div className="flex justify-between">
                <div>
                  <span className="text-blue-500">Web Development</span>
                </div>
                <div>
                  <span className="text-gray-500">May 27, 2023</span>
                </div>


              </div>
              <div className="mt-4">
                <a href="#">
                  <h3 class=" font-semibold text-[21px] tracking-tight text-black">Mastering Front-End Development: Essential HTML, CSS, and JavaScript Skills</h3>
                </a>


                <div class="flex items-center justify-between mt-5">
                  <span class="text-xs font-bold text-gray-900 ">By Jenny Wilson</span>
                  <a href="#"
                    class="text-blue-600  text-sm font-bold">Read post</a>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>



    </div>
  )
}

export default BlogsCard  