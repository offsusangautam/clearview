import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";


const AdminPrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user || !user.isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default AdminPrivateRoute;
