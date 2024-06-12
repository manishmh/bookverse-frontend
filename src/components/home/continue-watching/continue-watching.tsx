import CardContainerHeader from "@/components/global/card-container-header";
import { FaClockRotateLeft } from "react-icons/fa6";
import ContinueWatchingCard from "./card";

const ContinueWatching = () => {
  return (
    <div className="px-3 max-w-screen-3xl mx-auto">
      <CardContainerHeader
        logo={<FaClockRotateLeft />}
        title="Continue Reading"
        viewLink=""
      />
      <div>
        <ContinueWatchingCard
          imgUrl="/onePiece.jpg"
          title="Mushoku Tensei: Jobless Reincarnation Season 2 Part 2"
          currentPage={20}
          totalPage={30}
          readLink=""
          currentChapter={56}
          totalChapter={170}
        />
      </div>
    </div>
  );
};

export default ContinueWatching;
