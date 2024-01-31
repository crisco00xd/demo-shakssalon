import Head from "next/head";
import Link from "next/link";
import { createClient } from "contentful";
import { EnvelopeSimple, Phone, MapPin } from "phosphor-react";

export default function Contact({}) {
  const title = "Contact Us";

  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    e.target.reset();
  }

  return (
    <>
      <Head>
        <title>Shaks Salon | {title}</title>
      </Head>
      <div className="page-header">
        <h1 className="page-title">{title}</h1>
        <ul className="breadcrumbs" role="list">
          <li className="breadcrumbs__item">
            <Link href="/" className="breadcrumbs__link">
              Home
            </Link>
          </li>
          <li className="breadcrumbs__item">{title}</li>
        </ul>
      </div>

      <div className="contact-us grid">
        <div className="wrapper wrapper--contact-us">
          <div className="contact-us__details">
            <h2 className="contact-us__title">Contactanos!</h2>
            <p className="contact-us__description">
              Si tiene alguna pregunta o necesita más información sobre
              cualquiera de nuestros tratamientos o servicios, no dude en
              ponerse en contacto.
            </p>
            <ul className="contact-us__details-list">
              <li className="contact-us__list-item">
                <EnvelopeSimple size={24} weight="light" color="#000" />
                <a href="mailto: jake@weblavida.com">shakssalon@gmail.com</a>
              </li>
              <li className="contact-us__list-item">
                <Phone size={24} weight="light" color="#000000" />
                (787)689-6405
              </li>
              <li className="contact-us__list-item">
                <MapPin size={24} weight="light" color="#000" />
                37 Calle Francisco M Quinonez, Sabana Grande, 00637
              </li>
            </ul>
          </div>
          <form
            className="contact-us__form"
            method="post"
            onSubmit={handleOnSubmit}
          >
            <div className="contact-us__form-group">
              <p className="contact-us__form-field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" required />
              </p>
              <p className="contact-us__form-field">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" required />
              </p>
            </div>

            <div className="contact-us__form-group">
              <p className="contact-us__form-field">
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" />
              </p>
              <p className="contact-us__form-field">
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" required />
              </p>
            </div>

            <div className="contact-us__form-group">
              <p className="contact-us__form-field">
                <label htmlFor="message">Message</label>
                <textarea name="message" required></textarea>
              </p>
            </div>
            <button className="contact-us__btn btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
