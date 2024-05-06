"use client";

import { useState } from "react";
import { io } from "socket.io-client";

interface SocketDataProps {
  deviceInfo: string;
  lastLogin: Date;
}

const UserDashboard = () => {
  const [socketData, setSocketData] = useState<SocketDataProps[]>([]);
  const socket = io("http://localhost:8080", {
    transports: ["websocket"],
  });

  socket.on("userLoggedIn", (users: SocketDataProps[]) => {
    setSocketData(users);
  });

  console.log(socketData);

  return (
    <div className="flex gap-12 flex-wrap">
      {socketData.map((loginDevice: SocketDataProps, index: number) => {
        return (
          <div key={index} className="">
            <p>{loginDevice.deviceInfo}</p>
            <p>{loginDevice.lastLogin.toString()}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserDashboard;

