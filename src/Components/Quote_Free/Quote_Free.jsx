import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quote_Free = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: ''
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      // Send formData to the API
      const response = await axios.post('https://the-readsy-ten.vercel.app/api/messages', formData);
      console.log('API response:', response.data);
      alert('Form submitted successfully!');
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        number: ''
      });
    } catch (error) {
      console.error('Error sending data:', error);
      // Show error toast notification
      alert('Error sending message');
    }
  };

  return (
    <>
      <div className='form-book-bg'>
        <div className='form-Book'>

          <h1 style={{ "color": "#141D29" }} className='md:text-4xl text-2xl font-bold my-6'>Request A Free Quote </h1>
          <div className='flex w-3/5 wrap-flex justify-center'>
            <input
              type="text"
              id="input-label"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="md:mr-3 mr-0 my-2 md:py-6 py-3 md:px-4 px-3 block w-full border border-gray-600 text-md text-black"
              placeholder="Name"
            />
            <input
              type="text"
              id="input-label"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="md:mr-3 mr-0 my-2 md:py-6 py-3 md:px-4 px-3 block w-full border border-gray-600 text-md text-black"
              placeholder="Email"
            />
            <input
              type="text"
              id="input-label"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="md:mr-3 mr-0 my-2 md:py-6 py-3 md:px-4 px-3 block w-full border border-gray-600 text-md text-black"
              placeholder="Phone"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="my-4 md:px-12 text-white bg-cyan-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Submit Now
          </button>
        </div>
      </div>

    </>
  )
}

export default Quote_Free;
