import React from 'react';
import { Link } from 'react-router-dom';

const Books_Sec = ({ title, subTitle, buttonText, images }) => {
  return (
    <div className='flex flex-col'>

      <div className='flex justify-between md:w-2/3 w-full md:px-0 px-4 mb-12 m-auto'>
        <div>
          <h1 className='text-3xl font-medium'>
            {title} <br />
            <span className='font-bold text-cyan-400'>{subTitle}</span>
          </h1>
        </div>
        <div>
          <Link to={"/Inner-Gallery"} >
          <button type="submit" className="py-3 px-6 text-sm font-medium text-center text-white bg-cyan-400 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">
            {buttonText}
          </button>
          </Link>
        </div>
      </div>

      <div className='md:w-2/3 w-full flex m-auto justify-between flex-wrap my-12'>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Book ${index + 1}`} />
        ))}
      </div>

      <hr className='w-2/3 m-auto mb-4' />

    </div>
  );
}

export default Books_Sec;
