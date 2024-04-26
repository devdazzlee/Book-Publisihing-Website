import React from 'react'
import './Services_Card.css'
const Service_Card = ({img , heading,  paragraph}) => {
  return (
    <div   className='service-card m-6 flex flex-col justify-center w-96		service_card	px-4	py-8	text-center'  >
<img     className='w-1/4 text-center m-auto' src={img} alt="Author Support Services by Thereadsy"/>
<h1 className='font-medium my-2'  >{heading}</h1>
<p>{paragraph}</p>


    </div>
  )
}

export default Service_Card