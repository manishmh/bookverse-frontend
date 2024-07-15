import { carouselItemGap } from "@/constant";
import { RootState } from "@/store/redux-store";
import Image from "next/image";
import Link from "next/link";
import { FaLanguage } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { getMangaInfoWithId } from "@/redux-state/manga-data/get-manga";

const TrendingCard = ({
  item,
  tIndex,
  index,
  carouseLength,
}: {
  item: any;
  tIndex: number;
  index: number;
  carouseLength: number;
}) => {
  const [mangaImage, setMangaImage] = useState<string>("")

  const { status } = useSelector((state: RootState) => state.popularManga);
  const getJapaneseTitle = () => {
    const jpTitle = item.altTitles.find((title: any) => title.ja).ja;
    if (jpTitle) {
      return (
        <div>
          <span className="text-muted-dark truncate">Japanese : </span>
          {jpTitle}
        </div>
      );
    } else return null;
  };

  const altTitlesLength = item.altTitles.length;

  useEffect(() => {
    const getMangaInfo = async () => {
      const mangaData = await getMangaInfoWithId(item.id);
      setMangaImage(mangaData?.image || "");
    };

    getMangaInfo();
  }, [item.id]);

  return (
    <div
      className={`w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 text-xl aspect-7-8 flex-shrink-0 transition-all duration-300 ${
        index !== carouseLength - 1 && "pr-4"
      }`}
      style={{
        transform: `translateX(calc(${tIndex} * 100% + ${tIndex} * ${carouselItemGap}px))`,
      }}
    >
      {status === "loading" && (
        <div className="bg-muted-darker h-full w-full animate-pulse"></div>
      )}
      <div className="relative w-full h-full group">
        <div className="absolute right-1/2 left-0 bottom-0 top-0 group-hover:right-0 transition-all duration-200 bg-gradient-to-r from-primary-dark to-transparent via-primary-dark via-10% group-hover:via-50% ">
          <div className="relative flex w-full overflow-hidden h-full">
            <div className="vertical-text font-semibold py-2 pl-1 text-gray-500 group-hover:text-gray-200 truncate text-xs md:text-base tracking-[-4px]">
              {item.title}
            </div>
            <div className="w-11/12 -translate-x-[150%] group-hover:translate-x-1 pr-2 py-2 pt-[10px] absolute right-0 bottom-0 top-0 px-2 cursor-default space-y-3 line-clamp-5">
              <p
                className="text-xs xl:text-sm text-muted-light "
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                  overflow: "hidden",
                }}
              >
                {item.description}
              </p>
              <div className="flex text-xs items-center gap-2 font-semibold">
                <div className="bg-green-400 px-2 rounded-l-[5px] text-black flex items-center gap-1">
                  <FaLanguage className="text-lg" />
                  {altTitlesLength}
                </div>
                <div className="bg-purple-400 px-2 rounded-r-[5px] text-black flex items-center gap-1">
                  Eng
                </div>
              </div>
              <div className="text-xs">
                {getJapaneseTitle()}
                <div>
                  <span className="text-muted-dark">Status : </span>
                  {item.status}
                </div>
                <div>
                  <span className="text-muted-dark">Relsease : </span>
                  {item.releaseDate}
                </div>
                <div>
                  <span className="text-muted-dark">Content rating : </span>
                  {item.contentRating}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link href={""} className="w-full">
                  <button className="w-full text-xs xl:text-sm px-4 md:px-6 my-2 md:my-0 border py-1.5 font-semibold bg-primary-dark  border-[#939DB6] text-white hover:bg-transparent transition-colors duration-200">
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
          src={mangaImage}
          alt={`trending-card-image-${item.title}`}
          width={500}
          height={600}
          quality={10}
          placeholder="blur"
          blurDataURL={`<div className="animate-pulse w-full h-full"></div>`}
          className="w-full h-full object-cover text-xs lazyload"
        />
      </div>
    </div>
  );
};

export default TrendingCard;

{
  /* <div className="absolute right-0 left-0 bottom-0 top-1/2 group-hover:top-0 transition-all duration-200 bg-gradient-to-t from-primary-dark to-transparent via-primary-dark via-10% group-hover:via-30% flex items-end group-hover:items-start">
          <div className="flex flex-col justify-end h-auto px-2 py-2 w-full">
            <h1 className=" text-base font-semibold">{item.title}</h1>
          </div>
        </div> */
}
