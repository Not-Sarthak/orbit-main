import React from 'react';
import CardSection from './CardSection';

import logo from '../../assets/logo.svg';

const CardComponent = () => {
  return (
    <div className='flex flex-wrap items-start gap-10 lg:gap-48 p-20 py-10 rounded-2xl bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
        <img src={logo} alt="logo" className="flex justify-start" />
        <div className='flex flex-wrap flex-col md:flex-row lg:gap-40 gap-10 justify-center'>
            {/* <CardSection
                title="Product"
                links={[
                { label: 'Features', href: '/features' },
                { label: 'Developers', href: '/developers' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Get a demo', href: '/demo' },
                ]}
            /> */}
            <CardSection
                title="Resources"
                links={[
                { label: 'Docs', href: '' },
                { label: 'Help center', href: '' },
                // { label: 'Blog', href: '/blog' },
                ]}
            />
            <CardSection
                title="Follow us"
                links={[
                { label: 'Twitter', href: '' },
                // { label: 'LinkedIn', href: '' },
                { label: 'GitHub', href: '' },
                { label: 'Discord', href: '' },
                ]}
            />
        </div>
    </div>
  );
};

export default CardComponent;