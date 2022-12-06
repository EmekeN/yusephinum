import { useEffectOnlyOnce } from "../hooks/useEffectOnlyOnce";
import { useSessionStorage } from "../hooks/useSesionStorage";
import Seo from "./../components/Seo";
import CompassLogo from "./../images/logos/yusephinum-compass-white-logo.svg";
import "./../styles/index.scss";
import { Link } from "gatsby";
import gsap from "gsap";
import { SplitText, CustomEase, TextPlugin } from "gsap/all";
import React, { useRef, useState } from "react";

const IndexPage = () => {
  const [hasPlayedHomeIntro, setHasPlayedHomeIntro] = useSessionStorage("hasPlayedHomeIntro", {
    hasPlayedHomeIntro: false,
  });
  const storyRef = useRef();
  const compassRef = useRef();
  const galleryRef = useRef();
  const aboutRef = useRef();
  const exhibitRef = useRef();
  const storyLinkRef = useRef();
  const [mounted, setMounted] = useState(false);
  const timelineRef = useRef();
  useEffectOnlyOnce(() => {
    setMounted(true);
    storyRef.current.classList.remove("visually-hidden");
  }, []);

  gsap.registerPlugin(SplitText);
  if (mounted) {
    timelineRef.current = gsap?.timeline({ defaults: { ease: "power1" } });
    let mySplitText = new SplitText(storyRef.current, { type: "words, chars", ease: "Sine.in" });
    mySplitText.split({ type: "chars, words, lines" });

    //prettier-ignore
    timelineRef.current
        .from(mySplitText.words, {opacity: 0, duration: 2, scale: 0, autoAlpha: 0, y: "-50%", force3D: true, stagger: 0.02, filter: "blur(.5rem)"})
      .to(mySplitText.chars, {opacity: 0, duration: 1, stagger: ".05",}, 4)
      .to([compassRef.current], {x: 0, opacity: 1, rotate: 360, duration: 1, delay: .15, ease: "Sine.in"},)
      .to([galleryRef.current,storyLinkRef.current, aboutRef.current, exhibitRef.current, ], {opacity: 1, stagger: .5, duration: .25});
  }

  const handleKillAnimation = () => {
    if (timelineRef.current) {
      timelineRef.current.seek(timelineRef.current.endTime() - 2);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleKillAnimation();
    }
  };

  const AudioPlayer = (url) => {
    return (
      <div className="AudioPlayer" style={{ opacity: "0" }}>
        <audio controls width className="player">
          <source src="https://yusephinum-web-assets.s3.us-west-2.amazonaws.com/Yusephinum-5.mp3" />
          Sorry you can't hear this
        </audio>
      </div>
    );
  };

  return (
    <div className="Home" onClick={handleKillAnimation} onKeyPress={(e) => handleKeyPress(e)}>
      <Seo
        title={"Welcome to Yusephinum"}
        description="An episodic world building experience told through interdisciplinary installations that explore the complexity of existence and finding a place to call home."
      />
      <section className="hero-story" onKeyPress={(e) => handleKeyPress(e)}>
        <h1 ref={storyRef} className="title visually-hidden" style={{ zIndex: 0 }}>
          Welcome to a strange new dimension.
        </h1>

        <div className="link-ctn">
          <div ref={aboutRef} className="planet-link about">
            <Link to="/about">About</Link>
          </div>
          <div ref={exhibitRef} className="planet-link exhibit">
            <Link to="/about">Current Exhibit</Link>
          </div>
          <div ref={galleryRef} className="planet-link gallery">
            <a
              href="http://www.greatjonesgallery.com/"
              target="_blank"
              rel="noreferer noopener"
              style={{ textAlign: "center" }}
            >
              Gallery
            </a>
          </div>
          <div ref={storyLinkRef} className="planet-link story">
            <a href="https://yusephinum.myshopify.com/" target="_blank" rel="noopener noreferrer">
              Store
            </a>
          </div>
          {/* <div ref={loreRef} className="planet-link lore">
            <Link to="/lore">Lore</Link>
          </div> */}
          <img src={CompassLogo} ref={compassRef} alt="Yusephinum" className="center-logo" />
          <AudioPlayer url="https://emeken-portfolio.s3.us-west-2.amazonaws.com/web/audio/611+Harvard+Ave+E.mp3"></AudioPlayer>
        </div>
      </section>
    </div>
  );
};
export default IndexPage;
