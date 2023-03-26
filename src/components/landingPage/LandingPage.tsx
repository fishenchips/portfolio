import { pageLinks } from "@/utils/pageLinks";
import Link from "next/link";
import styled from "./LandingPage.module.css";

export const LandingPage = () => {
  return (
    <div>
      <div>
        <div className={styled.heading}>
          <h2>
            <span>Welcome to my space - I&apos;m </span>
            <span className={styled.name}>Philip Carlsson</span>
          </h2>
          <p>
            (In progress - buiding with NextJs experimental{" "}
            <Link
              href={
                "https://beta.nextjs.org/docs/upgrade-guide#migrating-from-pages-to-app"
              }
              target="_blank"
            >
              app directory
            </Link>
            )
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
    </div>
  );
};
