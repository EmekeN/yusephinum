import { useEffectOnlyOnce } from "../hooks/useEffectOnlyOnce";
import Seo from "./../components/Seo";
import Founders from "./../images/about/founders.jpg";
import Logo from "./../images/logos/yusephinum-logo.svg";
import "./../styles/about.scss";
// import "./../styles/index.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const About = () => {
  // const founderImgRef = useRef();
  // const richardImgRef = useRef();
  // const ckImgRef = useRef();
  const containerRef = useRef();
  const story1Ref = useRef();
  const story2Ref = useRef();
  const story3Ref = useRef();
  const timelineRef = useRef()

  useEffectOnlyOnce(()=> {
    gsap.registerPlugin(ScrollTrigger)
    timelineRef.current = gsap.timeline({
      // scrollTrigger: {
      //   // trigger:[story2Ref.current, story3Ref.current],
      //   trigger:[containerRef.current],
      //   start: "top top",
      //   end: "+=100",
      //   scrub: true,
      //   pin: true,
      //   // animation
      //   snap: {
      //     snapTo: "labels",
      //     duration: {min: .2, max: 2},
      //     delay: .2,
      //     ease: "power1.easeIn"
      //   }
      // }
    })

    timelineRef.current
      // .addLabel("richard")
      .from(story1Ref.current, {scale: ".3", opacity: "0", y: "100", duration: .6, ease: "power1.easeIn"}, )
      // .addLabel("ck")
      .from(story2Ref.current, {scale: ".3", opacity: "0", y: "100", autoAlpha: 0,
      //  scrollTrigger: story2Ref.current
      })
      // .addLabel("adam")
      .from(story3Ref.current, {scale: ".3", opacity: "0", y: "100", autoAlpha: 0,
      // scrollTrigger: story3Ref.current
    })
  })

  return (
    <div className="About" ref={containerRef}>
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
      <section className="ctn one" ref={story1Ref}>
        <img
          src="https://yusephinum-web-assets.s3.us-west-2.amazonaws.com/about-richard-full-body-1.jpg"
          alt="Founders of Yusephinum"
          className="founders"
          loading="eager"
        />
        <span className="story-text">
        <span className="emph">Richard Peacock</span> is a Seattle based multidisciplinary artist and co-founder of the Queer, BIPOC artist collective, Yusephinum LLC. Over the last ten years to present, he has worked primarily within the musical theater and burlesque spheres of the Seattle community. Currently, Peacock serves as the artistic producer and visionary of Yusephinum LLC. Under this title Peacock has covered a number of roles including writer, composer, story developer, character designer, concept artist, creative consultant, and project manager. His goal in founding Yusephinum LLC  is to create a community of artists whose work challenges the current standardization of character design and representation in fantasy narratives.
        </span>
      </section>

      <section className="ctn two" ref={story2Ref} style={{margin: "6vh 0"}}>
        <img
          src="https://yusephinum-web-assets.s3.us-west-2.amazonaws.com/about-ck-full-body-1.jpg"
          alt="Richard Peacock"
          className="founders"
        />
        <p className="story-text">
        <span className="emph">CK</span> is a vocalist, arranger, music producer, audio engineer and software engineer who was born and raised in Quezon City, Philippines. He attended university at the Massachusetts Institute of Technology and majored in Electrical Engineering and Computer Science, with concentrations in music and media studies. Taking classes in music theory, composition, game design and interactive music systems (including one taught by a co-creator of Guitar Hero) allowed him to bring together the worlds of engineering and art, and this marriage of technical and creative worlds shapes much of his work today.
        </p>

      </section>
      {/* <p style={{fontSize: "3rem", textAlign: "center", "margin": "0"}}>.</p> */}
      <section className="ctn three">
        <img
          src="https://yusephinum-web-assets.s3.us-west-2.amazonaws.com/about-adam-full-body-1.jpg"
          alt="CK Ong"
          className="founders"
        />
        <p className="story-text">
        <span className="emph">Adam Tomás Torres</span>  is the Associate Co-Founder of Yusephinum LLC. He is a Boston based composer, performer, and movement artist whose work strives to communicate interconnectedness. Torres embraces a collaborative practice and is uniquely suited for such work given his array of creative backgrounds in composition, instrumental performance, and dance. Torres works primarily with small chamber ensembles but has a background in composing for electronics, theater, film, and dance. In terms of musical performance, he is a proficient pianist with a primary focus on romantic era, contemporary, and Latin-American genres. 

        </p>
      </section>
    </div>
  );
};
export default About;
