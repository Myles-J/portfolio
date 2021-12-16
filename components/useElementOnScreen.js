import React, { useEffect, useRef } from 'react';

export default function useElementOnScreen(options) {
	const containerRef = useRef(null);
	useEffect(() => {
		const pageHeader = document.querySelector('.page-header');
		const logo = document.querySelector('.navbar-brand');
		const homeSection = document.getElementById('home');
		const toggleIcon = document.querySelector('#toggle-icon');

		let observer = new IntersectionObserver(function (entries, observer) {
			entries.forEach(entry => {
				function swapIntersectionDesigns(link, color, toggle) {
					pageHeader.classList.toggle('intersected');
					logo.src = link;
					toggleIcon.children[0].style.color = color;
				}
				entry.isIntersecting
					? swapIntersectionDesigns('../public/MJ-Logo-Design-01.svg', '#fff')
					: swapIntersectionDesigns(
            '../public/MJ-Logo-Design-01-White-BG.png',
							'#000'
					  );
			});
		}, options);

		observer.observe(homeSection);

		return () => {
			containerRef.current && observer.unobserve(containerRef.current);
		};
	}, [containerRef]);

	return [containerRef];
}
