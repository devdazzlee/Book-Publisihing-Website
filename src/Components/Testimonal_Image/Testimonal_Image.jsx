import React from 'react';
import img1 from '../../Images/icon01.webp';
import img2 from '../../Images/icon02.webp';
import img3 from '../../Images/icon03.webp';
import img4 from '../../Images/icon04.webp';

const TestimonialImage = () => {
  return (
    <div className='flex justify-center py-12' style={{background: "#141D29"}}>
      <div className='flex flex-wrap justify-center items-center w-full max-w-screen-lg'>
        <div className='w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0'>
          <div className='flex flex-col items-center'>
            <img src={img1} alt="" />
            <h4 className='text-white'>100% Customer Satisfaction</h4>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0'>
          <div className='flex flex-col items-center'>
            <img src={img2} alt="" />
            <h4 className='text-white'>2500+ Customers</h4>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0'>
          <div className='flex flex-col items-center'>
            <img src={img3} alt="" />
            <h4 className='text-white'>Flexible Plans</h4>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0'>
          <div className='flex flex-col items-center'>
            <img src={img4} alt="" />
            <h4 className='text-white'>All Royalties Belong To You</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialImage;
