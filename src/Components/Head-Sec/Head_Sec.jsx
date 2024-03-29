import React from 'react';
import './Head.css';
import { Link } from 'react-router-dom';

const Head_Sec = () => {
  return (
    <div className='py-8 md:py-16 flex flex-col items-center text-center' style={{ background: '#EFEFF1' }}>
      <h1 className='text-3xl md:text-5xl font-bold my-2'>
        <span className='text-cyan-400'>Explore Endless Possibilities </span>
        <span className='text-black'>To Publish A Book!</span>
      </h1>
      <p className='my-2 md:my-4  font-bold'>Join our online book publishing services to become a published author. Share your project details now!</p>
      <p className='my-2 md:mb-4 font-bold'>+1 737-222-7373</p>
      <div className='flex flex-col md:flex-row'>
      <Link to={'/Contact'} >
        
        <button className='hover-bt-1 form-button-1 bg-cyan-400 text-white font-bold py-2 px-6 rounded-full mb-2 md:mb-0 md:mr-4'>
          Publish My Book
        </button>
        
        </Link>
        <Link to={'/Contact'} >
        
        <button className='hover-bt-2 form-button-1 text-white font-bold py-2 px-6 rounded-full'>
          Talk to Us!
        </button>
        
        </Link>
      </div>
    </div>
  );
};

export default Head_Sec;
