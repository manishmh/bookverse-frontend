// todo: conditionally render books on activeTopOptions as user selects diffrent filter. use swtich case statement to return the correct data occording to the active option.

import { latestChaptersData } from "@/constant";
import { useState } from "react";
import TopBookCard from "./top-book-card";

const TopBook = () => {
  interface activeTopOptionsType {
    today: boolean;
    week: boolean;
    month: boolean;
  }

  const TopOptionInitalValue = {
    today: true,
    week: false,
    month: false,
  };

  const [activeTopOption, setActiveTopOption] =
    useState<activeTopOptionsType>(TopOptionInitalValue);

  const handleActiveTopOption = (option: string) => {
    setActiveTopOption({
      today: option === "today",
      week: option === "week",
      month: option === "month",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="font-bold text-theme-light text-xl">Top 10</div>
        <div className="">
          <button
            onClick={() => handleActiveTopOption("today")}
            className={`px-3 py-1 rounded-l-[5px] ${
              activeTopOption.today
                ? "bg-theme-light text-black"
                : "text-white bg-theme-darker"
            }`}
          >
            Today
          </button>
          <button
            onClick={() => handleActiveTopOption("week")}
            className={`px-3 py-1 ${
              activeTopOption.week
                ? "bg-theme-light text-black"
                : "text-white bg-theme-darker"
            }`}
          >
            Week
          </button>
          <button
            onClick={() => handleActiveTopOption("month")}
            className={`px-3 py-1 rounded-r-[5px] ${
              activeTopOption.month
                ? "bg-theme-light text-black"
                : "text-white bg-theme-darker"
            }`}
          >
            Month
          </button>
        </div>
      </div>
      <div className="bg-theme-darker mt-7 py-2">
        {activeTopOption.today ? (
          <>
            {latestChaptersData.map((item, index) => (
              <TopBookCard
                key={`${item.title[0]}-${index}`}
                rank={index + 1}
                title={item.title}
                imgUrl={item.imgUrl}
                totalChapter={item.totalChapter}
                readLink={item.readLink}
              />
            ))}
          </>
        ) : (
          <div>Data fetch not written.</div>
        )}
      </div>
    </div>
  );
};

export default TopBook;
