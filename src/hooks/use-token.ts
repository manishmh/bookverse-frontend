// hooks/useToken.ts
import { useSelector } from "react-redux";
import cookies from 'js-cookie';
import { selectAccessToken, selectRefreshToken } from "@/redux-state/get-token";

export const useToken = (tokenType: 'access' | 'refresh') => {
    const accessToken = useSelector(selectAccessToken) || cookies.get("accessToken")
    const refreshToken = useSelector(selectRefreshToken) || cookies.get("refreshToken")
  switch (tokenType) {
    case 'access':
      return accessToken;
    case 'refresh':
      return refreshToken;
    default:
      return null;
  }
};
