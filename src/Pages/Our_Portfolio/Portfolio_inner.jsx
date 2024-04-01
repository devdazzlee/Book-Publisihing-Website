import React from 'react'
import MegaMenu from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Portfolio_Banner from '../../Components/Banner/Portfolio_Banner/Portfolio_Banner'
import Books_Sec from '../../Components/Books_Sec/Books_Sec'
import book1 from '../../Images/BookCover1.svg'
import book2 from '../../Images/BookCover2.svg'
import book3 from '../../Images/BookCover3.svg'
import book4 from '../../Images/BookCover4.svg'
import book5 from '../../Images/BookCover5.svg'
import book6 from '../../Images/BookCover6.svg'
import book7 from '../../Images/BookCover7.svg'
import book8 from '../../Images/BookCover8.svg'
import book9 from '../../Images/BookCover9.svg'
import book10 from '../../Images/BookCover10.svg'
import book11 from '../../Images/BookCover11.svg'
import book12 from '../../Images/BookCover12.svg'
import book13 from '../../Images/BookCover13.svg'
import book14 from '../../Images/BookCover14.svg'
import book15 from '../../Images/BookCover15.svg'
import book16 from '../../Images/BookCover16.svg'

const Inner_Portfolio = () => {
  return (
 <>
  <MegaMenu/>
 <Portfolio_Banner/>
 <div className='md:w-2/3 w-full flex m-auto justify-between flex-wrap my-12'>


 <img    className='md:w-auto md:h-auto w-full h-96' src={book1} alt="Image 1"/>
<img   className='md:w-auto md:h-auto w-full h-96'  src={book2} alt="Image 2"/>
<img   className='md:w-auto md:h-auto w-full h-96'  src={book3} alt="Image 3"/>
<img   className='md:w-auto md:h-auto w-full h-96'  src={book4} alt="Image 4"/>

</div>
<div className='md:w-2/3 w-full flex m-auto justify-between flex-wrap my-12'>


<img   className='md:w-auto md:h-auto w-full h-96'   src={book5} alt="Image 5"/>
<img    className='md:w-auto md:h-auto w-full h-96'  src={book6} alt="Image 6"/>
<img    className='md:w-auto md:h-auto w-full h-96'  src={book7} alt="Image 7"/>
<img    className='md:w-auto md:h-auto w-full h-96'  src={book8} alt="Image 8"/>

</div>

<div className='md:w-2/3 w-full flex m-auto justify-between flex-wrap my-12'>


<img    className='md:w-auto md:h-auto w-full h-96'  src={book9} alt="Image 9"/>
<img    className='md:w-auto md:h-auto w-full h-96'  src={book10} alt="Image 10"/>
<img    className='md:w-auto md:h-auto w-full h-96'  src={book11} alt="Image 11"/>
<img    className='md:w-auto md:h-auto w-full h-96'  src={book12} alt="Image 12"/>

</div>
<div className='md:w-2/3 w-full flex m-auto justify-between flex-wrap my-12'>


<img    className='md:w-auto md:h-auto w-full h-96'  src={book13} alt="Image 9"/>
<img    className='md:w-auto md:h-auto w-full h-96'  src={book14} alt="Image 10"/>
<img    className='md:w-auto md:h-auto w-full h-96'  src={book15} alt="Image 11"/>
<img    className='md:w-auto md:h-auto w-full h-96'  src={book16} alt="Image 12"/>

</div>


  <Footer/>
 </>
  )
}

export default Inner_Portfolio;