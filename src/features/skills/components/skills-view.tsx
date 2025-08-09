"use client";
import { useState } from "react";
import {
	AnimationWrapper,
	StaggerItem,
	StaggerWrapper,
} from "@/components/animation-wrapper";
import * as Icons from "@/components/skill-icons";

interface Skill {
	name: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	category:
		| "frontend"
		| "backend"
		| "database"
		| "devops"
		| "testing"
		| "cloud";
	experience: string;
}

const skills: Skill[] = [
	// Frontend
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

	// Backend
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

	// Database
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

	// DevOps
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

	// Testing
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
			"Built unit/integration tests for JavaScript and TypeScript applications",
	},

	// Cloud
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

const categories = {
	frontend: { name: "Frontend", color: "from-blue-500 to-cyan-500" },
	backend: { name: "Backend", color: "from-green-500 to-emerald-500" },
	database: { name: "Database", color: "from-purple-500 to-violet-500" },
	devops: { name: "DevOps", color: "from-orange-500 to-red-500" },
	testing: { name: "Testing", color: "from-pink-500 to-rose-500" },
	cloud: { name: "Cloud", color: "from-indigo-500 to-blue-600" },
};

export const SkillsView = () => {
	const [selectedCategory, setSelectedCategory] = useState<
		keyof typeof categories | "all"
	>("all");

	const filteredSkills =
		selectedCategory === "all"
			? skills
			: skills.filter((skill) => skill.category === selectedCategory);

	return (
		<section
			id="skills"
			className="flex flex-col justify-center px-4 py-12 sm:py-16"
		>
			<AnimationWrapper
				className="mx-auto w-full max-w-7xl px-4 py-8 sm:py-12"
				animation="fadeIn"
				duration={0.3}
			>
				<AnimationWrapper
					className="mb-8 text-center sm:mb-12"
					animation="slideUp"
					delay={0.2}
				>
					<h2 className="mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text font-bold text-2xl text-transparent sm:text-3xl md:text-4xl">
						Technical Skills
					</h2>
					<p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
						A comprehensive overview of my technical expertise across various
						domains
					</p>
				</AnimationWrapper>

				{/* Category Filter */}
				<AnimationWrapper
					className="mb-6 flex flex-wrap justify-center gap-2 sm:mb-8"
					animation="slideUp"
					delay={0.4}
				>
					<button
						type="button"
						onClick={() => setSelectedCategory("all")}
						className={`rounded-full px-3 py-2 font-medium text-xs transition-all duration-200 sm:px-4 sm:text-sm ${
							selectedCategory === "all"
								? "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 shadow-lg"
								: "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-100"
						}`}
					>
						All Skills
					</button>
					{Object.entries(categories).map(([key, category]) => (
						<button
							type="button"
							key={key}
							onClick={() =>
								setSelectedCategory(key as keyof typeof categories)
							}
							className={`rounded-full px-3 py-2 font-medium text-xs transition-all duration-200 sm:px-4 sm:text-sm ${
								selectedCategory === key
									? `bg-gradient-to-r ${category.color} text-white shadow-lg`
									: "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-100"
							}`}
						>
							{category.name}
						</button>
					))}
				</AnimationWrapper>

				{/* Skills Grid */}
				<StaggerWrapper
					className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
					staggerDelay={0.08}
				>
					{filteredSkills.map((skill) => (
						<StaggerItem key={skill.name} animation="scaleIn" duration={0.6}>
							<div className="group relative rounded-xl border border-gray-700/50 bg-gray-800/50 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-gray-800/70 hover:shadow-xl sm:p-6">
								<div className="mb-3 flex items-center space-x-3 sm:mb-4">
									<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-700/50 transition-colors duration-200 group-hover:bg-gray-600/50 sm:h-10 sm:w-10">
										<skill.icon className="h-5 w-5 text-gray-300 transition-colors duration-200 group-hover:text-white sm:h-6 sm:w-6" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-100 text-sm transition-colors duration-200 group-hover:text-white sm:text-base">
											{skill.name}
										</h3>
										<p className="text-gray-400 text-xs capitalize">
											{skill.category}
										</p>
									</div>
								</div>

								{/* Experience Description */}
								<p className="text-gray-300 text-xs leading-relaxed sm:text-sm">
									{skill.experience}
								</p>

								{/* Hover Effect */}
								<div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
							</div>
						</StaggerItem>
					))}
				</StaggerWrapper>
			</AnimationWrapper>
		</section>
	);
};
