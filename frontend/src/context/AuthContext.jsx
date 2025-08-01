import React, { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("user");
      const parsedUser = saved ? JSON.parse(saved) : null;
      console.log("AuthContext init user:", parsedUser);
      return parsedUser;
    } catch {
      return null;
    }
  });
  

  const login = (userData) => {
    console.log("AuthContext login userData:", userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    console.log("AuthContext logout");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
