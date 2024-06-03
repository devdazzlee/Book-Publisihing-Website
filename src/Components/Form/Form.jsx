import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form2.css'
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    textarea: '',
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
      const response = await axios.post('https://the-readsy-ten.vercel.app/api/messages', formData);
      console.log('API response:', response.data);
     alert('Form submitted successfully!')
      setFormData({
        name: '',
        email: '',
        textarea: '',
        number: ''
      }); // Reset form fields
  
    } catch (error) {
      console.error('Error sending data:', error);
      alert('Error sending message')
    }
  };

  return (
    <div className='form-shadow'>
      <h1 style={{ "color": "#0A2840" }} className='text-2xl font-medium text-center'>Start Your Publishing <br />Journey!</h1>
    
      <div className='flex flex-col'>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className='my-2 py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none'
          placeholder="Full Name"
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className='my-2 py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none'
          placeholder="Email Address"
        />
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          className='my-2 py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none'
          placeholder="Phone Number"
        />
        <textarea
          id="textarea"
          name="textarea"
          value={formData.textarea}
          onChange={handleChange}
          rows="4"
          className='my-2 block p-2.5 w-full text-sm border border-gray-400 bg-gray-50 rounded-lg border border-gray-300'
          placeholder="Write your thoughts here..."
        ></textarea>

        <button
          onClick={handleSubmit}
          className='form-button-full w-72 bg-cyan-400 text-white font-bold py-2 px-4 rounded-full'
        >
          CONTACT WITH US
        </button>
        <p  className='my-2 py-3 font-semibold  block xl:w-72 md: text-start text-sm ' >
By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message & data rates may apply. You can reply STOP to opt-out of further messaging.



</p>
        <ToastContainer />

      </div>
    </div>
  );
};

export default Form;
