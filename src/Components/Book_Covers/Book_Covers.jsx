import React, { useState } from 'react';
import './Book_Cover.css';
import img1 from '../../Images/ahmed7.jpg';
import img2 from '../../Images/1.jpg';
import img3 from '../../Images/ahmed6.jpg';
import img4 from '../../Images/3cover.jpg';
import img5 from '../../Images/8cover.jpg';
import img6 from '../../Images/ahmed2.jpg';

// This is Back Images
import img7 from '../../Images/Backcover1.jpg';
import img8 from '../../Images/Backcover2.jpg';
import img9 from '../../Images/Backcover3.jpg';
import img10 from '../../Images/Backcover4.jpg';
import img11 from '../../Images/Backcover5.jpg';
import img12 from '../../Images/Backcover6.jpg';
import { Link } from 'react-router-dom';

const Book_Covers = () => {
  const [hoveredImages, setHoveredImages] = useState({});

  const handleMouseEnter = (index) => {
    setHoveredImages((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

  const handleMouseLeave = (index) => {
    setHoveredImages((prevState) => ({
      ...prevState,
      [index]: false,
    }));
  };

  const images = [
    { src: img1, alt: "Professional Editing Services - The Readsy" , link :"" },
    { src: img2, alt: "Expert Ghostwriting Services - The Readsy" , link: "https://www.amazon.com/Desire-Within-Don-Ennis-ebook/dp/B0CWC4XTRK/ref=sr_1_1?crid=3QDKJX6L1QQ7Y&dib=eyJ2IjoiMSJ9.5rCjgxIW6D7HzPx9KjyxMszqWNmvcl9G0bARMcl1S-s7_3S0i5B1u-mIn4l2XxAA6O-T-jfa3lXyCZHQ40nMhgY0mmAFSp5lYOCSJpbU4f5nMg0bOgsZ5EPwAt_8k5Re0t8Cqltfss9MP3aco5W14-S9B_lwE3y1rSnMWeCk8zlKwNBPlJeob50TgT6yNyl_9EpNkOfG5p_N_KepFwkHUztfgUvmNIWdxD-970PGNAc.vGLWdIuoHSI1OjrxOzgAo_P96aYRPSpo3zs_12-y5AM&dib_tag=se&keywords=don+ennis&qid=1715377388&s=books&sprefix=don+en%2Cstripbooks-intl-ship%2C366&sr=1-1" },
    { src: img3, alt: "Expert Ghostwriting Services - The Readsy" },
    { src: img4, alt: "Author Support Services - The Readsy" },
    { src: img5, alt: "Book Promotion Services - The Readsy" ,  link: "https://www.amazon.com/Walk-Multiple-Myeloma-Marc-Pieper/dp/B0CYRC45CQ/ref=sr_1_1?crid=2WKR6CZ1EZI7Y&dib=eyJ2IjoiMSJ9.RFL3DgVJmwWScDYOnNN-YAVCPI-Vjs6JFRtymBXvOkQlIt5UP5_zUFszxl6wsBsVWZlvrf__HtdnyLjsZVPM4CEDxTDFD7xx81a8mOly332AIZUhu7Kl8ZbhtviSzZU8HZnRktvkmrcVF5nQ19N-svcjsHz6RJE9AgA-8-20qUAyz1q71NJyJOp2QKy98E1jzR43teGmOF0WPRlff7uYLb-xp5POJS7jaLZWkm3ee6s.KgzffugENz3Irnf6_5kmSGI6BIvm9AnQjTD7SmMI5sE&dib_tag=se&keywords=marc+pieper&qid=1715377412&s=books&sprefix=marc+pie,stripbooks-intl-ship,312&sr=1-1" },
    { src: img6, alt: "Writer Assistance - The Readsy" , link: "https://www.amazon.com/Adventures-Dane-Parliament-Rocco-Scibetta-ebook/dp/B0CQHYB91V/ref=sr_1_1?crid=Z3RSH9JHC3UE&dib=eyJ2IjoiMSJ9.Bg5F_E6o-wNj1od8rgUHrbc-yldjTzCFlly0crdp21MEJI7hAqwTL_ow45j7mBs4lwLH6aiwAc3lslpN4kW-yQ.RXkWuf01jbcI9UPq__SqxW4qM9DV9_icrjkMAzgeqEA&dib_tag=se&keywords=rocco+scibetta&qid=1715377465&s=books&sprefix=Rocco%2Cstripbooks-intl-ship%2C338&sr=1-1" }
  ];

  const backImages = [
    { src: img7, alt: "Back Image 1" , link: ""},
    { src: img8, alt: "Back Image 2" , link: "https://www.amazon.com/Desire-Within-Don-Ennis-ebook/dp/B0CWC4XTRK/ref=sr_1_1?crid=3QDKJX6L1QQ7Y&dib=eyJ2IjoiMSJ9.5rCjgxIW6D7HzPx9KjyxMszqWNmvcl9G0bARMcl1S-s7_3S0i5B1u-mIn4l2XxAA6O-T-jfa3lXyCZHQ40nMhgY0mmAFSp5lYOCSJpbU4f5nMg0bOgsZ5EPwAt_8k5Re0t8Cqltfss9MP3aco5W14-S9B_lwE3y1rSnMWeCk8zlKwNBPlJeob50TgT6yNyl_9EpNkOfG5p_N_KepFwkHUztfgUvmNIWdxD-970PGNAc.vGLWdIuoHSI1OjrxOzgAo_P96aYRPSpo3zs_12-y5AM&dib_tag=se&keywords=don+ennis&qid=1715377388&s=books&sprefix=don+en%2Cstripbooks-intl-ship%2C366&sr=1-1"},
    { src: img10, alt: "Back Image 3", link: "" },
    { src: img9, alt: "Back Image 4", link: "" },
    { src: img11, alt: "Back Image 5", link: "https://www.amazon.com/Walk-Multiple-Myeloma-Marc-Pieper/dp/B0CYRC45CQ/ref=sr_1_1?crid=2WKR6CZ1EZI7Y&dib=eyJ2IjoiMSJ9.RFL3DgVJmwWScDYOnNN-YAVCPI-Vjs6JFRtymBXvOkQlIt5UP5_zUFszxl6wsBsVWZlvrf__HtdnyLjsZVPM4CEDxTDFD7xx81a8mOly332AIZUhu7Kl8ZbhtviSzZU8HZnRktvkmrcVF5nQ19N-svcjsHz6RJE9AgA-8-20qUAyz1q71NJyJOp2QKy98E1jzR43teGmOF0WPRlff7uYLb-xp5POJS7jaLZWkm3ee6s.KgzffugENz3Irnf6_5kmSGI6BIvm9AnQjTD7SmMI5sE&dib_tag=se&keywords=marc+pieper&qid=1715377412&s=books&sprefix=marc+pie,stripbooks-intl-ship,312&sr=1-1" },
    { src: img12, alt: "Back Image 6", link: "https://www.amazon.com/Adventures-Dane-Parliament-Rocco-Scibetta-ebook/dp/B0CQHYB91V/ref=sr_1_1?crid=Z3RSH9JHC3UE&dib=eyJ2IjoiMSJ9.Bg5F_E6o-wNj1od8rgUHrbc-yldjTzCFlly0crdp21MEJI7hAqwTL_ow45j7mBs4lwLH6aiwAc3lslpN4kW-yQ.RXkWuf01jbcI9UPq__SqxW4qM9DV9_icrjkMAzgeqEA&dib_tag=se&keywords=rocco+scibetta&qid=1715377465&s=books&sprefix=Rocco%2Cstripbooks-intl-ship%2C338&sr=1-1" }
  ];



  return (
    <div className='text-center my-16'>
      <h1 className='text-cyan-400 text-3xl md:text-5xl font-bold my-2 md:px-0 px-2'>
        Join our online book publishing <span style={{ "color": "#141D29" }}>services</span> <br /> <span style={{ "color": "#141D29" }}>to become a published author.</span>
      </h1>
      <p style={{ "color": "#0A2840" }} className="my-2 md:my-4 w-4/5 m-auto">
        Unlock the full potential of your book's journey with our proficient publishing services. From printing to worldwide distribution and strategic marketing, our experts accompany writers through every phase, eliminating obstacles and maximizing reach.
      </p>

      <div className='flex flex-col items-center'>
        <div className='flex flex-wrap justify-center m-auto'>
          {images.map((image, index) => (
        
            <img
              key={index}
              onClick={() => {
                if (backImages[index].link) {
                    window.location.href = backImages[index].link;
                }
            }}
                   
              style={{ "height": "35rem" }}
              className='md:w-1/4 mx-2 mb-12'
              src={hoveredImages[index] ? backImages[index].src : image.src}
              alt={hoveredImages[index] ? backImages[index].alt : image.alt}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            />
          
          ))}
        </div>
      </div>
    </div>
  );
}

export default Book_Covers;
