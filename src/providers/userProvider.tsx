import { useState, useEffect, ReactNode } from "react";
import axios from 'axios';
import MemoizedLoading from "../loader";
import { UserContext } from "../Contexts";

// Define the props type
interface UserProviderProps {
  children: ReactNode;
}

// Define the user data type
interface User {
  id: number;
  name: string;
  email: string;
  [key: string]: any; // Extendable for additional user properties
}

function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: { Authorization: token },
        })
        .then((response) => {
          setUser(response.data);
          setLoadingUser(false);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setLoadingUser(false);
        });
    } else {
      setLoadingUser(false);
    }
  }, [token]);

  if (loadingUser) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <MemoizedLoading />
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ isLoggedIn:!!token, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
