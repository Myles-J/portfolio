"use client";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "./ui/card";
import { motion } from "framer-motion";

export const WorkExperienceView = () => {
	return (
		<section id="workExperience" className="space-y-3 min-h-screen">
			<motion.h1
				className="text-3xl md:text-5xl font-bold mt-3"
				initial={{ y: 100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5 }}
			>
				My Experience
			</motion.h1>

			<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
				Some of my professional experience turning challenges into
				accomplishments
			</motion.h2>

			<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
				<Card>
					<CardHeader>
						<CardTitle className="flex flex-col text-2xl">
							Full-Stack Developer
							<span className="text-sm">
								Viaero Wireless, Fort Morgan, Colorado
							</span>
						</CardTitle>
						<CardDescription className="flex flex-col space-y-1">
							April 2022 - Present
						</CardDescription>
					</CardHeader>
					<CardContent>
						<ul className="list-disc list-inside">
							<li className="motion-preset-slide-up-md">
								Collaborated with team members to write clean and well tested
								10+ full stack web applications serving various company
								departments.
							</li>
							<li>
								Created application using QuickBase and custom JavaScript code
								to help account for 50k worth of previously untracked ISP
								equipment.
							</li>
							<li>
								Implemented CI/CD pipelines with Docker containers to streamline
								application deployment via Linux virtual machines.
							</li>
							<li>
								Refactored legacy codebases to modernize software architecture
								and improve maintainability.
							</li>
						</ul>
					</CardContent>
				</Card>
			</motion.div>
		</section>
	);
};
