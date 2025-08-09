"use client";
import Image from "next/image";
import Link from "next/link";
import { projects } from "src/utils/constants";
import {
	AnimationWrapper,
	StaggerItem,
	StaggerWrapper,
} from "@/components/animation-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const ProjectsView = () => {
	return (
		<section
			id="projects"
			className="flex min-h-screen flex-col justify-center px-4 py-12 sm:py-16"
		>
			<AnimationWrapper
				className="mx-auto max-w-7xl"
				animation="fadeIn"
				duration={0.6}
			>
				<AnimationWrapper animation="slideUp" delay={0.2}>
					<h1 className="text-center font-bold text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
						Personal Projects
					</h1>
				</AnimationWrapper>
				<AnimationWrapper animation="slideUp" delay={0.4}>
					<p className="mt-4 text-center text-base text-gray-300 sm:text-lg md:text-xl">
						A showcase of my technical skills and creative problem-solving
						abilities
					</p>
				</AnimationWrapper>

				<StaggerWrapper
					className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
					staggerDelay={0.1}
				>
					{projects.map(
						({ title, description, logo, technologies, githubLink }, index) => {
              const project = projects[index]
              if (!project) return null
							return (
								<StaggerItem key={title} animation="scaleIn" duration={0.6}>
									<Card className="group h-full border-gray-800 bg-gray-900/50 transition-all duration-300 hover:border-green-400 hover:shadow-green-400/10 hover:shadow-lg">
										<CardHeader className="space-y-4 p-4 sm:p-6">
											<div className="flex justify-center">
												<Image
													src={logo}
													width={200}
													height={100}
													className="mx-auto h-20 w-auto rounded-lg transition-transform duration-300 group-hover:scale-105 sm:h-24"
													alt={`${title} screenshot`}
												/>
											</div>
											<CardTitle className="text-center text-lg text-white sm:text-xl md:text-2xl">
												{title}
											</CardTitle>
											<CardDescription className="text-center text-gray-300 text-sm leading-relaxed sm:text-base">
												{description}
											</CardDescription>

											<div className="flex flex-wrap justify-center gap-1 sm:gap-2">
												{technologies.map((tech) => (
													<Badge
														key={tech}
														className="bg-green-400 text-black text-xs hover:bg-green-500 sm:text-sm"
													>
														{tech}
													</Badge>
												))}
											</div>
										</CardHeader>
										<CardFooter className="flex flex-wrap justify-center gap-2 p-4 sm:gap-4 sm:p-6">
											<Button
												variant="link"
												className="text-green-400 hover:text-green-300"
											>
												<Link
													href={githubLink}
													target="_blank"
													rel="noreferrer"
												>
													GitHub Repo
												</Link>
											</Button>
											{project.liveLink ? (
												<Button
													variant={"link"}
													asChild
													className="text-green-400 hover:text-green-300"
												>
													<Link
														href={project.liveLink}
														target="_blank"
														rel="noreferrer"
													>
														Live Site
													</Link>
												</Button>
											) : null}
											{project.caseStudyLink ? (
												<Button
													variant={"link"}
													asChild
													className="text-green-400 hover:text-green-300"
												>
													<Link href={project.caseStudyLink}>
														Case Study
													</Link>
												</Button>
											) : null}
										</CardFooter>
									</Card>
								</StaggerItem>
							);
						},
					)}
				</StaggerWrapper>
			</AnimationWrapper>
		</section>
	);
};
