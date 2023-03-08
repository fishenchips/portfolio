"use client";
import {
  InfoDiv,
  PageSection,
  StyledTag,
  TagDiv,
  TimeDiv,
} from "@/components/project/Tag";
import { StrydaTags } from "@/utils/Stryda/tagsArray";
import { StrydaText } from "@/utils/Stryda/text";

const StrydaPage = () => {
  return (
    <>
      <PageSection>
        <TimeDiv>
          <p>10 weeks fall 2022, 15 weeks spring 2023</p>
        </TimeDiv>
        <TagDiv>
          {StrydaTags.map((tag) => (
            <StyledTag key={tag}>{tag}</StyledTag>
          ))}
        </TagDiv>
        <InfoDiv>
          <p>{StrydaText}</p>
        </InfoDiv>
      </PageSection>
    </>
  );
};

export default StrydaPage;
