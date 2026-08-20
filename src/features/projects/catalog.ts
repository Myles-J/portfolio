export const projects = [
	{
		slug: "filmfever",
		title: "FilmFever",
		description:
			"	A Full-Stack MERN application with a RESTful Node.js API built from scratch. Users can create an account and access data provided from a MongoDB database.",
		logo: "/FilmFever_logo.png",
		capture: "/FilmFever_NewCapture.png",
		technologies: [
			"React",
			"Redux",
			"SCSS",
			"MongoDB",
			"Node.js",
			"Express.js",
			"JWT Authentication",
		],
		githubLink: "https://github.com/Myles-J/FilmFever-client.git",
		liveLink: "https://filmfever.netlify.app/",
		hasCaseStudy: true,
	},
	{
		slug: "gatherr",
		title: "Gatherr",
		description:
			"	A serverless, progressive web app fetching Google Calendar API data. Users can filter events by location, query results, and visualize data with the Recharts library.",
		logo: "/Gatherr_logo.png",
		capture: "/Gatherr_NewCapture.png",
		technologies: [
			"React",
			"Serverless",
			"AWS",
			"Enzyme",
			"Jest",
			"Cucumber",
			"Puppeteer",
			"OAuth2",
		],
		githubLink: "https://github.com/Myles-J/Gatherr.git",
		liveLink: "https://Myles-J.github.io/Gatherr/",
		hasCaseStudy: true,
	},
	{
		slug: "sermo",
		title: "Sermo",
		description:
			"React Native chat application enhanced with Expo, Gifted Chat, and Firebase. Users can send their location, images from their camera roll, and take images to send in chat messages.",
		logo: "/Sermo_Logo.png",
		capture: "/SermoNewCapture.svg",
		technologies: ["React Native", "Expo", "Firebase"],
		githubLink: "https://github.com/Myles-J/Sermo.git",
		hasCaseStudy: false,
	},
	{
		slug: "pokedex",
		title: "Pokédex",
		description:
			"A front-end Javascript application that fetches data from an external Pokémon API. This rendered data allows users to search for their favorite Pokémon and view details provided by the API.",
		logo: "/Pokedex_logo.png",
		capture: "/Pokedex_NewCapture.png",
		technologies: [
			"HTML",
			"CSS",
			"JavaScript",
			"Bootstrap",
			"AJAX",
			"External API",
		],
		githubLink: "https://github.com/Myles-J/Pokedex-v2.git",
		liveLink: "https://Myles-J.github.io/Pokedex-v2/",
		hasCaseStudy: true,
	},
] as const;

export type Project = (typeof projects)[number];
export type CaseStudySlug = Extract<
	(typeof projects)[number],
	{ hasCaseStudy: true }
>["slug"];

export const caseStudyHref = (slug: CaseStudySlug) =>
	`/case-study/${slug}` as const;

const caseStudies = projects.filter(
	(project): project is Extract<Project, { hasCaseStudy: true }> =>
		project.hasCaseStudy,
);

export function projectBySlug(slug: string) {
	return projects.find((project) => project.slug === slug);
}

export function caseStudyNeighbors(slug: CaseStudySlug) {
	const index = caseStudies.findIndex((project) => project.slug === slug);
	if (index < 0) throw new Error(`unknown case study: ${slug}`);
	const last = caseStudies.length - 1;
	const previous = caseStudies[index <= 0 ? last : index - 1];
	const current = caseStudies[index];
	const next = caseStudies[index >= last ? 0 : index + 1];
	if (!previous || !current || !next) {
		throw new Error("case study catalog is empty");
	}
	return { previous, current, next };
}
