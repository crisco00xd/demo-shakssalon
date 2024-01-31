import Header from './Header/Header';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children, isHome }) {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
				/>
				<meta
					name='description'
					content='Discover the ultimate hair salon experience at Next Salon. Our team of highly trained stylists offer a wide range of services including cuts, color, extensions, and more.'
				/>
				<link rel='canonical' href='' />
				<meta property='og:locale' content='en_GB' />
				<meta property='og:type' content='website' />
				<meta property='og:description' content='' />
				<meta
					property='og:url'
					content='Discover the ultimate hair salon experience at Next Salon. Our team of highly trained stylists offer a wide range of services including cuts, color, extensions, and more.'
				/>
				<meta property='og:site_name' content='Next Salon' />
			</Head>
			<Header />
			<main className='page-content'>{children}</main>
			<Footer />
		</>
	);
}
