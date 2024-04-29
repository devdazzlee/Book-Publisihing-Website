import React from 'react'
import MegaMenu from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Banner2 from '../../Components/Banner/Banner2'
import Trust_Reviews from '../../Components/Trust_Reviews/Trust_Reviews'
import Services_Card from '../../Components/Services_Card/Services_Card'
import '.././Book_Publishing/Book_Publishing.css'
import Services_List from '../../Components/Services_List/Services_List'
import TestimonialSlider from '../../Components/Testimonal_Slider/Testimonal_Slider'
import OneSideText_Image from '../../Components/Banner/OneSideText_Image'
import OppoOneSideText_Image from '../../Components/Banner/OppoOneSideText_Image'
import FormOppo from '../../Components/Banner/FormOppo'
import Quote_Free from '../../Components/Quote_Free/Quote_Free'
import { Helmet } from 'react-helmet'
const Ghost_Writing = () => {

  const listItems = [
    "Assistance in all aspects of the self-publishing marketing services, from editing and formatting to cover design and distribution.",
    "Professional guidance and support throughout the publishing journey.",
    "Access to a network of experienced professionals, including editors, designers, and marketers.",
    "Control over the entire publishing process, including self-publishing editing services pricing, distribution, and marketing.",
    "Higher royalty rates compared to traditional publishing models.",
    "Access to sales and marketing data to help optimize future book launches.",
    "The ability to establish a direct relationship with readers and build a fanbase."
  ];
  return (
     <>
         <Helmet>
    <title>Expert Ghostwriting Services - The Readsy</title>
    <meta name="description" content="Let our experts fire the imagination of your readers with their killer writing techniques. Your story needs to be heard, and Book Writing Experts make sure your story keeps the readers hooked onto it until the end. Learn about ghost writing agency, ghost writing AI, ghost writing app, ghost writing a book, ghost writing and publishing, book publishers in Austin Texas and Arkansas, Barnes and Noble, IngramSpark, book marketing services, books a million coupon, book promotion services, book writer AI, and more." />
    <meta name="keywords" content="ghostwriting, thereadsy, book writing, book publishing, self-publishing, ghost writing agency, ghost writing AI, ghost writing app, ghost writing a book, ghost writing and publishing, book publishers austin Texas, book publishers Arkansas, barnes and noble, ingramspark, book marketing services, books a million coupon, book promotion services, book writer AI, book writer AI free, book writer awards, book writer aesthetic, book writer AI online free, book writer AI generator, book writer author, book promotion companies, book promotion sites, best book marketing services, abebooks coupon, book promotion companies, promote my book, book depository coupon, promote your book, marketing your book, book marketing for self published authors, promote book, book marketing packages, book promotion websites, amazon book promotion, free book promotion sites, ebook promotion, market your book, book promotion packages, book write AI, book and writer name in English, book and writer, book author bio, book author biography, book black author, book writer corner reviews, book writer called, colleen book writer, book author description, book cover AI generator, book cover art, book cover background, book cover blank template, ghost writing apps that pay, ghost writing academy, ghost writing alphabet, ghost writing a memoir, spare ghost written" />
</Helmet>


           <MegaMenu/>
           <Banner2 
               title="Expert Ghostwriting "
               title2="Services!"
               description="Let our experts fire the imagination of your readers with their killer writing techniques. Your story needs to be heard, and Book Writing Experts make sure your story keep the readers hooked onto it until the end."
               buttonText1="Publish Your Work"
               buttonText2="Talk To An Expert"
           
           />
     <Trust_Reviews/>
     <Services_Card 
     
     titleText="Book Editing Services With "
subtitleText={"Thereadsy Publishers!"}
     paragraph={"Review our services to get an idea of the type and variety of book editing services we offer to authors."}
     />
   <Quote_Free/>

     <Services_List
        title="What To Expect?"
        listItems={listItems}
        iconColor="#22D3EE"
      />

     <OneSideText_Image
  heading="Why Thereadsy Publishers!"
  paragraphs={[
    "We are a well-established and respected publisher with a reputation for producing high-quality books. We have a team of experienced marketing professionals who can create and implement effective online book marketing services & campaigns. Our book marketing firm also provides a wide range of services, including research and analysis, marketing plan development, promotion and publicity, author platform building, sales and distribution, and measurement and optimization while marketing a book online. Choosing TheReadsy Publishers for book marketing services will give you access to the knowledge, resources, and networks that are needed for successful book promotion services.",
  ]}
  buttonText="Call Now"
/>
<OppoOneSideText_Image 
heading="Not Sure Where To Begin?"
paragraphs={[
  "Don't let your book get lost in the crowd! Partner with TheReadsy Publishers and let us help you promote your book and reach your target audience.",
]}
buttonText="Contact Us Now"
buttonText2="Talk To An Expert"
/>


     <TestimonialSlider/>
<FormOppo
heading="Ready To Do Justice With Your Book?"
paragraphs={[
  "Allow our experts to provide you with top-notch book marketing services.",
]}
buttonText="Send Messege"



/>
           <Footer/>
     </>
  )
}

export default Ghost_Writing