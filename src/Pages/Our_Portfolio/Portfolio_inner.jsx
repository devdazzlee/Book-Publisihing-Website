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
import { Helmet } from 'react-helmet'

const Inner_Portfolio = () => {
  return (
 <>
<Helmet>
    <title>Inner Portfolio | Thereadsy</title>
    <meta name="description" content="Explore our portfolio of books and projects at Thereadsy. Discover ghostwriting agency services, book publishers in Austin Texas and Arkansas like Barnes and Noble and IngramSpark, book marketing strategies, and more. Learn about book writer AI, book promotion companies, best book marketing services, and effective book promotion techniques. Find out about ebook promotion, Kindle Direct Publishing, self-publishing options, and book cover design tools including book cover ai generator. From promoting your book on Amazon to marketing strategies for self-published authors, our portfolio showcases the best in the industry." />
    <meta property="og:title" content="Inner Portfolio | Thereadsy" />
</Helmet>
<MegaMenu/>

 <Portfolio_Banner/>
 <div className='md:w-2/3 w-full flex m-auto justify-between flex-wrap my-12'>


 <img className='md:w-auto md:h-auto w-full h-96' src={book1} alt="The Readsy Book Cover 1" />
        <img className='md:w-auto md:h-auto w-full h-96' src={book2} alt="The Readsy Book Cover 2" />
        <img className='md:w-auto md:h-auto w-full h-96' src={book3} alt="The Readsy Book Cover 3" />
        <img className='md:w-auto md:h-auto w-full h-96' src={book4} alt="The Readsy Book Cover 4" />

</div>
<div className='md:w-2/3 w-full flex m-auto justify-between flex-wrap my-12'>


<img className='md:w-auto md:h-auto w-full h-96' src={book5} alt="The Readsy Book Cover 5" />
        <img className='md:w-auto md:h-auto w-full h-96' src={book6} alt="The Readsy Book Cover 6" />
        <img className='md:w-auto md:h-auto w-full h-96' src={book7} alt="The Readsy Book Cover 7" />
        <img className='md:w-auto md:h-auto w-full h-96' src={book8} alt="The Readsy Book Cover 8" />

</div>

<div className='md:w-2/3 w-full flex m-auto justify-between flex-wrap my-12'>


<img className='md:w-auto md:h-auto w-full h-96' src={book9} alt="The Readsy Book Cover 9" />
        <img className='md:w-auto md:h-auto w-full h-96' src={book10} alt="The Readsy Book Cover 10" />
        <img className='md:w-auto md:h-auto w-full h-96' src={book11} alt="The Readsy Book Cover 11" />
        <img className='md:w-auto md:h-auto w-full h-96' src={book12} alt="The Readsy Book Cover 12" />

</div>
<div className='md:w-2/3 w-full flex m-auto justify-between flex-wrap my-12'>


<img className='md:w-auto md:h-auto w-full h-96' src={book13} alt="The Readsy Book Cover 13" />
        <img className='md:w-auto md:h-auto w-full h-96' src={book14} alt="The Readsy Book Cover 14" />
        <img className='md:w-auto md:h-auto w-full h-96' src={book15} alt="The Readsy Book Cover 15" />
        <img className='md:w-auto md:h-auto w-full h-96' src={book16} alt="The Readsy Book Cover 16" />

</div>


  <Footer/>
 </>
  )
}

export default Inner_Portfolio;