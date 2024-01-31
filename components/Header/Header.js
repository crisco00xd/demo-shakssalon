import React, { useState } from 'react';
import SocialIcons from './SocialIconsLight';
import { List, X } from 'phosphor-react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { useRouter } from 'next/router';

const headerStyles = {
	home: { border: 'none' },
};

export default function header() {
	const [isMobile, setIsMobile] = useState(false);

	const router = useRouter();
	const isHome = router.pathname === '/';
	const headerStyle = isHome ? headerStyles.home : headerStyles.notHome;

	return (
		<header className='header grid' style={headerStyle}>
			<div className='wrapper wrapper--header'>
				<Logo />

				<nav className={isMobile ? 'main-menu--mobile' : 'main-menu'}>
					<ul
						className='main-menu__list'
						role='list'
						onClick={() => setIsMobile(false)}>
						<NavLinks />
					</ul>
					<div className='close-menu' onClick={() => setIsMobile(false)}>
						<X size={32} />
					</div>
				</nav>

				<SocialIcons />
				<div className='burger-menu' onClick={() => setIsMobile(!isMobile)}>
					{/* {isMobile ? (
            <List size={32} color="Black" />
          ) : (
            <List size={32} color="Green" />
          )} */}
					<List size={32} color='Black' />
				</div>
			</div>
		</header>
	);
}
