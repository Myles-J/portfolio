import React, { useState } from 'react';
import Image from 'next/image';

import whiteLogo from 'public/MJ-Logo-Design-01-White-BG.png';
import blackLogo from 'public/MJ-Logo-Design-01.svg';
import { useTheme, useThemeUpdate } from './ThemeProvider';

const Header = ({ isIntersecting, links }) => {
	const toggleTheme = useThemeUpdate();
	const theme = useTheme();
	const [isNavOpen, setIsNavOpen] = useState(false);
	const handleNavCollapse = () => setIsNavOpen(!isNavOpen);

	const switchTheme = () => {
		if (theme === 'Light') {
			document.documentElement.setAttribute('data-theme', 'Dark');
			localStorage.setItem('theme', 'Dark');
			toggleTheme('Dark');
		} else {
			document.documentElement.removeAttribute('data-theme');
			localStorage.setItem('theme', 'Light');
			toggleTheme('Light');
		}
	};

	return (
		<header className={`page-header ${!isIntersecting && 'intersected'}`} id='page-header'>
			<nav className='navbar navbar-expand-lg'>
				<div className='container-fluid'>
					<Image className='navbar-brand' src={!isIntersecting ? blackLogo : whiteLogo} width={50} height={50} alt='Personal logo' />
					<div className='theme-switch-wrapper'>
						<label className='theme-switch'>
							<input type='checkbox' id='toggle-switch' onChange={switchTheme} />
							<div className='slider round' />
						</label>
					</div>

					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarContent'
						aria-controls='navbarContent'
						aria-expanded={isNavOpen ? false : true}
						aria-label='Toggle navigation'>
						<div className={isNavOpen ? 'open' : ''} id='nav-icon' onClick={handleNavCollapse}>
							<span />
							<span />
							<span />
							<span />
							<span />
							<span />
						</div>
					</button>

					<CSSTransition in={isNavOpen} timeout={200} classNames='navbar'>
						<div className={`collapse ${isNavOpen && 'show'} navbar-collapse`} id='navbarContent'>
							<ul className='navbar-nav' id='navbar-nav'>
								{links.map(({ name, href }) => (
									<li className='nav-item' key={name}>
										<a className='nav-link' href={href} onClick={handleNavCollapse}>
											{name}
										</a>
									</li>
								))}
							</ul>
						</div>
					</CSSTransition>
				</div>
			</nav>
		</header>
	);
};

export default Header;
