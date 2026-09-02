export const SECTION = {
	home: "home",
	workExperience: "work-experience",
	skills: "skills",
	projects: "projects",
	about: "about",
	contact: "contact",
} as const;

export const sections = [
	{ id: SECTION.home, label: "Home" },
	{ id: SECTION.workExperience, label: "Work Experience" },
	{ id: SECTION.skills, label: "Skills" },
	{ id: SECTION.projects, label: "Projects" },
	{ id: SECTION.about, label: "About" },
	{ id: SECTION.contact, label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const hrefFor = (id: SectionId) => `/#${id}` as const;
