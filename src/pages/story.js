import { useEffectOnlyOnce } from "../hooks/useEffectOnlyOnce";
import Seo from "./../components/Seo";
import Founders from "./../images/about/founders.jpg";
import Logo from "./../images/logos/yusephinum-logo.svg";
import "./../styles/story.scss";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
// import SplitText from "gsap/SplitText";
import { SplitText } from "gsap/all";
import React, { useRef } from "react";

const About = () => {
  const part1Ref = useRef();
  const part2Ref = useRef();
  const part3Ref = useRef();

  useEffectOnlyOnce(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(SplitText);
    const storyText = [
      "The Yusephinum is the cradle of existence. It houses within its seemingly infinite expanse the seven dimensions, known as the Seven Spheres. Nym awakens to find himself transported within this bizarre realm. Wandering deeper into this abstract dimension, he discovers the remnants of an unknown city at its core, “The Heart of the Yusephinum.",
      "Beyond the walls of this shifted city is a void that plummets into the unknown. Compelled by a force swirling within him, Nym dives into the endless void and lands before a sphere of light, “The Gateway of Creation.” Its warm radiance beckons him forth…he takes breath and walks into the light…",
      "The Yusephinum Project is a multimedia installation project that tells the origin story of a protagonist named Nym, who finds himself within a strange new dimension. This project is the first installation of a larger collection of projects that are slated to be released in sequence. Future installations will tell the story of Nym meeting various iterations of himself, who are scattered throughout a multitude of dimensions called “Spheres”. These iterations span the spectrum of race, gender and sexual orientation. They are a metaphor for the multiplicity of the self, and explore the complexity of identity and self expression. The story culminates in the genesis of an eclectic, bohemian troupe.",
    ];
    let part1 = document.getElementById("part1");
    let quote1 = new SplitText(part1, { type: "words, chars" });
    let tl = gsap.timeline({ defaults: { perspective: "400" } }),
      chars = quote1.chars; //an array of all the divs that wrap each character

    console.log(quote1.chars);

    tl.from(chars, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01,
    });

    // const storyTimeline = gsap.timeline({ defaults: { ease: "power1" } });
    //prettier-ignore
    // storyTimeline
    // .fromTo([part1Ref.current],{y: "-100%", opacity: 0}, {y: "0", duration: 2, opacity:1, ease: "power1", text: storyText[0]})
  });
  return (
    <div className="Story">
      <Seo
        title={"The Story"}
        description="The Yusephinum is the cradle of existence. It houses within its seemingly infinite expanse the seven dimensions, known as the Seven Spheres."
      />
      <header className="Header">
        <section>
          <a href="/">
            <img src={Logo} alt="Yusephinum" />
          </a>
        </section>
      </header>
      <section className="story-ctn">
        <p className="story-text" ref={part1Ref} id="part1">
          The Yusephinum is the cradle of existence. It houses within its seemingly infinite expanse
          the seven dimensions, known as the Seven Spheres. Nym awakens to find himself transported
          within this bizarre realm. Wandering deeper into this abstract dimension, he discovers the
          remnants of an unknown city at its core, “The Heart of the Yusephinum.
        </p>
        <p className="story-text" ref={part2Ref}>
          Beyond the walls of this shifted city is a void that plummets into the unknown. Compelled
          by a force swirling within him, Nym dives into the endless void and lands before a sphere
          of light, “The Gateway of Creation.” Its warm radiance beckons him forth…he takes breath
          and walks into the light…
        </p>
        <p className="story-text" ref={part3Ref}>
          The Yusephinum Project is a multimedia installation project that tells the origin story of
          a protagonist named Nym, who finds himself within a strange new dimension. This project is
          the first installation of a larger collection of projects that are slated to be released
          in sequence. Future installations will tell the story of Nym meeting various iterations of
          himself, who are scattered throughout a multitude of dimensions called “Spheres”. These
          iterations span the spectrum of race, gender and sexual orientation. They are a metaphor
          for the multiplicity of the self, and explore the complexity of identity and self
          expression. The story culminates in the genesis of an eclectic, bohemian troupe.
        </p>
      </section>
    </div>
  );
};
export default About;
