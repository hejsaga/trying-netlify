import { createContext, useState } from "react";

// Skapa en ny kontext
export const UserContext = createContext();

// Skapa en komponent som innehåller state du vill dela
export const UserProvider = (props) => {
  const [userName, setUserName] = useState("John Doe");
  const lsIsLoggedIn = localStorage.getItem("isLoggedIn");
  const [isLoggedIn, setIsLoggedIn] = useState(lsIsLoggedIn);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const useInApp = {
    userName,
    setUserName,
    isLoggedIn,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={useInApp}>
      {props.children}
    </UserContext.Provider>
  );
};
