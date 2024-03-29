import React from 'react';

const OppoOneSideText_Image = ({ imageUrl, heading, paragraphs, buttonText , buttonText2 }) => {
  return (
    <div className='banner-bg-img-text'>
        <div className='banner-section-1'>
        <h1 className='md:text-5xl text-2xl font-medium text-cyan-400'>
          {heading}
        </h1>
        {paragraphs.map((paragraph, index) => (
          <p className='my-4' key={index}>
            {paragraph}
          </p>
        ))}

<button  type="button" class="hover-bt-2 text-white bg-cyan-400	  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">{buttonText}</button>
<button type="button" class="hover-bt-1 text-white bg-cyan-400	  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "> {buttonText2}</button>


      </div>
      <div className='banner-section-3'>
        <img src={imageUrl} alt="" />
      </div>
      
    </div>
  );
};

export default OppoOneSideText_Image;
