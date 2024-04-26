import React from 'react'
import MegaMenu from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Pricing_Banner from '../../Components/Banner/Pricing_Banner/Pricing_Banner'
import Pricing_Card from '../../Components/Pricing_Card/Pricing_Card'
import Pricing_Card_Sec from '../../Components/Pricing_Card/Pricing_Card_Sec'
import Request_Form from '../../Components/Request_Form/Request_Form'
import Head_Para from '../../Components/Head_Para/Head_Para'
import { Helmet } from 'react-helmet'

const Pricing = () => {
  return (
    <>
        <Helmet>
        <title>Book Writing & Publishing Services - Pricing | BookWritingExperts</title>
        <meta name="description" content="Check out our affordable pricing for book writing, editing, publishing, marketing, and more. Get a quote for your project now!" />
        <meta property="og:title" content="Book Writing & Publishing Services - Pricing | BookWritingExperts" />
        <meta property="og:description" content="Check out our affordable pricing for book writing, editing, publishing, marketing, and more. Get a quote for your project now!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thereadsy.com/Pricing" />
        <meta property="og:image" content="https://thereadsy.com/static/media/logo%20black%20(1).bec0b67ea291331312b32a2301ee3e36.svg" />
        <meta name="twitter:title" content="Book Writing & Publishing Services - Pricing | BookWritingExperts" />
        <meta name="twitter:description" content="Check out our affordable pricing for book writing, editing, publishing, marketing, and more. Get a quote for your project now!" />
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
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.3f883905.png&w=384&q=75"
        buttonText="Get Quote"
      />
    


  <Pricing_Card_Sec
  style="hidden"
        title="PREMIUM"
        description="We offer a wide range of services for Authors & Researchers such as publishing their work on Amazon, Kindle, Barnes & Nobles, Createspace, and Google Books etc."
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.3f883905.png&w=384&q=75"
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
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.59b38303.png&w=384&q=75"
        buttonText="Get Quote"
      />
<Pricing_Card_Sec
        title="PREMIUM"
        description="We offer a wide range of services for Authors & Researchers such as publishing their work on Amazon, Kindle, Barnes & Nobles, Createspace, and Google Books etc."
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.57656e7f.png&w=256&q=75"
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
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.dac555a9.png&w=384&q=75"
        buttonText="Get Quote"
      />
<Pricing_Card_Sec
        title="PREMIUM"
        description="We offer a wide range of services for Authors & Researchers such as publishing their work on Amazon, Kindle, Barnes & Nobles, Createspace, and Google Books etc."
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.54e0ae82.png&w=384&q=75"
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
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.98a22e77.png&w=256&q=75"
        buttonText="Get Quote"
      />
<Pricing_Card_Sec
        title="PREMIUM"
        description="Creative content with a range of 200-300 pages."
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.afdb0254.png&w=256&q=75"
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
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.328062d6.png&w=640&q=75"
        buttonText="Get Quote"
      />
<Pricing_Card_Sec
        title="PREMIUM"
        description="We offer a wide range of services for Authors & Researchers such as publishing their work on Amazon, Kindle, Barnes & Nobles, Createspace, and Google Books etc."
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.3f883905.png&w=384&q=75"
        buttonText="Get Quote"
      />
</div>
</div>

<div className='my-12' >

<h1 className='md:text-5xl text-3xl     text-center  font-bold mb-12'>Book Proofreading</h1>
<div  className='flex flex-wrap  w-5/6	justify-evenly m-auto' >
<Pricing_Card_Sec
        title="STANDARD"
        description="Creative content with a range of 200-300 pages."
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.59b38303.png&w=384&q=75"
        buttonText="Get Quote"
      />
<Pricing_Card_Sec
        title="PREMIUM"
        description="Creative content with a range of 200-300 pages."
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.57656e7f.png&w=256&q=75"
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
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.dac555a9.png&w=384&q=75"
        buttonText="Get Quote"
      />
<Pricing_Card_Sec
        title="PREMIUM"
        description="Strategically designed content with a range of 350 pages & beyond."
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.54e0ae82.png&w=384&q=75"
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
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.98a22e77.png&w=256&q=75"
        buttonText="Get Quote"
      />
<Pricing_Card_Sec
        title="PREMIUM"
        description="Strategically designed content with a range of 350 pages & beyond."
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.afdb0254.png&w=256&q=75"
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
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.328062d6.png&w=640&q=75"
        buttonText="Get Quote"
      />
<Pricing_Card_Sec
        title="PREMIUM"
        description="Strategically designed content with a range of 350 pages & beyond."
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.3f883905.png&w=384&q=75"
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
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.59b38303.png&w=384&q=75"
        buttonText="Get Quote"
      />
<Pricing_Card_Sec
        title="PREMIUM"
        description="Strategically designed content with a range of 350 pages & beyond."
        imageUrl="https://www.bookwritingexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.57656e7f.png&w=256&q=75"
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