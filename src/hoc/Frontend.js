import React from "react";
import { useLocation, Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer2";

function Frontend(props) {
  const location = useLocation();

  console.log(location.pathname);

  const renderHeader = () => {
    if (location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/forgot") {
      return <Header />;
    }
  };

  const renderFooter = () => {
    if (location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/forgot") {
      return <Footer />;
    }
  };

  return (
    <>
      <div className="flex flex-col h-full bg-[#f2f5f7]">
        {renderHeader()}
        <Outlet />
        {renderFooter()}
      </div>
    </>
  );
};

export default Frontend;