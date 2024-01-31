import Image from "next/image";

export default function BrandCard({ brand }) {
  const { image, slug } = brand.fields;

  return (
    <>
      <div className="brand">
        <Image
          src={"https:" + image.fields.file.url}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
          loading="lazy"
        />
      </div>
    </>
  );
}
