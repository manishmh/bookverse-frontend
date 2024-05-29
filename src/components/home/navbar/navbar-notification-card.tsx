import Image from "next/image";
import Link from "next/link";
import DropdownCard from "../../global/dropdown-card";

const NavbarNotificationCard = ({
  handleNotificationState,
}: {
  handleNotificationState: () => void;
}) => {
  return (
    <DropdownCard  className="rounded-md h-auto cursor-default overflow-hidden -right-10 xs:right-0">
      <div className="h-full relative">
        <div className="max-h-[450px] overflow-y-auto scroll-smooth">
          <SingleNotification
            image="https://cdn.noitatnemucod.net/thumbnail/100x200/100/1f06eb0baf5520aa639b546fc189400d.jpg"
            title="Demon Slayer: Kimetsu no Yaiba Hashira Training Arc"
            releaseTime={16}
            redirectUrl="/ad"
            handleNotificationState={handleNotificationState}
          />
          <SingleNotification
            image="https://cdn.noitatnemucod.net/thumbnail/100x200/100/1f06eb0baf5520aa639b546fc189400d.jpg"
            title="Demon Slayer: Kimetsu no Yaiba Hashira Training Arc"
            releaseTime={16}
            redirectUrl="/ad"
            handleNotificationState={handleNotificationState}
          />
          <SingleNotification
            image="https://cdn.noitatnemucod.net/thumbnail/100x200/100/1f06eb0baf5520aa639b546fc189400d.jpg"
            title="Demon Slayer: Kimetsu no Yaiba Hashira Training Arc"
            releaseTime={16}
            redirectUrl="/ad"
            handleNotificationState={handleNotificationState}
          />
          <SingleNotification
            image="https://cdn.noitatnemucod.net/thumbnail/100x200/100/1f06eb0baf5520aa639b546fc189400d.jpg"
            title="Demon Slayer: Kimetsu no Yaiba Hashira Training Arc"
            releaseTime={16}
            redirectUrl="/ad"
            handleNotificationState={handleNotificationState}
          />
          <SingleNotification
            image="https://cdn.noitatnemucod.net/thumbnail/100x200/100/1f06eb0baf5520aa639b546fc189400d.jpg"
            title="Demon Slayer: Kimetsu no Yaiba Hashira Training Arc"
            releaseTime={16}
            redirectUrl="/ad"
            handleNotificationState={handleNotificationState}
          />
          <SingleNotification
            image="https://cdn.noitatnemucod.net/thumbnail/100x200/100/1f06eb0baf5520aa639b546fc189400d.jpg"
            title="Demon Slayer: Kimetsu no Yaiba Hashira Training Arc"
            releaseTime={16}
            redirectUrl="/ad"
            handleNotificationState={handleNotificationState}
          />
          <SingleNotification
            image="https://cdn.noitatnemucod.net/thumbnail/100x200/100/1f06eb0baf5520aa639b546fc189400d.jpg"
            title="Demon Slayer: Kimetsu no Yaiba Hashira Training Arc"
            releaseTime={16}
            redirectUrl="/ad"
            handleNotificationState={handleNotificationState}
          />
        </div>
        <div className="bg-card-bg border-t border-card-border">
          <Link href="">
            <div className="text-sm text-theme text-center py-3 hover:bg-gray-900 transition-colors duration-200">
              View all
            </div>
          </Link>
        </div>
      </div>
    </DropdownCard>
  );
};

export default NavbarNotificationCard;

export const SingleNotification = ({
  image,
  title,
  releaseTime,
  redirectUrl,
  handleNotificationState,
}: {
  image: string;
  title: string;
  releaseTime: number;
  redirectUrl: string;
  handleNotificationState: () => void;
}) => {
  return (
    <Link href={redirectUrl} onClick={handleNotificationState}>
      <div className="p-3 flex gap-3 border-b bg-card-bg border-[#3d516f] border-opacity-50 hover:bg-gray-900 transition-colors duration-200">
        <div className="w-9 h-12 overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt="notification-book-logo"
            width={50}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="">
          <div className="text-xs font-semibold text-gray-200 -translate-y-[3px]">
            {title} - Episode 3 SUB available now
          </div>
          <div className="text-xs text-gray-500 ">{releaseTime} days ago</div>
        </div>
      </div>
    </Link>
  );
};
