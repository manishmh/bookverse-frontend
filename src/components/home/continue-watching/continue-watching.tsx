import CardContainerHeader from "@/components/global/card-container-header";
import { FaClockRotateLeft } from "react-icons/fa6";
import ContinueWatchingCard from "./card";
import { continueWatchingData } from "@/constant";

const ContinueWatching = () => {
  return (
    <div className="px-3 max-w-screen-3xl mx-auto">
      <div className="">
        <CardContainerHeader
          logo={<FaClockRotateLeft />}
          title="Continue Reading"
          viewLink=""
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {continueWatchingData.map((item, index) => (
            <ContinueWatchingCard
              key={index}
              imgUrl={item.imgUrl}
              title={item.title}
              currentPage={item.currentPage}
              totalPage={item.totalPage}
              readLink={item.readLink}
              currentChapter={item.currentChapter}
              totalChapter={item.totalChapter}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContinueWatching;
