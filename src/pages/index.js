import Header from "../components/Header/Header";
import { useEffectOnlyOnce } from "../hooks/useEffectOnlyOnce";
import Seo from "./../components/Seo";
import Logo from "./../images/logos/yusephinum-logo.svg";
import "./../styles/index.scss";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import React, { useRef } from "react";

const IndexPage = () => {
  const storyRef = useRef();
  const compass = useRef();

  useEffectOnlyOnce(() => {
    gsap.registerPlugin(TextPlugin);
    const storyText = [
      "The Yusephinum is the cradle of existence.",
      " It houses within its seemingly infinite expanse the seven dimensions, known as the Seven Spheres.",
      "The Yusephinum Project is a multimedia installation project that tells the origin story of a protagonist named Nym, who finds himself within a strange new dimension.",
    ];
    const storyTimeline = gsap.timeline({ defaults: { ease: "power1" } });
    const nameStartState = {
      opacity: 0.85,
      backgroundColor: "var(--dumpling-clr)",
    };
    const nameEndState = {
      x: "0",
      opacity: 1,
      duration: 2,
      delay: 2,
    };
    let textConfig = {
      delimiter: "",
      // preserveSpaces: true,
      speed: 4,
      // padSpace: false,
      // type: "diff",
    };

    //prettier-ignore
    storyTimeline.fromTo([storyRef.current], { opacity: .02, x: "0", duration: 4 },{ ...nameEndState, text: { value: storyText[0]}})
                .fromTo([storyRef.current], { ...nameStartState },{ ...nameEndState, text: { ...textConfig, value: storyText[1]}})
                .fromTo([storyRef.current], { ...nameStartState },{ ...nameEndState, text: { ...textConfig, value: storyText[2]}})
  });
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
      <section className="hero-story">
        <h1 ref={storyRef}></h1>
        <img src="" ref={compass} alt="Yusephinum" />
      </section>
    </div>
  );
};
export default IndexPage;
