import React from 'react'
import MegaMenu from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Portfolio_Banner from '../../Components/Banner/Portfolio_Banner/Portfolio_Banner'
import Books_Sec from '../../Components/Books_Sec/Books_Sec'

const Our_Portfolio = () => {
  return (
 <>
  <MegaMenu/>
 <Portfolio_Banner/>
 <Books_Sec
  title="We Provide Stunning"
  subTitle="Book Publishing"
  buttonText="See More"
  images={[
    "https://www.bookwritingexperts.com/_next/static/media/1.9ecfad9d.svg",
    "https://www.bookwritingexperts.com/_next/static/media/2.eae693db.svg",
    "https://www.bookwritingexperts.com/_next/static/media/3.5f249c27.svg",
    "https://www.bookwritingexperts.com/_next/static/media/4.c5f6f1c9.svg"
  ]}
/>
<Books_Sec
  title="We Provide Stunning  "
  subTitle="Book Writing"
  buttonText="See More"
  images={[
    "https://www.bookwritingexperts.com/_next/static/media/1.5f94f3b1.svg",
    "https://www.bookwritingexperts.com/_next/static/media/2.b368edea.svg",
    "https://www.bookwritingexperts.com/_next/static/media/3.deac15f0.svg",
    "https://www.bookwritingexperts.com/_next/static/media/4.8d305651.svg"
  ]}
/>
<Books_Sec
  title="We Provide Stunning"
  subTitle="Book Editing"
  buttonText="See More"
  images={[
    "https://www.bookwritingexperts.com/_next/static/media/1.82595c48.svg",
    "https://www.bookwritingexperts.com/_next/static/media/2.4f4f9be5.svg",
    "https://www.bookwritingexperts.com/_next/static/media/3.141e33cc.svg",
    "https://www.bookwritingexperts.com/_next/static/media/4.d6aa78fc.svg"
  ]}
/>
<Books_Sec
  title="We Provide Stunning"
  subTitle="Book Marketing"
  buttonText="See More"
  images={[
    "https://www.bookwritingexperts.com/_next/static/media/1.9ecfad9d.svg",
    "https://www.bookwritingexperts.com/_next/static/media/2.1628e089.svg",
    "https://www.bookwritingexperts.com/_next/static/media/3.38a43e56.svg",
    "https://www.bookwritingexperts.com/_next/static/media/4.14149188.svg"
  ]}
/>


  <Footer/>
 </>
  )
}

export default Our_Portfolio