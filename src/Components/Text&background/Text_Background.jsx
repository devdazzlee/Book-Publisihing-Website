import React, { useEffect } from 'react'
import './Text_Background.css'
import { Link } from 'react-router-dom'
import '../Animation.css'
const Text_Background = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.ft-text-animate');
    const cards2 = document.querySelectorAll('.ft-text-animate-right');

    const handleScroll = () => {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-up-element');
        }
      });
      cards2.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-from-right');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
<div   className=' bg-cover-image  flex flex-col  my-12' >
<h3   className='text-2xl my-2 md:ml-4 ml-0 md:px-0 px-2 ft-text-animate'   >Stop worrying about publishing books!</h3>
<h1  className='font-bold md:text-4xl text-2xl  text-start my-6 md:ml-4 ml-0 md:px-0 px-2 ft-text-animate' >AFFORDABLE AND PROFESSIONAL
<br /> BOOK PUBLISHING EXPERTS!</h1>
<p className='text-sm md:text-base my-2 md:my-4 my-8 md:my-16 font-medium md:ml-4 ml-2 w-full md:w-8/12 w-auto ft-text-animate' >
Are you an aspiring author seeking guidance or an experienced writer in need of a professional agency?
<br />
We provide top-notch book publishing help, catering to both traditional and digital authors. <br /> Your story deserves to be told, and we're here to help you tell it.
</p>


<div className='md:w-auto w-full justify-center md:flex-row my-4 md:ml-4 '>
<Link to={'/Contact'} >
        
        <button className='ft-text-animate hover-bt-1 form-button-1 bg-cyan-400 text-white font-bold py-2 px-6 rounded-full mb-2 md:mb-0 md:mr-4'>
          Publish My Book
        </button>
        
        </Link>
        <Link to={'/Contact'} >
        
        <button className='ft-text-animate hover-bt-2 form-button-1 text-white font-bold py-2 px-6 rounded-full'>
          Talk to Us!
        </button>
        
        </Link>
      </div>

</div>

  )
}

export default Text_Background