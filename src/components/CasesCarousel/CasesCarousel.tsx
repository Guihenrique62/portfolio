import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; // Importação do CSS da navegação
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "UI Prime",
    imageUrl: "https://framerusercontent.com/images/08ZGaWPJ1kEgIlXkXPOZdy244.png",
    link: "#",
  },
  {
    title: "Fasters",
    imageUrl: "https://framerusercontent.com/images/p3vMN5g61gFpuhWu2ePdFy3uXY.png",
    link: "#",
  },
  {
    title: "Fallen Gear",
    imageUrl: "https://framerusercontent.com/images/bmwMhVsusmq554FGBTHTeStrm2Q.png",
    link: "#",
  },
  {
    title: "Outros Projetos",
    imageUrl: "https://framerusercontent.com/images/9nKYMMb4eq2UeQCJC9FtKQHC9yk.png",
    link: "#",
  },
];

const ProjectCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (      
      <>
        <Swiper
          className="cases-carousel"
          spaceBetween={50}
          slidesPerView={2}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}
          modules={[Navigation]}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-card">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <a href={project.link} className="project-link">
                    Ver projeto
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center items-center gap-4 p-4">


          <button ref={prevRef} 
          className="
          bg-slate-300 hover:bg-black hover:text-white text-black rounded-full justify-center items-center transition-colors duration-300 flex
          py-2 px-2 h-12 w-full gap-2
          lg:h-10 lg:w-48 lg:text-base
          md:h-10 md:w-48 md:text-base
          sm:h-10 sm:w-48 sm:text-base
          "
          >
            <ChevronLeft />
          </button>

          <button ref={nextRef}
          className="
          bg-slate-300 hover:bg-black hover:text-white text-black rounded-full justify-center items-center transition-colors duration-300 flex
          py-2 px-2 h-12 w-full gap-2
          lg:h-10 lg:w-48 lg:text-base
          md:h-10 md:w-48 md:text-base
          sm:h-10 sm:w-48 sm:text-base
          "
          >
            <ChevronRight />
          </button>
        </div>
      </>
  );
};

export default ProjectCarousel;
