import { backendBaseUrl } from "@/constant";
import { useToken } from "@/hooks/use-token";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface User {
  userId: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const accessToken = useToken('access')

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const validateUser = async () => {
      try {
        const res = await fetch(`${backendBaseUrl}/validate`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${accessToken}`
          },
        });

        const data = await res.json();

        setUser(data.user);

        if (user) {
          pathname === "/login" && router.push("/");
        }
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    validateUser();
  }, [pathname, router, accessToken]);

  const login = async (email: string, password: string) => {
    const { data } = await axios.post(`${backendBaseUrl}/login`, {
      email,
      password,
    });
    setUser(data.user);
    router.push("/");
  };

  const logout = async () => {
    await axios.post(`${backendBaseUrl}/logout`, {}, { withCredentials: true });
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
