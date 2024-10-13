"use client";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "./ui/card";

export const WorkExperienceView = () => {
	return (
		<section id="workExperience" className="space-y-3">
			<h1 className="text-3xl md:text-5xl font-bold mt-3">My Experience</h1>
			<h2>
				Some of my professional experience turning challenges into
				accomplishments
			</h2>

			<Card>
				<CardHeader>
					<CardTitle className="flex flex-col">
						<h1 className="text-2xl md:text-3xl">Full-Stack Developer</h1>
						<p>Viaero Wireless, Fort Morgan, Colorado</p>
					</CardTitle>
					<CardDescription className="flex flex-col space-y-1">
						<p>April 2022 - Present</p>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ul className="list-disc list-inside">
						<li>
							Collaborated with team members to write clean and well tested 10+
							full stack web applications serving various company departments.
						</li>
						<li>
							Created application using QuickBase and custom JavaScript code to
							help account for 50k worth of previously untracked ISP equipment.
						</li>
						<li>
							Implemented CI/CD pipelines with Docker containers to streamline
							application deployment via Linux virtual machines.
						</li>
						<li>
							Refactored legacy codebases to modernize software architecture and
							improve maintainability.
						</li>
					</ul>
				</CardContent>
			</Card>
		</section>
	);
};
