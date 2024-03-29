import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../Banner/Banner.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';

const Form = () => {
  return (
 <>
<div   className='form-shadow'  >
<h1 style={{"color":"#0A2840"}} className='text-2xl font-medium text-center' >Start Your Publishing <br />Journey!</h1>
<div className='flex flex-col' >

<input type="text" id="input-label" class="	 my-2 py-3 px-4 block w-full border border-gray-400  rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none" placeholder="Full Name"/>
<input type="text" id="input-label" class="	  my-2 py-3 px-4 block w-full border border-gray-400  rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none" placeholder="Email Adress"/>
<input type="text" id="input-label" class="	 my-2 py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none" placeholder="Phone Number"/>
<textarea id="message" rows="4" class="	  my-2 block p-2.5 w-full text-sm border border-gray-400  bg-gray-50 rounded-lg border border-gray-300 " placeholder="Write your thoughts here..."></textarea>

<button class="form-button-full w-72 bg-cyan-400  text-white font-bold py-2 px-4 rounded-full">
CONTACT WITH US
</button>

</div>

</div>
 </>
  )
}

export default Form