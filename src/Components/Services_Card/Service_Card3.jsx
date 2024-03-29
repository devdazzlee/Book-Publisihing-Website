import React from 'react'
import Service_Card from './Service_Card'
import './Services_Card.css'
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
<Service_Card     img={"https://penguinpublishers.com/assets/images/book-distrib/self-publishing-icon1.png"}  
heading={"Editing"}
paragraph={"TheReadsy Publishers lets you choose from four editing services tailored to your manuscript and preferences: developmental, substantive, copyediting, and proofreading."}

/>
<Service_Card     img={"https://penguinpublishers.com/assets/images/book-distrib/self-publishing-icon2.png"}  
heading={"Formatting"}
paragraph={"We offer both e-book and print book formatting services for all genres at adjustable rates. For more information, please visit our website."}

/>
<Service_Card     img={"https://penguinpublishers.com/assets/images/book-distrib/self-publishing-icon3.png"}  
heading={"Submission Review"}
paragraph={"Ensure that your work is in its prime condition before submitting it to an editor or agent. We can assist you in refining the query letter, first three chapters, and synopsis."}

/>

<Service_Card     img={"https://penguinpublishers.com/assets/images/book-distrib/self-publishing-icon4.png"}  
heading={"Audiobook Production"}
paragraph={"If you're seeking a greater return on investment, audiobooks may be the solution. Penguin Publishers can aid you in navigating technical and talent-related challenges."}

/>
<Service_Card     img={"https://penguinpublishers.com/assets/images/book-distrib/self-publishing-icon5.png"}  
heading={"Uploading"}
paragraph={"We're eager to assist you in uploading your e-book or print book to the platform that best suits your distribution requirements. Contact our amazon self-publishing services now."}

/>
<Service_Card     img={"https://penguinpublishers.com/assets/images/book-distrib/self-publishing-icon6.png"}  
heading={"Cover Design & Illustration"}
paragraph={"Professional book covers can significantly impact sales. At Penguin Publishers, our graphic designers collaborate with you to produce a polished cover that aligns with your vision."}

/>
</div>




    </div>
  )
}

export default Services_Card3