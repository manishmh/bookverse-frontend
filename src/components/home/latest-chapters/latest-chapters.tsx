import CardContainerHeader from "@/components/global/card-container-header";
import { latestChaptersData } from "@/constant";
import ContinueWatchingCard from "../continue-watching/card";

const LatestChapters = () => {
  return (
    <div className="px-3 max-w-screen-3xl mx-auto">
      <div className="">
        <CardContainerHeader
          title="Latest Chapters"
          viewLink=""
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {latestChaptersData.map((item, index) => (
            <ContinueWatchingCard
              key={`${item.title[0]}-${index}`}
              imgUrl={item.imgUrl}
              title={item.title}
              totalChapter={item.totalChapter}
              totalPage={item.totalPage}
              readLink={item.readLink}
            >
              <div className="capitalize text-sm text-muted-dark font-sans mt-1 flex gap-2 items-center">
                <span>Manga</span>
                <div className="w-1 h-1 rounded-full bg-muted-dark"></div>
                <span>{item.totalPage}</span>
              </div>
            </ContinueWatchingCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestChapters;
