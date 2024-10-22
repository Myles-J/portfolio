"use client";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { motion } from "framer-motion";

export const WorkExperienceView = () => {
	return (
		<section id="workExperience" className="space-y-3 min-h-screen px-2 pt-5">
			<motion.h1
				className="text-3xl md:text-5xl font-bold tracking-tight mt-3"
				initial={{ y: 10 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5 }}
			>
				My Experience
			</motion.h1>

			<motion.h2
      className="text-xl md:text-2xl"
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.7,
				}}
			>
				Some of my professional experience turning challenges into
				accomplishments
			</motion.h2>

			<motion.div
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
			>
				<Card>
					<CardHeader>
						<CardTitle className="flex flex-col text-3xl">
							Full-Stack Developer
							<span className="text-lg">
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
