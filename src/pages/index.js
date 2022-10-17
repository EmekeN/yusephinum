import { useEffectOnlyOnce } from "../hooks/useEffectOnlyOnce";
import { useSessionStorage } from "../hooks/useSesionStorage";
import Seo from "./../components/Seo";
import CompassLogo from "./../images/logos/yusephinum-compass-white-logo.svg";
import "./../styles/index.scss";
import { Link } from "gatsby";
import gsap from "gsap";
import { SplitText, CustomEase, TextPlugin } from "gsap/all";
import React, { useRef } from "react";

const IndexPage = () => {
  const [hasPlayedHomeIntro, setHasPlayedHomeIntro] = useSessionStorage("hasPlayedHomeIntro", {
    hasPlayedHomeIntro: false,
  });
  const storyRef = useRef();
  const compassRef = useRef();
  const galleryRef = useRef();
  const aboutRef = useRef();
  const loreRef = useRef();
  const storyLinkRef = useRef();

  useEffectOnlyOnce(() => {
    gsap.registerPlugin(SplitText);
    const storyTimeline = gsap.timeline({ defaults: { ease: "power1" } });
    let mySplitText = new SplitText(storyRef.current, { type: "words, chars", ease: "Sine.in" });
    mySplitText.split({ type: "chars, words, lines" });

    //prettier-ignore
    storyTimeline
      .from(mySplitText.words, {opacity: 0, duration: 2, scale: 0, autoAlpha: 0, y: "-50%", force3D: true, stagger: 0.02, filter: "blur(.5rem)"})
    .to(mySplitText.chars, {opacity: 0, duration: 1, stagger: ".05"}, 4)
    .to([compassRef.current], {x: 0, opacity: 1, rotate: 360, duration: 1, delay: .15, ease: "Sine.in"},)
    .to([galleryRef.current,storyLinkRef.current, aboutRef.current, loreRef.current, ], {opacity: 1, stagger: .5, duration: .25});
  });

  return (
    <div className="Home">
      <Seo
        title={"Welcome to Yusephinum"}
        description="An episodic world building experience told through interdisciplinary installations that explore the complexity of existence and finding a place to call home."
      />
      <section className="hero-story">
        <h1 ref={storyRef}>Welcome to a strange new dimension.</h1>

        <div className="link-ctn">
          <div ref={aboutRef} className="planet-link about">
            <Link to="/about">About</Link>
          </div>
          <div ref={galleryRef} className="planet-link gallery">
            <a
              href="https://www.eventbrite.com/e/the-yusephinum-project-launch-party-tickets-430787375637"
              target="_blank"
              rel="noreferer noopener"
              style={{ textAlign: "center" }}
            >
              Launch Party
            </a>
          </div>
          <div ref={storyLinkRef} className="planet-link story">
            <Link to="/coming-soon">Store</Link>
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
