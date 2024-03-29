import React from 'react'
import './Book_Cover.css'
import img1 from '../../Images/ahmed7.jpg'
import img2 from '../../Images/1.jpg'
import img3 from '../../Images/ahmed6.jpg'
import img4 from '../../Images/3cover.jpg'
import img5 from '../../Images/8cover.jpg'
import img6 from '../../Images/ahmed2.jpg'





const Book_Covers = () => {
  return (
<div     className='text-center my-16' > 
<h1  className='text-cyan-400 text-3xl md:text-5xl font-bold my-2 md:px-0 px-2'>Join our online book publishing <span style={{"color":"#141D29"}}>services</span> <br /> <span  style={{"color":"#141D29"}} >to become a published author.</span></h1>
<p style={{"color":"#0A2840"}}  className="my-2 md:my-4 w-4/5	m-auto "  >Unlock the full potential of your book's journey with our proficient publishing services. From printing to worldwide distribution and strategic marketing, our experts accompany writers through every phase, eliminating obstacles and maximizing reach.</p>


<div className='flex flex-col items-center' > 

<div  className='flex  flex-wrap  justify-center m-auto ' >
<img   style={{"height" :"35rem"}} className='book-cover-card md:w-96  mr-2 w-72 md:mb-2 mb-12 		'  src={img1} alt="" />
<img   style={{"height" :"35rem"}} className='book-cover-card md:w-96  mr-2 w-72 md:mb-2 mb-12 		'src={img2} alt="" />
<img  style={{"height" :"35rem"}} className='book-cover-card md:w-96  mr-2 w-72 md:mb-2 mb-12 		'  src={img3} alt="" />
</div>

<div   className='flex  flex-wrap justify-center'    >
<img    style={{"height" :"35rem"}} className='book-cover-card md:w-96  mr-2 w-72 md:mb-2 mb-12 		'  src={img4} alt="" />
<img    style={{"height" :"35rem"}} className='book-cover-card md:w-96  mr-2 w-72 md:mb-2 mb-12 		' src={img5} alt="" />
<img   style={{"height" :"35rem"}} className='book-cover-card md:w-96  mr-2 w-72 md:mb-2 mb-12 		' src={img6} alt="" />
</div>


</div>



</div>
  )
}

export default Book_Covers