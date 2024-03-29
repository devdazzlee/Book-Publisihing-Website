import React, { useState, useEffect } from 'react';
import '../Banner/Banner.css';
import './Form2.css'

const Form2 = () => {
  const [headingColor, setHeadingColor] = useState("#000000"); // Initial heading color is black

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Toggle between black and blue
      setHeadingColor(prevColor => prevColor === "#000000" ? "#22D3EE" : "#000000");
    }, 1000);

    // Clean up interval
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once

  return (
    <>
      <div className='form-shadow form2-res rounded-2xl md:mt-0 '>
        <h1 style={{ color: headingColor, fontFamily: "sans-serif" }} className=' md:text-3xl text-xl font-bold text-center'>Grab Your Exclusive Discount Today!</h1>
        <p style={{ fontFamily: "sans-serif" }} className='text-center font-bold md:text-md text-sm '>Attention, fellow book enthusiasts! <br />
          Avail of our amazing discount before time runs out</p>
        <div className='flex flex-col'>
          <input type="text" id="input-label" className="my-2 py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none" placeholder="Full Name" />
          <input type="text" id="input-label" className=" my-2 py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none" placeholder="Email Adress" />
          <input type="text" id="input-label" className=" my-2 py-3 px-4 block w-full border border-gray-300 bg-gray-50 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none" placeholder="Phone Number" />
          <textarea id="message" rows="4" className=" my-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder="Write your thoughts here..."></textarea>

          <button className="form-button-full w-full bg-cyan-400 text-white font-bold py-2 px-4 rounded-full">
            CONTACT WITH US
          </button>

        </div>
      </div>
    </>
  )
}

export default Form2;
