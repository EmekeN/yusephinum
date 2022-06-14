import Logo from "./../../images/logos/yusephinum-logo.svg";
import "./Header.scss";
import { Link } from "gatsby";
import React from "react";

const Header = () => {
  <section className="Header">
    <Link to="/">
      <img src={Logo} alt="Yusephinum" />
    </Link>
  </section>;
};
export default Header;
