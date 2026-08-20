"use client";

import { useEffect, useState } from "react";
import { type SectionId, sections } from "@/features/sections";

export const useActiveSection = () => {
	const [activeSection, setActiveSection] = useState<SectionId>(sections[0].id);

	useEffect(() => {
		const elements = sections
			.map(({ id }) => document.getElementById(id))
			.filter((el): el is HTMLElement => el !== null);

		if (elements.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const intersecting = entries.filter((entry) => entry.isIntersecting);
				if (intersecting.length === 0) return;

				const mostVisible = intersecting.reduce((prev, current) =>
					current.intersectionRatio > prev.intersectionRatio ? current : prev,
				);
				const id = mostVisible.target.id as SectionId;
				setActiveSection(id);
			},
			{
				rootMargin: "-20% 0px -20% 0px",
				threshold: 0.1,
			},
		);

		for (const element of elements) {
			observer.observe(element);
		}

		return () => observer.disconnect();
	}, []);

	return activeSection;
};
