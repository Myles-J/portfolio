import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import AOS from 'aos';
const Header = dynamic(() => import('components/Header'));
const Footer = dynamic(() => import('components/Footer'));
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import { useTheme, useThemeUpdate } from 'components/ThemeProvider';
import ScrollBtn from 'components/ScrollBtn';
import { links } from 'helpers/constants';

const Index = () => {
	const theme = useTheme();
	const toggleTheme = useThemeUpdate();
	const [isIntersecting, setIsIntersecting] = useState(false);
	const containerRef = useRef(null);

	useEffect(() => {
		AOS.init();

		const currentTheme = localStorage.getItem('theme');
		!currentTheme && theme;

		let observer = new IntersectionObserver(
			entries => {
				entries.forEach(({ isIntersecting }) => {
					setIsIntersecting(isIntersecting);
				});
			},
			{ root: null, threshold: 0, rootMargin: '0px' }
		);
		const currentRef = containerRef.current;
		observer.observe(currentRef);

		if (currentTheme) {
			document.documentElement.setAttribute('data-theme', currentTheme);
			toggleTheme(currentTheme);
		}

		return () => currentRef && observer.unobserve(currentRef);
	});

	return (
		<>
			<ScrollBtn />
			<Header isIntersecting={isIntersecting} links={links} />
			<Home containerRef={containerRef} />
			<Projects />
			<About />
			<Contact />
			<Footer />
		</>
	);
};

export default Index;
