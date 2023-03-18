import * as S from "./styled";

interface Props {
  header: string;
  timeSpent: string;
  tags: Array<string>;
  text: string;
}

export const TextSection: React.FC<Props> = ({
  header,
  timeSpent,
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
