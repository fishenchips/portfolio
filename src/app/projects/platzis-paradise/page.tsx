"use client";

import { TextSection } from "@/components/textSection/TextSection";
import { webshop } from "@/utils/platzisParadise/info";

const WebShopPage = () => {
  return (
    <TextSection
      header={webshop.header}
      timeSpent={webshop.timeSpent}
      github={webshop.github}
      tags={webshop.tags}
      text={webshop.text}
    />
  );
};

export default WebShopPage;
