"use client";
import { TextSection } from "@/components/textSection/TextSection";
import { spiritRealm } from "@/utils/spiritRealm/info";

const SpiritRealmPage = () => {
  return (
    <TextSection
      header={spiritRealm.header}
      timeSpent={spiritRealm.timeSpent}
      tags={spiritRealm.tags}
      text={spiritRealm.text}
    />
  );
};

export default SpiritRealmPage;
