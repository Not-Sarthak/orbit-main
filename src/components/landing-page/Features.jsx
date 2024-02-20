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
              Data Access
            </h2>
            <p className='text-center text-gray-500'>Get any data on Arweave including both on-chain and off-chain.</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="flex items-center justify-center flex-col gap-2 px-4">
            <img src={permissionless} className='w-60 h-60'/>
            <h2 class="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal">
              Permissionless
            </h2>
            <p className='text-center text-gray-500'>Anyone can utilise 0rbit without asking permission from the team.</p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="flex items-center justify-center flex-col gap-2 px-4">
            <img src={secured} className='w-60 h-60'/>
            <h2 class="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal">
              Secure
            </h2>
            <p className='text-center text-gray-500'>0rbit provides secure path to get the data in any AO process.</p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md md:col-span-2">
          <div className="flex items-center justify-center flex-col gap-2 px-4">
            <img src={decentralized} className='w-60 h-60'/>
            <h2 class="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal">
              Decentralised
            </h2>    
            <p className='text-center text-gray-500'>The 0rbit nodes secures and provides accurate data by following the consensus.</p>      
          </div>
        </div>

        {/* Section 5 */}
      </div>
    </div>
  );
};

export default Features;
