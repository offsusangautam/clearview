import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4 text-gray-800">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-medium mb-2">Manage Products</h2>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => navigate("/admin/products")}
          >
            Go
          </button>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-medium mb-2">View Orders</h2>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => navigate("/admin/orders")}
          >
            Go
          </button>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-medium mb-2">Logout</h2>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => {
              localStorage.removeItem("adminToken");
              navigate("/admin/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
