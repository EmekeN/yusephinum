import Header from "../components/Header/Header";
import { useEffectOnlyOnce } from "../hooks/useEffectOnlyOnce";
import Seo from "./../components/Seo";
import CompassLogo from "./../images/logos/yusephinum-compass-white-logo.svg";
import Logo from "./../images/logos/yusephinum-logo.svg";
import "./../styles/index.scss";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import React, { useRef } from "react";

const IndexPage = () => {
  const storyRef = useRef();
  const compassRef = useRef();
  const ticketRef = useRef();
  const aboutRef = useRef();
  const galleryRef = useRef();
  const loreRef = useRef();
  const storyLinkRef = useRef();
  const eventLink = "https://www.eventbrite.com/e/yusephinum-launch-tickets-345876494907";

  useEffectOnlyOnce(() => {
    // gsap.registerPlugin(TextPlugin);
    const storyText = [
      "The Yusephinum is the cradle of existence.",
      " It houses within its seemingly infinite expanse the Seven Spheres.",
      "Welcome to a strange new dimension.",
    ];
    const storyTimeline = gsap.timeline({ defaults: { ease: "power1" } });
    const nameStartState = {
      opacity: 0,
      delay: 0,
      // x: "-100%",
      y: "-100%",
    };
    const nameEndState = {
      // x: "0",
      y: "0",
      opacity: 1,
      duration: 3,
      delay: 1.5,
    };
    const textConfig = {
      delimiter: "",
      speed: 1.5,
    };

    const compassStart = {};
    const compassEnd = {};

    //prettier-ignore
    storyTimeline
                // .fromTo([storyRef.current], { ...nameStartState },{ ...nameEndState, text: { value: storyText[0]}})
                // .fromTo([storyRef.current], { ...nameStartState, text: "" },{ ...nameEndState, text: { ...textConfig, value: storyText[1]}})
                .fromTo([storyRef.current], { ...nameStartState , delay: 0},{ ...nameEndState,})
                .to([storyRef.current], {y: "100", duration: 1, ease: "power1"})
                .to([storyRef.current], {opacity: 0, duration: .5, y: "-100%"})
                .to([compassRef.current], {opacity: 1, rotate: 360, duration: 1.5, ease: "power4"})
                .to([ticketRef.current, aboutRef.current, galleryRef.current, loreRef.current, storyLinkRef.current], {opacity: 1, stagger: .25, duration: .25})
    // .to([storyRef.current], {y: "100", opacity: 0, duration: 1})
    /**
     * Enter compass glyph on y axis & fade in
     * add logo w/ compass or add after?
     * points on the compass arrive
     */
    // .fromTo([compassRef.current],)

    /**
     * What is the effect on text?
     * Find ideas
     * transition color?
     * expand size?
     * on hover something happens
     */
  });
  return (
    <div className="Home">
      <Seo
        title={"Welcome to Yusephinum"}
        description="An episodic worldbuilding experience told through interdisciplinary installations that explore the complexity of existence and finding a place to call home."
      />
      {/* <Header />
      <header className="Header">
        <section>
          <a href="/">
            <img src={Logo} alt="Yusephinum" />
          </a>
        </section>
      </header> */}
      <section className="hero-story">
        <h1 ref={storyRef}>Welcome to a strange new dimension.</h1>
        <div className="link-ctn">
          <div ref={aboutRef} className="planet-link about">
            <a href="">About</a>
          </div>
          <div ref={galleryRef} className="planet-link gallery">
            <a href="">Gallery</a>
          </div>
          <div ref={ticketRef} className="planet-link tickets">
            <a href="https://www.eventbrite.com/e/yusephinum-launch-tickets-345876494907">
              Tickets
            </a>
          </div>
          <div ref={storyLinkRef} className="planet-link projects">
            <a href="">Projects</a>
          </div>
          <div ref={loreRef} className="planet-link lore">
            <a href="">Lore</a>
          </div>
          {/* <div ref={planetRef} className="planet-link"><a href=""></a></div> */}
        </div>
        <img src={CompassLogo} ref={compassRef} alt="Yusephinum" className="center-logo" />
      </section>
    </div>
  );
};
export default IndexPage;
