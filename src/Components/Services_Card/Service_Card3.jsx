import React from 'react'
import Service_Card from './Service_Card'
import './Services_Card.css'
import img1 from '../../Images/Bookpublishing1.png'
import img2 from '../../Images/Bookpublishing2.png'
import img3 from '../../Images/Bookpublishing3.png'
import img4 from '../../Images/Bookpublishing4.png'
import img5 from '../../Images/Bookpublishing5.png'
import img6 from '../../Images/Bookpublishing6.png'
const Services_Card3 = ({ titleText, subtitleText, paragraph }) => {
  return (
    <div   className='text-center py-12' >

<h1 style={{"color":"#0A2840"}}   className='md:text-5xl text-2xl font-medium	  text-cyan-400'   >
{titleText}<span className='mt-12' style={{"color":"#22D3EE"}}>  <br /> {subtitleText}</span>
</h1>
<p  className='my-4 text-center w-3/6	 m-auto' >
{paragraph}
</p>

<div  className='flex flex-wrap justify-center' >
<Service_Card     img={img1}  
heading={"Editing"}
paragraph={"TheReadsy Publishers lets you choose from four editing services tailored to your manuscript and preferences: developmental, substantive, copyediting, and proofreading."}

/>
<Service_Card     img={img2}  
heading={"Formatting"}
paragraph={"We offer both e-book and print book formatting services for all genres at adjustable rates. For more information, please visit our website."}

/>
<Service_Card     img={img3}  
heading={"Submission Review"}
paragraph={"Ensure that your work is in its prime condition before submitting it to an editor or agent. We can assist you in refining the query letter, first three chapters, and synopsis."}

/>

<Service_Card     img={img4}  
heading={"Audiobook Production"}
paragraph={"If you're seeking a greater return on investment, audiobooks may be the solution. Penguin Publishers can aid you in navigating technical and talent-related challenges."}

/>
<Service_Card     img={img5}  
heading={"Uploading"}
paragraph={"We're eager to assist you in uploading your e-book or print book to the platform that best suits your distribution requirements. Contact our amazon self-publishing services now."}

/>
<Service_Card     img={img6}  
heading={"Cover Design & Illustration"}
paragraph={"Professional book covers can significantly impact sales. At Penguin Publishers, our graphic designers collaborate with you to produce a polished cover that aligns with your vision."}

/>
</div>




    </div>
  )
}

export default Services_Card3