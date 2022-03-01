import AOS from 'aos';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import { useEffect, useState, useRef } from 'react';
import { useTheme, useThemeUpdate } from '../components/ThemeProvider';

export default function Index() {
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
				entries.forEach(entry => {
					entry.isIntersecting
						? setIsIntersecting(true)
						: setIsIntersecting(false);
				});
			},
			{ root: null, threshold: 0, rootMargin: '0px' }
		);
		const currentRef = containerRef.current;
		observer.observe(currentRef);

		if (currentTheme) {
			document.documentElement.setAttribute('data-theme', currentTheme);
			toggleTheme(
				// `${currentTheme.charAt(0).toUpperCase()}${currentTheme.slice(1)}`
          currentTheme
        );
		}

		return () => currentRef && observer.unobserve(currentRef);
	});

	const switchTheme = e => {
		if (theme === 'Light') {
			document.documentElement.setAttribute('data-theme', 'Dark');
			localStorage.setItem('theme', 'Dark');
			toggleTheme('Dark');
		} else {
			document.documentElement.removeAttribute('data-theme', 'Dark');
			localStorage.setItem('theme', 'Light');
			toggleTheme('Light');
		}
	};

	return (
		<>
			<Header isIntersecting={isIntersecting} switchTheme={switchTheme} />
			<Home containerRef={containerRef} />
			<Projects />
			<About />
			<Contact />
			<Footer />
		</>
	);
}
