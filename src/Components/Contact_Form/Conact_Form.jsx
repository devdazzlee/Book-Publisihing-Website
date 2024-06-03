import React, { useState } from 'react';
import './Form.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Conact_Form = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://the-readsy-ten.vercel.app/api/messages', formData);
      console.log('API response:', response.data);
     alert('Message sent successfully');
      setFormData({
        name: '',
        email: '',
        textarea: '',
        number: ''
      }); // Reset form fields
    } catch (error) {
      console.error('Error sending data:', error);
      alert('Error sending message');
    }
  };

  return (
    <section className="bg-white">
      <div className="bx-shadow-form py-8 my-12 lg:py-16 px-4 mx-auto max-w-screen-lg">
        <h2 className="mb-4 md:text-5xl text-3xl tracking-tight font-extrabold text-center text-gray-900">Fill Out The Form Below We Will Contact You Promptly</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
        <form onSubmit={handleSubmit} className="space-y-8 w-8/12 m-auto">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
            <input
              type="text"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="textarea" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
            <textarea
              id="textarea"
              name="textarea"
              value={formData.textarea}
              onChange={handleChange}
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className='text-center'>
            <button
              type="submit"
              className="py-3 px-12 text-sm font-medium text-center text-white rounded-lg bg-cyan-400 sm:w-fit "
            >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Conact_Form;
