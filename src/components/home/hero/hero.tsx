import { homeCarouselDummyData } from "@/constant";
import Image from "next/image";
import HeroDetails from "./hero-details";
import HomeHeroGradient from "./home-hero-gradient";

import { A11y, Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

const Hero = () => {

  return (
    <div className="relative max-w-screen-3xl mx-auto bg-primary-light z-0">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation 
          modules={[Pagination, A11y, Autoplay, Navigation]}
          autoplay
          loop
          className=""
        >
          {homeCarouselDummyData.map((manga, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-400 w-full relative flex justify-end transition-all duration-500">
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
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default Hero;
