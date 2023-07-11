import React from 'react'
import Image from 'next/image'
import HeroImage from '../public/image 13.png'
const HeroBanner = () => {
  return (
    <div>
        <div className='grid grid-cols-2 place-items-center '>
        <div className='HeroBanner_Text text-black '> 
        <h1 className='text-#020F24 text-[3.5rem] font-bold mb-6'>Unleash Your <span className='text-[#F0A305]'>creativity</span> and Make Your Mark on the <span className='text-[#F0A305]'>World</span></h1>
       <p className='text-[1.4rem] font-medium mb-6'>Embark on a journey of discovery with our platform's expert guidance and immersive hands-on projects that help you harness your creative energy.</p>
       <button className='border    rounded-md bg-blue-800 text-white px-6 py-2 text-bold '>Explore Courses</button>
        </div>
        <div>
            <Image 
            src={HeroImage}
            alt='lop'

            />
        </div>
        </div>
    </div>
  )
}

export default HeroBanner