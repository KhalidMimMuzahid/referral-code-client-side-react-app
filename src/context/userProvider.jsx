import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const info = { currentUser, setCurrentUser, isLoading, setIsLoading };

  return <UserContext.Provider value={info}>{children}</UserContext.Provider>;
};

export default UserProvider;
