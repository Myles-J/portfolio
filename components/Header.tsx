import React, { useState } from 'react';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';

import whiteLogo from '../public/MJ-Logo-Design-01-White-BG.png';
import blackLogo from '../public/MJ-Logo-Design-01.svg';
import { useTheme, useThemeUpdate } from './ThemeProvider';

import { Button } from 'react-bootstrap';

import { useColorMode, Box, Container } from '@chakra-ui/react';

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

	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box as='header' className={`page-header ${!isIntersecting && 'intersected'}`} id='page-header'>
			<Box as='nav' className='navbar navbar-expand-lg'>
				<Container>
					<Image className='navbar-brand' src={!isIntersecting ? blackLogo : whiteLogo} width={50} height={50} alt='Personal logo' />
					<div className='theme-switch-wrapper'>
						<label className='theme-switch'>
							<input type='checkbox' id='toggle-switch' onChange={toggleColorMode} />
							<div className='slider round' />
						</label>
					</div>

					<Button
          variant='ghost'
						className='navbar-toggler'
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
					</Button>

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
				</Container>
			</Box>
		</Box>
	);
};

export default Header;
