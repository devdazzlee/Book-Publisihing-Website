import React from 'react';
import './Second_Sec.css'; // Import your CSS file

const Second_Sec = () => {
  return (
    <div     style={{"padding" : "120px 0px"}}    className='second-sec-container'>
      <div className='flex justify-center flex-wrap pt-16 pb-12'>
        <div className='mr-12 md:px-0 px-4'>
          <h1 className='text-4xl font-bold text-cyan-400 md:text-5xl '>Have your story <br />read. Get published.</h1>
          <h1 className='md:mt-16 mt-5  text-xl text-white'>Let’s get in touch!</h1>
          <h2 className='mt-3 text-xl text-white'>Phone: <span className='text-cyan-400 underline'>+1 737-222-7373</span></h2>
          <h2 className='mt-3 text-xl text-white'>Email: <span className='text-cyan-400 underline'>contact@thereadsy.com</span></h2>
          <p className='md:mt-24 mt-12  text-xl text-white'>Unable to reach us? Fill out the form below</p>
        </div>
        <div>
          <iframe
          className='iframe-location'
            title="The Readsy Location"
            width="700"
            height="250"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.058014898662!2d-97.75614308500274!3d30.341678081791836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b58cf51e56ef%3A0x8e9688e85b55471!2sThe%20Readsy!5e0!3m2!1sen!2sca!4v1649037320689!5m2!1sen!2sca"
          ></iframe>
          <h1 className='mt-3 text-xl text-center text-white'>(Operations)</h1>
          <h1 className='mt-3 text-xl text-center text-white'>445 S.Figueroa Street, Los Angeles, CA 90071</h1>
        </div>
      </div>
    </div>
  );
}

export default Second_Sec;
