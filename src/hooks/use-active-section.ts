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
			const sectionId = href.replace("/#", "");
			const element = document.getElementById(sectionId);

			if (element) {
				sectionElements.push(element);

				const observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								setActiveSection(sectionId);
							}
						});
					},
					{
						rootMargin: "-20% 0px -20% 0px", // Less aggressive triggering for mobile
						threshold: 0.1,
					},
				);

				observer.observe(element);
				observers.push(observer);
			}
		});

		// Cleanup observers on unmount
		return () => {
			observers.forEach((observer) => observer.disconnect());
		};
	}, []);

	return activeSection;
};
