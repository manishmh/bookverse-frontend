import { homeCarouselDummyData } from "@/constant";
import Image from "next/image";
import HeroDetails from "./hero-details";
import HomeHeroGradient from "./home-hero-gradient";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Hero = () => {
  return (
    <div className="relative max-w-screen-3xl mx-auto bg-primary-light">
      <div>
        {homeCarouselDummyData.map((manga, index) => (
          <div
            className="bg-gray-400 w-full relative flex justify-end transition-all duration-500 "
            key={index}
          >
            <Image
              src={manga.imageUrl}
              alt={`hero-bg-image-${index}`}
              width={1920}
              height={500}
              className="w-full lazyload md:w-9/12 h-full object-cover object-center md:object-right absolute"
            />
            <HomeHeroGradient />
            <HeroDetails
              rank={manga.rank}
              date={manga.date}
              title={manga.title}
              language={manga.language}
              volumes={manga.volumes}
              chapters={manga.chapters}
              description={manga.description}
              readLink={manga.readLink || "/default-link"}
            />
          </div>
        ))}
        <div className="w-full h-[300px] bg-primary-light"></div>
      </div>
    </div>
  );
};

export default Hero;
