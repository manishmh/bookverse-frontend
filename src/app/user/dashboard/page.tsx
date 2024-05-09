"use client";

import { extractUserAgent } from "@/components/extract-user-agent";
import { backendBaseUrl } from "@/constant";
import { getCookie } from "@/utils/setCokkie";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { CiUser } from "react-icons/ci";
import { FaHouseLock } from "react-icons/fa6";
import { MdDevices, MdOutlineWatchLater } from "react-icons/md";
import { io } from "socket.io-client";
import { toast } from "sonner";

interface SocketDataProps {
  deviceInfo: string;
  lastLogin: Date;
}

const UserDashboard = () => {
  const [socketData, setSocketData] = useState<SocketDataProps[]>([]);
  const [isPending, startTransition] = useTransition();
  const currentDeviceName = extractUserAgent();
  const router = useRouter();

  function getDeviceInfo() {
    const socket = io(backendBaseUrl, {
      transports: ["websocket"],
    });

    socket.on("userLoggedIn", (users: SocketDataProps[]) => {
      setSocketData(users);
    });

    console.log("socketdata", socketData);
  }

  useEffect(() => {
    startTransition(async () => {
      try {
        const accessToken = getCookie("accessToken");

        const response = await fetch(backendBaseUrl + "/user/dashboard", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: accessToken || "",
          },
        });

        const { success, error, data } = await response.json();

        if (success) {
          setSocketData(data);
          getDeviceInfo();
        } else {
          console.log(error);
          router.push("/login");
        }
      } catch (error) {
        console.log(error);
        toast.error("server error. something went wrong");
      }
    });
  }, []);

  const removeDevice = (deviceName: string) => {
    startTransition(async () => {
      try {
        const accessToken = getCookie("accessToken");

        const response = await fetch(backendBaseUrl + "/user/dashboard", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: accessToken || "",
          },
          body: JSON.stringify({ deviceName }),
        });

        const { success, error } = await response.json();
        if (success) {
          getDeviceInfo();
          toast.success(success);
          console.log(success);

          currentDeviceName == deviceName && logoutUser();
        } else {
          toast.error(error);
          console.log(error);
        }
      } catch (error) {
        console.log(error);
        toast.error("server error. something went wrong");
      }
    });
  };

  const logoutUser = () => {
    toast.error("You have been logged out");
    router.push("/login");
  };

  return (
    <div className="">
      <div className="w-full flex justify-center p-8">
        <FaHouseLock className="text-5xl" />
      </div>
      <h1 className="text-extrabold text-2xl text-center mt-4">Manage Access and Device</h1>
      <h2 className="text-center mt-2 px-4 sm:w-10/12 lg:w-1/2 mx-auto">These signed-in devices have recently been active on this account. you can signout any unfamilier devices or <span className="underline">change your password</span> for added security.</h2>
      <div className="flex gap-12 flex-wrap justify-center p-8">
        {socketData.map((loginDevice: SocketDataProps, index: number) => {
          return (
            <div
              className="text-white max-w-md w-full border p-4 drop-shadow-md shadow-gray-100"
              key={index}
            >
              <div className="flex justify-between w-full gap-2">
                <div className="flex gap-2 items-center">
                  <MdDevices className="flex-shrink-0" />
                  <div className="font-semibold">{loginDevice.deviceInfo}</div>
                </div>
                <button
                  className="border px-4 py-1 rounded-md"
                  onClick={() => removeDevice(loginDevice.deviceInfo)}
                  disabled={isPending}
                >
                  Sign Out
                </button>
              </div>
              <div className="pt-6 space-y-1">
                <div className="flex gap-2 items-center text-sm">
                  <CiUser className="flex-shrink-0" />
                  <div className="text-gray-400">no profiles to show</div>
                </div>
                <div className="flex gap-2 items-center text-gray-300 text-sm">
                  <MdOutlineWatchLater className="flex-shrink-0" />
                  <div>{loginDevice.lastLogin.toString()}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserDashboard;
