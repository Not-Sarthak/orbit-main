import React from 'react';
import services from "../../assets/services.svg"

const Services = () => {
  return (
    <div>
      <h1 className="z-10 lg:h-[180px] h-[100px] bg-gradient-to-br from-black via-stone-700 to-stone-500 bg-clip-text text-center font-display md:text-4xl text-2xl font-bold tracking-[-0.05em] text-transparent drop-shadow-sm [text-wrap:balance]">
        <div className="flex flex-col gap-3">
          <div>AO's Web3 Oracle:</div>
          <div>Arweave-Powered Services Unleashed!</div>
        </div>
      </h1>
    <div className='flex justify-center items-center p-4'>
      <div className="grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {/* Left */}
        <div className="relative col-span-1 overflow-hidden rounded-xl bg-transparent">
          <div className="flex items-center justify-center">
            <img src={services} alt="services" />
          </div>
        </div>
        {/* Right */}
        <div className="relative col-span-1 rounded-xl bg-white md:col-span-2 bg-transparent">
          <div className="flex h-full items-center justify-center">
            <div className='grid grid-cols-2 md:gap-56 md:p-0 p-20 pb-0 gap-28'>
              <div>Service 1</div>
              <div>Service 2</div>
              <div>Service 3</div>
              <div>Service 4</div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Services;
