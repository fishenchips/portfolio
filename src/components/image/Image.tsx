import Image from "next/image";
import styled from "./Image.module.css";

interface Props {
  src: string;
  alt: string;
}

export const ProjectImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <div className={styled.imgDiv}>
      <Image
        src={src}
        alt={alt}
        fill
        placeholder="blur"
        blurDataURL={src}
        loading="lazy"
      />
    </div>
  );
};
