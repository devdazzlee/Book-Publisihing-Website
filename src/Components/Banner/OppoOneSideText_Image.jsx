import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../Images/cta-main-img2.png'

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

<Link to={'/Contact'} >
<button  type="button" class="hover-bt-2 text-white bg-cyan-400	  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">{buttonText}</button>
</Link>
<Link to={'/Contact'} >
<button type="button" class="hover-bt-1 text-white bg-cyan-400	  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "> {buttonText2}</button>
</Link>


      </div>
      <div className='banner-section-3'>
        <img src={img1} alt="Professional Editing Services - TheReadsy - TheReadsy " />
      </div>
      
    </div>
  );
};

export default OppoOneSideText_Image;
