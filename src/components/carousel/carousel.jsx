import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './carousel.module.css'
import img1 from "./IMG_5323.JPG";
import ModalImg from '../modalImg/modalImg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className={style.item}>
      <ModalImg className={style.modal} img={img1}/>
      </Carousel.Item>
      <Carousel.Item>
      <ModalImg img={img1}/>
      </Carousel.Item>
      <Carousel.Item>
      <ModalImg img={img1}/>
      </Carousel.Item>
    </Carousel>
  );
}
 
export default ControlledCarousel;