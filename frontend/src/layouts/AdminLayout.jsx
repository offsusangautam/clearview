// src/layouts/AdminLayout.jsx
import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="flex flex-col space-y-4">
          <Link to="/admin/dashboard" className="hover:underline">
            Dashboard
          </Link>
         
        </nav>
      </aside>
      {/* Main content */}
      <div className="flex-grow p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
