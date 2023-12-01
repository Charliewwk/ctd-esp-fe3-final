import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Layout.css"

const Layout = () => {
  return (
    <>
      <Header />
      <div className="margin-top-bottom">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
