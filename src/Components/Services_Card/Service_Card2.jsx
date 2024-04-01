import React from 'react'
import Service_Card from './Service_Card'
import './Services_Card.css'
import img1 from '../../Images/bookMarketing1.png'
import img2 from '../../Images/bookMarketing2.png'
import img3 from '../../Images/bookMarketing3.png'
import img4 from '../../Images/bookMarketing4.png'
import img5 from '../../Images/bookMarketing5.png'
import img6 from '../../Images/bookMarketing6.png'

const Services_Card2 = ({ titleText, subtitleText, paragraph }) => {
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
heading={"Research And Analysis"}
paragraph={"The first step in our process is to research and analyze your target audience, competition, and market trends to identify the best strategies to promote your book."}

/>
<Service_Card     img={img2}  
heading={"Planning & Strategy"}
paragraph={"Based on the research and analysis, a comprehensive marketing plan is developed that includes tactics and timelines for promoting your book."}

/>
<Service_Card     img={img3}  
heading={"Developmental Editing"}
paragraph={"Our book marketing agency uses a variety of tactics to promote the book, including social media marketing, email marketing, and advertising. We also work with the author to secure media coverage and reviews."}

/>
<Service_Card     img={img4}  
heading={"Author Platform Building"}
paragraph={"Our book promoters & marketers help authors build their online presence through the creation of a website and social media accounts. They also guide how to engage with readers and build a community."}

/>
<Service_Card     img={img5}  
heading={"Sales And Distribution"}
paragraph={"TheReadsy Publishers works with authors to identify the best channels for selling the book and getting it into the hands of readers. This includes online retailers, bookstores, and libraries."}

/>
<Service_Card     img={img6}  
heading={"Measurement And Optimization"}
paragraph={"The final step in our process is to measure the results of the marketing efforts and make adjustments as needed to optimize performance. We provide regular reports, detailing the success of our marketing campaign."}

/>

</div>



    </div>
  )
}

export default Services_Card2