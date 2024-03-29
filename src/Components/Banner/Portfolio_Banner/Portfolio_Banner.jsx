import React from 'react'
import './Portfolio_Banner.css'
import { Link } from 'react-router-dom'

const Portfolio_Banner = () => {
  return (
  <div  className='portfolio-banner text-center'  >
<h1  className='text-6xl mb-6 font-bold' >Our <br /> Publishing</h1>
<Link to={'/Contact'} >
<button type="submit" class=" py-3 px-12 text-sm font-medium text-center text-white rounded-lg bg-cyan-400 sm:w-fit hover:bg-primary-800 ">FREE AUTHOR CONSULTATION CALL</button>
</Link>
  </div>
  )
}

export default Portfolio_Banner