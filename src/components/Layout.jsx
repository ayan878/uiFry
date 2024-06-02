import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="px-4 md:px-20">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
