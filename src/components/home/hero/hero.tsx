"use client";

import Image from "next/image";
import HeroDetails from "./hero-details";
import HomeHeroGradient from "./home-hero-gradient";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { top10Manga } from "@/constant";
import {
  getMangaInfoWithId,
  getMangaInfoWithName,
} from "@/redux-state/manga-data/get-manga";
import { useEffect, useRef, useState, useTransition } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PulseAnnimation from "./pulse-annimation";

const Hero = () => {
  const [spotlightMangaData, setSpotlightMangaData] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();
  const hasFetchedData = useRef(false);

  console.log(spotlightMangaData);

  useEffect(() => {
    if (hasFetchedData.current) return;
    hasFetchedData.current = true;

    startTransition(async () => {
      const fetchedMangaIds = new Set();
      const fetchedMangaData = [];

      for (const mangaName of top10Manga) {
        const searchResult = await getMangaInfoWithName(mangaName);
        if (searchResult?.results && searchResult.results.length > 0) {
          const mangaId = searchResult.results[0].id;
          if (!fetchedMangaIds.has(mangaId)) {
            const mangaInfo = await getMangaInfoWithId(mangaId);
            if (mangaInfo) {
              fetchedMangaData.push({
                id: mangaInfo.id,
                title: mangaInfo.title,
                image: mangaInfo.image,
                description: mangaInfo.description,
                releaseDate: mangaInfo.releaseDate,
                chapters: mangaInfo.chapters?.length,
                status: mangaInfo.status,
                genres: mangaInfo.genres,
              });
              fetchedMangaIds.add(mangaId);
            }
          }
        }
      }

      setSpotlightMangaData(fetchedMangaData);
    });
  }, []);

  return (
    <div className="relative max-w-screen-3xl mx-auto bg-primary-light z-0">
      {isPending && <PulseAnnimation />}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        modules={[Pagination, A11y, Autoplay, Navigation]}
        autoplay
        // loop
        className=""
      >
        {spotlightMangaData.map((manga, index) => (
          <SwiperSlide key={manga.id}>
            <div className="bg-gray-400 w-full relative flex justify-end transition-all duration-500">
              <div className={`w-full md:w-9/12 h-full absolute bg-gray-400`}>
                <Image
                  src={manga.image}
                  alt={`hero-bg-image-${index}`}
                  width={1920}
                  height={500}
                  quality={100}
                  priority
                  className="w-full lazyload h-full object-cover object-center md:object-right"
                />
              </div>
              <HomeHeroGradient />
              <HeroDetails
                rank={index + 1}
                date={manga.releaseDate || ""}
                title={manga.title || ""}
                language={manga.status || ""}
                volumes={manga.genres[0]}
                chapters={manga.chapters}
                description={manga.description ? manga.description.en : ""}
                readLink={`/read/${manga.id}` || ""}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
