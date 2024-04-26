import React, { useState } from 'react';
import './Hover_Card.css'; // Import CSS for styling

const Card = ({ image, frontHeading, backHeading, backParagraph }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div  style={{"margin" :"10px"}} className={`card ${flipped ? 'flipped' : ''} md:mb-0 mb-3 md:m-0  m-auto `} onClick={handleFlip}>
      <div className="card-inner">
        <div className="card-front">
          <img src={image} alt="The Readsy Author Services" />
           <h2  className='text-xl' >{frontHeading}</h2>
        </div>
        <div className="card-back">
          <h2 className='text-xl font-bold'  >{backHeading}</h2>
          <p>{backParagraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
