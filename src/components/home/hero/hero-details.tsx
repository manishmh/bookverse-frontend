import Link from "next/link";
import { FaCalendar } from "react-icons/fa";

const HeroDetails = ({
  rank,
  title,
  date,
  volumes,
  chapters,
  language,
  description,
  readLink,
}: {
  rank?: number;
  title: string;
  date: string;
  volumes: number;
  chapters: number;
  language: string;
  description: string;
  readLink: string;
}) => {
  return (
    <div className="bg-opacity-20 flex items-end px-3 pb-16 pt-28 z-0 w-full h-[40vh] md:h-auto md:min-h-[70vh] xl:min-h-[80vh] 3xl:min-h-[900px]">
      <div className="flex flex-col gap-1 md:gap-6">
        <div>
          <div className="text-theme-light text-sm md:text-base pb-2">
            #{rank} Ranking
          </div>
          <div
            className="text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold w-full md:w-1/2  pb-1"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
            }}
          >
            {title}
          </div>
        </div>
        <div className="flex gap-4">
          <span className="gap-2 items-center hidden md:flex">
            <FaCalendar className="text-sm" />
            <span>{date}</span>
          </span>
          <div className="gap-2 text-xs hidden md:flex">
            <span className="bg-theme-light font-semibold py-1 px-2 text-primary-light rounded flex items-center justify-center capitalize">
              {language}
            </span>
            <span className="bg-blue-300 text-primary-dark capitalize px-2 rounded grid place-items-center">
              vol {volumes}
            </span>
            <span className="bg-green-300 text-primary-dark capitalize px-2 rounded grid place-items-center">
              cha {chapters}
            </span>
          </div>
        </div>
        <div className="hidden md:block text-[#A1A1A8]">
          <div
            className="text-base w-1/2"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
            }}
          >
            {description}
          </div>
        </div>
        <Link href={readLink}>
          <button className="px-4 md:px-6 my-2 md:my-0 border py-1.5 font-semibold bg-primary-dark  border-[#939DB6] text-white hover:bg-transparent transition-colors duration-200">
            Read now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroDetails;
