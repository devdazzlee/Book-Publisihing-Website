import React, { useState, useEffect } from 'react';
import '../Banner/Banner.css';
import './Form2.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Form2 = () => {
  const [headingColor, setHeadingColor] = useState("#000000"); // Initial heading color is black
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    textarea: '',
    number: ''
  });

  const [isChecked, setIsChecked] = useState({
    consent1: false,
    consent2: false
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Toggle between black and blue
      setHeadingColor(prevColor => prevColor === "#000000" ? "#22D3EE" : "#000000");
    }, 1000);

    // Clean up interval
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setIsChecked(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleSubmit = async () => {
    if (!isChecked.consent1 || !isChecked.consent2) {
      toast.error('Please provide consent by checking both boxes before submitting.');
      return;
    }

    try {
      const response = await axios.post('https://the-readsy-ten.vercel.app/api/messages', formData);
      console.log('API response:', response.data);
      toast.success('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        textarea: '',
        number: ''
      }); // Reset form fields
      setIsChecked({
        consent1: false,
        consent2: false
      }); // Reset checkboxes
    } catch (error) {
      console.error('Error sending data:', error);
      toast.error('Error sending message');
    }
  };

  return (
    <>
      <ToastContainer />
      <div className='form-shadow form2-res rounded-2xl md:mt-0'>
        <h1 style={{ color: headingColor, fontFamily: "sans-serif" }} className='md:text-3xl text-xl font-bold text-center'>
          Grab Your Exclusive Discount Today!
        </h1>
        <p style={{ fontFamily: "sans-serif" }} className='text-center font-bold md:text-md text-sm'>
          Attention, fellow book enthusiasts! <br />
          Avail of our amazing discount before time runs out
        </p>
        <div className='flex flex-col'>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="my-2 py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Full Name"
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="my-2 py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Email Address"
          />
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="my-2 py-3 px-4 block w-full border border-gray-300 bg-gray-50 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Phone Number"
          />
          <textarea
            name="textarea"
            value={formData.textarea}
            onChange={handleChange}
            rows="4"
            className="my-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Write your thoughts here..."
          ></textarea>

          <div className='flex items-start mb-4'>
            <input
              type="checkbox"
              id="consent1"
              name="consent1"
              checked={isChecked.consent1}
              onChange={handleCheckboxChange}
              className='block mt-1 mr-2'
            />
            <label htmlFor="consent1" className='font-semibold block text-start text-sm'>
              By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message & data rates may apply. You can reply STOP to opt-out of further messaging.
            </label>
          </div>
          <div className='flex items-start mb-4'>
            <input
              type="checkbox"
              id="consent2"
              name="consent2"
              checked={isChecked.consent2}
              onChange={handleCheckboxChange}
              className='block mt-1 mr-2'
            />
            <label htmlFor="consent2" className='font-semibold block text-start text-sm'>
              I consent to receive SMS/MMS messages from The Readsy.
            </label>
          </div>

          <button
            onClick={handleSubmit}
            className="form-button-full w-full bg-cyan-400 text-white font-bold py-2 px-4 rounded-full"
          >
            CONTACT WITH US
          </button>
        </div>
      </div>
    </>
  )
}

export default Form2;
