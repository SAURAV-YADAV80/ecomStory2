import { useState, useEffect, ReactNode } from "react";
import axios from 'axios';
import MemoizedLoading from "../loader";
import { UserContext } from "../Contexts";


interface UserProviderProps {
  children: ReactNode;
}

export type User = {
  created_at: string;
  email: string;         
  full_name: string;     
  id: number;        
  remember_me_token: string | null; 
  updated_at: string;
};

export type UserContextType = {
  isLoggedIn: boolean;
  user: User | null;   
  setUser: (user: User | null) => void;
};


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
