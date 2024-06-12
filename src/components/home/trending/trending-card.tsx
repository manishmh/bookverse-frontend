import { carouselItemGap } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { carouselLength } from "./trending";
import { FaPlus } from "react-icons/fa6";

const TrendingCard = ({
  item,
  tIndex,
  index,
}: {
  item: any;
  tIndex: number;
  index: number;
}) => {
  return (
    <div
      className={`w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 text-xl aspect-7-8 flex-shrink-0 transition-all duration-300 ${
        index !== carouselLength - 1 && "pr-4"
      }`}
      style={{
        transform: `translateX(calc(${tIndex} * 100% + ${tIndex} * ${carouselItemGap}px))`,
      }}
    >
      <div className="relative w-full h-full group">
        {/* <div className="absolute right-0 left-0 bottom-0 top-1/2 group-hover:top-0 transition-all duration-200 bg-gradient-to-t from-primary-dark to-transparent via-primary-dark via-10% group-hover:via-30% flex items-end group-hover:items-start">
          <div className="flex flex-col justify-end h-auto px-2 py-2 w-full">
            <h1 className=" text-base font-semibold">{item.title}</h1>
          </div>
        </div> */}
        <div className="absolute right-1/2 left-0 bottom-0 top-0 group-hover:right-0 transition-all duration-200 bg-gradient-to-r from-primary-dark to-transparent via-primary-dark via-10% group-hover:via-50% ">
          <div className="relative flex w-full overflow-hidden max-h-full">
            <div className="vertical-text font-semibold py-2 md:pt-3 pl-1 text-gray-400 group-hover:text-gray-200 truncate text-xs md:text-lg ">
              {item.title}
            </div>
            <div className="w-11/12 -translate-x-[130%] group-hover:translate-x-1 pr-2 py-2 absolute right-0 bottom-0 top-0 px-2 cursor-default">
              <p
                className="text-base text-muted-light mb-6"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 4,
                  overflow: "hidden",
                }}
              >
                {item.description}
              </p>
              <div className="flex items-center gap-2">
                <Link href={""} className="w-full">
                  <button className="w-full text-base px-4 md:px-6 my-2 md:my-0 border py-1.5 font-semibold bg-primary-dark  border-[#939DB6] text-white hover:bg-transparent transition-colors duration-200">
                    Read now
                  </button>
                </Link>
                <div className="aspect-square w-12 bg-white rounded-full grid place-items-center text-primary-dark cursor-pointer hover:text-primary-light">
                    <FaPlus />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={item.imageUrl}
          alt={`trending-card-image-${item.imageUrl}`}
          width={500}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default TrendingCard;
