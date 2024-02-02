import React from 'react';
import CardComponent from './CardComponent';

const Footer = () => {
  return (
    <div>
      <main className="flex flex-col items-center justify-start p-32 h-screen">
        <div className="space-y-1 relative">
          <h1 className="z-10 bg-gradient-to-br lg:h-[70px] w-full from-black to-stone-500 bg-clip-text text-center font-display text-2xl font-bold text-transparent drop-shadow-sm [text-wrap:balance] md:text-5xl">
            <div className="flex flex-col gap-3">
              <div>Still have questions?</div>
            </div>
          </h1>
          <p className="text-center text-gray-500 text-wrap:balance md:text-xl ">
            An opinionated collection of components, <br /> hooks, and utilities
            for your Next.js project.
          </p>
        </div>
        <div className='flex gap-4 pt-10'>
            <div class="px-8">
                <div class="grid gap-8 items-start justify-center">
                    <div class="relative group">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-300 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <button class="relative px-7 py-4 bg-white hover:bg-zinc-100 rounded-full leading-none flex items-center divide-x divide-gray-600">
                        <span class="flex items-center justify-center">
                            <span class="text-black group-hover:text-black transition duration-200">Schedule a demo &rarr;</span>
                        </span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-16 lg:pt-56 pb-4'>
            <CardComponent />
        </div>
        <div className="flex flex-col items-center justify-center gap-x-4 gap-y-3 py-8 text-center text-sm text-foreground xl:flex-row">
          <span className="opacity-50 flex">© 2024&nbsp;
            <div className="position:relative;white-space:pre-wrap;word-wrap:break-word">
              <span>0rbit.</span>
            </div>
          </span>
          <a target="_self" className="opacity-50 transition duration-200 hover:opacity-100" href="/privacy">All Rights Reserved</a>
          <a target="_self" className="opacity-50 transition duration-200 hover:opacity-100" href="/privacy">Privacy policy</a>
          <a target="_self" class="opacity-50 transition duration-200 hover:opacity-100" href="/terms">Terms of service</a>
        </div>
      </main>
    </div>
  );
};

export default Footer;
