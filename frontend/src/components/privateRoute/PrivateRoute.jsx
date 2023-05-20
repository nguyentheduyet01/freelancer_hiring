import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const { account } = useSelector((state) => state.account);
  const isLoggedIn = account?.isSuccess;

  if (isLoggedIn !== true) {
    return <Navigate to='/login' />;
  } else {
    return Component;
  }
};

export default PrivateRoute;
