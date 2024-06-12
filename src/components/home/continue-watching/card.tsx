import Image from "next/image";
import { GiBookmark } from "react-icons/gi";

const ContinueWatchingCard = ({
  imgUrl,
  title,
  currentPage,
  totalPage,
  readLink,
  currentChapter,
  totalChapter,
}: {
  imgUrl: string;
  title: string;
  currentPage: number;
  totalPage: number;
  readLink: string;
  currentChapter: number;
  totalChapter: number;
}) => {
  return (
    <div className="w-full">
      <div className="aspect-9-16 max-w-[200px] relative">
        <Image
          src={imgUrl}
          alt={`continue-watching-image-${title}`}
          width={500}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="flex">
          <div className="bg-green-300 text-black font-semibold px-2 py-1 rounded-md flex gap-1 items-center absolute bottom-2 left-2 text-sm">
            <span>
              <GiBookmark />
            </span>
            {totalChapter}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueWatchingCard;
