import React from 'react';
import './Pricing_Card_Sec.css';
import { Link } from 'react-router-dom';

const Pricing_Card_Sec = ({ title, description, imageUrl, buttonText,style }) => {
  return (
    <div     className={`pricing-card ${style ?"visible md:invisible " :""} `}>
      <div  className='pricing-card1'>
        <h1 className='md:text-4xl text-2xl text-start  font-bold mb-4'>{title}</h1>
        <p className='md:text-md  text-sm text-start md:my-6 my-4 md:w-5/6 w-full	'>{description}</p>
        <Link to={'/Contact'} >

        <button className='bg-cyan-400 text-white  font-bold py-2 px-6 rounded-full mb-2 md:mb-0 md:mr-4'>
          {buttonText}
        </button>

        </Link>
      </div>
      <div className='pricing-card2 w-full' >
        <img  className='h-36 w-96'  src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Pricing_Card_Sec;
