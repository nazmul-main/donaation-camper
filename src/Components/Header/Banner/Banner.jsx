/* eslint-disable react/prop-types */

import { useState } from 'react';
import yourImage from '../../../assets/Rectangle-4281.png';

const Banner = ({ handleSearch }) => {
    const backgroundImageStyle = {
        backgroundImage: `url(${yourImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.1,
    };
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClick = () => {
        handleSearch(inputValue);
    };

    return (
        <div className='relative'>
            <div className='h-[60vh] background flex justify-center items-center' style={{ ...backgroundImageStyle }}>
            </div>

            <div className='banner-contant flex flex-col gap-5 md:gap-10 items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-translate-x-1/2 md:-translate-y-1/2'>
                <p className='text-xl md:text-2xl lg:text-4xl font-bold'>I Grow By Helping People In Need</p>
                <div className=' flex '>
                    <input onChange={handleChange} className='w-44 md:w-60 lg:w-80 p-1 md:p-2 border-2 border-r-0 border-gray outline-none' type="search" name="search" id="search-box" placeholder='search...' />
                    <button onClick={handleClick} className='py-[6px] md:py-[10px] px-4 bg-red-500 rounded-sm text-white font-semibold'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
