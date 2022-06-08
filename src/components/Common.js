import "./../styles/base.scss";
// import Footer from "./Footer/Footer";
import React from "react";
import Logo from "./../images/logos/yusephinum-logo.svg"

const Common = (props) => {
  const Header = () => {
    <header>
      <section><img src={Logo} alt="Yusephinum"/></section>
    </header>
  }

  return (
    <main>
      <Header />
      {props.children}
    </main>);
};

export default Common;
