/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/userProvider";

const Private = ({ children }) => {
  const { isLoading, currentUser } = useContext(UserContext);

  const location = useLocation();

  if (currentUser?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
export default Private;
