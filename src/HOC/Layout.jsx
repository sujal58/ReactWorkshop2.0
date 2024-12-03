import React from "react";
import Header from "../Components/Navigation/Header";
import Footer from "../Components/Footer/Footer";
import Mainbody from "../Components/PageComponent/Mainbody";

function Layout() {
  return (
    <div>
      <Header />
      <Mainbody />
      <Footer />
    </div>
  );
}

export default Layout;
