import React from 'react'
import MegaMenu from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Banner2 from '../../Components/Banner/Banner2'
import Trust_Reviews from '../../Components/Trust_Reviews/Trust_Reviews'
import Services_Card from '../../Components/Services_Card/Services_Card'
import '../Book_Publishing/Book_Publishing.css'
import Services_List from '../../Components/Services_List/Services_List'
import TestimonialSlider from '../../Components/Testimonal_Slider/Testimonal_Slider'
import OneSideText_Image from '../../Components/Banner/OneSideText_Image'
import OppoOneSideText_Image from '../../Components/Banner/OppoOneSideText_Image'
import FormOppo from '../../Components/Banner/FormOppo'
import Banner from '../../Components/Banner/Banner'
import Services_Card2 from '../../Components/Services_Card/Service_Card2'
const Book_Publising = () => {

  const listItems = [
    "TheReadsy Publishers will create and execute a social media strategy designed to increase visibility and engagement for your book on platforms such as Facebook, Twitter, and Instagram.",
    "We will create and send targeted email campaigns to potential readers and reviewers to increase awareness and interest in your book.",
    "Our team will help you to place ads in relevant publications, websites, and social media platforms to promote your book to a wider audience.",
    "We will help you create and distribute press releases, and other materials to promote your book to the media and generate coverage in newspapers, magazines, and online outlets.",
    "Our book marketing agency will help you schedule and coordinate book signings, speaking engagements, and other events to connect with readers and promote your book.",
    "Our team of book promoters & marketers will provide you with marketing resources such as book trailers, author bios, and other materials that can be used to promote your book online and offline.",
  ];
  return (
     <>
           <MegaMenu/>
           <Banner2
      title="Book Marketing"
      title2="Services"
      description="Our book marketing company is here to help authors increase their book’s visibility & sales through targeted campaigns & promotions."
      buttonText1="Publish Your Work"
      buttonText2="Talk To An Expert"
    />
     <Trust_Reviews/>
     <Services_Card2 
     
     titleText="Book Promotion Services With"
subtitleText={"Thereadsy Publishers!"}
     paragraph={"Get your book noticed with our expert marketing service! We offer strategic planning, targeted promotions, social media campaigns, and more to boost sales and increased visibility."}
     />
     <div   className='form-book-bg' >
     <div className='form-Book' >

     <h1  style={{"color":"#141D29"}} className='md:text-4xl text-2xl font-bold my-6' >Request A Free Quote </h1>
<div className='flex w-3/5 wrap-flex 	 justify-center'>
<input type="text" id="input-label" class="md:mr-3 mr-0 my-2 py-6 px-4 block w-full border  border-gray-600  text-md text-black  " placeholder="Name"/>
<input type="text" id="input-label" class="md:mr-3 mr-0 my-2 py-6 px-4 block w-full border  border-gray-600  text-md text-black  " placeholder="Email"/>
<input type="text" id="input-label" class="md:mr-3 mr-0 my-2 py-6 px-4 block w-full border  border-gray-600  text-md text-black  " placeholder="Phone"/>

</div>
     </div>
     </div>

     <Services_List
        title="What To Expect?"
        listItems={listItems}
        iconColor="#22D3EE"
      />
     <OneSideText_Image
  imageUrl="https://penguinpublishers.com/assets/images/why-info-img.png"
  heading="Why Thereadsy Publishers!"
  paragraphs={[
    "Are you a writer looking to publish your work and share it with the world? Look no further than TheReadsy Publishers' professional self-publishing services!",
    "With our expert guidance and support, you'll be able to take control of the entire publishing process, from editing and formatting to cover design and distribution. Our team of experienced professionals will work with you every step of the way, ensuring that your vision is brought to life in a polished and professional manner. Not only will you have the satisfaction of seeing your work in print or digital format, but you'll also benefit from higher royalty rates compared to traditional publishing models.",
    "At TheReadsy Publishers, we believe that every writer deserves the opportunity to share their work with the world. We are here to assist you in turning your dream into a reality.",
    "Contact us today to learn more about our self-publishing marketing services and take the first step toward becoming a published author!"
  ]}
  buttonText="Call Now"
/>
<OppoOneSideText_Image 
imageUrl="https://penguinpublishers.com/assets/images/cta-main-img2.png"
heading="Not Sure Where To Begin?"
paragraphs={[
  "If you possess a manuscript that you wish to publish, we can assist you in the process. Connect with our self-publishing services team and let us handle the rest!",
]}
buttonText="Contact Us Now"
buttonText2="Talk To An Expert"
/>


     <TestimonialSlider/>
<FormOppo
imageUrl="https://penguinpublishers.com/assets/images/contact-main-book.png"
heading="Ready To Launch Your Book?"
paragraphs={[
  "Connect with our self-publishing services team to publish your work.",
]}
buttonText="Send Messege"



/>
           <Footer/>
     </>
  )
}

export default Book_Publising