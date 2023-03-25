import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import styled from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styled.heading}>
        <div>
          <Link href={"/"} className={styled.home}>
            {"<PC />"}
          </Link>
        </div>
        <div>
          <ul className={styled.links}>
            <li>
              {/*   <GrDocumentPdf /> */}
              <Link
                className={styled.github}
                href="https://github.com/fishenchips"
                target="_blank"
              >
                <FaGithub />
              </Link>
            </li>
            <li>
              <Link
                className={styled.linkedin}
                href="https://www.linkedin.com/in/philip-carlsson-b6494a90/"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
