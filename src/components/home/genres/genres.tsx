import { GENRES } from "@/constant";
import { getRandomLightColor } from "@/lib/random-colors";
import Link from "next/link";
import { useState } from "react";

const BookGenres = () => {
  const [showMore, setShowMore] = useState(false);
  const displayedGenres = showMore ? GENRES : GENRES.slice(0, 21);

  return (
    <div className="">
      <div className="font-bold text-theme-light text-xl">Genres</div>
      <div className="bg-[#1b2229] p-2 sm:p-4 mt-4">
        <div className="grid grid-cols-2 xs:grid-cols-3">
          {displayedGenres.map((genre) => {
            const randomColor = getRandomLightColor();
            return (
              <Link href={""} key={genre}>
                <div
                  className="hover:bg-muted-darker px-3 py-2 rounded-[5px] truncate"
                  style={{ color: randomColor }}
                >
                  {genre}
                </div>
              </Link>
            );
          })}
        </div>
        <button
          className="w-full py-2 px-2 bg-muted-dark text-black font-semibold mt-4 rounded-[5px]"
          onClick={() => setShowMore(prev => !prev)}
        >
            {showMore ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
};

export default BookGenres;
