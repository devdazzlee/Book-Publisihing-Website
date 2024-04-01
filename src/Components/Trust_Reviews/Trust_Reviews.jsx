import React from 'react'
import logo1 from '../../Images/reviews-io-logo1.png'
import logo2 from '../../Images/reviewlogo2.png'
import logo3 from '../../Images/reviewlogo3.png'
import logo4 from '../../Images/reviewlogo4.png'
import logo5 from '../../Images/reviewlogo5.png'
import logo6 from '../../Images/reviewlogo6.png'





const Trust_Reviews = () => {
  return (
    <div   className='text-center m-auto my-12 bg-white-100 '  >
        <h1  className='md:text-5xl text-2xl font-medium	  text-cyan-400' >Trust & Reviews</h1>
        <div   className='flex justify-center m-auto my-6 flex-wrap ' >
            <div  className='md:w-auto w-full md:block flex justify-center'  >
            <img    className='md:mr-12 mr-0   md:my-0  my-4  md:w-auto' src={logo1} alt="" />
            </div>
            <div  className='md:w-auto w-full flex justify-center'  >
            <img   className='md:mr-12 mr-0   md:my-0  my-4  md:w-auto' src={logo2}  alt="" />
            </div>
            <div  className='md:w-auto w-full flex justify-center'  >
            <img   className='md:mr-12 mr-0   md:my-0  my-4  md:w-auto' src={logo3} alt="" />
            </div>
            <div  className='md:w-auto w-full flex justify-center'  >
            <img   className='md:mr-12 mr-0   md:my-0  my-4  md:w-auto' src={logo4} alt="" />\
            </div>
            <div  className='md:w-auto w-full flex justify-center'  >
            <img   className='md:mr-12 mr-0   md:my-0  my-4  md:w-auto' src={logo5}  alt="" />
            </div>
            <div  className='md:w-auto w-full flex justify-center'  >

            <img   className='md:mr-12 mr-0   md:my-0  my-4  md:w-auto' src={logo6}  alt="" />


            </div>
            
        </div>
        
        </div>
  )
}

export default Trust_Reviews