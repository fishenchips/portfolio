import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";
import styled from "./TextSection.module.css";

interface Props {
  header: string;
  timeSpent: string;
  github?: string;
  website?: string;
  tags: Array<string>;
  text: Array<string>;
}

export const TextSection: React.FC<Props> = ({
  header,
  timeSpent,
  github,
  website,
  tags,
  text,
}) => {
  return (
    <>
      <h2 className={styled.heading}>{header}</h2>
      <div className={styled.section}>
        <div className={styled.info}>
          <div>
            <i>{timeSpent}</i>
            {(github || website) && (
              <div className={styled.project}>
                {github && (
                  <Link className={styled.link} href={github} target="_blank">
                    <FaGithub />
                  </Link>
                )}
                {website && (
                  <Link className={styled.link} href={website} target="_blank">
                    <FaGlobe />
                  </Link>
                )}
              </div>
            )}
          </div>
          <div className={styled.tags}>
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className={styled.text}>
          {text.map((section, i) => (
            <p key={i}>{section}</p>
          ))}
        </div>
      </div>
      ;
    </>
  );
};
