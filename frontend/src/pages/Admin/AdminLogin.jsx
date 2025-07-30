import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user, login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");

      if (!data.data.isAdmin) throw new Error("Not an admin user");

      login(data.data);
      // Don't navigate here immediately — wait for user state update
    } catch (err) {
      setError(err.message);
    }
  };

 useEffect(() => {
  console.log("Logged in user:", user);
  if (user && user.isAdmin) {
    navigate("/admin/dashboard");
  }
}, [user, navigate]);

  return (
    <div style={{ maxWidth: 320, margin: "auto", paddingTop: 50 }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: 10 }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: 10 }}
        />
        <button type="submit" style={{ width: "100%" }}>
          Login
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AdminLogin;
