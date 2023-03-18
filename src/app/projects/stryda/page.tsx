"use client";
import { TextSection } from "@/components/textSection/TextSection";
import { stryda } from "@/utils/stryda/info";

const StrydaPage = () => {
  return (
    <>
      <TextSection
        header={stryda.header}
        timeSpent={stryda.timeSpent}
        tags={stryda.tags}
        text={stryda.text}
      />
    </>
  );
};

export default StrydaPage;
