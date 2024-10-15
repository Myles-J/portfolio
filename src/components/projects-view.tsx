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
import { motion } from "framer-motion";

export const ProjectsView = () => {
	return (
		<section id="projects">
			<h1 className="text-3xl md:text-5xl font-bold mb-3">Personal Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-8 transition-all duration-300 ease-in-out">
				{projects.map(
					(
						{
							title,
							description,
							logo,
							technologies,
							githubLink,
							liveLink,
							caseStudyLink,
						},
						index,
					) => {
						return (
							<motion.div
								key={title}
								initial={{ opacity: 0, y: 100 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: index * 0.3 }}
							>
								<Card>
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
											{description}
										</CardDescription>

										<div className="flex flex-wrap gap-1 ">
											{technologies.map((tech) => {
												return <Badge key={tech}>{tech}</Badge>;
											})}
										</div>
									</CardHeader>
									<CardFooter className="flex justify-evenly">
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
							</motion.div>
						);
					},
				)}
			</div>
		</section>
	);
};
