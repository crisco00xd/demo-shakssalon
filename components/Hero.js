import Link from "next/link";
import Image from "next/image";
import { CalendarPlus } from "phosphor-react";

export default function Hero() {
  return (
    <div className="hero grid">
      <div className="wrapper wrapper--hero">
        <div className="hero__caption">
          <h2 className="hero__title">
            Ultricies et fermentum tristique semper non <br /> neque lacus.
          </h2>
          <p className="hero__text">
            A netus tortor pellentesque eu massa purus. Id sagittis amet,
            pellentesque massa auctor magna egestas lectus sagittis. Amet semper
            vitae fusce interdum. Tortor, vulputate aliquet vulputate id a eget
            ut eget. Augue amet dignissim quisque volutpat.
          </p>
          <Link href="/" scroll={false}>
            <a href="" className="hero__btn btn">
              Book Appointment &nbsp;
              <CalendarPlus size={24} color="white" weight="light" />
            </a>
          </Link>
        </div>
        <div className="hero__image hero__image--one"></div>
        <div className="hero__image hero__image--bg"></div>
        <div className="hero__image hero__image--two"></div>
      </div>
    </div>
  );
}
