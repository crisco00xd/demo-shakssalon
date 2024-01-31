import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLinks() {
	const router = useRouter();

	return (
		<>
			<li
				className={
					router.pathname == '/' ? 'main-menu__item active' : 'main-menu__item'
				}>
				<Link href='/' className='main-menu__link link link--elara'>
					<span>Home</span>
				</Link>
			</li>
			<li
				className={
					router.pathname == '/services'
						? 'main-menu__item active'
						: 'main-menu__item'
				}>
				<Link href='/services' className='main-menu__link link link--elara'>
					<span>Services</span>
				</Link>
			</li>
			<li
				className={
					router.pathname == '/about'
						? 'main-menu__item active'
						: 'main-menu__item'
				}>
				<Link href='/about' className='main-menu__link link link--elara'>
					<span>About Us</span>
				</Link>
			</li>
			<li
				className={
					router.pathname == '/gallery'
						? 'main-menu__item active'
						: 'main-menu__item'
				}>
				<Link href='/gallery' className='main-menu__link link link--elara'>
					<span>Gallery</span>
				</Link>
			</li>
			<li
				className={
					router.pathname == '/pricelist'
						? 'main-menu__item active'
						: 'main-menu__item'
				}>
				<Link href='/pricelist' className='main-menu__link link link--elara'>
					<span>Price List</span>
				</Link>
			</li>
			<li
				className={
					router.pathname == '/contact'
						? 'main-menu__item active'
						: 'main-menu__item'
				}>
				<Link href='/contact' className='main-menu__link link link--elara '>
					<span>Contact Us</span>
				</Link>
			</li>
		</>
	);
}
