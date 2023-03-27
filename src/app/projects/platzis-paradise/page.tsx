"use client";

import { ProjectImage } from "@/components/image/Image";
import { TextSection } from "@/components/textSection/TextSection";
import { webshop } from "@/utils/platzisParadise/info";

const images = [
  "/platzi/user-page.jpg",
  "/platzi/paginated-products.jpg",
  "/platzi/cart.jpg",
  "/platzi/order-placed.jpg",
  "/platzi/register.jpg",
  "/platzi/admin.jpg",
  "/platzi/categories.jpg",
];

const WebShopPage = () => {
  return (
    <>
      <TextSection
        header={webshop.header}
        timeSpent={webshop.timeSpent}
        github={webshop.github}
        tags={webshop.tags}
        text={webshop.text}
      />
      {images.map((img) => (
        <ProjectImage key={img} src={img} alt={"Webshop examination"} />
      ))}
    </>
  );
};

export default WebShopPage;
