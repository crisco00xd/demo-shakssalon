// import { InstagramLogo, FacebookLogo, Moon } from 'phosphor-react';
import { LogoInstagram, LogoFacebook, LogoYoutube } from "@carbon/icons-react";
import Link from "next/link";

export default function SocialIconsLight() {
  return (
    <ul className="social-icons" role="list">
      <li className="social-icons__item">
        <Link
          href="https://www.instagram.com/shakssalon_/"
          target="_blank"
          className="social-icons__link"
        >
          <LogoInstagram size={30} />
        </Link>
      </li>
      <li className="social-icons__item">
        <Link
          href="https://www.facebook.com/profile.php?id=100085374409111"
          target="_blank"
          className="social-icons__link"
        >
          {/* <FacebookLogo size={32} color='black' weight='fill' /> */}
          <LogoFacebook size={30} />
        </Link>
      </li>
    </ul>
  );
}
