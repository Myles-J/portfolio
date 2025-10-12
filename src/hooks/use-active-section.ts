"use client";

import { useEffect, useState } from "react";
import { links } from "@/utils/constants";

export const useActiveSection = () => {
	const [activeSection, setActiveSection] = useState<string>("home");

	useEffect(() => {
		const observers: IntersectionObserver[] = [];
		const sectionElements: HTMLElement[] = [];

		// Create observers for each section
		links.forEach(({ href }) => {
			const sectionId = href.startsWith("/#")
				? href.slice(2)
				: href.replace("#", "");
			const element = document.getElementById(sectionId);

			if (element) {
				sectionElements.push(element);

				const sections = links
					.map(({ href }) => {
						const sectionId = href.startsWith("/#")
							? href.slice(2)
							: href.replace("#", "");
						return {
							id: sectionId,
							element: document.getElementById(sectionId),
						};
					})
					.filter(({ element }) => element !== null);

				if (sections.length > 0) {
					const observer = new IntersectionObserver(
						(entries) => {
							const intersectingSections = entries.filter(
								(entry) => entry.isIntersecting,
							);
							if (intersectingSections.length > 0) {
								// Find the section with the highest intersection ratio
								const mostVisible = intersectingSections.reduce(
									(prev, current) =>
										current.intersectionRatio > prev.intersectionRatio
											? current
											: prev,
								);
								const sectionId = mostVisible.target.id;
								setActiveSection(sectionId);
							}
						},
						{
							rootMargin: "-20% 0px -20% 0px", // Less aggressive triggering for mobile
							threshold: 0.1,
						},
					);

					for (const { element } of sections) {
						observer.observe(element!);
					}
					observers.push(observer);
				}
			}
		});

		// Cleanup observers on unmount
		return () => {
			for (const observer of observers) {
				observer.disconnect();
			}
		};
	}, []);

	return activeSection;
};
