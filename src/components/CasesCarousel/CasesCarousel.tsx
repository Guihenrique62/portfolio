import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";

const projects = [
  {
    title: 'UI Prime',
    imageUrl: 'https://framerusercontent.com/images/08ZGaWPJ1kEgIlXkXPOZdy244.png',
    link: '#',  // Link do projeto
  },
  {
    title: 'Fasters',
    imageUrl: 'https://framerusercontent.com/images/p3vMN5g61gFpuhWu2ePdFy3uXY.png',
    link: '#',
  },
  {
    title: 'Fallen Gear',
    imageUrl: 'https://framerusercontent.com/images/bmwMhVsusmq554FGBTHTeStrm2Q.png',
    link: '#',
  },
  {
    title: 'Outros Projetos',
    imageUrl: 'https://framerusercontent.com/images/9nKYMMb4eq2UeQCJC9FtKQHC9yk.png',
    link: '#',
  },
];

const ProjectCarousel = () => {
  return (
    <Swiper
      className="cases-carousel"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          {project.title}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectCarousel;
