import React from 'react';
import services from "../../assets/services.svg"
import getData from "../../assets/getData.svg"
import price from "../../assets/price.svg"

import '../../index.css'

const Services = () => {
  return (
    <div>
      <h1 className="z-10 bg-gradient-to-br from-black via-stone-700 to-stone-500 bg-clip-text text-center font-display md:text-4xl text-2xl font-bold tracking-[-0.05em] text-transparent drop-shadow-sm [text-wrap:balance]">
        <div className="flex flex-col">
          <div>Services provided by 0rbit:</div>
        </div>
      </h1>
    <div className='flex justify-center items-center p-4 pt-8'>
    <div className="grid w-full max-w-screen-xl animate-fade-up bg-gradient-to-bl from-stone-100 via-[#e2f4ff] to-[#d1eeff] border border-gray-200 p-8 rounded-2xl grid-cols-1 gap-5 px-5 md:grid-cols-3 custom-shadow">
  {/* Left */}
  <div className="relative col-span-1 overflow-hidden rounded-xl bg-transparent">
    <div className="flex items-center justify-center">
      <img src={services} alt="services" />
    </div>
  </div>
  {/* Right */}
  <div className="relative col-span-1 rounded-xl bg-transparent md:col-span-2">
    <div className="flex h-full items-center justify-center">
      <div className='grid grid-cols-1 gap-4 pt-6 lg:pt-0 lg:gap-10'>
        <div className='flex items-center gap-4 lg:pb-0 pb-6'><img src={getData}/><div className='bg-gradient-to-br from-black via-stone-700 to-stone-500 bg-clip-text lg:text-xl text-lg'>Get Data from <i className='pr-1'>any</i> HTTP URL</div></div>
        <div></div>
        <div></div>
        <div className='flex items-center gap-4'><img src={price}/><div className='bg-gradient-to-br from-black via-stone-700 to-stone-500 bg-clip-text lg:text-xl text-lg'>Get Price Feeds</div></div>
      </div>
    </div>
      </div>
    </div>

    </div>
    </div>
  );
};

export default Services;
