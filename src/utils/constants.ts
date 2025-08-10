export const projects = [
	{
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
		caseStudyLink: "/case-study/filmfever",
	},
	{
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
		caseStudyLink: "/case-study/gatherr",
	},
	{
		title: "Sermo",
		description:
			"React Native chat application enhanced with Expo, Gifted Chat, and Firebase. Users can send their location, images from their camera roll, and take images to send in chat messages.",
		logo: "/Sermo_Logo.png",
		capture: "/SermoNewCapture.svg",
		technologies: ["React Native", "Expo", "Firebase"],
		githubLink: "https://github.com/Myles-J/Sermo.git",
	},
	{
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
		caseStudyLink: "/case-study/pokedex",
	},
];

export type Project = (typeof projects)[number];

export const links = [
	{
		name: "Home",
		href: "/#home",
	},
	{
		name: "Work Experience",
		href: "/#workExperience",
	},
	{
		name: "Skills",
		href: "/#skills",
	},
	{
		name: "Projects",
		href: "/#projects",
	},
	{
		name: "About",
		href: "/#about",
	},
	{
		name: "Contact",
		href: "/#contact",
	},
] as const;

export const typewriterWords = [
	"HTML",
	"CSS/SCSS",
	"TypeScript",
	"React",
	"NextJS",
	"Svelte",
	"Git",
	"RESTful APIs",
	"TDD",
	"SQL",
	"Node.js",
	"Express",
	"Redis",
	"Python",
	"Go",
	"DevOps",
	"AWS",
	"Docker",
	"Unix",
	"CI/CD",
	"Firebase",
];
