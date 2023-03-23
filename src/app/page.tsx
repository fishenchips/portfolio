"use client";
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
        <ul>
          {/* color is weird atm due to a tag */}
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
        <div>
          <Link href={"/projects/krukan"}>
            Krukan
            <div>
              {/*               <img src="/krukan.PNG" alt="Krukan" />
               */}
            </div>
          </Link>
        </div>
        <div>
          <Link href={"/projects/platzis-paradise"}>
            Platzi&apos;s Paradise e-commerce
          </Link>
        </div>
        <div>
          <Link href={"/projects/stryda"}>Stryda internship</Link>
        </div>
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
