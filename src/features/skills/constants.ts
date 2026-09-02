import type { ComponentType, SVGProps } from "react";
import * as Icons from "./skill-icons";

export const categories = {
	frontend: { name: "Frontend", color: "from-blue-500 to-cyan-500" },
	backend: { name: "Backend", color: "from-green-500 to-emerald-500" },
	database: { name: "Database", color: "from-purple-500 to-violet-500" },
	devops: { name: "DevOps", color: "from-orange-500 to-red-500" },
	testing: { name: "Testing", color: "from-pink-500 to-rose-500" },
	cloud: { name: "Cloud", color: "from-indigo-500 to-blue-600" },
} as const;

type SkillCategory = keyof typeof categories;

type Skill = {
	name: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
	category: SkillCategory;
	experience: string;
};

export const skills: Skill[] = [
	// --- Frontend ---
	{
		name: "HTML5",
		icon: Icons.HTML5,
		category: "frontend",
		experience:
			"Built responsive web applications and semantic markup for accessibility",
	},
	{
		name: "CSS",
		icon: Icons.CSS,
		category: "frontend",
		experience:
			"Created modern layouts with Flexbox, Grid, and custom animations",
	},
	{
		name: "TypeScript",
		icon: Icons.TypeScript,
		category: "frontend",
		experience:
			"Developed type-safe React applications with strict type checking",
	},
	{
		name: "React",
		icon: Icons.ReactIcon,
		category: "frontend",
		experience:
			"Built scalable component libraries and state management solutions",
	},
	{
		name: "Next.js",
		icon: Icons.Nextjs,
		category: "frontend",
		experience: "Developed full-stack applications with SSR and API routes",
	},
	{
		name: "TailwindCSS",
		icon: Icons.TailwindCSS,
		category: "frontend",
		experience: "Rapidly prototyped and styled modern user interfaces",
	},

	// --- Backend ---
	{
		name: "Node.js",
		icon: Icons.Nodejs,
		category: "backend",
		experience: "Built REST APIs and microservices with Express.js",
	},
	{
		name: "Python",
		icon: Icons.Python,
		category: "backend",
		experience: "Developed data processing scripts and automation tools",
	},
	{
		name: "Go",
		icon: Icons.Go,
		category: "backend",
		experience: "Created high-performance concurrent services and CLI tools",
	},

	// --- Database ---
	{
		name: "PostgreSQL",
		icon: Icons.PostgreSQL,
		category: "database",
		experience: "Designed relational schemas and optimized complex queries",
	},
	{
		name: "MySQL",
		icon: Icons.MySQL,
		category: "database",
		experience: "Managed production databases and implemented data migrations",
	},
	{
		name: "Redis",
		icon: Icons.Redis,
		category: "database",
		experience: "Implemented caching strategies and session management",
	},

	// --- DevOps ---
	{
		name: "Docker",
		icon: Icons.Docker,
		category: "devops",
		experience:
			"Containerized applications and orchestrated with Docker Compose",
	},
	{
		name: "Git",
		icon: Icons.Git,
		category: "devops",
		experience: "Managed version control and collaborated on feature branches",
	},

	// --- Testing ---
	{
		name: "Playwright",
		icon: Icons.Playwright,
		category: "testing",
		experience: "Automated end-to-end testing for web applications",
	},
	{
		name: "Vitest",
		icon: Icons.Vitest,
		category: "testing",
		experience:
			"Built unit/integration tests for JavaScript and TypeScript apps",
	},

	// --- Cloud ---
	{
		name: "AWS",
		icon: Icons.AmazonWebServices,
		category: "cloud",
		experience: "Deployed applications using EC2, S3, and Lambda services",
	},
	{
		name: "Azure",
		icon: Icons.MicrosoftAzure,
		category: "cloud",
		experience: "Managed cloud infrastructure and CI/CD pipelines",
	},
];
