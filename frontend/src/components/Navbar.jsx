import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", to: "/home" },
    { label: "Features", to: "/features" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">LM</span>
          </div>
          <span className="text-gray-800 font-semibold text-lg">LibraryMS</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm transition ${
                location.pathname === link.to
                  ? "text-blue-600 font-medium"
                  : "text-gray-500 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm text-gray-600 hover:text-blue-600 px-4 py-2 transition"
          >
            Sign in
          </Link>
          <Link
            to="/register"
            className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            Get started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-5 h-0.5 bg-gray-600 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-600 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-600 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`text-sm ${
                location.pathname === link.to
                  ? "text-blue-600 font-medium"
                  : "text-gray-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-gray-100" />
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-gray-600"
          >
            Sign in
          </Link>
          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
          >
            Get started
          </Link>
        </div>
      )}
    </nav>
  );
}
