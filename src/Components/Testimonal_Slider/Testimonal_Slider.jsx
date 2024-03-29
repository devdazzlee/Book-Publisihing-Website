import React, { useState, useEffect } from 'react';
import './Testimonal_Slider.css'; // Assuming you have a separate CSS file for styling
import img1 from '../../Images/avatar-1.png'
import img2 from '../../Images/avatar-2.png'
import img3 from '../../Images/avatar-3.png'
const testimonials = [
  {
    id: 1,
    head: "THE PERFECT CHOICE FOR BOTH NEW AND SEASONED AUTHORS.",
    text: "They are in the process of publishing my first novel 'Brutal Light in Darkness' I'm amazed at everything they've done so far! They have kept the manuscript the same in the aspect of the story line, while beautifully re-writing a few of the paragraphs making it more readable. The way they are revising the manuscript is true art!",
    author: "Mary Nolan",
    image: img2,
  },
  {
    id: 2,
    head: "A Literary Dream Realized!",
    text: "As an aspiring author, choosing The Readsy was the best decision I made for my manuscript. Their seamless process, from editing to cover design, ensured my book was brought to life just as I envisioned. The team's dedication and expertise in navigating the publishing world made the entire journey enjoyable. With The Readsy, my literary dream became a reality, and I couldn't be happier with the result. Highly recommended for authors seeking a trustworthy partner in their publishing endeavors! ",
    author: "Steve Tucker",
    image: img3,
   
  },
  {
    id: 3,
    head: "The Readsy did what I expected them to do and offered suggestions and help beyond my expectations.",
    text: "I was looking for a company that could get my book out the way I wanted it, at a price I could manage. I appreciate the attention to detail and the flexibility that they offered.  ",
    author: "Rocco Scibetta",
    image: img1, // Example image URL
   
  }
];

const TestimonialSlider = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change testimonial every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-slider py-24 bg-cyan-">
      <div className="testimonial">
        <h1 style={{ color: "#FF9903" }} className="font-bold text-2xl mb-6">Client Testimonial</h1>
        <h1 style={{ color: "#24303E" }} className="md:text-4xl text-2xl   font-bold mb-6">{testimonials[currentTestimonialIndex].head}</h1>
        <p className="md:text-2xl text-xl leading-9">{testimonials[currentTestimonialIndex].text}</p>
        <div className="flex items-center my-6">
          <img className="w-24 mr-2" src={testimonials[currentTestimonialIndex].image} alt="Author" />
          <div>
            <p className="author">{testimonials[currentTestimonialIndex].author}</p>
            <div>
              {[...Array(5)].map((_, index) => (
                <i key={index} style={{ color: "#00B67A" }} className="fas fa-star"></i>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
