import AOS from "aos";
import dynamic from "next/dynamic";
import React, { useEffect, useState, useRef } from "react";
const Header = dynamic(() => import("@/components/header"));
const Footer = dynamic(() => import("@/components/footer"));
import ScrollBtn from "src/components/ScrollBtn";
import { useTheme, useThemeUpdate } from "src/components/ThemeProvider";
import { links } from "src/utils/constants";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";

const Index = () => {
	const theme = useTheme();
	const toggleTheme = useThemeUpdate();
	const [isIntersecting, setIsIntersecting] = useState(false);
	const containerRef = useRef(null);

	useEffect(() => {
		AOS.init();

		const currentTheme = localStorage.getItem("theme");
		!currentTheme && theme;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(({ isIntersecting }) => {
					setIsIntersecting(isIntersecting);
				});
			},
			{ root: null, threshold: 0, rootMargin: "0px" },
		);
		const currentRef = containerRef.current;
		observer.observe(currentRef);

		if (currentTheme) {
			document.documentElement.setAttribute("data-theme", currentTheme);
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
