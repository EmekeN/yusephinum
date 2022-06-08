import Header from "./../components/Header/Header";
// import Logo from "./../images/logos/yusephinum-logo.svg";
import "./../styles/base.scss";
// import Footer from "./Footer/Footer";
import React from "react";

const Common = (props) => {
  return (
    <main>
      <Header />
      {props.children}
    </main>
  );
};

export default Common;
