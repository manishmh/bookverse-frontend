import DropdownCard from "@/components/global/dropdown-card";
import Link from "next/link";
import { ReactNode } from "react";
import { FaHeart, FaUser } from "react-icons/fa";
import { FaBell, FaClockRotateLeft } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";

const UserProfileCard = ({
  handleProfileState,
}: {
  handleProfileState: () => void;
}) => {
  return (
    <DropdownCard className="rounded-md h-auto cursor-default p-2 w-[250px] pb-4">
      <div>
        <div className="font-semibold leading-5">
          <div className="text-theme">Maish Malhotra</div>
          <div className="font-medium text-xs text-muted-dark">
            manishmh982@gmail.com
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <ProfileCardItem 
            item="Profile" 
            link="/profile" 
            logo={<FaUser />} 
            handleProfileState={handleProfileState}
          />
          <ProfileCardItem
            item="Continue Reading"
            link="/profile"
            logo={<FaClockRotateLeft />}
            handleProfileState={handleProfileState}
          />
          <ProfileCardItem
            item="Read list"
            link="/profile"
            logo={<FaHeart />}
            handleProfileState={handleProfileState}
          />
          <ProfileCardItem
            item="Notification"
            link="/profile"
            logo={<FaBell />}
            handleProfileState={handleProfileState}
          />
          <ProfileCardItem
            item="Settings"
            link="/profile"
            logo={<IoMdSettings />}
            handleProfileState={handleProfileState}
          />
          <ProfileCardItem 
            item="Log Out" 
            link="/profile" 
            logo={<MdLogout />} 
            handleProfileState={handleProfileState}
          />
        </div>
      </div>
    </DropdownCard>
  );
};

export default UserProfileCard;

const ProfileCardItem = ({
  item,
  link,
  logo,
  handleProfileState
}: {
  item: string;
  link: string;
  logo: ReactNode;
  handleProfileState: () => void;
}) => {
  return (
    <Link href={link} onClick={handleProfileState}>
      <div className="flex gap-2 items-center bg-[#373647] hover:bg-[#454253] px-4 rounded-full py-1 text-sm hover:text-theme transition-colors duration-200">
        <span className="text-xs">{logo}</span>
        {item}
      </div>
    </Link>
  );
};
