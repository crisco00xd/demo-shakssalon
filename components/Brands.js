import Image from "next/image";

export default function Brands() {
  return (
    <div className="brands grid">
      <div className="wrapper wrapper--brands">
        <div className="brand">
          <Image
            className="brand__img"
            src="/images/brands/light/prada.webp"
            width={173}
            height={97}
          />
        </div>
        <div className="brand">
          <Image
            className="brand__img"
            src="/images/brands/light/mac.webp"
            width={222}
            height={124}
          />
        </div>
        <div className="brand">
          <Image
            className="brand__img"
            src="/images/brands/light/maybelline.webp"
            width={254}
            height={142}
          />
        </div>
        <div className="brand">
          <Image
            className="brand__img"
            src="/images/brands/light/loreal.webp"
            width={162}
            height={91}
          />
        </div>
        <div className="brand">
          <Image
            className="brand__img"
            src="/images/brands/light/ellipse.webp"
            width={148}
            height={54}
          />
        </div>
      </div>
    </div>
  );
}
