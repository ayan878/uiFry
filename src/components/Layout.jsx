import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Features from "./Features";
import FAQ from "./FAQ";


function Layout() {
  return (
    <div className="pl-20">
      <Header/>
      <Hero/>
      <Features/>
      <FAQ/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Layout;
