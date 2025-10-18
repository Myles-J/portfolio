"use client";

import { Timeline } from "@/components/ui/timeline";

export const YearOfExperience = () => {
	const timelineData = [
		{
			title: "2022",
			content: (
				<div className="space-y-2">
					<h4 className="font-semibold text-lg text-white">
						Started at Viaero Wireless
					</h4>
					<p className="text-gray-300 text-sm">
						Began my journey as a Full-Stack Developer, diving into
						enterprise-level web applications and learning the ropes of
						telecommunications software development.
					</p>
				</div>
			),
		},
		{
			title: "2023",
			content: (
				<div className="space-y-2">
					<h4 className="font-semibold text-lg text-white">
						Customer Provisioning Platform
					</h4>
					<p className="text-gray-300 text-sm">
						Developed a comprehensive platform serving over 100,000 customers,
						streamlining account management and improving operational
						efficiency.
					</p>
				</div>
			),
		},
		{
			title: "2024",
			content: (
				<div className="space-y-2">
					<h4 className="font-semibold text-lg text-white">
						Equipment Tracking & Asset Recovery
					</h4>
					<p className="text-gray-300 text-sm">
						Crafted an ISP equipment tracking system that enabled discovery and
						recovery of $50,000 in previously untracked assets.
					</p>
				</div>
			),
		},
		{
			title: "2025",
			content: (
				<div className="space-y-2">
					<h4 className="font-semibold text-lg text-white">
						CI/CD & Legacy Modernization
					</h4>
					<p className="text-gray-300 text-sm">
						Implemented robust CI/CD pipelines and modernized legacy codebases,
						enhancing maintainability and accelerating release cycles.
					</p>
				</div>
			),
		},
	];

	return <Timeline data={timelineData} />;
};
