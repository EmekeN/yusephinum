import { useEffectOnlyOnce } from "../hooks/useEffectOnlyOnce";
import Seo from "./../components/Seo";
import Founders from "./../images/about/founders.jpg";
import Logo from "./../images/logos/yusephinum-logo.svg";
import "./../styles/about.scss";
// import "./../styles/index.scss";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useRef } from "react";

const About = () => {
  const founderImgRef = useRef();
  const richardImgRef = useRef();
  const ckImgRef = useRef();
  const story1Ref = useRef();
  const story2Ref = useRef();
  const story3Ref = useRef();

  useEffectOnlyOnce(
    () => {
    // const storyTimeline = gsap.timeline({ defaults: { ease: "power1" } });
    //prettier-ignore
    // storyTimeline
    //             .fromTo([storyRef.current],{y: "-100%", opacity: 0}, {y: "0", duration: 2, opacity:1, ease: "power1"})
  }
  );
  return (
    <div className="About">
      <Seo
        title={"About Yusephinum"}
        description="Yusephinum LLC is a Queer/POC/AAPI artist collective with a proclivity for video and music production, video game scenario writing, and photography."
      />
      <header className="Header">
        <section>
          <a href="/">
            <img src={Logo} alt="Yusephinum" />
          </a>
        </section>
      </header>
      <section className="one">
        <img
          src="https://yusephinum-web-assets.s3.us-west-2.amazonaws.com/founders.jpg"
          alt="Founders of Yusephinum"
          className="founders"
          loading="eager"
        />
        <p className="story-text">
          Yusephinum LLC is a Queer/POC/AAPI artist collective with a proclivity for video and music
          production, video game scenario writing, and photography. We are dedicated to the
          representation of marginalized communities in the realms of fantasy and video game media.
          Our mission is to breathe life into evocative characters who are nuanced, dimensional, and
          so much more than any single aspect of their identity.
        </p>
      </section>
      <section className="two">
        <img
          src="https://yusephinum-web-assets.s3.us-west-2.amazonaws.com/richard.png"
          alt="Richard Peacock"
          className="founders"
        />
        <p className="story-text">
          Richard is a Seattle based performing artist, and the founder of a Queer, BIPOC artist
          collective called Yusephinum LLC. He has worked professionally within the musical theater
          and burlesque spheres of the Seattle community for the last ten years. His involvement
          with productions has spanned many roles beyond performing, of which includes dance
          captain, assistant choreographer, and fight captain. As the artistic producer and
          visionary of Yusephinum LLC, Richard is involved in world building, composing original
          music, and character design, as well as, and assembling a team of artists.
        </p>
        <p className="story-text">
          He created this collective of queer, BIPOC, and AAPI artists to serve as a hub to create
          and produce work that challenges the current norm of what sort of character gets to be at
          the helm of a video game narrative.{" "}
        </p>
      </section>
      <section className="three">
        <img
          src="https://yusephinum-web-assets.s3.us-west-2.amazonaws.com/ck.png"
          alt="CK Ong"
          className="founders"
        />
        <p className="story-text">
          Yusephinum LLC is a Queer/POC/AAPI artist collective with a proclivity for video and music
          production, video game scenario writing, and photography. We are dedicated to the
          representation of marginalized communities in the realms of fantasy and video game media.
          Our mission is to breathe life into evocative characters who are nuanced, dimensional, and
          so much more than any single aspect of their identity.
        </p>
      </section>
    </div>
  );
};
export default About;
