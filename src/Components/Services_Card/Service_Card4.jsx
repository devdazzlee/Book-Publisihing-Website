import React from 'react'
import Service_Card from './Service_Card'
import './Services_Card.css'
import img1 from '../../Images/BookCover1.png'
import img2 from '../../Images/BookCover2.png'
import img3 from '../../Images/BookCover3.png'
import img4 from '../../Images/BookCover4.png'
import img5 from '../../Images/BookCover5.png'
import img6 from '../../Images/BookCover6.png'


const Services_Card4 = ({ titleText, subtitleText, paragraph }) => {
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
heading={"Typography"}
paragraph={"We select the right typeface, font size, and layout to create a striking visual impact on the readers."}

/>
<Service_Card     img={img2}  
heading={"Illustrated"}
paragraph={"Our designers create custom artwork for children’s book cover design to create an artistic representation of the book's theme or story."}

/>
<Service_Card     img={img3}  
heading={"Minimalistic"}
paragraph={"Our minimalistic book cover design depicts a simplistic approach with clean lines, minimal design elements, and a limited color palette to create a modern and stylish look."}

/>

<Service_Card     img={img4}  
heading={"Hand-Drawn"}
paragraph={"Here, we create a more organic and authentic feel, making it ideal for fantasy book cover designs with a personal touch or whimsical themes."}

/>
<Service_Card     img={img5}  
heading={"Photography"}
paragraph={"Our designers select and edit high-quality images to fit the book's theme or genre, resulting in a striking visual representation of the book."}

/>
<Service_Card     img={img6}  
heading={"Use Of Collage"}
paragraph={"We create custom collages or use stock images and manipulate them to create a cohesive and compelling design."}

/>
</div>




    </div>
  )
}

export default Services_Card4