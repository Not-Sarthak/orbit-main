import React from 'react';
import services from "../../assets/services.svg"

const Services = () => {
  return (
    <div className='flex justify-center items-center p-4'>
      <div className="grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {/* Left */}
        <div className="relative col-span-1 overflow-hidden rounded-xl bg-white">
          <div className="flex items-center justify-center">
            <img src={services} alt="services" />
          </div>
        </div>
        {/* Right */}
        <div className="relative col-span-1 rounded-xl bg-white md:col-span-2">
          <div className="flex h-60 items-center justify-center">
            Feature 1
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
