import React, { useState } from 'react';
import Head from 'next/head';
import { createClient } from 'contentful';
import Link from 'next/link';
import Author from '../components/Author';
import CallToAction from '../components/CallToAction';

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});

	const page = await client.getEntries({
		content_type: 'page',
		limit: 1,
		'fields.slug': 'about-us',
	});
	const cta = await client.getEntry('3pNpjao0HvDwKHjEO3p715');

	return {
		props: {
			page: page.items,
			cta: cta,
		},
		revalidate: 1,
	};
}

export default function About({ page, cta }) {
	const pageTitle = page[0].fields.title;
	const author = page[0].fields.author;

	const [activeTab, setActiveTab] = useState(0);
	const handleTabChange = (index) => {
		setActiveTab(index);
	};

	// console.log(page);
	const title = pageTitle;
	return (
		<>
			{/* <Head>
				<title>Next Salon | {title}</title>
			</Head> */}
			<div className='page-header'>
				<h1 className='page-title'>About us</h1>
				<ul className='breadcrumbs' role='list'>
					<li className='breadcrumbs__item'>
						<Link className='breadcrumbs__link' href='/'>
							Home
						</Link>
					</li>
					<li className='breadcrumbs__item'>About us</li>
				</ul>
			</div>

			<div className='page about grid'>
				<div className='wrapper'>
					<div className='page__content'>
						<CallToAction cta={cta} />
					</div>
					<ul className='tabs__nav'>
						<li
							onClick={() => handleTabChange(0)}
							className={`tabs__nav-item ${
								activeTab === 0 ? 'tabs__nav-item--active' : ''
							}`}>
							Nuestra Misión
						</li>
						<li
							onClick={() => handleTabChange(1)}
							className={`tabs__nav-item ${
								activeTab === 1 ? 'tabs__nav-item--active' : ''
							}`}>
							Nuestros Valores
						</li>
						<li
							onClick={() => handleTabChange(2)}
							className={`tabs__nav-item ${
								activeTab === 2 ? 'tabs__nav-item--active' : ''
							}`}>
							Nuestro Equipo
						</li>
						<li
							onClick={() => handleTabChange(3)}
							className={`tabs__nav-item ${
								activeTab === 3 ? 'tabs__nav-item--active' : ''
							}`}>
							Nuestro Compromiso
						</li>
						<li
							onClick={() => handleTabChange(4)}
							className={`tabs__nav-item ${
								activeTab === 4 ? 'tabs__nav-item--active' : ''
							}`}>
							Nuestro Futuro
						</li>
						<li
							onClick={() => handleTabChange(5)}
							className={`tabs__nav-item ${
								activeTab === 5 ? 'tabs__nav-item--active' : ''
							}`}>
							Únete a Nuestra Comunidad
						</li>

					</ul>

					<div className='tabs__content'>
						<div
							className={`tabs__content-item ${
								activeTab === 0 ? 'tabs__content-item--active' : ''
							}`}>
							<p>
							En Shaks Salon, nuestra misión es ofrecer un oasis de lujo donde la belleza, la sofisticación y la atención personalizada se unen para crear una experiencia inolvidable. Nos comprometemos a descubrir y cuidar la belleza que reside en cada uno de nuestros clientes, asegurándonos de que se vayan sintiéndose rejuvenecidos, seguros y empoderados.
							</p>
						</div>
						<div
							className={`tabs__content-item ${
								activeTab === 1 ? 'tabs__content-item--active' : ''
							}`}>
							<p>
							En Shaks Salon, nuestra misión es ofrecer un oasis de lujo donde la belleza, la sofisticación y la atención personalizada se unen para crear una experiencia inolvidable. Nos comprometemos a descubrir y cuidar la belleza que reside en cada uno de nuestros clientes, asegurándonos de que se vayan sintiéndose rejuvenecidos, seguros y empoderados.
							</p>
						</div>
						<div
							className={`tabs__content-item ${
								activeTab === 2 ? 'tabs__content-item--active' : ''
							}`}>
							<p>
							La creatividad, la compasión y la conexión son los pilares sobre los que se sostiene Shaks Salon. Somos un equipo de profesionales dedicados que consideramos la belleza como una forma de arte y a nuestros clientes como el lienzo. Nuestro salón es un lugar acogedor y cálido, donde cada persona es recibida con comprensión y el más alto nivel de servicio.
							</p>
						</div>
						<div
							className={`tabs__content-item ${
								activeTab === 3 ? 'tabs__content-item--active' : ''
							}`}>
							<p>
							El espíritu de Shaks Salon se manifiesta a través de nuestro excepcional equipo: un grupo de estilistas, coloristas y expertos en belleza altamente cualificados. Cada miembro aporta su experiencia y estilo único, creando una cultura de salón diversa y rica que se mantiene a la vanguardia de las últimas tendencias y técnicas en la industria de la belleza.
							</p>
						</div>
						<div
							className={`tabs__content-item ${
								activeTab === 4 ? 'tabs__content-item--active' : ''
							}`}>
							<p>
							Nos comprometemos a ofrecer a nuestros clientes un servicio y una atención sin igual. En Shaks Salon, utilizamos únicamente productos de primera calidad que cumplen con nuestros altos estándares de calidad y fuente ética. Estamos dedicados a crear una atmósfera que no solo realce tu belleza, sino que también infunda un sentido de bienestar y alegría.
							</p>
						</div>
						<div
							className={`tabs__content-item ${
								activeTab === 5 ? 'tabs__content-item--active' : ''
							}`}>
							<p>
							En Shaks Salon, creemos que la belleza es un viaje, no solo un destino. Te invitamos a entrar en nuestro mundo, un mundo donde el cuidado, el lujo y el refinamiento se reflejan en cada aspecto de nuestro servicio. Únete a nosotros en Shaks Salon, donde cada visita es una oportunidad para realzar tu belleza y salir sintiéndote la mejor versión de ti mismo.
							</p>
						</div>
					</div>

					{author && <Author key={author.sys.id} author={author} />}
				</div>
			</div>
		</>
	);
}
