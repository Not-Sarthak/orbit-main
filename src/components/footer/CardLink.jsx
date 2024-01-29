import React from 'react';

const CardLink = ({ label, href }) => {
  return (
    <a
      target={href.startsWith('http') ? '_blank' : '_self'}
      rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
      className="card-link"
      href={href}
    >
      {label}
    </a>
  );
};

export default CardLink;
