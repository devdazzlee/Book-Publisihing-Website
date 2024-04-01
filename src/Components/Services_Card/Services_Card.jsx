import React from 'react'
import Service_Card from './Service_Card'
import img1 from '../../Images/BookEditing1.png'
import img2 from '../../Images/BookEditing2.png'
import img3 from '../../Images/BookEditing3.png'
import img4 from '../../Images/BookEditing4.png'
import img5 from '../../Images/bookMarketing5.png'
import img6 from '../../Images/bookMarketing6.png'
const Services_Card = ({ titleText, subtitleText, paragraph }) => {
  return (
    <div   className='text-center py-12' >

<h1 style={{"color":"#0A2840"}}   className='md:text-5xl text-2xl font-medium	  text-cyan-400 leading-8'   >
{titleText}<span className='mt-12' style={{"color":"#22D3EE"}}>  <br /> {subtitleText}</span>
</h1>
<p  className='my-4 text-center w-3/6	 m-auto' >
{paragraph}
</p>

<div  className='flex flex-wrap justify-center' >
<Service_Card     img={img1}  
heading={"Manuscript Critique"}
paragraph={"Our editors will provide you with an honest and thorough critique, highlighting both the strengths and weaknesses of your manuscript."}

/>
<Service_Card     img={img2}  
heading={"Editorial Assessment"}
paragraph={"Penguin's editorial assessment is a comprehensive evaluation of your manuscript, providing you with detailed feedback on your work."}

/>
<Service_Card     img={img3}  
heading={"Developmental Editing"}
paragraph={"Our book editors offer a comprehensive editing process that focuses on improving the overall structure, plot, pacing, character development, and style of your manuscript."}

/>
<Service_Card     img={img4}  
heading={"Line & Copy Editing"}
paragraph={"Penguin's line editing service is designed to focus on the finer details of your manuscript. Our affordable book editing services also include copy editing to help authors fine-tune their manuscript and ensure that it is free of errors and inconsistencies."}

/>
<Service_Card     img={img5}  
heading={"Proofreading"}
paragraph={"The book editors will check the manuscript for typographical errors, inconsistencies, and other mistakes."}

/>
<Service_Card     img={img6}  
heading={"Agent Query Edit"}
paragraph={"We can help you put together a polished and professional query letter that will grab the attention of literary agents."}

/>

</div>


    </div>
  )
}

export default Services_Card