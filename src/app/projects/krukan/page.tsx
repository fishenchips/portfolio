"use client";
import { TextSection } from "@/components/textSection/TextSection";
import { krukan } from "@/utils/krukan/info";

const KrukanPage = () => {
  return (
    <TextSection
      header={krukan.header}
      timeSpent={krukan.timeSpent}
      github={krukan.github}
      website={krukan.website}
      tags={krukan.tags}
      text={krukan.text}
    />
  );
};

export default KrukanPage;
