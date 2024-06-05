import DropdownCard from "@/components/global/dropdown-card";
import { backendBaseUrl } from "@/constant";
import { useToken } from "@/hooks/use-token";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useTransition } from "react";
import { FaHeart, FaUser } from "react-icons/fa";
import { FaBell, FaClockRotateLeft } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { resetToken } from "@/redux-state/get-token";
import cookies from 'js-cookie'

const UserProfileCard = ({
  handleProfileState,
}: {
  handleProfileState: () => void;
}) => {
  const [isLoading, startTransition] = useTransition();
  const router = useRouter();
  const accessToken = useToken('access')
  const dispatch = useDispatch();

  const handleLogout = () => {
    startTransition(async () => {
      try {
        const res = await fetch(`${backendBaseUrl}/logout`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${accessToken}`,
          },
          body: JSON.stringify({}),
        });

        const { success, error } = await res.json();

        if (error) {
          toast.error(error);
        } else {
          dispatch(resetToken());
          cookies.remove('accessToken');
          cookies.remove('refreshToken');

          console.log('accesstoken in logout', accessToken)
          toast.success(success);
          router.push("/login");
        }
      } catch (error) {
        toast.error("Something went wrong! try again");
      }
    });
  };

  return (
    <DropdownCard className="rounded-md h-auto cursor-default p-2 w-[250px] pb-4">
      <div>
        <div className="font-semibold leading-5">
          <div className="text-theme-light">Maish Malhotra</div>
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
          <div onClick={handleLogout}>
            <ProfileCardItem
              item="Log Out"
              link=""
              logo={<MdLogout />}
              handleProfileState={handleProfileState}
            />
          </div>
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
  handleProfileState,
}: {
  item: string;
  link: string;
  logo: ReactNode;
  handleProfileState?: () => void;
}) => {
  return (
    <Link href={link} onClick={handleProfileState}>
      <div className="flex gap-2 items-center bg-[#373647] hover:bg-[#454253] px-4 rounded-full py-1 text-sm hover:text-theme-light transition-colors duration-200">
        <span className="text-xs">{logo}</span>
        {item}
      </div>
    </Link>
  );
};
