import { AnimatePresence, motion } from "framer-motion";
import styled, { css } from "styled-components";
import { useState } from "react";
import arrow from "../../arrow.png";
import { MaxWidthWrapper } from "../Hero/Hero";

import ertgApp from "../../images/ertg-app.jpg";
import ertgNL from "../../images/ertg-nl.jpg";
import ertgPagebuilder from "../../images/ertg-pagebuilder.jpg";
import ertgBlueprint from "../../images/ertg-blueprint.jpg";
import ertgWeb from "../../images/ertg-web.jpg";
import ertgLogin from "../../images/ertg-login.jpg";

import bvdk1 from "../../images/bvdk-1.jpg";
import bvdk2 from "../../images/bvdk-2.jpg";
import bvdk3 from "../../images/bvdk-3.jpg";
import bvdk4 from "../../images/bvdk-5.jpg";
import bvdk5 from "../../images/bvdk-6.jpg";

import graduation1 from "../../images/graduation-1.jpg";
import graduation2 from "../../images/graduation-2.jpg";
import graduation3 from "../../images/graduation-3.jpg";
import graduation4 from "../../images/graduation-4.jpg";
import graduation5 from "../../images/graduation-5.jpg";
import graduation6 from "../../images/graduation-6.jpg";

import sleeer1 from "../../images/sleeer-1.jpg";
import sleeer2 from "../../images/sleeer-2.jpg";
import sleeer3 from "../../images/sleeer-3.jpg";

export const projects = [
  {
    title: "ERTG",
    techStack: ["NextJS", "Framer Motion", "Styled Components", "MySQL"],
    text: (
      <>
        <p>
          Escape Room The Game is popular board game from Identity Games sold in
          over 24 countries.
          <br /> <br />
          The custom CMS application for Identity Games and all the countries
          allows them to manage all the different adventures, editions and
          categories per country.
          <br /> <br />
          This CMS populates the ERTG website and web mobile app with all their
          content.
        </p>

        <p>
          There are 3 different websites created for Escape Room The Game.
          <br /> <br />
          <a href="https://panel.escaperoomthegame.com/" target="_blank">
            panel.escaperoomthegame.com
          </a>
          <br />
          <a href="https://www.escaperoomthegame.com/" target="_blank">
            escaperoomthegame.com
          </a>
          <br />
          <a href="https://app.escaperoomthegame.com/" target="_blank">
            app.escaperoomthegame.com
          </a>
          <br /> <br />
          My role was to create all the frontend and backend connections for the
          CMS application and the websites.
        </p>
      </>
    ),
    link: "/ertg",
    backgroundColor: "#052C55",
    sections: [
      {
        type: "one",
        images: [ertgLogin],
        backgroundColor: "#fff",
      },
      {
        type: "two-diagonal",
        images: [ertgBlueprint, ertgNL],
        backgroundColor: "#052C55",
      },
      {
        type: "one",
        images: [ertgPagebuilder],
        backgroundColor: "#fff",
      },
      {
        type: "two",
        images: [ertgWeb, ertgApp],
        backgroundColor: "#052C55",
      },
    ],
  },
  {
    title: "BVDK",
    techStack: ["NextJS", "React", "Styled Components", "NodeJS", "Socket.io"],
    text: (
      <>
        <p>
          Bank Voor De Klas is a Dutch program that promotes financial literacy
          by providing interactive and educational sessions in schools.
          <br /> <br />
          The web application mijn.bankvoordeklas.nl allows teachers and guest
          lecturers to create and manage their own sessions at schools.
        </p>

        <p>
          For the sessions at the schools, the teachers use the Cash Quiz to
          provide the students with a fun and interactive way to learn about
          money. The Cash Quiz can be played by the students on their own
          devices via websockets.
        </p>

        <p>
          There are 2 different websites created for Bank Voor De Klas.
          <br /> <br />
          <a href="https://mijn.bankvoordeklas.nl/" target="_blank">
            mijn.bankvoordeklas.nl
          </a>
          <br />
          <a href="https://cashquiz.bankvoordeklas.nl/" target="_blank">
            cashquiz.bankvoordeklas.nl
          </a>
          <br /> <br />
          My role was to create all the frontend and manage the websocket
          connections
        </p>
      </>
    ),
    link: "/bvdk",
    backgroundColor: "#f3fafc",
    textColor: "#000",
    sections: [
      {
        type: "one",
        images: [bvdk1],
        backgroundColor: "#fff",
      },
      {
        type: "two-diagonal",
        images: [bvdk2, bvdk3],
        backgroundColor: "#f3fafc",
      },
      {
        type: "one",
        images: [bvdk4],
        backgroundColor: "#fff",
      },
      {
        type: "one",
        images: [bvdk5],
        backgroundColor: "#f3fafc",
      },
    ],
  },
  {
    title: "GRADUATION",
    techStack: ["React", "8th Wall", "Three.js", "Blender"],
    text: (
      <>
        <p>
          For my graduation project I researched the possibilities of using
          immersive technologies in the physical stores of Loods 5.
          <br /> <br />
          Loods 5 is a Dutch retail company that sells furniture, home decor and
          other interior products.
        </p>

        <p>
          I ended up creating a prototype of an augmented reality experience
          that tells the costumer the story of a sustainable product.
        </p>

        <p>
          You can view my whole thesis in Dutch here:
          <br />
          <a href="https://scriptie-thomas.vercel.app/" target="_blank">
            scriptie-thomas.vercel.app
          </a>
        </p>

        <p>
          Another experiment I did for Loods 5 is an interactive 3D map of their
          store in Sliedrecht. You can find that here:
          <br />
          <a href="https://loods5-immersive.vercel.app/" target="_blank">
            loods5-immersive.vercel.app
          </a>
        </p>
      </>
    ),
    link: "/graduation",
    backgroundColor: "#666f55",
    // textColor: "#fff",
    sections: [
      {
        type: "one",
        images: [graduation1],
        backgroundColor: "#fff",
      },
      {
        type: "two",
        images: [graduation2, graduation6],
        backgroundColor: "#666f55",
      },
      {
        type: "two-diagonal",
        images: [graduation5, graduation4],
        backgroundColor: "#fff",
      },
      // {
      //   type: "one",
      //   images: [bvdk5],
      //   backgroundColor: "#666f55",
      // },
    ],
  },
  {
    title: "SLEEËR",
    techStack: ["Javascript", "Phaser 3"],
    text: (
      <>
        <p>
          Sleeër is a small game I made for Patswerk, as a fun christmas gift
          for their customers
          <br /> <br />
          The game is a simple endless runner where you play as a sleigh and
          avoid obstacles. Patswerk provided all the assets and animations for
          the game. And i created the game logic and the UI.
        </p>

        <p>
          I ended up creating a prototype of an augmented reality experience
          that tells the costumer the story of a sustainable product.
        </p>

        <p>
          You can play the game here:
          <br />
          <a href="http://sleeer.patswerk.nl/" target="_blank">
            sleeer.patswerk.nl
          </a>
        </p>
      </>
    ),
    link: "/sleeer",
    backgroundColor: "#5b59ff",
    sections: [
      {
        type: "one",
        images: [sleeer1],
        backgroundColor: "#fff",
      },

      {
        type: "two-diagonal",
        images: [sleeer2, sleeer3],
        backgroundColor: "#5b59ff",
      },
    ],
  },
  {
    title: "PERSONAL",
    link: "/personal",
  },
];

