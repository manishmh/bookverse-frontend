// !todo: implemetn open book fro component/open-book-annimatoin for hover effect on the image
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FiBookOpen } from "react-icons/fi";

const ContinueWatchingCard = ({
  imgUrl,
  title,
  currentPage = 0, 
  totalPage,
  readLink,
  currentChapter,
  totalChapter,
  children,
}: {
  imgUrl: string;
  title: string;
  currentPage?: number;
  totalPage: number;
  readLink: string;
  currentChapter?: number;
  totalChapter?: number;
  children?: ReactNode
}) => {
  const readPercentage = Math.round((currentPage / totalPage) * 100);

  return (
    <div className="maxw-[200px]">
      <div className="aspect-9-16 w-full relative group">
        <Image
          src={imgUrl}
          alt={`continue-watching-image-${title}`}
          width={500}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-md bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-all duration-200 grid place-items-center">
          <Link href={readLink}>
            <button className="px-4 md:px-6 my-2 md:my-0 border py-1.5 font-semibold bg-primary-light border-[#939DB6] text-white hover:bg-opacity-80 transition-colors duration-200">
              Read
            </button>
          </Link>
        </div>
        <div className="bg-gradient-to-t from-primary-light to-transparent absolute w-full h-[20%] bottom-0 flex items-end p-2">
          <div className="bg-green-300 text-black font-bold px-2 py-1 rounded-[5px] flex gap-1 items-center text-xs">
            <span>
              <FiBookOpen />
            </span>
            {totalChapter}
          </div>
        </div>
      </div>
      <div className="pt-2">
        <div className="truncate font-semibold">{title}</div>
        {!children && (
          <>
            <div className="mt-1 uppercase font-semibold text-sm text-muted-dark font-sans flex justify-between">
              <div className="">CH {currentChapter}</div>
              <div className="">
                <span className="text-theme-light capitalize">Page {currentPage}</span> / {totalPage}
              </div>
            </div>
            <div className="w-full h-1 mt-2 bg-muted-darker">
              <div
                className="h-full bg-theme-light transition-all duration-200"
                style={{ width: `${readPercentage}%` }}
              ></div>
            </div>
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export default ContinueWatchingCard;
