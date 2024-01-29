import React from 'react';
import CardLink from './CardLink';

const CardSection = ({ title, links }) => {
  return (
    <div className="card-section text-gray-500">
      <div class="mb-3 flex items-center pt-1 font-semibold text-foreground text-lg">{title}</div>
      <ul className="list-none block py-1.5 text-sm font-medium text-foreground/50 transition duration-300 after:pointer-events-none after:absolute after:right-full after:top-1/2 after:mr-2.5 after:h-0.5 after:w-5 after:origin-right after:-translate-y-1/2 after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-transparent after:to-primary after:opacity-50 after:transition-all after:duration-300 hover:text-foreground/100 hover:after:scale-x-100 hover:after:opacity-100">
        {links.map((link, index) => (
          <li key={index} className='py-1'>
            <CardLink label={link.label} href={link.href} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardSection;
