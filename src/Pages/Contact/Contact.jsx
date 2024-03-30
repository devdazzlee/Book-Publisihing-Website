import React from 'react'
import MegaMenu from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Second_Sec from '../../Components/second_sec/Second_Sec'
import Conact_Form from '../../Components/Contact_Form/Conact_Form'

const Contact = () => {
  return (
<>
<div   style={{"backgroundColor" :"#141D29"}}>

<MegaMenu/>
<Second_Sec/>
</div>
<Conact_Form/>
<div>
<h2 class="mb-4 text-cyan-400 md:text-5xl text-3xl tracking-tight font-extrabold text-center text-gray-900 ">Your Publishing Goals Will All Be <br /> Realized Here!</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">Contact us and have yourself a best seller book written now.</p>
</div>

<Footer/>
</>
  )
}

export default Contact