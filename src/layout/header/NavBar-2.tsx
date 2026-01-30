import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative px-3 py-2 transition
   ${isActive ? "text-black font-semibold" : "text-gray-600"}
   hover:text-black`;

function NavBar() {
  const [open, setOpen] = useState(false);
  const cartCount = 3; // later from context / redux

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Chic
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>

          {/* Cart */}
          <NavLink to="/cart" className="relative">
            <span className="text-gray-600 hover:text-black transition">
              Cart
            </span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 space-y-3">
            <NavLink to="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/products" onClick={() => setOpen(false)}>
              Products
            </NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About Us
            </NavLink>
            <NavLink to="/cart" onClick={() => setOpen(false)}>
              Cart ({cartCount})
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
