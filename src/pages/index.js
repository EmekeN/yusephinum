import { useEffectOnlyOnce } from "../hooks/useEffectOnlyOnce";
import Seo from "./../components/Seo";
import CompassLogo from "./../images/logos/yusephinum-compass-white-logo.svg";
import "./../styles/index.scss";
import { Link } from "gatsby";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useState, useRef } from "react";

const IndexPage = () => {
  const storyRef = useRef();
  const compassRef = useRef();
  const galleryRef = useRef();
  const aboutRef = useRef();
  const loreRef = useRef();
  const storyLinkRef = useRef();
  const hasPlayedIntroRef = useRef(false)
  const timelineRef = useRef()
  const audioPlayerRef = useRef()
  const audioPlayerContainerRef= useRef()


  useEffectOnlyOnce(() =>{
    storyRef.current.classList.remove("visually-hidden")
    gsap.registerPlugin(SplitText);
    timelineRef.current = gsap?.timeline({ defaults: { ease: "power1", onComplete: () => { hasPlayedIntroRef.current = true} } });
    let mySplitText = new SplitText(storyRef.current, { type: "words, chars", ease: "Sine.in" });
    mySplitText.split({ type: "chars, words, lines" });
  
    //prettier-ignore
    timelineRef.current
      .from(mySplitText.words, {opacity: 0, duration: 2, scale: 0, autoAlpha: 0, y: "-50%", force3D: true, stagger: 0.02, filter: "blur(.5rem)"})
    .to(mySplitText.chars, {opacity: 0, duration: 1, stagger: ".05",}, 4)
    .to([compassRef.current], {x: 0, opacity: 1, rotate: 360, duration: 1, delay: .15, ease: "Sine.in"},)
    .to([galleryRef.current,storyLinkRef.current, aboutRef.current, loreRef.current, ], {opacity: 1, stagger: .5, duration: .25})
    // .from([audioPlayerRef.current], {y: "100%", opacity: 0, duration: 1,});
  }, [])

  const handleKillAnimation = (e) => {
    // e.preventDefault()
    console.log("has played intro: ", hasPlayedIntroRef.current)
    if(timelineRef.current && !hasPlayedIntroRef.current) {
      hasPlayedIntroRef.current = true;
      timelineRef.current.seek(timelineRef.current.endTime() - 2)
    }
  }

  const handleKeyPress = (e) => {
    // e.preventDefault()
    if(e.key === "Enter") {
      handleKillAnimation()
    }
  }

  const AudioPlayer = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false)
    const handleToggleAudio = () => {
      if (isAudioPlaying) {
        audioPlayerRef.current.pause()
      } else {
        audioPlayerRef.current.play()
      }
      setIsAudioPlaying((prev) => !prev)
    }
    return (
      <button className={isAudioPlaying ? "AudioPlayer active" : "AudioPlayer"} onClick={handleToggleAudio} ref={audioPlayerContainerRef}>
      <img src="https://yusephinum-web-assets.s3.us-west-2.amazonaws.com/white-microphone-active.svg" alt="audio player"/>
        <audio className="player" ref={audioPlayerRef}>
          <source src="https://yusephinum-web-assets.s3.us-west-2.amazonaws.com/Yusephinum-5.mp3" />
          Sorry you can't hear this
        </audio>
      </button>
    );
  };

  return (
    <div className="Home" onClick={handleKillAnimation} onKeyPress={handleKeyPress}>
      <Seo
        title={"Welcome to Yusephinum"}
        description="Enter the Yusephinum. An episodic world building experience told through interdisciplinary installations that explore the complexity of existence and finding a place to call home."
      />
      <section className="hero-story">
        <h1 ref={storyRef} className="title visually-hidden" style={{zIndex: 0}}>Welcome to a strange new dimension.</h1>

        <div className="link-ctn">
          <div ref={aboutRef} className="planet-link about">
            <Link to="/about">About</Link>
          </div>
          <div ref={galleryRef} className="planet-link gallery">
            <a
              href="http://www.greatjonesgallery.com/"
              // target="_blank"
              style={{ textAlign: "center" }}
            >
              Current Exhibit
            </a>
          </div>
          <div ref={storyLinkRef} className="planet-link story">
            <a href="https://yusephinum.myshopify.com/" target="_blank">Store</a>
          </div>
          {/* <div ref={loreRef} className="planet-link lore">
            <Link to="/lore">Lore</Link>
          </div> */}
          <img src={CompassLogo} ref={compassRef} alt="Yusephinum" className="center-logo" />
          <AudioPlayer />
        </div>
      </section>
    </div>
  );
};
export default IndexPage;


