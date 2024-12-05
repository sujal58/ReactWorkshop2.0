import React from "react";
import Header from "../Components/Navigation/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
