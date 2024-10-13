"use client";
import Image from "next/image";
import Link from "next/link";

import { projects } from "src/utils/constants";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export const ProjectsView = () => {
	return (
		<section id="projects">
			<h1 className="text-5xl font-bold mb-3">Personal Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-8 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
				{projects.map(
					({
						title,
						description,
						logo,
						technologies,
						githubLink,
						liveLink,
						caseStudyLink,
					}) => {
						return (
							<Card key={title}>
								<CardHeader>
									<Image
										src={logo}
										width={200}
										height={100}
										className="mx-auto"
										alt={`${title} screenshot`}
									/>
									<CardTitle>{title}</CardTitle>
									<CardDescription className="flex flex-col space-y-1">
										<p>{description}</p>
										<div className="flex flex-wrap gap-1 ">
											{technologies.map((tech) => {
												return <Badge key={tech}>{tech}</Badge>;
											})}
										</div>
									</CardDescription>
								</CardHeader>
								<CardFooter className="flex justify-between">
									<Button variant="link">
										<Link href={githubLink} target="_blank" rel="noreferrer">
											GitHub Repo
										</Link>
									</Button>
									{liveLink ? (
										<Button variant={"link"}>
											<Link href={liveLink} target="_blank" rel="noreferrer">
												Live Site
											</Link>
										</Button>
									) : null}
									{caseStudyLink ? (
										<Button variant={"link"}>
											<Link href={caseStudyLink}>Case Study</Link>
										</Button>
									) : null}
								</CardFooter>
							</Card>
						);
					},
				)}
			</div>
		</section>
	);
};
