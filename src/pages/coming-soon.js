import React from "react";
import Seo from "../components/Seo";
import Logo from "./../images/logos/yusephinum-logo.svg";

const IndexPage = () => {
  return (
    <div
      className="ComingSoon"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: `linear-gradient(0deg, hsla(214deg, 28%, 10%, 0.5), hsla(214deg, 28%, 10%, 0.5)), url("https://yusephinum-web-assets.s3.us-west-2.amazonaws.com/illustration_4.jpg")`,
        backgroundSize: "cover",
        backgroundFit: "center left",
        backgroundAttachment: "scroll",
        backgroundRepeat: "repeat-y",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Seo
        title={"This page is coming soon!"}
        description="An episodic world building experience told through interdisciplinary installations that explore the complexity of existence and finding a place to call home."
      />
      <header
        className="Header"
        style={{ width: "100vw", position: "fixed", inset: "0 auto auto auto" }}
      >
        <section>
          <a href="/">
            <img src={Logo} alt="Yusephinum" />
          </a>
        </section>
      </header>

      <h1
        style={{
          color: "white",
          position: "fixed",
          inset: "45% auto auto auto",
          width: "100%",
          minHeight: "100%",
          textAlign: "center",
          fontSize: "clamp(4rem, 16vw, 10em)",
          fontWeight: "700",
        }}
      >
        Coming Soon!
      </h1>
    </div>
  );
};
export default IndexPage;
