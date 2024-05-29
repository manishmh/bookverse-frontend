import Image from "next/image";
import Link from "next/link";

const DropdownComponent = ({
  img,
  engTitle,
  jpTitle,
  date,
  type,
  link,
}: {
  img: string;
  engTitle: string;
  jpTitle: string;
  date: string;
  type: string;
  link: string;
}) => {
  return (
    <Link href={link}>
      <div className="p-2 w-full flex gap-3 hover:bg-gray-900 transition-colors duration-200 group">
        <div className="w-[50px] h-[70px] overflow-hidden flex-shrink-0">
          <Image
            alt={`search-image-${engTitle}`}
            src={img}
            width={50}
            height={70}
            className=" object-cover"
          />
        </div>
        <div className="truncate -translate-y-[5px]">
          <h1 className="font-semibold truncate group-hover:text-muted-light transition-colors duration-200">{ engTitle }</h1>
          <h2 className="truncate text-sm text-[#8d899d]">{ jpTitle }</h2>
          <div className="text-sm text-[#8c889b] flex items-center gap-2 ">
            <span>{date}</span>
            <div className="w-1.5 aspect-square rounded-full bg-gray-700 flex-shrink-0"></div>
            <span className="text-[#9e9cb5]"> {type} </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DropdownComponent;
