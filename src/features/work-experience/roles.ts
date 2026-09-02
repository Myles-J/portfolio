export type Role = {
	dates: string;
	title: string;
	company: string;
	location: string;
	industry: string;
	summary: string;
	achievements?: { heading: string; body: string }[];
	skills?: { heading: string; detail: string }[];
};

export const roles: Role[] = [
	{
		dates: "April 2022 - October 2025",
		title: "Full-Stack Developer",
		company: "Viaero Wireless",
		location: "Fort Morgan, Colorado",
		industry: "Telecommunications",
		summary:
			"Spearheading the design and development of high-performance web applications that serve critical business operations. Collaborating with cross-functional teams across Network Operations, IP Admin, HR, Billing, and Field Operations departments to deliver solutions that significantly increase operational efficiency.",
		achievements: [
			{
				heading: "Customer Provisioning Platform:",
				body: "Developed a comprehensive platform serving over 100,000 customers, streamlining account management for customer service teams by translating user actions into secure SOAP UI backend requests.",
			},
			{
				heading: "Equipment Tracking System:",
				body: "Crafted an ISP equipment tracking and management application that enabled the discovery and recovery of $50,000 in previously untracked assets, directly improving asset accountability and reducing company losses.",
			},
			{
				heading: "CI/CD Implementation:",
				body: "Implemented robust CI/CD pipelines, automating deployments and testing on Linux virtual machines and reducing application downtime while accelerating release cycles for critical internal tools.",
			},
			{
				heading: "Legacy Code Modernization:",
				body: "Modernized legacy codebases by refactoring and migrating to scalable architectures, enhancing maintainability, performance, and user experience for internal stakeholders.",
			},
		],
		skills: [
			{ heading: "Frontend", detail: "React, Next.js, TypeScript" },
			{ heading: "Backend", detail: "Node.js, Python, SOAP UI" },
			{ heading: "DevOps", detail: "Docker, CI/CD, Linux VMs" },
			{ heading: "Architecture", detail: "Scalable Systems, Legacy Migration" },
			{
				heading: "Business Impact",
				detail: "100K+ Users, $50K Asset Recovery",
			},
			{
				heading: "Collaboration",
				detail: "Cross-functional Teams, Stakeholder Management",
			},
		],
	},
	{
		dates: "October 2025 - August 2026",
		title: "Senior Application Developer",
		company: "Vail Resorts",
		location: "Broomfield, Colorado",
		industry: "Hospitality & Leisure",
		summary:
			"Owned modernization and delivery work on a large-scale, event-driven email platform powering revenue-critical marketing campaigns. Partnered with product and stakeholders to ship observability, campaign-builder improvements, and pipeline performance gains.",
		achievements: [
			{
				heading: "Platform Modernization:",
				body: "Modernized a large-scale, event-driven distributed platform that processes more than 500 million emails annually and supports over $280 million in annual revenue.",
			},
			{
				heading: "Observability & Monitoring:",
				body: "Implemented observability and alert tooling within three months to enable proactive monitoring and faster issue detection for revenue-impacting marketing campaigns.",
			},
			{
				heading: "Cross-functional Leadership:",
				body: "Partnered with cross-functional stakeholders to turn complex business and technical requirements into clear engineering plans, resulting in a streamlined roadmap that accelerated feature delivery by several weeks and improved team alignment.",
			},
			{
				heading: "Front-End Enhancement:",
				body: "Implemented key enhancements to a Vue.js email campaign builder, introducing new templates and reducing setup time for new campaigns.",
			},
			{
				heading: "Performance Optimization:",
				body: "Optimized the data ingestion pipeline, resulting in a 30% reduction in processing time.",
			},
		],
		skills: [
			{ heading: "Frontend", detail: "Vue.js" },
			{ heading: "Backend", detail: "Node.js, Go" },
			{ heading: "Observability", detail: "OpenTelemetry, Dynatrace" },
			{
				heading: "Architecture",
				detail: "Event-Driven Systems, Data Pipelines",
			},
			{
				heading: "Business Impact",
				detail: "500M+ Events/yr, $280M+ Revenue Supported",
			},
			{
				heading: "Collaboration",
				detail: "Cross-functional Teams, Stakeholder Management",
			},
		],
	},
	{
		dates: "September 2026 - Present",
		title: "Full-Stack Software Engineer",
		company: "bet365",
		location: "Denver, Colorado",
		industry: "Sports Betting",
		summary: "Magic in the making...",
	},
];

export const rolesNewestFirst = () => roles.toReversed();
