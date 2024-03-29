import React from 'react'
import MegaMenu from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Portfolio_Banner from '../../Components/Banner/Portfolio_Banner/Portfolio_Banner'
import Books_Sec from '../../Components/Books_Sec/Books_Sec'

const Inner_Portfolio = () => {
  return (
 <>
  <MegaMenu/>
 <Portfolio_Banner/>
 <div className='md:w-2/3 w-full flex m-auto justify-between flex-wrap my-12'>


 <img src="https://www.bookwritingexperts.com/_next/static/media/1.9ecfad9d.svg" alt="Image 1"/>
<img src="https://www.bookwritingexperts.com/_next/static/media/2.eae693db.svg" alt="Image 2"/>
<img src="https://www.bookwritingexperts.com/_next/static/media/3.5f249c27.svg" alt="Image 3"/>
<img src="https://www.bookwritingexperts.com/_next/static/media/4.c5f6f1c9.svg" alt="Image 4"/>

</div>
<div className='md:w-2/3 w-full flex m-auto justify-between flex-wrap my-12'>


<img src="https://www.bookwritingexperts.com/_next/static/media/1.5f94f3b1.svg" alt="Image 5"/>
<img src="https://www.bookwritingexperts.com/_next/static/media/2.b368edea.svg" alt="Image 6"/>
<img src="https://www.bookwritingexperts.com/_next/static/media/3.deac15f0.svg" alt="Image 7"/>
<img src="https://www.bookwritingexperts.com/_next/static/media/4.8d305651.svg" alt="Image 8"/>

</div>

<div className='md:w-2/3 w-full flex m-auto justify-between flex-wrap my-12'>


<img src="https://www.bookwritingexperts.com/_next/static/media/1.82595c48.svg" alt="Image 9"/>
<img src="https://www.bookwritingexperts.com/_next/static/media/2.4f4f9be5.svg" alt="Image 10"/>
<img src="https://www.bookwritingexperts.com/_next/static/media/3.141e33cc.svg" alt="Image 11"/>
<img src="https://www.bookwritingexperts.com/_next/static/media/4.d6aa78fc.svg" alt="Image 12"/>

</div>
<div className='md:w-2/3 w-full flex m-auto justify-between flex-wrap my-12'>


<img src="https://www.bookwritingexperts.com/_next/static/media/1.9ecfad9d.svg" alt="Image 9"/>
<img src="https://www.bookwritingexperts.com/_next/static/media/2.1628e089.svg" alt="Image 10"/>
<img src="https://www.bookwritingexperts.com/_next/static/media/3.38a43e56.svg" alt="Image 11"/>
<img src="https://www.bookwritingexperts.com/_next/static/media/4.14149188.svg" alt="Image 12"/>

</div>


  <Footer/>
 </>
  )
}

export default Inner_Portfolio;