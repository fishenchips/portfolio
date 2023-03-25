import Link from "next/link";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
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
            <li>
              <Link
                className={styled.cv}
                href={"/PhilipCarlsson.pdf"}
                download
                target="_blank"
              >
                <FaFilePdf />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
