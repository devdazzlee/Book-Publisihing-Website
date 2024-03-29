import React from 'react'
import './Text_Background.css'
import { Link } from 'react-router-dom'
const Text_Background2 = () => {
  return (
<div   className=' bg-cover-image2  flex flex-col  my-12' >
<h3   className='text-2xl my-2 md:ml-4 ml-0 md:px-0 px-2'   >Stop worrying about publishing books!</h3>
<h1 style={{"color" :"#141D29"}}  className='font-bold md:text-4xl text-2xl  text-start my-6 md:ml-4 ml-0 md:px-0 px-2' >Explore Endless Possibilities To <br />Publish A Book!</h1>
<p  className='text-sm md:text-base my-2 md:my-4 my-2 md:my-16 font-medium md:ml-4 ml-2 w-full md:w-8/12 w-auto ' >
Join our online book publishing services to become a published author. <br /> Share your project details now!


</p>
<div className='flex  md:w-auto w-full  md:flex-row my-4 md:ml-4 ml-0' >
<Link to={'/Contact'} >
        
        <button className='hover-bt-1 form-button-1 bg-cyan-400 text-white font-bold py-2 px-6 rounded-full mb-2 md:mb-0 md:mr-4'>
          Publish My Book
        </button>
        
        </Link>
        <Link to={'/Contact'} >
        <button className='hover-bt-2 form-button-1 text-white font-bold py-2 px-6 rounded-full'>
          Talk to Us!
        </button>
        
        
        </Link>
      </div>

</div>

  )
}

export default Text_Background2