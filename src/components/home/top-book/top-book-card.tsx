import Image from "next/image";
import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";

const TopBookCard = ({
  rank,
  title,
  imgUrl,
  totalChapter,
  readLink,
}: {
  rank: number;
  title: string;
  imgUrl: string;
  totalChapter: number;
  readLink: string;
}) => {
  return (
    <div className="px-4 flex gap-4 items-center">
      <span
        className={`font-semibold text-xl ${
          rank <= 3
            ? "text-white pb-1 border-b-4 border-theme-light"
            : "text-muted-dark"
        }`}
      >
        {rank < 10 ? `0${rank}` : rank}
      </span>
      <div className="border-b w-full py-4 border-muted-dark border-opacity-20 flex gap-4">
        <Link href={readLink}>
          <div className="w-[60px] h-[76px] flex-shrink-0 group ">
            <Image
              src={imgUrl}
              alt={`${title[0]}-card-image`}
              width={200}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        <div>
          <Link href={readLink}>
            <div className="text-sm font-semibold hover:text-theme-light transition-colors duration-200">
              {title}
            </div>
          </Link>
          <div className="flex items-end pt-2">
            <div className="bg-green-300 text-black font-bold px-2 py-1 rounded-[5px] flex gap-1 items-center text-xs">
              <span>
                <FiBookOpen />
              </span>
              {totalChapter}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBookCard;
