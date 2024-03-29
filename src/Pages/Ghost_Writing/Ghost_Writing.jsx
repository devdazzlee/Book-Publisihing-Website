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
     <div   className='form-book-bg' >
     <div className='form-Book' >

     <h1  style={{"color":"#141D29"}} className='text-4xl font-bold my-6' >Request A Free Quote </h1>
<div className='flex w-3/5 wrap-flex  	 justify-center'>
<input type="text" id="input-label" class="md:mr-3 mr-0 my-2 py-6 px-4 block w-full border border-gray-600  text-sm  " placeholder="Name"/>
<input type="text" id="input-label" class="md:mr-3 mr-0 my-2 py-6 px-4 block w-full border border-gray-600  text-sm  " placeholder="Email"/>
<input type="text" id="input-label" class="md:mr-3 mr-0 my-2 py-6 px-4 block w-full border border-gray-600  text-sm  " placeholder="Phone"/>
</div>
<button type="button" className=" text-white bg-cyan-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Submit Now</button>
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
    "We are a well-established and respected publisher with a reputation for producing high-quality books. We have a team of experienced marketing professionals who can create and implement effective online book marketing services & campaigns. Our book marketing firm also provides a wide range of services, including research and analysis, marketing plan development, promotion and publicity, author platform building, sales and distribution, and measurement and optimization while marketing a book online. Choosing TheReadsy Publishers for book marketing services will give you access to the knowledge, resources, and networks that are needed for successful book promotion services.",
  ]}
  buttonText="Call Now"
/>
<OppoOneSideText_Image 
imageUrl="https://penguinpublishers.com/assets/images/cta-main-img2.png"
heading="Not Sure Where To Begin?"
paragraphs={[
  "Don't let your book get lost in the crowd! Partner with TheReadsy Publishers and let us help you promote your book and reach your target audience.",
]}
buttonText="Contact Us Now"
buttonText2="Talk To An Expert"
/>


     <TestimonialSlider/>
<FormOppo
imageUrl="https://penguinpublishers.com/assets/images/contact-main-book.png"
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