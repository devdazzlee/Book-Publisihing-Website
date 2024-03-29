import React from 'react'
import Form from '../Form/Form'
import Form2 from '../Form/Form2'
import './Text_From.css'
import { Link } from 'react-router-dom'

const Text_Form = () => {
  return (
    <div  className='text-form-responsive  my-24 md:flex  justify-center  w-full'  >
<div  className='lg:w-6/12 md:w-9/12	md:px-14' >
    <h1 className='text-2xl md:text-2xl lg:text-5xl font-bold my-4'  >Are You Struggling to give <br /> Words to your Ideas?</h1>
    <p   className='text-md  my-4'  >You may be a victim of the following nuisances</p>
<div className='flex flex-wrap text-white w-3/4 mb-4 justify-between' >
<ul>
<li className='mb-2 text-black' > <i style={{"color":"#22D3EE"}} class="fas fa-check font-bold mr-2"></i> Slow Productivity</li>
<li className='mb-2 text-black' > <i style={{"color":"#22D3EE"}} class="fas fa-check font-bold mr-2"></i> Lack of Resources</li>
<li className='mb-2 text-black' > <i style={{"color":"#22D3EE"}} class="fas fa-check font-bold mr-2"></i> Mismanaged Time Schedules</li>
<li className='mb-2 text-black' > <i style={{"color":"#22D3EE"}} class="fas fa-check font-bold mr-2"></i> Financial Constraints</li>
</ul>
<ul>
<li className='mb-2 text-black' > <i style={{"color":"#22D3EE"}} class="fas fa-check font-bold mr-2"></i> Demotivation</li>
<li className='mb-2 text-black' > <i style={{"color":"#22D3EE"}} class="fas fa-check font-bold mr-2"></i> Delayed Creativity</li>
<li className='mb-2 text-black' > <i style={{"color":"#22D3EE"}} class="fas fa-check font-bold mr-2"></i> Writing Process</li>
<li className='mb-2 text-black' > <i style={{"color":"#22D3EE"}} class="fas fa-check font-bold mr-2"></i> Continuous Revisions</li>
</ul>

</div>



<div className='flex  md:flex-row'>

<Link to={'/Contact'} >
        <button className='hover-bt-1 form-button-1 bg-cyan-400 text-white font-bold py-2 px-6 rounded-full mb-2 md:mb-0 md:mr-4 '>
          Publish My Book
        </button>   
        </Link>
        <Link to={'/Contact'} >
        
        <button className='hover-bt-2 form-button-1 text-white font-bold py-2 px-6 rounded-full'>
          Talk to Us!
        </button>
        
        </Link>
      </div>

</div>
<div className='lg:w-3/12 md:w-auto'  >


<Form2/>

</div>

    </div>
  )
}

export default Text_Form