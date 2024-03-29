import React from 'react';

const OneSideText_Image = ({ imageUrl, heading, paragraphs, buttonText }) => {
  return (
    <div className='banner-bg-img-text'>
      <div className='banner-section-3'>
        <img src={imageUrl} alt="" />
      </div>
      <div className='banner-section-1'>
        <h1 className='md:text-5xl text-2xl font-medium text-cyan-400'>
          {heading}
        </h1>
        {paragraphs.map((paragraph, index) => (
          <p className='my-4' key={index}>
            {paragraph}
          </p>
        ))}
        <button
          type="button"
          className=" text-white bg-cyan-400 font-medium rounded-full text-sm px-24 py-3 text-center me-2 mb-2 "
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default OneSideText_Image;
