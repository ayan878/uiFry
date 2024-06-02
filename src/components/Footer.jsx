import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

function Footer() {
  return (
    <footer className="bg-white py-4 px-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-6 md:mb-0">
          <img src={logo} alt="Uifry Logo" className="mb-4" />
          <p className="text-sm mb-2">Help@Frybix.Com</p>
          <p className="text-sm">+1234 456 678 89</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full md:w-auto gap-8 md:gap-16">
          <div>
            <h3 className="font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/bookings">Bookings</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms-of-use">Terms Of Use</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookie-policy">Cookie Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/take-tour">Take Tour</Link>
              </li>
              <li>
                <Link to="/live-chat">Live Chat</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Stay Up To Date</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded-l-md border border-gray-300"
              />
              <button
                type="submit"
                className="p-2 bg-black text-white rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
          <hr className="w-96 border mx-auto my-4" />
      <div className="mt-4 text-center text-sm text-gray-500">
        Copyright © {getCurrentYear()} Uifry.Com All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
