/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
  const [user, setUser] = useState(true);
  useEffect(() => {
    setUser(true);
  }, [user]);
  const location = useLocation();

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
export default Private;
