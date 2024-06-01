import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="flex justify-between items-center px-24 py-8">
      <div className="flex justify-between items-center gap-8">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav className="flex justify-between gap-4 ">
          <NavLink className="font-bold text-red-600" to="/home" activeClassName="active">
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
      <button className="w-24 h-8 rounded-md bg-black text-white">Download</button>
    </header>
  );
}

export default Header;
