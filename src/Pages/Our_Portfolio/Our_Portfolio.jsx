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


const Our_Portfolio = () => {
  return (
 <>
       <Helmet>
        <title>Our Portfolio - Book Publishing, Writing, Editing, Marketing | Thereadsy</title>
        <meta name="description" content="Explore our stunning portfolio of book publishing, writing, editing, and marketing services at Thereadsy. We provide top-notch services to authors and writers, helping them achieve their literary goals." />
      </Helmet>

  <MegaMenu/>
 <Portfolio_Banner/>
 <Books_Sec
  title="We Provide Stunning"
  subTitle="Book Publishing"
  buttonText="See More"
  images={[
    book1,
    book2,
    book3,
    book4
  ]}
/>
<Books_Sec
  title="We Provide Stunning  "
  subTitle="Book Writing"
  buttonText="See More"
  images={[
    book5,
    book6,
    book7,
    book8
  ]}
/>
<Books_Sec
  title="We Provide Stunning"
  subTitle="Book Editing"
  buttonText="See More"
  images={[
    book9,
    book10,
    book11,
    book12
  ]}
/>
<Books_Sec
  title="We Provide Stunning"
  subTitle="Book Marketing"
  buttonText="See More"
  images={[
    book13,
    book14,
    book15,
    book16
  ]}
/>


  <Footer/>
 </>
  )
}

export default Our_Portfolio