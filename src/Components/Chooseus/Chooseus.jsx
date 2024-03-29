import React from 'react';
import img1 from '../../Images/Banner-1.png';

const Chooseus = () => {
  return (
    <div className='flex flex-col items-center my-8 md:my-24 px-4'>
      <h1 className='text-2xl md:text-4xl font-bold my-2 text-center'>
        <span className='text-cyan-400'>Why Choose The Readsy? </span>
      </h1>
      <p className='text-sm md:text-base my-2 md:my-4 my-8 md:my-16 font-medium text-center w-full md:w-8/12'>
        We are well aware of unique content creation requirements for each client. With a team equipped with a wide array of expertise, experiences and knowledge, we are always an author’s top preference. Thereadsy will simplify the Writing, Editing, Publication and Marketing needs for you. Our collaboration would be transparent and hassle-free, reducing all the intricacies from your end. We only deliver content that is remarkable, genuine and original.
      </p>
      <img src={img1} alt="Banner" className="max-w-full h-auto" />
    </div>
  );
};

export default Chooseus;
