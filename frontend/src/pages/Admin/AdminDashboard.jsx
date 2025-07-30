import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";


const AdminDashboard = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>
      <button onClick={() => alert("Manage products clicked")}>Manage Products</button>
      <button onClick={() => alert("View orders clicked")} style={{ marginLeft: 10 }}>
        View Orders
      </button>
      <button onClick={handleLogout} style={{ marginLeft: 10, backgroundColor: "red", color: "white" }}>
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
