"use client";
import {
  InfoDiv,
  TextDiv,
  PageSection,
  StyledTag,
  TagDiv,
  Header,
} from "@/components/textSection/styled";
import { TextSection } from "@/components/textSection/TextSection";
import { StrydaTags } from "@/utils/Stryda/tagsArray";
import { header, timeSpent, strydaText } from "@/utils/Stryda/text";

const StrydaPage = () => {
  return (
    <>
      <TextSection
        header={header}
        timeSpent={timeSpent}
        tags={StrydaTags}
        text={strydaText}
      />
    </>
  );
};

export default StrydaPage;
