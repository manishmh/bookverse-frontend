import NavbarNotificationCard from "@/components/home/navbar/navbar-notification-card";
import UserProfileCard from "@/components/home/navbar/user-profile-card";
import { useAuth } from "@/context/auth-context";
import {
  resetSearchInput,
  selectSearchInput,
  setSearchInput,
} from "@/redux-state/get-search-input";
import Link from "next/link";
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { FaBell } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import LoginButton from "./login-button";
import SearchCard from "./search-card";

const Navbar: React.FC = () => {
  const notificationCount: number = 9;
  const [notificationState, setNotificationState] = useState<boolean>(false);
  const [userProfileState, setUserProfileState] = useState<boolean>(false);
  const [searchClick, setSearchClick] = useState<boolean>(false);

  const { user } = useAuth();
  console.log('user', user)
  const dispatch = useDispatch();
  const searchInput = useSelector(selectSearchInput);

  // ref
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userProfileRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchCardRef = useRef<HTMLDivElement>(null);

  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchInput(e.target.value));
  };

  // handles when the user profile card state that decides when to show the card.
  const handleNotificationState = useCallback(() => {
    setNotificationState((prevState) => !prevState);
  }, []);

  const handleProfileState = useCallback(() => {
    setUserProfileState((prevState) => !prevState);
  }, []);

  const handleInputClear = () => {
    dispatch(resetSearchInput());
    searchClick && inputRef.current?.focus();
  };

  // handles the mouse click outside the respective component. EX. if user clicks outside the notification area it should close the notification card.
  const handleProfileOutsideClick = useCallback(
    (event: Event) => {
      if (
        userProfileRef.current &&
        !userProfileRef.current.contains(event.target as Node)
      ) {
        if (userProfileState) {
          handleProfileState();
        }
      }
    },
    [userProfileState, handleProfileState]
  );

  const handleClickOutside = useCallback(
    (event: Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (notificationState) {
          handleNotificationState();
        }
      }
    },
    [notificationState, handleNotificationState]
  );

  const handleSearchCardOutsideClick = (event: Event) => {
    if (
      searchCardRef.current &&
      !searchCardRef.current.contains(event.target as Node)
    ) {
      if (searchClick) {
        setSearchClick(!searchClick);
      }
    }
  };

  // to set focus on input field after it comes out.
  useEffect(() => {
    searchClick && inputRef.current?.focus();
  }, [searchClick]);

  // useEffects to to trigger functions to close the outside click of a componenet.

  useEffect(() => {
    document.addEventListener("mousedown", handleSearchCardOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleSearchCardOutsideClick);
    };
  });

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    document.addEventListener("mousedown", handleProfileOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleProfileOutsideClick);
    };
  }, [handleProfileOutsideClick]);

  return (
    <div className="flex justify-between items-center px-2 md:px-4 py-2 max-w-screen-3xl mx-auto gap-4 relative">
      <div className="flex items-center gap-4 md:gap-8 flex-shrink-0">
        <div className="uppercase font-bold text-lg md:text-xl">Bookverse</div>
        <nav className="text-sm md:text-base capitalize text-muted-dark hidden md:flex">
          <Link href="" className="px-2">
            completed
          </Link>
          <Link href="" className="px-2">
            ongoing
          </Link>
          <Link href="" className="px-2">
            A-Z list
          </Link>
          <Link href="" className="px-2">
            top dogs
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-2 xs:gap-4 md:gap-5 w-full">
        <div ref={searchCardRef} className="w-full flex justify-end">
          <div className="lg:relative w-full max-w-sm 2xl:max-w-md">
            {searchClick && <SearchCard />}
            <div className="cursor-pointer flex w-full justify-end overflow-clip absolute lg:relative z-50 lg:z-auto right-0 top-full lg:top-0">
              <div
                className={` w-full h-10 lg:h-8 2xl:h-10 bg-white transition-transform duration-500 relative ${
                  searchClick ? "" : "translate-x-full-plus-40"
                }`}
              >
                <input
                  type="text"
                  className={`bg-white text-black w-full h-full px-2 pr-8 text-sm lg:text-xs 2xl:text-sm border-none outline-none`}
                  autoFocus
                  ref={inputRef}
                  value={searchInput}
                  onChange={handleUserInput}
                  autoCorrect="false"
                  autoCapitalize="false"
                  autoComplete="false"
                  spellCheck="false"
                />
                <div
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-xl text-gray-700"
                  onClick={handleInputClear}
                >
                  <MdClose />
                </div>
              </div>
              <div
                className={`px-2 py-1 items-center hidden relative lg:flex ${
                  searchClick
                    ? "bg-theme-light text-white hover:text-[#d8d6d6]"
                    : "bg-none text-muted-dark hover:text-white "
                } `}
                onClick={() => setSearchClick(true)}
              >
                <IoSearch className="transition-colors duration-200 text-2xl overflow-hidden " />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <IoSearch
            className={`transition-colors duration-200 text-2xl ${
              searchClick
                ? "text-white hover:text-[#d8d6d6]"
                : "text-muted-dark"
            }`}
            onClick={() => setSearchClick(true)}
          />
        </div>
        {user && (
          <div ref={dropdownRef} className="relative">
            <div
              className="grid place-items-center w-8 md:w-10 aspect-square rounded-full bg-[#383746] flex-shrink-0 cursor-pointer relative"
              onClick={handleNotificationState}
            >
              {notificationCount !== 0 && (
                <div className="absolute w-5 aspect-square bg-red-600 rounded-full -top-[2px] -right-2 flex-shrink-0 grid place-items-center text-xs font-semibold">
                  {notificationCount > 9 ? "9+" : notificationCount}
                </div>
              )}
              <FaBell className="text-muted-light" />
            </div>
            {notificationState && (
              <NavbarNotificationCard
                handleNotificationState={handleNotificationState}
              />
            )}
          </div>
        )}
        {!user ? (
          <LoginButton />
        ) : (
          <div
            ref={userProfileRef}
            onClick={handleProfileState}
            className="w-8 md:w-10 relative cursor-pointer aspect-square rounded-full flex-shrink-0 bg-[#383746] grid place-items-center"
          >
            <span className="font-semibold text-muted-light">M</span>
            {userProfileState && (
              <UserProfileCard handleProfileState={handleProfileState} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
