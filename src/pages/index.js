import { useEffectOnlyOnce } from "../hooks/useEffectOnlyOnce";
import Seo from "./../components/Seo";
import CompassLogo from "./../images/logos/yusephinum-compass-white-logo.svg";
import "./../styles/index.scss";
import { Link } from "gatsby";
import gsap from "gsap";
import React, { useRef } from "react";

const IndexPage = () => {
  const storyRef = useRef();
  const compassRef = useRef();
  const ticketRef = useRef();
  const aboutRef = useRef();
  // const galleryRef = useRef();
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
                .fromTo([storyRef.current],{y: "-100%", opacity: 0}, {y: "0", duration: 2, opacity:1, ease: "power1"})
                .to([storyRef.current], {opacity: 0, duration: .5, })
                .fromTo([compassRef.current], {x: "5%"}, {x: 0, opacity: 1, rotate: 360, duration: 3, ease: "expo.out"})
                .to([ticketRef.current, aboutRef.current, loreRef.current, storyLinkRef.current], {opacity: 1, stagger: .5, duration: .5})
  });
  return (
    <div className="Home">
      <Seo
        title={"Welcome to Yusephinum"}
        description="An episodic worldbuilding experience told through interdisciplinary installations that explore the complexity of existence and finding a place to call home."
      />
      <section className="hero-story">
        <h1 ref={storyRef}>Welcome to a strange new dimension.</h1>
        <div className="link-ctn">
          <div ref={aboutRef} className="planet-link about">
            <Link to="/about">About</Link>
          </div>
          <div ref={ticketRef} className="planet-link tickets">
            <a href="https://www.eventbrite.com/e/yusephinum-launch-tickets-345876494907">
              Tickets
            </a>
          </div>
          <div ref={storyLinkRef} className="planet-link story">
            <Link to="/story">Story</Link>
          </div>
          <div ref={loreRef} className="planet-link lore">
            <Link to="/lore">Lore</Link>
          </div>
        </div>
        <img src={CompassLogo} ref={compassRef} alt="Yusephinum" className="center-logo" />
      </section>
    </div>
  );
};
export default IndexPage;
