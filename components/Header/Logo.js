import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="logo">
      <Link href="/">
        <Image
          alt="logo"
          src="/images/logo_1.png"
          width={156}
          height={177}
          loading="lazy"
        />
      </Link>
    </div>
  );
}
