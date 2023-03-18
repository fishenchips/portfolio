import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";
import * as S from "./styled";

interface Props {
  header: string;
  timeSpent: string;
  github?: string;
  website?: string;
  tags: Array<string>;
  text: string;
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
      <S.Header>{header}</S.Header>
      <S.PageSection>
        <S.InfoDiv>
          <div>
            <p>{timeSpent}</p>
            {github && (
              <Link href={github} target="_blank">
                <FaGithub />
              </Link>
            )}
            {website && (
              <Link href={website} target="_blank">
                <FaGlobe />
              </Link>
            )}
          </div>
          <S.TagDiv>
            {tags.map((tag) => (
              <S.StyledTag key={tag}>{tag}</S.StyledTag>
            ))}
          </S.TagDiv>
        </S.InfoDiv>
        <S.TextDiv>
          <p>{text}</p>
        </S.TextDiv>
      </S.PageSection>
      ;
    </>
  );
};
