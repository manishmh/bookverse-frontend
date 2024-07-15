"use client";

import VisibleChildrenCount from "@/components/global/visible-child-count";
import { carouselItemGap } from "@/constant";
import { fetchPopularManga } from "@/redux-state/manga-data/get-popular-manga";
import { AppDispatch, RootState } from "@/store/redux-store";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import TrendingCard from "./trending-card";
import { data } from "@/constant";

const Trending = () => {
  const [tIndex, setTIndex] = useState<number>(0);
  const [trendingCarouselChildCount, setTrendingCarouselChildCount] =
    useState(0);
  const carouselScrolllength: number = 4;

  const dispatch = useDispatch<AppDispatch>();
  // const { data, status, error } = useSelector(
  //   (state: RootState) => state.popularManga
  // );
  const trendingData = data;

  const carouselLength: number = trendingData?.length ?? 0;

  // useEffect(() => {
  //   dispatch(fetchPopularManga());
  // }, [dispatch]);

  useEffect(() => {
    const calculateVisibleChildren = () => {
      requestAnimationFrame(() => {
        const count = VisibleChildrenCount("trending-swiper");
        setTrendingCarouselChildCount(count);
      });
    };

    calculateVisibleChildren();
    window.addEventListener("resize", calculateVisibleChildren);

    return () => {
      window.removeEventListener("resize", calculateVisibleChildren);
    };
  }, []);

  const handleRightClick = () => {
    if (-tIndex <= carouselLength - (trendingCarouselChildCount)) {
      setTIndex(tIndex - carouselScrolllength);
    }
  };
  const handleLeftClick = () => {
    if (tIndex < 0) {
      setTIndex(tIndex + carouselScrolllength);
    }
  };

  // if (status === "loading") return <p>Loading...</p>;
  // if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="bg-primary-light w-full px-3 max-w-screen-3xl mx-auto pb-8">
      <h1 className="font-semibold text-theme-light text-xl md:text-2xl pb-6">
        Trending
      </h1>
      <div className="w-full flex relative">
        <div className=" flex flex-shrink-0 w-full md:w-[95%] xl:w-[97%] overflow-x-hidden">
          <div
            className="flex w-full trending-swiper"
            style={{ gap: carouselItemGap }}
          >
            <div className="bg-muted-darker w-full aspect-[19/8]"></div>
            {trendingData &&
              trendingData.map((item, index) => (
                <TrendingCard
                  key={index}
                  tIndex={tIndex}
                  item={item}
                  index={index}
                  carouseLength={carouselLength}
                />
              ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full flex-col gap-2 hidden md:flex items-end">
          <button
            className={`border-none outline-none bg-[#2f3348] h-full grid place-items-center rounded-xl px-3 transition-colors duration-200  ${
              -tIndex === carouselLength - 6
                ? "text-gray-500"
                : "hover:bg-theme-light cursor-pointer"
            }`}
            onClick={handleRightClick}
          >
            <FaChevronRight className="text-xl" />
          </button>
          <button
            className={`border-none outline-none bg-[#2f3348] h-full grid place-items-center rounded-xl px-3 transition-colors duration-200  ${
              tIndex >= 0
                ? "text-gray-500"
                : "hover:bg-theme-light cursor-pointer"
            }`}
            onClick={handleLeftClick}
          >
            <FaChevronLeft className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trending;
