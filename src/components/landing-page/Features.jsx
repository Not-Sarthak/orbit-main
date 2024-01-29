import React from 'react';

const Features = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className="grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {/* Section 1 */}
        <div className="relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md md:col-span-2">
          <div className="flex h-60 items-center justify-center">
            Feature 1
          </div>
        </div>

        {/* Section 2 */}
        <div className="relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="flex h-60 items-center justify-center">
            Feature 2
          </div>
        </div>

        {/* Section 3 */}
        <div className="relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="flex h-60 items-center justify-center">
            Feature 3
          </div>
        </div>

        {/* Section 4 */}
        <div className="relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="flex h-60 items-center justify-center">
            Feature 4
          </div>
        </div>

        {/* Section 5 */}
        <div className="relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="flex h-60 items-center justify-center">
            Feature 5
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
