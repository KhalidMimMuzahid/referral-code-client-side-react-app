import { createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const userName = "Rabbi";
  const info = { userName };

  return <UserContext.Provider value={info}>{children}</UserContext.Provider>;
};

export default UserProvider;
