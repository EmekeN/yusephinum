import { useEffectOnlyOnce } from "../hooks/useEffectOnlyOnce";
import Seo from "./../components/Seo";
import Logo from "./../images/logos/yusephinum-logo.svg";
import "./../styles/lore.scss";
// import "./../styles/index.scss";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { SplitText } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Lore = () => {
  const planet1Ref = React.createRef();
  const planet2Ref = React.createRef();
  const planet3Ref = React.createRef();
  const planet4Ref = React.createRef();
  const planet5Ref = React.createRef();
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);
    if (!planet1Ref.current) return;
    // gsap.to([planet1Ref.current], { x: "1000%" });
    const planetTimeline = gsap.timeline();
    planetTimeline.to([planet1Ref.current, planet2Ref.current, planet3Ref.current], {
      duration: 5,
      repeat: -1,
      motionPath: {
        path: "M91,214 C17,312 483,333 389,219",
        align: planet1Ref,
        //   autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: 1.01,
        end: 1.01,
      },
    });
    planetTimeline.to([planet2Ref.current], {duration: 5, repeat:-1,
        motionPath:{
          path: "M91,214 C17,312 483,333 389,219",
        //   align: planet1Ref,
          autoRotate: true,
        //   alignOrigin: [0.5, 0.5],
          start:1.01,
          end:1.01,
        }})

    // const storyTimeline = gsap.timeline({ defaults: { ease: "power1" } });
    //prettier-ignore
    // storyTimeline
    //             .fromTo([storyRef.current],{y: "-100%", opacity: 0}, {y: "0", duration: 2, opacity:1, ease: "power1"})
  });

  const Planet = React.forwardRef(({ prop }, ref) => {
    return <div className="planet"></div>;
  });
  return (
    <div className="Lore">
      <Seo
        title={"Lore"}
        description="The Seven Spheres: alternate universes/dimensions that coexist simultaneously."
      />
      <header className="Header">
        <section>
          <a href="/">
            <img src={Logo} alt="Yusephinum" />
          </a>
        </section>
      </header>
      <section className="intro">
        <div className="planet" ref={planet1Ref}></div>
        <div className="planet" ref={planet2Ref}></div>
        <div className="planet" ref={planet3Ref} />
        {/* <div className="planet" ref={planet4Ref} /> */}
        <div className="planet" ref={planet5Ref} />
      </section>
    </div>
  );
};
export default Lore;
