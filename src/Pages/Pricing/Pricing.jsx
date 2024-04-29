import React from 'react'
import MegaMenu from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Pricing_Banner from '../../Components/Banner/Pricing_Banner/Pricing_Banner'
import Pricing_Card from '../../Components/Pricing_Card/Pricing_Card'
import Pricing_Card_Sec from '../../Components/Pricing_Card/Pricing_Card_Sec'
import Request_Form from '../../Components/Request_Form/Request_Form'
import Head_Para from '../../Components/Head_Para/Head_Para'
import { Helmet } from 'react-helmet'
import img1 from '../../Images/ThereadsyPricing.webp'
import img2 from '../../Images/thereadsyPricing2.webp'
import img3 from '../../Images/ThereadsyPricing3.webp'
import img4 from '../../Images/BookPublishing4.webp'
import img5 from '../../Images/Thereadsypricing5.webp'
import img6 from '../../Images/TheReadsyPricing6.webp'
import img7 from '../../Images/TheReadsyPricing7.webp'
import img8 from '../../Images/TheReadsyPricing8.webp'

const Pricing = () => {
  return (
    <>
       <Helmet>
    <title>Book Writing & Publishing Services - Pricing | Thereadsy</title>
    <meta name="description" content="Check out our affordable pricing for book writing, editing, publishing, marketing, and more at Thereadsy. Get a quote for your project now! Explore ghostwriting agency services, book marketing strategies, and self-publishing options. Find the best book promotion companies and discover effective book marketing techniques. Learn about Kindle Direct Publishing, self-publishing costs, and ways to promote your book on Amazon." />
    <meta property="og:title" content="Book Writing & Publishing Services - Pricing | Thereadsy" />
    <meta property="og:description" content="Check out our affordable pricing for book writing, editing, publishing, marketing, and more at Thereadsy. Get a quote for your project now! Explore ghostwriting agency services, book marketing strategies, and self-publishing options. Find the best book promotion companies and discover effective book marketing techniques. Learn about Kindle Direct Publishing, self-publishing costs, and ways to promote your book on Amazon." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thereadsy.com/Pricing" />
    <meta property="og:image" content="https://thereadsy.com/static/media/logo%20black%20(1).bec0b67ea291331312b32a2301ee3e36.svg" />
    <meta name="twitter:title" content="Book Writing & Publishing Services - Pricing | Thereadsy" />
    <meta name="twitter:description" content="Check out our affordable pricing for book writing, editing, publishing, marketing, and more at Thereadsy. Get a quote for your project now! Explore ghostwriting agency services, book marketing strategies, and self-publishing options. Find the best book promotion companies and discover effective book marketing techniques. Learn about Kindle Direct Publishing, self-publishing costs, and ways to promote your book on Amazon." />
</Helmet>


      <MegaMenu/>
    <Pricing_Banner/>
{/* <Pricing_Card/> */}
<div className='my-12' >

<h1 className='md:text-5xl text-3xl     text-center my-12 font-bold mb-4'>Book Publishing</h1>
<div  className='md:flex flex-wrap w-5/6	justify-evenly  m-auto' >
<Pricing_Card_Sec
        title="STANDARD"
        description="We offer a wide range of services for Authors & Researchers such as publishing their work on Amazon, Kindle, Barnes & Nobles, Createspace, and Google Books etc."
        imageUrl={img1}
        buttonText="Get Quote"
      />
    


  <Pricing_Card_Sec
  style="hidden"
        title="PREMIUM"
        description="We offer a wide range of services for Authors & Researchers such as publishing their work on Amazon, Kindle, Barnes & Nobles, Createspace, and Google Books etc."
        imageUrl={img2}
        buttonText="Get Quote"
      />

      {/* </div> */}

</div>
</div>
<div className='my-12' >

<h1 className='md:text-5xl text-3xl     text-center  font-bold mb-12'>Book Promotion</h1>
<div  className='flex flex-wrap  w-5/6	justify-evenly m-auto' >
<Pricing_Card_Sec
        title="STANDARD"
        description="We offer a wide range of services for Authors & Researchers such as publishing their work on Amazon, Kindle, Barnes & Nobles, Createspace, and Google Books etc."
        imageUrl={img2}
        buttonText="Get Quoted"
      />
<Pricing_Card_Sec
        title="PREMIUM"
        description="We offer a wide range of services for Authors & Researchers such as publishing their work on Amazon, Kindle, Barnes & Nobles, Createspace, and Google Books etc."
        imageUrl={img3}
        buttonText="Get Quote"
      />
</div>
</div>

<div className='my-12' >

<h1 className='md:text-5xl text-3xl     text-center  font-bold mb-12'>Book Writing</h1>
<div  className='flex flex-wrap  w-5/6	justify-evenly m-auto' >
<Pricing_Card_Sec
        title="STANDARD"
        description="We offer a wide range of services for Authors & Researchers such as publishing their work on Amazon, Kindle, Barnes & Nobles, Createspace, and Google Books etc."
        imageUrl={img4}
        buttonText="Get Quote"
      />
<Pricing_Card_Sec
        title="PREMIUM"
        description="We offer a wide range of services for Authors & Researchers such as publishing their work on Amazon, Kindle, Barnes & Nobles, Createspace, and Google Books etc."
        imageUrl={img5}
        buttonText="Get Quote"
      />
</div>
</div>
<div className='my-12' >

<h1 className='md:text-5xl text-3xl     text-center  font-bold mb-12'>Book Editing</h1>
<div  className='flex flex-wrap  w-5/6	justify-evenly m-auto' >
<Pricing_Card_Sec
        title="STANDARD"
        description="Creative content with a range of 200-300 pages."
        imageUrl={img6}
        buttonText="Get Quote"
      />
<Pricing_Card_Sec
        title="PREMIUM"
        description="Creative content with a range of 200-300 pages."
        imageUrl={img7}
        buttonText="Get Quote"
      />
</div>
</div>

<div className='my-12' >

<h1 className='md:text-5xl text-3xl     text-center  font-bold mb-12'>Book Marketing</h1>
<div  className='flex flex-wrap  w-5/6	justify-evenly m-auto' >
<Pricing_Card_Sec
        title="STANDARD"
        description="Creative content with a range of 200-300 pages."
        imageUrl={img8}
        buttonText="Get Quote"
      />
<Pricing_Card_Sec
        title="PREMIUM"
        description="We offer a wide range of services for Authors & Researchers such as publishing their work on Amazon, Kindle, Barnes & Nobles, Createspace, and Google Books etc."
        imageUrl={img1}
        buttonText="Get Quoted"
      />
</div>
</div>

<div className='my-12' >

<h1 className='md:text-5xl text-3xl     text-center  font-bold mb-12'>Book Proofreading</h1>
<div  className='flex flex-wrap  w-5/6	justify-evenly m-auto' >
<Pricing_Card_Sec
        title="STANDARD"
        description="Creative content with a range of 200-300 pages."
        imageUrl={img2}
        buttonText="Get Quote"
      />
<Pricing_Card_Sec
        title="PREMIUM"
        description="Creative content with a range of 200-300 pages."
        imageUrl={img3}
        buttonText="Get Quote"
      />
</div>
</div>

<div className='my-12' >

<h1 className='md:text-5xl text-3xl     text-center  font-bold mb-12'>Ghost Writing</h1>
<div  className='flex  flex-wrap  w-5/6	justify-evenly m-auto' >
<Pricing_Card_Sec
        title="STANDARD"
        description="Creative content with a range of 200-300 pages."
        imageUrl={img4}
        buttonText="Get Quote"
      />
<Pricing_Card_Sec
        title="PREMIUM"
        description="Strategically designed content with a range of 350 pages & beyond."
        imageUrl={img5}
        buttonText="Get Quote"
      />
</div>
</div>

<div className='my-12' >

<h1 className='md:text-5xl text-3xl     text-center  font-bold mb-12'>Children Book Publication</h1>
<div  className='flex flex-wrap  w-5/6	justify-evenly m-auto' >
<Pricing_Card_Sec
        title="STANDARD"
        description="Creative content with a range of 200-300 pages."
        imageUrl={img6}
        buttonText="Get Quote"
      />
<Pricing_Card_Sec
        title="PREMIUM"
        description="Strategically designed content with a range of 350 pages & beyond."
        imageUrl={img7}
        buttonText="Get Quote"
      />
</div>
</div>
<div className='my-12' >

<h1 className='md:text-5xl text-3xl     text-center  font-bold mb-12'>Children's Book Illustrations</h1>
<div  className='flex  flex-wrap w-5/6	justify-evenly m-auto' >
<Pricing_Card_Sec
        title="STANDARD"
        description="Creative content with a range of 200-300 pages."
        imageUrl={img8}
        buttonText="Get Quote"
      />
<Pricing_Card_Sec
        title="PREMIUM"
        description="Strategically designed content with a range of 350 pages & beyond."
        imageUrl={img1}
        buttonText="Get Quote"
      />
</div>




</div>
<div className='my-12' >

<h1 className='md:text-5xl text-3xl     text-center  font-bold mb-12'>Digital Marketing</h1>
<div  className='flex flex-wrap  w-5/6	justify-evenly m-auto' >
<Pricing_Card_Sec
        title="STANDARD"
        description="Creative content with a range of 200-300 pages."
        imageUrl={img2}
        buttonText="Get Quote"
      />
<Pricing_Card_Sec
        title="PREMIUM"
        description="Strategically designed content with a range of 350 pages & beyond."
        imageUrl={img3}
        buttonText="Get Quote"
      />
</div>




</div>

<Head_Para/>

<div  style={{"color" :"#F1F1F1"}} >
  <Request_Form/>
  </div>

      <Footer/>
    </>
  )
}

export default Pricing