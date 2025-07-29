import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { userToken } = useContext(AuthContext);

  return userToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
