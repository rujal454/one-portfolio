import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import java from "../assets/javascript.png";
import main3 from "../assets/frame3.jpg";
import main2 from "../assets/frame2.jpg"
import main from "../assets/med.jpg";

const divStyle = {
  
  display: 'flex',
  alignItems: 'center',
  backgroundSize: 'cover',
  height: '850px',
};

const slideImages = [
  {
    image:main,
      
  },
  {
   image:main2,
  },
  {
   image:main3,
  },
];

const Slideshow = () => {
  return (
    <div>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index} style={{ ...divStyle, 'backgroundImage': `url(${slideImage.image})` }}>
              <span  onClick={slideImage.action}>{slideImage.caption}</span>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Slideshow;
