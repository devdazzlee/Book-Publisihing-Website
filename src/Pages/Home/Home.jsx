import '../../App.css';
import './Home.css'
import React, { useState , useEffect } from "react";
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
import axios from 'axios';
import { Link } from 'react-router-dom';


function Home() {
  const [hidden,setHidden] = useState(false)
  const [hidden2,setHidden2] = useState(false)
  const [showPopup, setShowPopup] = useState(false);
  const [showOnScroll, setShowOnScroll] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the scroll threshold as needed
      const scrollThreshold = 200; // Adjust this value as needed
  
      if (scrollPosition > scrollThreshold) {
        setShowOnScroll(true);
      } else {
        setShowOnScroll(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
    useEffect(() => {
      if (showPopup) {
        const timeout = setTimeout(() => {
          setShowPopup(false);
        }, 5000);
  
        return () => clearTimeout(timeout);
      }
    }, [showPopup]);
  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      textarea: '',
      number : ''
    });
  
      const handleHover = () => {
        setHidden(true);
      };
  
      const handleHoverOut = () => {
        setHidden(false);
      };
  
      const handleHover2 = () => {
        setHidden2(true);
      };
  
      const handleHoverOut2 = () => {
        setHidden2(false);
      };
  


  

  
  return (
   <>
   {/* {showRequestForm && (
            <div style={{ color: "#F1F1F1" }}>
                <BasicModal />
            </div>
        )} */}
   <MegaMenu/>
   <Banner
      title="BOOK PUBLISHING"
      description="Your manuscript is ready but feeling a bit lost about how to publish it. No worries! At The Readsy, we've got your back. We promise to get your book the attention it deserves from the right readers. Our team of professionals is here to publish your book quickly and hassle-free."
      buttonText1="Publish Your Work"
      buttonText2="Talk To An Expert"
    />
   <ImageSlider/>
 
   {/* <div
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        onClick={() => setHidden(!hidden)}
        className={`bg-cyan-400 text-14xl p-4 text-white flex items-center`}
        style={{
          position: "fixed",
          right: "0px",
          bottom: "700px",
          zIndex: "1",
          borderRadius: "10px 0px 0px 10px"
        }}
      >
        <i className="fa-solid fa-phone mr-2"></i>
        {hidden ? (
          <>
            <hr style={{ width: "1px", height: "20px", margin: "0 10px", border: "none", backgroundColor: "black" }} />
            <a className="font-bold" href="tel:+17372227373">+1 737-222-7373</a>
          </>
        ) : ''}
      </div>
      <div
        onMouseEnter={handleHover2}
        onMouseLeave={handleHoverOut2}
        onClick={() => setHidden2(!hidden2)}
        className={`bg-cyan-400 text-14xl p-4 text-white flex items-center`}
        style={{
          position: "fixed",
          right: "0px",
          bottom: "640px",
          zIndex: "1",
          borderRadius: "10px 0px 0px 10px"
        }}
      >
        <i className="fas fa-comments "></i>
        {hidden2 ? (
          <>
            <hr style={{ width: "1px", height: "20px", margin: "0 10px", border: "none", backgroundColor: "black" }} />
              <Link    to={'/Contact'} > 
            <a className="font-bold">
              
            Let's Discuss
            </a>
            </Link>
          </>
        ) : ''}
      </div> */}


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
