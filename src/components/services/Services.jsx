import React from 'react';
import services from "../../assets/services.svg";
import getData from "../../assets/getData.svg";
import price from "../../assets/price.svg";

import '../../index.css';

const Services = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className="z-10 bg-gradient-to-br from-black via-stone-700 to-stone-500 bg-clip-text text-center font-display md:text-4xl text-2xl font-bold tracking-[-0.05em] text-transparent drop-shadow-sm [text-wrap:balance]">
        <div className="flex flex-col">
          <div>Services provided by 0rbit:</div>
        </div>
      </h1>
      <div className='flex justify-center items-center p-4 pt-8 relative'>
        <div className="grid h-80 overflow-hidden lg:w-[1020px] w-[350px] animate-fade-up bg-gradient-to-bl from-stone-100 via-[#e2f4ff] to-[#d1eeff] border border-gray-200 p-8 rounded-2xl grid-cols-1 gap-5 px-5 custom-shadow relative">
          {/* Bottom Left Image */}
          <div className="col-span-1 overflow-hidden rounded-xl bg-transparent absolute bottom-[-40px] left-[-40px] hidden lg:flex">
            <div className="flex items-center justify-center">
              <img src={services} alt="services" className="h-72 w-72" />
            </div>
          </div>
          
          {/* Top Right Image */}
          <div className="col-span-1 overflow-hidden rounded-xl bg-transparent absolute top-[-40px] right-[-40px] hidden lg:flex">
            <div className="flex items-center justify-center">
              <img src={services} alt="services" className="h-60 w-60" />
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='grid grid-cols-1 gap-8'>
              <div className='flex items-center'>
                <img src={getData} alt="getData" className="h-20 w-20" />
                <div className='ml-4'>Get data from any HTTP url</div>
              </div>

              <div className='flex items-center'>
                <img src={price} alt="price" className="h-20 w-20" />
                <div className='ml-4'>Get price feeds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
