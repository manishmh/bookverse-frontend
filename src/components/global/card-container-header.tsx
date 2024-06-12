import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { ReactNode } from "react";

const CardContainerHeader = ({
  logo,
  title,
  viewLink,
}: {
  logo: ReactNode;
  title: string;
  viewLink: string;
}) => {
  return (
    <div className="flex justify-between items-center py-8 ">
      <div className="flex gap-2 items-center md:text-xl font-semibold text-theme-light">
        <span>{logo}</span>
        <span>{title}</span>
      </div>
      <Link href={viewLink}>
        <div className="flex gap-1 items-center text-muted-dark text-sm group">
          View more{" "}
          <span className="group-hover:translate-x-1 transition-transform duration-200 text-xs">
            <FaChevronRight />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CardContainerHeader;
