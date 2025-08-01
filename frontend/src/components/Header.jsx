import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${search}`);
      setMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between flex-wrap gap-4">
        
        <Link to="/" className="text-2xl font-bold tracking-tight select-none text-gray-900">
          <img src="clearview-logo.png" className="h-15 ml-5"></img>
          
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F9C326]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-6 h-6 text-gray-900"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } w-full sm:flex sm:w-auto sm:items-center sm:gap-6 text-1xl font-medium text-gray-900`}
        >
          <Link
            to="/"
            className="hover:text-[#F9C326] transition py-2 sm:py-0"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/"
            className="hover:text-[#F9C326] transition py-2 sm:py-0"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="hover:text-[#F9C326] transition py-2 sm:py-0"
            onClick={() => setMenuOpen(false)}
          >
            Cart
          </Link>
          <Link
            to="/login"
            className="hover:text-[#F9C326] transition py-2 sm:py-0"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </nav>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2 w-full sm:w-auto mt-3 sm:mt-0"
        >
          <input
            type="text"
            placeholder="Search sunglasses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 w-full sm:w-60 rounded-md text-sm text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F9C326]"
          />
          <button
            type="submit"
            className="bg-[#F9C326] hover:bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-md text-sm transition focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
