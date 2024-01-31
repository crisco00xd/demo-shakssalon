import Link from "next/link";
import { CalendarPlus } from "phosphor-react";

export default function BookApp() {
  return (
    <div className="book-app">
      <p className="book-app__text">
        Aliquet elementum amet, placerat venenatis tempor. Commodo egestas
        lectus enim aliquet enim tempus, turpis urna.
      </p>
      <Link href="/" scroll={false}>
        <a href="" className="book-app__btn btn">
          Book Appointment &nbsp;
          <CalendarPlus size={24} color="white" weight="light" />
        </a>
      </Link>
    </div>
  );
}
