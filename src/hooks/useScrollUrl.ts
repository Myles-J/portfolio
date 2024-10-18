// utils/useScrollUrl.ts
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export function useScrollUrl() {
	const router = useRouter();
	const [currentSection, setCurrentSection] = useState<string | null>(null);
	const observerRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setCurrentSection(entry.target.id);
					}
				}
			},
			{ rootMargin: "200px" },
		);

		const sections = document.querySelectorAll("[data-section]");

		for (const section of sections) {
			observerRef?.current.observe(section);
		}

		return () => {
			observerRef.current?.disconnect();
		};
	}, []);

	useEffect(() => {
		if (currentSection && currentSection !== router.asPath.split("#")[1]) {
			router.push(`#${currentSection}`);
		}
	}, [currentSection, router]);

	return { currentSection };
}
