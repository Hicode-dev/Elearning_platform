import React from 'react';
import Image from 'next/image';
import HeroImage from '../public/image 13.png';

const HeroBanner = () => {
  return (
    <div>
      <div className='grid grid-cols-2 place-items-center'>
        <div className='HeroBanner_Text text-black'>
          <h1 className='text-#020F24 lg:text-7xl md:text-7xl sm:text-7xl  font-bold mb-6 mt-14 '>
            Unleash Your <span className='text-[#F0A305]'>creativity</span> and Make Your Mark on the <span className='text-[#F0A305]'>World</span>
          </h1>
          <p className='lg:text-3xl md:text-2xl sm:text-xl font-medium mb-6'>Embark on a journey of discovery with our platform&apos;s expert guidance and immersive hands-on projects that help you harness your creative energy.</p>
          <button className='border rounded-md bg-blue-800 text-white px-6 py-2 text-bold'>Explore Courses</button>
        </div>
        <div>
          <Image
            src={HeroImage}
            alt='lop'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
