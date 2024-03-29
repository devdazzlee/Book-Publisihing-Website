import '../../App.css';
import React, { useState, useEffect } from 'react';
import Cards_Flip from '../../Components/Cards_Flip/Cards_Flip';
import Chooseus from '../../Components/Chooseus/Chooseus';
import Footer from '../../Components/Footer/Footer';
import Head_Sec from '../../Components/Head-Sec/Head_Sec';
import Request_Form from '../../Components/Request_Form/Request_Form';
import Text_Background from '../../Components/Text&background/Text_Background';
import Text_Background2 from '../../Components/Text&background/Text_Background2';
import Text_Form from '../../Components/Text_Form/Text_Form';
import MegaMenu from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner';
import ImageSlider from '../../Components/Image_Slider/Image_Slider';
import Book_Covers from '../../Components/Book_Covers/Book_Covers';
import Testimonal_Image from '../../Components/Testimonal_Image/Testimonal_Image';
import TestimonialSlider from '../../Components/Testimonal_Slider/Testimonal_Slider';
import Modal from '../../Components/Modal/Modal';
import BasicModal from '../../Components/Modal/Modal';

function Home() {
  const [showRequestForm, setShowRequestForm] = useState(true);
  useEffect(() => {
    setShowRequestForm(true);
}, []);

  
  return (
   <>
   {showRequestForm && (
            <div style={{ color: "#F1F1F1" }}>
                <BasicModal />
            </div>
        )}
   <MegaMenu/>
   <Banner
      title="BOOK PUBLISHING"
      description="Your manuscript is ready but feeling a bit lost about how to publish it. No worries! At The Readsy, we've got your back. We promise to get your book the attention it deserves from the right readers. Our team of professionals is here to publish your book quickly and hassle-free."
      buttonText1="Publish Your Work"
      buttonText2="Talk To An Expert"
    />
   <ImageSlider/>
   <Text_Form/>
   <Head_Sec/>
   <Book_Covers/>
   <Text_Background/>
   <Cards_Flip/>
   <Testimonal_Image/>
   <Chooseus/>
   <Text_Background2/>
   <TestimonialSlider/>
  <div  style={{"color" :"#F1F1F1"}} >
  <Request_Form/>
  </div>
   <Footer/>
   </>
  );
}

export default Home;
