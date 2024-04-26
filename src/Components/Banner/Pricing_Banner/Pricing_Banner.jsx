import React from 'react'
import './Pricing_Banner.css'
import logos from '../../../Images/image_2024_03_27T21_01_16_114Z copy.png'
import { Link } from 'react-router-dom'
const Pricing_Banner = () => {
  return (
    <div style={{"padding" : "130px 0px"}} className='pricing-banner'   >

<h1  className='md:text-5xl text-2xl text-center   text-white font-bold  mb-4'   >The World Awaits Your Masterpiece!</h1>
<p   className='md:w-auto   w-80  text-white text-md text-center my-6'  >Do you wish to see your published work ranked among the best sellers? <br /> Want to earn the stellar reputation of a published author? Dream of having a well-written book to your name?</p>
<div className='flex my-4' >
<Link to={'/Contact'} >
        
<button className='hover-bt-5  text-white font-bold py-2 px-6 rounded-full mb-2 md:mb-0  '>
          Publish My Book
        </button>
        
        </Link>
        <Link to={'/Contact'} >
        
        <button className='hover-bt-6 form-button-1 text-white font-bold py-2 px-6 rounded-full'>
          Talk to Us!
        </button>
        
        </Link>
</div>
<div className='top-compe md:my-12 my-4' >
<img src={logos}alt="Professional Editing Services - The Readsy" />

</div>

    </div>
  )
}

export default Pricing_Banner