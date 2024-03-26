import React from 'react'
import honey from '../assest/honey.jpg';
import fruits from '../assest/fruits.jpg';
import chips from '../assest/chips.jpg';

const Headlines = () => {
  return (
    <div className='max-w-[1650px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* cards */}
      <div className='relative rounded-xl'> 
          {/* overlay */}
            <div className='w-full h-full bg-black/30 rounded-xl text-white justify-center'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out,BOGO's Out</p>
                <p className='px-2 '>Through 8/26</p>
                <button className=' bg-white hover:text-red-500 text-black font-bold py-2 px-4 rounded inline-flex items-center'>Order Now</button>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover roundedd-2xl' src={chips} alt='This is chips'/>
            </div>  
            
       
        </div>    
          {/* cards */}
      <div className='relative rounded-xl'> 
          {/* overlay */}
            <div className='absolte w-full h-full bg-black/30 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>New Resturants </p>
                <p className='px-2 '>Added Dairy</p>
                <button className=' bg-white hover:text-red-500 text-black font-bold py-2 px-4 rounded inline-flex items-center'>Order Now</button>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover roundedd-xl' src={honey} alt='This is honey'/>
            </div>  
  
       
        </div>    
          {/* cards */}
      <div className='relative rounded-xl'> 
          {/* overlay */}
            <div className='absolte w-full h-full bg-black/30 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>We deliver Desert too</p>
                <p className='px-2'>Tasty Treats</p>
                <button className=' bg-white hover:text-red-500 text-black font-bold py-2 px-4 rounded inline-flex items-center '>Order Now</button>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover roundedd-xl' src={fruits} alt='This is fruits'/>
            </div>  
            
           
       
        </div>    
        
        

    </div>
    
  )
}

export default Headlines