import { InstagramLogo, FacebookLogo, Moon } from 'phosphor-react';
import Link from 'next/link';

export default function SocialIconsDark() {
	return (
		<ul className='social-icons' role='list'>
			<li className='social-icons__item'>
				<Link
					href='https://instagram.com/'
					scroll={false}
					arget='_blank'
					className='social-icons__link'>
					<InstagramLogo size={32} color='white' weight='light' />
				</Link>
			</li>
			<li className='social-icons__item'>
				<Link
					href='https://www.facebook.com/hairbyzoewray'
					scroll={false}
					target='_blank'
					className='social-icons__link'>
					<FacebookLogo size={32} color='white' weight='fill' />
				</Link>
			</li>
			<li className='social-icons__item'>
				<Link href='/' scroll={false} className='social-icons__link'>
					<Moon size={32} color='white' weight='light' />
				</Link>
			</li>
		</ul>
	);
}
