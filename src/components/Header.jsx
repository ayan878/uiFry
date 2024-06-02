import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import Hamburger from "./Hamburger";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-4 flex justify-between items-center py-4">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Link to="/">
          <img src={logo} alt="logo" className="h-8" />
        </Link>
        <nav className="hidden md:flex gap-4">
          <NavLink
            className="font-bold text-red-600"
            to="/home"
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About Us
          </NavLink>
          <NavLink to="/pricing" activeClassName="active">
            Pricing
          </NavLink>
          <NavLink to="/features" activeClassName="active">
            Features
          </NavLink>
        </nav>
      </div>
      <button className="hidden md:block w-24 h-8 rounded-md bg-black text-white">
        Download
      </button>
      <button className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      {isOpen && <Hamburger toggleMenu={toggleMenu} />}
    </header>
  );
}

export default Header;
