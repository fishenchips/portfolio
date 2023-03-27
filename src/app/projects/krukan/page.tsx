"use client";
import { ProjectImage } from "@/components/image/Image";
import { TextSection } from "@/components/textSection/TextSection";
import { krukan } from "@/utils/krukan/info";

const images = [
  "/krukan/landing-page.jpg",
  "/krukan/match-roster.jpg",
  "/krukan/mobile.jpg",
  "/krukan/match-schedule.jpg",
  "/krukan/db-matches.jpg",
];

const KrukanPage = () => {
  return (
    <>
      <TextSection
        header={krukan.header}
        timeSpent={krukan.timeSpent}
        github={krukan.github}
        website={krukan.website}
        tags={krukan.tags}
        text={krukan.text}
      />
      {images.map((img) => (
        <ProjectImage key={img} src={img} alt={"Krukan 2.0"} />
      ))}
    </>
  );
};

export default KrukanPage;
