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
const Book_Editing = () => {

  const listItems = [
    "The book editing process begins when you register or subscribe to our website.",
    "Our editors will discuss the manuscript with you and provide you with a detailed plan of action for revisions, as well as a timeline for completion.",
    "Our online book editing will begin by reviewing and evaluating your manuscript, identifying any issues that need attention, and providing you with an overall assessment of your manuscript's strengths and weaknesses.",
    "Professional book editing services focus on the sentence level, looking for issues such as grammar, punctuation, and syntax.",
    "After the editing process is completed, you will have the opportunity to review the manuscript and make any final changes before it is ready for publication.",
  ];
  return (
     <>
           <MegaMenu/>
           <Banner2
      title="Revitalize Your Writing"
      description="Are you looking for a reliable book editing company that can take your writing to the next level? You have come to the right place!"
      buttonText1="Publish Your Work"
      buttonText2="Talk To An Expert"
    />
     <Trust_Reviews/>
     <Services_Card 
     
     titleText="Book Promotion Services With"
subtitleText={"Thereadsy Publishers!"}
     paragraph={"Get your book noticed with our expert marketing service! We offer strategic planning, targeted promotions, social media campaigns, and more to boost sales and increased visibility."}
     />
     <div   className='form-book-bg' >
     <div className='form-Book' >

     <h1  style={{"color":"#141D29"}} className='text-4xl font-bold my-6' >Request A Free Quote </h1>
<div className='flex w-3/5 wrap-flex 	 justify-center'>
<input type="text" id="input-label" class="md:mr-3 mr-0 my-2 py-6 px-4 block w-full border  border-gray-600  text-md text-black  " placeholder="Name"/>
<input type="text" id="input-label" class="md:mr-3 mr-0 my-2 py-6 px-4 block w-full border  border-gray-600  text-md text-black  " placeholder="Email"/>
<input type="text" id="input-label" class="md:mr-3 mr-0 my-2 py-6 px-4 block w-full border  border-gray-600  text-md text-black  " placeholder="Phone"/>


</div>
     <button type="button" className="my-4 px-12 text-white bg-cyan-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Submit Now</button>
     </div>

     </div>

     <Services_List
        title="What To Expect?"
        listItems={listItems}
        iconColor="#22D3EE"
      />
     <OneSideText_Image
  imageUrl="https://penguinpublishers.com/assets/images/why-info-img.png"
  heading="Why Choose Thereadsy Publishers!"
  paragraphs={[
    "Many reasons give TheReadsy Publishers a competitive advantage in the book editing industry. Our team of experienced editors has a wealth of knowledge and skills and is dedicated to helping authors achieve literary success. We understand the importance of a well-written and polished manuscript and commit ourselves to helping authors achieve that goal. Our book editing services are tailored to meet the needs of any author, from basic proofreading to comprehensive developmental editing. We are one of the few book editing companies that understand your vision and provide you with detailed feedback and suggestions to help you bring that vision to life. With our affordable book editing services, you can trust that your manuscript is in good hands and will be the best it can be.",

  ]}
  buttonText="Call Now"
/>
<OppoOneSideText_Image 
imageUrl="https://penguinpublishers.com/assets/images/cta-main-img2.png"
heading="Not Sure Where To Begin?"
paragraphs={[
  "We are more than willing to help you with your book editing process. Our affordable book editing services are the best in the market. So call us today and get a free quote!",
]}
buttonText="Contact Us Now"
buttonText2="Talk To An Expert"
/>


     <TestimonialSlider/>
<FormOppo
imageUrl="https://penguinpublishers.com/assets/images/contact-main-book.png"
heading="Ready To Speak To An"
heading2={"Expert?"}
paragraphs={[
  "Our affordable editing services are the best ones in the market. Contact us today to get all your project-related queries answered!",
]}
buttonText="Send Messege"



/>
           <Footer/>
     </>
  )
}

export default Book_Editing