import React, { useState } from 'react';
import Image from 'next/image';
import whiteLogo from '../public/MJ-Logo-Design-01-White-BG.png';
import blackLogo from '../public/MJ-Logo-Design-01.svg';
import { activeLinks } from '../helpers/constants';
import { useTheme } from './ThemeProvider';

export default function Header({ isIntersecting, switchTheme }) {
	const theme = useTheme();
	const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavCollapse = () => setIsNavOpen(!isNavOpen)
  
	return (
		<header
			className={`page-header ${!isIntersecting ? 'intersected' : ''}`}
			id='page-header'>
			<nav className='navbar navbar-expand-lg'>
				<div className='container-fluid'>
					<Image
						className='navbar-brand'
						src={!isIntersecting ? blackLogo : whiteLogo}
						width={50}
						height={50}
						alt='Personal logo'
					/>

					<div className='theme-switch-wrapper'>
						<span id='toggle-icon'>
							<span
								className='toggle-text'
								id='toggle-text'
								style={{ color: isIntersecting ? '#fff' : '#000' }}>
								{theme} Mode
							</span>
						</span>
						<label className='theme-switch'>
							<input
								type='checkbox'
								id='toggle-switch'
								onChange={switchTheme}
							/>
							<div className='slider round'></div>
						</label>
					</div>

					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded={isNavOpen ? false : true}
						aria-label='Toggle navigation'>
						<div
							className={isNavOpen ? 'open' : ''}
							id='nav-icon'
							onClick={handleNavCollapse}>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</button>
					<div className={`${!isNavOpen ? 'collapse' : ''} navbar-collapse`} id='navbarSupportedContent'>
						<ul className='navbar-nav' id='navbar-nav'>
							{activeLinks.map(link => {
								const { name, href } = link;
								return (
									<li className='nav-item' key={name} >
										<a className='nav-link' href={href} onClick={handleNavCollapse }>
											{name}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
