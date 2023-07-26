import React from 'react'
import Image from 'next/image';
import HeroImage from '../public/image 13.png';

const BecomeAnInstructor = () => {
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-10 gap-6 sm:-pb-14 '>
        <div className='lg:m-16 md:m-4'>
            <h1 className='lg:text-3xl md:text-2xl sm:text-xl text-blue-900 font-extrabold my-4'>Become an Instructor</h1>
            <p className='text-gray-500 text-xl  '>Join us in shaping the future of education and become part of a supportive network of educators dedicated to empowering learners worldwide. Together, let's create an engaging and transformative learning experience.</p>

            <button className="bg-blue-600 text-white rounded-xl lg:mt-10 md:mt-8 sm: mt-5  py-2 px-5 ring-1 ring-blue-500"> Start Your Teaching Journey Now</button>
        </div>

        <div className='w-12/12 h-96 -ml-8  overflow-hidden relative'>
            <img className='w-full lg:mt-0 md:mt-5 sm:mt-20 teacher rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOLW0UcIAr9qvYi5klkB1-4MR2pvY6H34t_A&usqp=CAU" alt='teacher'/>
        </div>
    </div>
  )
}

export default BecomeAnInstructor