import React from 'react';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';

const Banner = ({ title,title2, description, buttonText1, buttonText2 }) => {
  return (
    <div style={{"padding" : "120px 0px"}}  className='banner-bg'>
      <div className='banner-section-1'>
        <h1 className='md:text-5xl text-2xl font-bold '>
          {title}
          <br />
          <span style={{ color: '#0A2840' }}>{title2} </span>
        </h1>
        <p className='my-4 md:mr-12 mr-0 '>{description}</p>
        <Link to={'/Contact'} >
        <button type="button" className="text-white bg-cyan-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">{buttonText1}</button>
        </Link>
        <Link to={'/Contact'} >
        <button type="button" className="text-white bg-cyan-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">{buttonText2}</button>
        </Link>
      </div>
      <div className='banner-section-2'>
        <Form />
      </div>
    </div>
  );
};

export default Banner;
