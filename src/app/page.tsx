"use client";
import { pageLinks } from "@/utils/pageLinks";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
/*  <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            /> */
const Home = () => {
  return (
    <main>
      <div>
        <H2>
          <span>Welcome to my space - I&apos;m </span>
          <Name>Philip Carlsson</Name>
        </H2>
        <p style={{ textAlign: "center" }}>(In progress)</p>
        <ul>
          <li>
            <Link href="https://github.com/fishenchips" target="_blank">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/philip-carlsson-b6494a90/"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </li>
        </ul>
        <div>
          <p>
            Hello and welcome to my GitHub! I&apos;m currently a FE intern at
            Stryda, and graduating from Medieinstitutet in may 2023. Over my
            intern I have improved greatly in React, Typescript, and in packages
            such as tanstack query, react hook form. Furthermore I have lead
            daily stand-ups and retros which I enjoy. I&apos;m actively seeking
            a full-time position as a FE developer, where I can continue to
            learn and work with my passion. Currently working on: Creating my
            portfolio and Krukan 2.0.
          </p>
        </div>
      </div>
      <section>
        {pageLinks.map((project) => (
          <LinkDiv key={project.name}>
            <ProjectLink href={project.url}>
              <h3>{project.name}</h3>
              <div>{<img src={project.img} alt={project.name} />}</div>
            </ProjectLink>
          </LinkDiv>
        ))}
      </section>
    </main>
  );
};
export default Home;

const H2 = styled.h2`
  margin: 4rem 0;
  text-align: center;
`;

const Name = styled.span`
  background: -webkit-linear-gradient(
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 121, 54, 1) 35%,
    rgba(0, 212, 255, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const LinkDiv = styled.div`
  width: 60vw;
  margin: 3rem auto;
  box-shadow: inset 0 -20rem linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(
          63,
          76,
          119
        )
        70.2%);

  img {
    width: 100%;
    height: auto;
  }
`;
