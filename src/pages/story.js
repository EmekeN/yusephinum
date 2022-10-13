import { useEffectOnlyOnce } from "../hooks/useEffectOnlyOnce";
import Seo from "./../components/Seo";
import Founders from "./../images/about/founders.jpg";
import Logo from "./../images/logos/yusephinum-logo.svg";
import "./../styles/story.scss";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
// import SplitText from "gsap/SplitText";
import { SplitText, CustomEase } from "gsap/all";
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
    const part1 = document.getElementById("part1");
    const quote1 = new SplitText(part1, { type: "words, chars" });
    const tl = gsap.timeline({ defaults: { perspective: "400" } }),
      chars = quote1.chars; //an array of all the divs that wrap each character

    // console.log(quote1.chars);

    //prettier-ignore
    tl.from(chars, {duration: 1.2, opacity: 0,scale: 0, y: 80, rotationX: 180, transformOrigin: "0% 50% -50", ease: "back", stagger: 0.01, })
    .fromTo([part2Ref.current], {y:"0%", opacity: 0},{y:"0", opacity: 1, duration: 1.5, ease: CustomEase.create("custom", "M0,0,C0.126,0.382,0.16,0.748,0.318,0.896,0.51,1.076,0.818,1.001,1,1")})
    .fromTo([part3Ref.current], {y:"0%", opacity: 0},{y:"0", opacity: 1, duration: 1.5, ease: CustomEase.create("custom", "M0,0,C0.126,0.382,0.16,0.748,0.318,0.896,0.51,1.076,0.818,1.001,1,1")},)

    // const storyTimeline = gsap.timeline({ defaults: { ease: "power1" } });
    //prettier-ignore
    // storyTimeline
    // .fromTo([part1Ref.current],{y: "-100%", opacity: 0}, {y: "0", duration: 2, opacity:1, ease: "power1", text: storyText[0]})
  });
  return (
    <div className="Story">
      <img
        src="https://yusephinum-web-assets.s3.us-west-2.amazonaws.com/illustration_3.jpg"
        alt="Yusephinum fantasy world"
        style={{
          zIndex: "-1",
        }}
      />
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
