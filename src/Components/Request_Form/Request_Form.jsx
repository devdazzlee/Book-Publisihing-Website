import React from 'react'
import './Request_Form.css'



const Request_Form = () => {
  return (
    <div  className='quote-bg flex flex-col items-center' >
<h1  style={{"color":"#141D29"}} className='text-4xl font-bold my-6' >Request A Free Quote </h1>
<div className='flex w-3/5 wrap-flex 	 justify-center'>
<input type="text" id="input-label" class="md:mr-3 mr-0 my-2 py-6 px-4 block w-full border  border-gray-600  text-md text-black  " placeholder="Name"/>
<input type="text" id="input-label" class="md:mr-3 mr-0 my-2 py-6 px-4 block w-full border  border-gray-600  text-md text-black  " placeholder="Email"/>
<input type="text" id="input-label" class="md:mr-3 mr-0 my-2 py-6 px-4 block w-full border  border-gray-600  text-md text-black  " placeholder="Phone"/>

</div>
<button className="btn-responsive  my-4 form-button-1 md:w-1/5  bg-cyan-400 text-white font-bold py-3 px-4 rounded-full">
            Submit
          </button>


<div     className=' wrap-flex w-4/6 flex   justify-evenly items-center my-12	' >
<div>
    <h1 className='text-4xl font-bold my-4'>Email Us</h1>
</div>
<div className='text-center'>
    <h1 className='md:text-2xl  text-xl md:my-0 my-2   font-bold' >For project inquiries only:</h1>
    <h1><i class="fa fa-envelope mt-4" aria-hidden="true"></i>contact@thereadsy.com.com</h1>
</div>

<div className='text-center'>
<h1 className='md:text-2xl  text-xl md:my-0 my-2   font-bold' > For other inquiries only:</h1>
    <h1><i class="fa fa-phone mt-4" aria-hidden="true"></i> +1 737-222-7373</h1>
</div>


</div>



    </div>
  )
}

export default Request_Form