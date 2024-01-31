import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function CTA({ aboutUs }) {
  const { avatar, image, title, description } = aboutUs.fields;

  return (
    <>
      <div className="about__images">
        <div className="about__avatar">
          <Image
            src={"https:" + avatar.fields.file.url}
            width={255}
            height={255}
            objectFit="cover"
            // width={aboutUs.fields.avatar.fields.file.details.image.width}
            // height={aboutUs.fields.avatar.fields.file.details.image.height}
            loading="lazy"
          />
        </div>
        <div className="about__shop-image">
          <Image
            src={"https:" + image.fields.file.url}
            width={655}
            height={655}
            objectFit="cover"
            // width={aboutUs.fields.image.fields.file.details.image.width}
            // height={aboutUs.fields.image.fields.file.details.image.height}
            loading="lazy"
          />
        </div>
      </div>
      <div className="about__content">
        <h2 className="about__title">{title}</h2>
        <div className="about__description">
          {documentToReactComponents(description)}
        </div>
      </div>
    </>
  );
}
