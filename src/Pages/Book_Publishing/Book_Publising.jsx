import React from 'react'
import MegaMenu from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Banner2 from '../../Components/Banner/Banner2'
import Trust_Reviews from '../../Components/Trust_Reviews/Trust_Reviews'
import Services_Card from '../../Components/Services_Card/Services_Card'
import './Book_Publishing.css'
import Services_List from '../../Components/Services_List/Services_List'
import TestimonialSlider from '../../Components/Testimonal_Slider/Testimonal_Slider'
import OneSideText_Image from '../../Components/Banner/OneSideText_Image'
import OppoOneSideText_Image from '../../Components/Banner/OppoOneSideText_Image'
import FormOppo from '../../Components/Banner/FormOppo'
import Services_Card3 from '../../Components/Services_Card/Service_Card3'
import Quote_Free from '../../Components/Quote_Free/Quote_Free'
const Book_Publising = () => {

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
           <MegaMenu/>
           <Banner2 
               title="Book Publising"
               title2="Services"
               description="Our self-publishing services provide aspiring authors with end-to-end support throughout the publishing process. From writing coaching to cover design and marketing, we offer a comprehensive range of services to help bring your manuscript to life. Our team of experts works closely with you to ensure that the final product exceeds your expectations. With our support, you can achieve your dreams of becoming a published author and share your message with the world. Get in touch with us today to empower yourself and bring your book to life!"
               buttonText1="Publish Your Work"
               buttonText2="Talk To An Expert"
           
           />
     <Trust_Reviews/>
     <Services_Card3 
     
     titleText="Book Editing Services With TheReadsy Publishers"
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

export default Book_Publising