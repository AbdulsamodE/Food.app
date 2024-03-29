import React from 'react'
import Foods from '../assest/Foods.jpg';

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='m-h-[500px] relative'>
            <div className='absolute w-full h-full text-gray-200 m-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:6xl lg-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:6xl lg-7xl font-bold'><span className='text-orange-500'>Foods</span>Delivery</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover'src={Foods} alt='pizza'/>
        </div>
    </div>
  )
}   

export default Hero