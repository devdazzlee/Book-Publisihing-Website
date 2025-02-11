import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import img1 from  '../../Images/Modal.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%', // Adjust width for mobile devices
  maxWidth: 700, // Maximum width for larger screens
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
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

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setIsChecked(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!isChecked.consent1 || !isChecked.consent2) {
      alert('Please provide consent by checking both boxes before submitting.');
      return;
    }

    try {
      const response = await axios.post('https://the-readsy-ten.vercel.app/api/messages', formData);
      alert('Form submitted successfully!');
      handleClose();
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
      handleClose();
      console.error('Error sending data:', error);
      alert('Error sending message');
    }
  };
  useEffect(() => {
    // Set showModal to true when component mounts (similar to componentDidMount)
    setOpen(true);
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
  style={{




  }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}  
        

        
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'text.primary',
            }}
          >
            <ClearIcon />
          </IconButton>
         <div className='flex'  >
         <div className='md:w-1/2	 md:block  hidden'  >
            <img   className='md:block  hidden' src={img1} alt="The Readsy Contact Information" />
          </div>
          <div className='md:w-1/2 w-full	' >

          <div className='flex flex-col'>

<input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  className='my-2 py-3 px-4 block md:w-full  w-full border border-gray-400 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none'
  placeholder="Full Name"
/>
<input
  type="text"
  name="email"
  value={formData.email}
  onChange={handleChange}
  className='my-2 py-3 px-4 block md:w-full  w-full border border-gray-400 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none'
  placeholder="Email Address"
/>
<input
  type="text"
  name="number"
  value={formData.number}
  onChange={handleChange}
  className='my-2 py-3 px-4 block md:w-full  w-full border border-gray-400 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none'
  placeholder="Phone Number"
/>
<textarea
  id="textarea"
  name="textarea"
  value={formData.textarea}
  onChange={handleChange}
  rows="4"
  className='my-2 block p-2.5 md:w-full  w-full text-sm border border-gray-400 bg-gray-50 rounded-lg border border-gray-300'
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
                    I consent to receive SMS/MMS messages from The Readsy
                  </label>
                </div>
<button
  onClick={handleSubmit}
  className='form-button-full md:w-full w-full bg-cyan-400 text-white font-bold py-2 px-4 rounded-full'
>
  CONTACT WITH US
</button>

<ToastContainer />

</div>

          </div>
         </div>
        </Box>
      </Modal>
    </div>
  );
}
