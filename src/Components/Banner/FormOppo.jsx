import React, { useState } from 'react';
import axios from 'axios';
import './FormOppo.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img1 from '../../Images/contact-main-book.png';

const FormOppo = ({ imageUrl, heading, paragraphs, buttonText, buttonText2, heading2 }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://agreeable-apron-bass.cyclic.app/api/messages', formData);
      console.log('API response:', response.data);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        number: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form!');
    }
  };

  return (
    <>
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
          <div className='flex flex-wrap justify-between md:w-4/6 w-full md:my-12'>
            <input
              type="text"
              placeholder='Name'
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='com-form-inp text-white md:my-6 my-0 bg-transparent md:mr-0 mr-6'
            />
            <input
              type="text"
              placeholder='Email'
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='com-form-inp text-white md:my-6 my-0 bg-transparent'
            />
            <input
              type="text"
              placeholder='Phone Number'
              name="number"
              value={formData.number}
              onChange={handleChange}
              className='com-form-inp text-white md:my-6 my-0 bg-transparent'
            />
          </div>
          <div>
            <button
              type="button"
              onClick={handleSubmit}
              className="hover-bt-8 text-white bg-cyan-400 font-medium rounded-full text-sm px-2 py-2.5 text-center me-2 mb-2"
            >
              {buttonText}
            </button>
          </div>
        </div>
        <div className='banner-section-3'>
          <img src={img1} alt="" />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default FormOppo;
