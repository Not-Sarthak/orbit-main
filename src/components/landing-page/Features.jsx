import React from 'react';
import secured from "../../assets/secured.jpg"
import decentralized from "../../assets/decentralised.jpg"
import transparent from "../../assets/transparent.jpg"
import cost from "../../assets/cost-effective.jpg"
import permissionless from "../../assets/permissionless.jpg"

const Features = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className="grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {/* Section 1 */}
        <div className="relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md md:col-span-2">
          <div className="flex items-center justify-center flex-col gap-2 px-4">
            <img src={cost} className='w-60 h-60'/>
            <h2 class="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal">
              Cost-Effective Data Access
            </h2>
            <p className='text-center text-gray-500'>Redefining data access economics, our decentralized approach ensures cost-effectiveness without compromising on quality.</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="flex items-center justify-center flex-col gap-2 px-4">
            <img src={permissionless} className='w-60 h-60'/>
            <h2 class="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal">
              Permissionless
            </h2>
            <p className='text-center text-gray-500'>Engage freely, without constraints.</p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="flex items-center justify-center flex-col gap-2 px-4">
            <img src={secured} className='w-60 h-60'/>
            <h2 class="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal">
              Secure
            </h2>
            <p className='text-center text-gray-500'>Built on a foundation of permanence, our decentralized platform ensures the unalterable integrity of your data and transactions.</p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="flex items-center justify-center flex-col gap-2 px-4">
            <img src={decentralized} className='w-60 h-60'/>
            <h2 class="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal">
              Decentralised
            </h2>    
            <p className='text-center text-gray-500'>Redefining control, empowering users with a network that operates beyond central authority or single points of failure.</p>      
          </div>
        </div>

        {/* Section 5 */}
        <div className="relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="flex items-center justify-center flex-col gap-2 px-4">
            <img src={transparent} className='w-60 h-60'/>
            <h2 class="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal">
              Transparent
            </h2>    
            <p className='text-center text-gray-500'>Illuminate every operation, fostering trust through a crystal-clear view of processes within our decentralized ecosystem.</p>      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
