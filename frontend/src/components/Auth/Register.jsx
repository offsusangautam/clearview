import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { registerUser } from "../../api/auth";

const Register = () => {
  const { login } = useContext(AuthContext); // auto-login after register
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const data = await registerUser(form);
      login(data.token); // login user automatically after register
      // redirect or update UI here
    } catch (err) {
      setError(err.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-2xl mb-4">Register</h2>
      {error && <p className="text-red-600">{error}</p>}

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="border p-2 mb-4 w-full"
        required
      />

      <button type="submit" className="bg-green-600 text-white p-2 w-full">
        Register
      </button>
    </form>
  );
};

export default Register;
