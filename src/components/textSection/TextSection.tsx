import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";
import * as S from "./styled";

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
      <S.Header>{header}</S.Header>
      <S.PageSection>
        <S.InfoDiv>
          <div>
            <p>{timeSpent}</p>
            {(github || website) && (
              <S.ProjectDiv>
                {github && (
                  <S.ProjectLink href={github} target="_blank">
                    <FaGithub />
                  </S.ProjectLink>
                )}
                {website && (
                  <S.ProjectLink href={website} target="_blank">
                    <FaGlobe />
                  </S.ProjectLink>
                )}
              </S.ProjectDiv>
            )}
          </div>
          <S.TagDiv>
            {tags.map((tag) => (
              <S.StyledTag key={tag}>{tag}</S.StyledTag>
            ))}
          </S.TagDiv>
        </S.InfoDiv>
        <S.TextDiv>
          {text.map((section, i) => (
            <p key={i}>{section}</p>
          ))}
        </S.TextDiv>
      </S.PageSection>
      ;
    </>
  );
};
