import { useEffectOnlyOnce } from "../hooks/useEffectOnlyOnce";
import Seo from "./../components/Seo";
import Logo from "./../images/logos/yusephinum-logo.svg";
import "./../styles/lore.scss";
// import "./../styles/index.scss";
import gsap from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { SplitText } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Gallery = () => {
  const planet1Ref = React.createRef();
  const planet2Ref = React.createRef();
  const planet3Ref = React.createRef();
  const planet4Ref = React.createRef();
  const planet5Ref = React.createRef();
  useEffect(
    () => {
    
    // const storyTimeline = gsap.timeline({ defaults: { ease: "power1" } });
    //prettier-ignore
    // storyTimeline
    //             .fromTo([storyRef.current],{y: "-100%", opacity: 0}, {y: "0", duration: 2, opacity:1, ease: "power1"})
  }
  );

  const Planet = React.forwardRef(({ prop }, ref) => {
    return <div className="planet"></div>;
  });
  return (
    <div className="Gallery">
      <Seo
        title={"Gallery"}
        description="The Seven Spheres: alternate universes/dimensions that coexist simultaneously."
      />
      <header className="Header">
        <section>
          <a href="/">
            <img src={Logo} alt="Yusephinum" />
          </a>
        </section>
      </header>
      <section className="light-boxes">
        <h1>Light Boxes</h1>
      </section>
      <section className="light-boxes">
        <h1>Opening Gallery</h1>
      </section>
    </div>
  );
};
export default Gallery;
