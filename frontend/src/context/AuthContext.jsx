import React, { createContext, useState} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(() => localStorage.getItem("userToken"));
  const [adminToken, setAdminToken] = useState(() => localStorage.getItem("adminToken"));

  // USER login
  const loginUser = (token) => {
    localStorage.setItem("userToken", token);
    setUserToken(token);
  };

  // USER logout
  const logoutUser = () => {
    localStorage.removeItem("userToken");
    setUserToken(null);
  };

  // ADMIN login
  const loginAdmin = (token) => {
    localStorage.setItem("adminToken", token);
    setAdminToken(token);
  };

  // ADMIN logout
  const logoutAdmin = () => {
    localStorage.removeItem("adminToken");
    setAdminToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        userToken,
        adminToken,
        loginUser,
        logoutUser,
        loginAdmin,
        logoutAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
