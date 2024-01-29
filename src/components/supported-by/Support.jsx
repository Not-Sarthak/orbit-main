import React from 'react';
import Marquee from "react-fast-marquee";
import arweave from "../../assets/arweave-logo.png";
import star from "../../assets/star.svg";

const Support = () => {
  const repeatedText = "ORBIT x ARWEAVE";

  return (
    <div className="inset-0 -z-10 h-full w-full bg-black">
      <Marquee className="bg-radial-gradient text-white tracking-[3px]">
        {[...Array(5)].map((_, index) => (
          <React.Fragment key={index}>
            <span className="">{repeatedText}</span>
            <img src={star} alt="star" className="inline-block h-4 w-4 mx-20" />
          </React.Fragment>
        ))}
      </Marquee>
    </div>
  );
};

export default Support;
