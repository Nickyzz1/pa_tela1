// components/Carousel.tsx
"use client";

import React, { Component } from 'react';
import Slider from 'react-slick';

interface Slide {
  id: number;
  title: string;
  image: string;
}

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const slides: Slide[] = [
      { id: 1, title: 'Slide 1', image: '../app/assets/img/warriorof1.jpg' },
      { id: 2, title: 'Slide 2', image: '../app/assets/img/warrior2.jpg' }
    ];

    return (
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="flex justify-center items-center h-64 bg-gray-200 relative">
            <img src={slide.image} alt={slide.title} className="object-cover h-full w-full" />
            <h3 className="absolute text-white text-xl">{slide.title}</h3>
          </div>
        ))}
      </Slider>
    );
  }
}

export default Carousel;
