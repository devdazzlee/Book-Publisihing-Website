import React from 'react'
import './Request_Form.css'
import Quote_Free from '../Quote_Free/Quote_Free'



const Request_Form = () => {
  return (
    <div  className='quote-bg flex flex-col items-center' >

<div className='w-full'>
<Quote_Free/>
</div>



<div     className=' wrap-flex w-4/6 flex   justify-evenly items-center my-12	' >
<div>
    <h1 className='md:text-4xl text-3xl font-bold my-4'>Email Us</h1>
</div>
<div className='text-center'>
    <h1 className='md:text-2xl  text-xl md:my-0 my-2   font-bold' >For project inquiries only:</h1>
    <h1><i class="fa fa-envelope mt-4" aria-hidden="true"></i>contact@thereadsy.com</h1>
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