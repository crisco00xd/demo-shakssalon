import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Testimonial({ testimonial }) {
  const { avatar, name, comment } = testimonial.fields;

  return (
    <>
      <SplideSlide>
        <div className="testimonial">
          <div className="testimonial__avatar">
            <Image
              src={"https:" + avatar.fields.file.url}
              width={avatar.fields.file.details.image.width}
              height={avatar.fields.file.details.image.height}
              loading="lazy"
            />
          </div>

          <p className="testimonial__comment">{comment}</p>
          <h3 className="testimonial__name">{name}</h3>
        </div>
      </SplideSlide>
    </>
  );
}
