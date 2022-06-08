import Seo from "./../components/Seo";
import Logo from "./../images/logos/yusephinum-logo.svg";
import "./../styles/index.scss";
import * as React from "react";

const IndexPage = () => {
  function Header() {
    <header>
      <section>
        <img src={Logo} alt="Yusephinum" />
      </section>
    </header>;
  }
  return (
    <div className="Home">
      <Seo
        title={"Welcome to Yusephinum"}
        description="An episodic worldbuilding experience told through interdisciplinary installations that explore the complexity of existence and finding a place to call home."
      />
      <Header />
      <header className="Header">
        <section>
          <img src={Logo} alt="Yusephinum" />
        </section>
      </header>
      <h1>The Yusephinum is the cradle of existence.</h1>
    </div>
  );
};

export default IndexPage;
