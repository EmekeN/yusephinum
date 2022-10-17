import { useEffectOnlyOnce } from "../hooks/useEffectOnlyOnce";
import Seo from "./../components/Seo";
import Founders from "./../images/about/founders.jpg";
import Logo from "./../images/logos/yusephinum-logo.svg";
import "./../styles/story.scss";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
// import SplitText from "gsap/SplitText";
import { SplitText, CustomEase, ScrollTrigger, ScrollSmoother } from "gsap/all";
import React, { useRef } from "react";

const About = () => {
  const part1Ref = useRef();
  const part2Ref = useRef();
  const part3Ref = useRef();

  useEffectOnlyOnce(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    const introSplitText = new SplitText(part1Ref.current, { type: "words, chars" });
    let storyTexts = document.querySelectorAll(".story-text");
    const tl = gsap.timeline({
      defaults: { perspective: "400" },
      scrollTrigger: {
        trigger: storyTexts,
        pin: true, // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=75", // end after scrolling 75px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
          snapTo: "labels", // snap to the closest label in the timeline
          duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
        },
      },
    });

    //prettier-ignore
    tl.from(introSplitText.chars, {duration: 1.2, opacity: 0,scale: 0, y: 80, rotationX: 180, transformOrigin: "0% 50% -50", ease: "back", stagger: 0.01, })
    .from([part2Ref.current], { y:"0%", opacity: 0},{y:"0", opacity: 1, duration: 1.5, ease: CustomEase.create("custom", "M0,0,C0.126,0.382,0.16,0.748,0.318,0.896,0.51,1.076,0.818,1.001,1,1")})
    .from([part3Ref.current], { y:"0%", opacity: 0},{y:"0", opacity: 1, duration: 1.5, ease: CustomEase.create("custom", "M0,0,C0.126,0.382,0.16,0.748,0.318,0.896,0.51,1.076,0.818,1.001,1,1")},)
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
      <img
        src="https://yusephinum-web-assets.s3.us-west-2.amazonaws.com/illustration_5.jpg"
        alt="Yusephinum fantasy world"
        style={{
          zIndex: "-1",
          width: "100vw",
          minHeight: "100vh",
          backgroundPosition: "top right",
          backgroundSize: "cover",
          backgroundRepeat: "repeat-y",
          backgroundImage:
            "linear-gradient(0deg, hsla(214, 28%, 10%, 0.5), hsl(214, 28%, 10%, 0.5)",
        }}
      />
      <img
        src="https://yusephinum-web-assets.s3.us-west-2.amazonaws.com/illustration_6.jpg"
        alt="Yusephinum fantasy world"
        style={{
          zIndex: "-1",
          width: "100vw",
          minHeight: "100vh",
          backgroundPosition: "top right",
          backgroundSize: "cover",
          backgroundRepeat: "repeat-y",
          backgroundImage:
            "linear-gradient(0deg, hsla(214, 28%, 10%, 0.5), hsl(214, 28%, 10%, 0.5)",
        }}
      />
      <img
        src="https://yusephinum-web-assets.s3.us-west-2.amazonaws.com/illustration_7.jpg"
        alt="Yusephinum fantasy world"
        style={{
          zIndex: "-1",
          width: "100vw",
          minHeight: "100vh",
          backgroundPosition: "top right",
          backgroundSize: "cover",
          backgroundRepeat: "repeat-y",
          backgroundImage:
            "linear-gradient(0deg, hsla(214, 28%, 10%, 0.5), hsl(214, 28%, 10%, 0.5)",
        }}
      />
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
