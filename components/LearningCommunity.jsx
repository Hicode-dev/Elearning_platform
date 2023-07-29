import React from 'react';
import Image from 'next/image';
import subscribe from '../public/subscribe.png';

const LearningCommunity = () => {
  return (
    <div className='my-8'>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
        <div>
          {/* Specify width and height for the image */}
          <Image src={subscribe} alt="Subscribe" className='w-full' />
        </div>
        <div className='lg:mt-36'>
          <h1 className='font-bold text-gray-700 text-xl my-4'>Join Our Learning Community</h1>
          <p className='my-3 text-lg'>Be a part of our vibrant learning community by subscribing to our newsletter, and stay updated with the latest news, course/product releases, and exclusive offers.</p>
          <div className='flex items-center border border-gray-400 shadow p-2 rounded-3xl'>
            <input className='w-10/12 border-0 outline-none' type="text" placeholder='Your Email' />
            <button className="border border-gray-500 rounded-xl py-2 px-6 text-white font-medium bg-blue-700 hover:bg-blue-900 hover:text-white focus:outline-blue-400 focus:ring-2 focus:ring-blue-400">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCommunity;
