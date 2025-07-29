import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  const { adminToken } = useContext(AuthContext);

  return adminToken ? children : <Navigate to="/admin/login" />;
};

export default AdminPrivateRoute;
