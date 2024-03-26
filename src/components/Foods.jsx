import React, { useState } from 'react';
import { Data } from './Data.js';

const Foods = () => {
    const [foods, setFoods] = useState(Data);

    // Filter by type (Burgers, Pizza, Salad, Chicken)
    const filterType = (category) => {
        setFoods(Data.filter((item) => item.category === category));
    };

    // Filter by price ($, $$, $$$, $$$$)
    const filterPrice = (price) => {
        setFoods(Data.filter((item) => item.price === price));
    };

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top rated menu items</h1>

            {/* Filter type */}
            <div className='font-bold text-gray-700'>
                <p>Filter type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={() => setFoods(Data)} className='m-1 border p-2 rounded-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={() => filterType('burgers')} className='m-1 border border-orange-600 p-2 rounded-full text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={() => filterType('pizza')} className='m-1 border border-orange-600 p-2 rounded-full text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={() => filterType('salad')} className='m-1 border border-orange-600 p-2 rounded-full text-orange-600 hover:bg-orange-600 hover:text-white'>Salad</button>
                    <button onClick={() => filterType('chicken')} className='m-1 border border-orange-600 p-2 rounded-full text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>

            {/* Filter price */}
            <div className='font-bold text-gray-700'>
                <p>Filter price</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={() => filterPrice('$')} className='m-1  border p-2 rounded-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                    <button onClick={() => filterPrice('$$')} className='m-1 border p-2 rounded-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button onClick={() => filterPrice('$$$')} className='m-1 border p-2 rounded-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button onClick={() => filterPrice('$$$$')} className='m-1 border p-2 rounded-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                </div>
            </div>

            {/* Display food */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
                {foods.map((item, index) => (
                    <div key={index} className='border shadow-lg hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                        <div>
                            <p>{item.name}</p>
                            <span>{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Foods;
