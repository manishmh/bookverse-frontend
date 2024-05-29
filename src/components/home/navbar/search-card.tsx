import DropdownCard from "@/components/global/dropdown-card";
import { selectSearchInput } from "@/redux-state/get-search-input";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import DropdownComponent from "./dropdown-component";

const SearchCard = ({
  searchClick,
  setSearchClick,
}: {
  searchClick: boolean;
  setSearchClick: Dispatch<SetStateAction<boolean>>;
}) => {
  const searchInput = useSelector(selectSearchInput);

  return (
    <DropdownCard className="w-full absolute top-full translate-y-0 h-auto">
      <div>
        <DropdownComponent
          img="https://cdn.noitatnemucod.net/thumbnail/100x200/100/1f06eb0baf5520aa639b546fc189400d.jpg"
          engTitle="Demon Slayer: Kimetsu no Yaiba Hashira Training Arc"
          jpTitle="Kimetsu no yaiba: Hashira Geiko-hen"
          date="Feb 24 2024"
          type="action"
          link="/demon"
        />
        <DropdownComponent
          img="https://cdn.noitatnemucod.net/thumbnail/100x200/100/1f06eb0baf5520aa639b546fc189400d.jpg"
          engTitle="Demon Slayer: Kimetsu no Yaiba Hashira Training Arc"
          jpTitle="Kimetsu no yaiba: Hashira Geiko-hen"
          date="Feb 24 2024"
          type="action"
          link="/demon"
        />
        <DropdownComponent
          img="https://cdn.noitatnemucod.net/thumbnail/100x200/100/1f06eb0baf5520aa639b546fc189400d.jpg"
          engTitle="Demon Slayer: Kimetsu no Yaiba Hashira Training Arc"
          jpTitle="Kimetsu no yaiba: Hashira Geiko-hen"
          date="Feb 24 2024"
          type="action"
          link="/demon"
        />

        <Link href="">
          <div className="flex gap-2 items-center group justify-center px-2 py-4 bg-theme text-black">
            View all results{" "}
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              <FaChevronRight />
            </span>
          </div>
        </Link>
      </div>
    </DropdownCard>
  );
};

export default SearchCard;
