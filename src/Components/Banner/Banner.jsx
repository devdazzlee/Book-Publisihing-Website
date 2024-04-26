import './Banner.css'
import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';


const Banner34 = () => {
  return (
<>
<div style={{"padding" : "120px 0px"}}  className='banner-bg '  >
<div   className='banner-section-1'  >
<h1  className='md:text-5xl text-2xl font-medium	  text-cyan-400'   >
Ready to turn your story  <span style={{"color":"#0A2840"}}>  <br /> into a  Masterpiece ?</span>
</h1>
<p  className='my-4 md:mr-12 mr-0' >
Welcome to our The Readsy, where we specialize in providing comprehensive ghostwriting, editing, and publishing services meticulously crafted to suit your unique requirements. Whether you're an aspiring author with a captivating story waiting to be told, a seasoned writer seeking refinement for your manuscript, or someone with a brilliant idea but unsure of where to begin, we're here to help you every step of the way.
</p>
<div className='' >
<Link to={'/Contact'} >
<button  type="button" class="hover-bt-1   border border-gray-600  text-white bg-cyan-400	  font-medium rounded-full text-sm px-5 py-2.5 text-center  mb-2  mr-12">Publish Your Work</button>
</Link>
<Link to={'/Contact'} >
<button type="button" class="hover-bt-2   border border-gray-600  text-white bg-cyan-400	  font-medium rounded-full text-sm px-5 py-2.5 text-center  mb-2  mr-12">Talk To An Expert</button>
</Link>
</div>

</div>
<div className='banner-section-2'  >

<Form/>

</div>

</div>
</>
  )
}

export default Banner34