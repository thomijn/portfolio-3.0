import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Project, projects } from "../components/Projects/Projects";
import arrow from "../arrow.png";
import arrowBlack from "../arrow-black.png";
import { MaxWidthWrapper } from "../components/Hero/Hero";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Personal() {
  const component = useRef();
  const slider = useRef();
  const location = useLocation();
  const [project, setproject] = useState(
    projects.find((p) => p.link === location.pathname)
  );

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      let widths = panels.map((panel) => panel.offsetWidth); // Get the widths of each panel
      let totalWidth = widths.reduce((a, b) => a + b); // Calculate the total width of all panels
      gsap.to(panels, {
        x: -(totalWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 0,
          // snap: 1 / (panels.length - 1),
          end: () => `+=${totalWidth - component.current.offsetWidth}`, // Subtract the width of the container element
          // markers: true,
          endTrigger: component.current, // Set the end trigger to the container element
          invalidateOnRefresh: true, // Invalidate the trigger on refresh to recalculate widths
        },
        width: widths, // Set the width of each panel to its calculated width
        maxWidth: "none", // Set maxWidth to "none" to ensure the width is set correctly
      });
    }, component);
    return () => ctx.revert();
  }, []);

  const renderSection = (type, section) => {
    switch (type) {
      case "one":
        return (
          <div>
            <img src={section.images[0]} />
            <p>{section.text}</p>
          </div>
        );
      case "two":
        return (
          <div className="two">
            <img src={section.images[0]} />
            <img src={section.images[1]} />
            <p>{section.text}</p>
          </div>
        );
      case "two-diagonal":
        return (
          <div className="two-diagonal">
            <img src={section.images[0]} />
            <img src={section.images[1]} />
          </div>
        );
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <Wrapper textColor={project.textColor} ref={component}>
      <div style={{}} ref={slider} className="container">
        <Intro
          textColor={project.textColor}
          backgroundColor={project.backgroundColor}
          className="description panel"
        >
          <h1>{project.title}</h1>
          <p>{project.text}</p>
          <img src={arrow} className="arrow" />
        </Intro>
        {project.sections.map((section, index) => {
          return (
            <Section
              key={index}
              backgroundColor={section.backgroundColor}
              className="panel"
            >
              {renderSection(section.type, section)}
            </Section>
          );
        })}
      </div>
      <div className="lastContainer">
        <MaxWidthWrapper
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            <Header>Other Works</Header>
            <img src={arrowBlack} className="arrow-footer" />
          </div>
          <div>
            {projects
              .filter((project) => project.link !== location.pathname)
              .sort(() => Math.random() - 0.5)
              .slice(0, 2)
              //randomize
              .map((project, index) => {
                return (
                  <Project
                    small
                    key={index}
                    link={project.link}
                    title={project.title}
                  />
                );
              })}
          </div>
        </MaxWidthWrapper>
      </div>
    </Wrapper>
  );
}

const Header = styled(motion.h2)`
  font-family: "Satoshi";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 54px;
  /* identical to box height */

  color: #000000;
`;

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-family: "Satoshi";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 25px;

  p {
    line-height: 20px;

    a {
      text-decoration: underline;
      color: #000;
    }
  }

  img {
    width: 100%;
    max-width: 800px;
    /* aspect-ratio: 1.7/1; */
    height: auto;
    max-height: 500px;
    object-fit: contain;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.1))
      drop-shadow(0 0 10px rgba(0, 0, 0, 0.1));
  }

  .two-diagonal {
    display: flex;
    gap: 64px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    //first image
    img:first-child {
      transform: translateY(50px) translateX(-100px);
    }

    //second image
    img:last-child {
      transform: translateY(-50px) translateX(100px);
    }
  }

  .two {
    display: flex;
    gap: 64px;
  }

  @media (max-height: 900px) {
    .two-diagonal {
      img {
        max-height: 350px;
        box-shadow: none;
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.05))
          drop-shadow(0 0 10px rgba(0, 0, 0, 0.05));
      }
    }
  }

  @media (max-height: 700px) {
    .two-diagonal {
      img {
        max-height: 300px;
      }
    }
  }
  @media (max-width: 768px) {
    width: 800px;

    img {
      width: 100%;
      max-width: 500px;
      /* aspect-ratio: 1.7/1; */
      height: auto;
      max-height: 400px;
    }
  }
`;

const Intro = styled.div`
  width: 40vw;
  background-color: ${(props) => props.backgroundColor};
  padding: 32px;
  overflow: auto;
  position: relative;
  color: ${(props) => props.textColor || "#ffffff"};

  h1 {
    color: ${(props) => props.textColor || "#ffffff"};
  }
  p {
    pointer-events: none;
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    max-width: 400px;
    color: ${(props) => props.textColor || "#ffffff"};
    margin-block: 0px;
    margin-top: 32px;
  }

  a {
    pointer-events: all;

    color: ${(props) => props.textColor || "#ffffff"};
    font-family: "Satoshi";
    font-style: normal;
    text-underline-offset: 4px;
  }

  .arrow {
    position: absolute;
    bottom: 32px;
    right: 32px;
    width: 64px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .techWrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
    font-family: "Satoshi";
    font-style: normal;

    p {
      margin-block: 0px;
      font-family: "Satoshi";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 25px;
      max-width: 400px;
      color: ${(props) => props.textColor || "#ffffff"};
    }
  }

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  .container {
    width: 600vw;
    height: 100vh;
    display: flex;
    flex-wrap: no-wrap;
    overflow-x: hidden;
    h1 {
      font-family: "Satoshi";
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 86px;
      letter-spacing: 0.4em;
      color: ${(props) => props.textColor || "#ffffff"};

      @media (max-width: 1500px) {
        font-size: 40px;
        line-height: 44px;
      }
    }

    @media (max-width: 768px) {
      width: calc(100vw + (6 * 800px)) !important;
      height: 100vh;
    }
  }

  .lastContainer {
    /* padding-top: 64px; */
    display: flex;
    height: 40vh;
    background: #fff;

    > div {
      align-items: center;
    }

    .arrow-footer {
      margin-top: 8px;
    }

    @media (max-width: 768px) {
      height: 250px;
      > div {
        flex-direction: column;
        align-items: flex-start;

        h2 {
          margin-top: 16px;
          font-size: 32px;
        }

        .arrow-footer {
          display: none;
        }
      }
    }
  }

  .panel {
    height: 100vh;
  }
`;
