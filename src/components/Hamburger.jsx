import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Hamburger({ toggleMenu }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
      onClick={toggleMenu}
    >
      <div
        className="fixed top-0 right-0 w-2/4 h-full bg-white p-8 z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="fixed mb-4 top-6 right-6" onClick={toggleMenu}>
          <FaTimes size={24} />
        </button>
        <nav className="flex flex-col gap-4 mt-12">
          <NavLink
            className="font-bold text-red-600"
            to="/home"
            activeClassName="active"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="active"
            onClick={toggleMenu}
            className="text-black"
          >
            About Us
          </NavLink>
          <NavLink
            to="/pricing"
            activeClassName="active"
            onClick={toggleMenu}
            className="text-black"
          >
            Pricing
          </NavLink>
          <NavLink
            to="/features"
            activeClassName="active"
            onClick={toggleMenu}
            className="text-black"
          >
            Features
          </NavLink>
          <button className="w-full mt-4 h-8 rounded-md bg-black text-white">
            Download
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Hamburger;
