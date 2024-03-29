import React from 'react';
import './FormOppo.css'
import { TextField } from '@mui/material';
const FormOppo = ({ imageUrl, heading, paragraphs, buttonText , buttonText2, heading2 }) => {
  return (
    <div className='form-banner-bg'>
        <div className='banner-section-1'>
        <h1 className='md:text-5xl text-2xl font-medium text-white'>
          {heading}
          <br />
          {heading2}
        </h1>
        {paragraphs.map((paragraph, index) => (
          <p className='my-4 text-white' key={index}>
            {paragraph}
          </p>
        ))}
<div  className='flex justify-between w-4/6	 my-12' >
<input  type="text"  placeholder='Name' className='com-form-inp text-white  bg-transparent' />
<input  type="text"  placeholder='Contact Number' className='com-form-inp text-white  bg-transparent' />
</div>
<div>
<input  type="text"  placeholder='Contact Number' className='com-form-inp text-white  bg-transparent my-12 w-96 ' />

</div>


<button  type="button" class="hover-bt-8 text-white bg-cyan-400	w-full  font-medium rounded-full text-sm px-2 py-2.5 text-center me-2 mb-2 ">{buttonText}</button>


      </div>
      <div className='banner-section-3'>
        <img src={imageUrl} alt="" />
      </div>
      
    </div>
  );
};

export default FormOppo;
