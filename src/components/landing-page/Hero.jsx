import React from 'react';
import { VscLinkExternal } from "react-icons/vsc";
import { BsGithub } from "react-icons/bs";

const Hero = () => {
  return (
    <div>
      <main className="flex flex-col items-center justify-start p-10 pt-16">
        <div className="space-y-1 relative">
          <div className="flex justify-center">
            <a
              href="https://twitter.com/0xSarthak13"
              target="_blank"
              rel="noreferrer"
              className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-200 bg-opacity-80 px-7 py-2 transition-colors hover:bg-blue-300 hover:bg-opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 248 204"
                className="h-5 w-5 text-[#1d9bf0]"
              >
                <path
                  fill="currentColor"
                  d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
                ></path>
              </svg>
              <p className="text-sm font-semibold text-[#1d9bf0]">
                Introducing Orbit
              </p>
            </a>
          </div>
          <h1 className="z-10 lg:h-[180px] h-[100px] bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.05em] text-transparent drop-shadow-sm [text-wrap:balance] md:text-7xl">
            <div className="flex flex-col gap-3">
              <div>Building blocks for</div>
              <div>your Next project</div>
            </div>
          </h1>
          <p className="text-center text-gray-500 text-wrap:balance md:text-xl ">
            An opinionated collection of components, <br /> hooks, and utilities
            for your Next.js project.
          </p>
        </div>
        <div className='flex gap-4 pt-4'>
            <a 
                className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black" 
                href="" rel="noopener noreferrer">
                    <div className='flex items-center gap-4'>
                        <div>
                            Documentation 
                        </div>
                        <div>    
                            <VscLinkExternal />
                        </div>
                    </div>
            </a>
            <a 
                className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800" 
                href="https://github.com/Not-Sarthak" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                <BsGithub className='text-xl hidden sm:inline-block'/>
                <span className="hidden sm:inline-block pr-1">
                    Star on
                </span> 
                Github
            </a>
        </div>
      </main>
    </div>
  );
};

export default Hero;
