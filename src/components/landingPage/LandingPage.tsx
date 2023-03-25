import { pageLinks } from "@/utils/pageLinks";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "./LandingPage.module.css";

export const LandingPage = () => {
  return (
    <main>
      <div>
        <h2 className={styled.heading}>
          <span>Welcome to my space - I&apos;m </span>
          <span className={styled.name}>Philip Carlsson</span>
        </h2>
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
          <div className={styled.linkDiv} key={project.name}>
            <Link className={styled.projectLink} href={project.url}>
              <h3>{project.name}</h3>
              {/*eslint-disable-next-line @next/next/no-img-element*/}
              <div>{<img src={project.img} alt={project.name} />}</div>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};
