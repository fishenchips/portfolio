"use client";
import {
  InfoDiv,
  TextDiv,
  PageSection,
  StyledTag,
  TagDiv,
  Header,
} from "@/components/project/Tag";
import { StrydaTags } from "@/utils/Stryda/tagsArray";
import { strydaText } from "@/utils/Stryda/text";

const StrydaPage = () => {
  return (
    <>
      <Header>Internship - Stryda</Header>
      <PageSection>
        <InfoDiv>
          <div>
            <p>10 weeks fall 2022, 15 weeks spring 2023</p>
          </div>
          <TagDiv>
            {StrydaTags.map((tag) => (
              <StyledTag key={tag}>{tag}</StyledTag>
            ))}
          </TagDiv>
        </InfoDiv>
        <TextDiv>
          <p>{strydaText}</p>
        </TextDiv>
      </PageSection>
    </>
  );
};

export default StrydaPage;
