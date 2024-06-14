import { carouselItemGap, homeCarouselDummyData } from "@/constant";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TrendingCard from "./trending-card";
import VisibleChildrenCount from "@/components/global/visible-child-count";

export const carouselLength: number = homeCarouselDummyData.length;

const Trending = () => {
  const [tIndex, setTIndex] = useState<number>(0);
  const [trendingCarouselChildCount, setTrendingCarouselChildCount] = useState(0);
  const carouselScrolllength: number = 3;

  const handleRightClick = () => {
    if (-tIndex <= carouselLength - (trendingCarouselChildCount + 2)) {
      setTIndex(tIndex - carouselScrolllength);
    }
  };
  const handleLeftClick = () => {
    if (tIndex < 0) {
      setTIndex(tIndex + carouselScrolllength);
    }
  };

  useEffect(() => {
    const count = VisibleChildrenCount('trending-swiper');
    setTrendingCarouselChildCount(count);
  }, []);

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
            {homeCarouselDummyData.map((item, index) => (
              <TrendingCard
                key={index}
                tIndex={tIndex}
                item={item}
                index={index}
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