const Projects = () => {
  return (
    <MaxWidthWrapper style={{ marginBlock: 200 }}>
      <Header>PROJECTS</Header>
      {projects.map((project, index) => {
        return (
          <Project key={index} link={project.link} title={project.title} />
        );
      })}
    </MaxWidthWrapper>
  );
};

export const Project = ({ title, link, small }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <StyledProject
      small={small}
      onClick={() => {
        window.location.href = link;
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence mode="popLayout">
        {hovered && (
          <motion.h3
            key="hovered"
            transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 40,
            }}
            className="fake"
          >
            {title}
          </motion.h3>
        )}
        {!hovered && (
          <motion.h3
            key="not-hovered"
            transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
            initial={{
              opacity: 0,
              y: -40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -40,
            }}
            className="fake"
          >
            {title}
          </motion.h3>
        )}
      </AnimatePresence>
      {!small && (
        <motion.img
          transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
          animate={{
            y: hovered ? 0 : 50,
          }}
          className="arrow"
          src={arrow}
          alt="arrow"
        />
      )}
    </StyledProject>
  );
};

const Header = styled(motion.h2)`
  font-family: "Satoshi Variable";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 86px;
  letter-spacing: 0.4em;
  /* top: 128px; */
  position: relative;
  color: #fff;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const StyledProject = styled.div`
  width: 100%;
  border-bottom: 1px solid #ededed;
  margin-bottom: 32px;
  cursor: pointer;
  max-height: 86px;
  overflow: hidden;
  position: relative;
  h3 {
    font-family: "Satoshi Variable";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 86px;
    letter-spacing: 0.4em;
    position: relative;
    color: #fff;
  }

  .arrow {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  ${(props) =>
    props.small &&
    css`
      border-bottom: 1px solid #000;

      h3 {
        font-size: 32px;
        line-height: 48px;
        color: #000;
      }
    `};

  @media (max-width: 768px) {
    h3 {
      font-size: 24px;
      line-height: 48px;
    }
  }
`;

export default Projects;
