import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${search}`);
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          Clear<span className="text-blue-600">View</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden sm:flex gap-6 text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </nav>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search sunglasses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-1 border rounded-md text-sm"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
