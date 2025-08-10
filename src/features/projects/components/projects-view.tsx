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
							const project = projects[index];
							if (!project) return null;
							return (
								<StaggerItem key={title} animation="scaleIn" duration={0.6}>
									<Card className="group h-full border border-gray-800 bg-gradient-to-br from-gray-900/70 via-gray-900/60 to-black/80 shadow-black/30 shadow-lg transition-all duration-300 hover:scale-[1.025] hover:border-green-400 hover:shadow-green-400/20">
										<CardHeader className="space-y-5 p-6">
											<div className="flex justify-center">
												<div className="relative flex items-center justify-center rounded-xl bg-gradient-to-tr from-green-400/10 to-transparent p-2 shadow-green-400/10 shadow-inner">
													<Image
														src={logo}
														width={160}
														height={80}
														className="mx-auto h-16 w-auto rounded-lg bg-black/30 object-contain shadow-md transition-transform duration-300 group-hover:scale-110 sm:h-20"
														alt={`${title} screenshot`}
													/>
												</div>
											</div>
											<CardTitle className="text-center font-bold text-white text-xl drop-shadow-sm sm:text-2xl md:text-3xl">
												{title}
											</CardTitle>
											<CardDescription className="mx-auto max-w-xs text-center text-base text-gray-300 leading-relaxed sm:max-w-sm sm:text-lg">
												{description}
											</CardDescription>
											<div className="flex flex-wrap justify-center gap-2 pt-2">
												{technologies.map((tech) => (
													<Badge
														key={tech}
														className="bg-gradient-to-r from-green-400 to-green-500 font-semibold text-black text-xs shadow hover:from-green-300 hover:to-green-400 sm:text-sm"
													>
														{tech}
													</Badge>
												))}
											</div>
										</CardHeader>
										<CardFooter className="flex flex-wrap justify-center gap-3 p-4 pt-0 sm:gap-5 sm:p-6">
											<Button
												variant="outline"
												className="border-green-400 bg-black/60 text-green-400 transition hover:bg-green-400 hover:text-black hover:shadow-green-400/30 hover:shadow-lg"
												asChild
											>
												<Link
													href={githubLink}
													target="_blank"
													rel="noreferrer"
												>
													GitHub
												</Link>
											</Button>
											{project.liveLink ? (
												<Button
													variant="outline"
													className="border-green-400 bg-black/60 text-green-400 transition hover:bg-green-400 hover:text-black hover:shadow-green-400/30 hover:shadow-lg"
													asChild
												>
													<Link
														href={project.liveLink}
														target="_blank"
														rel="noreferrer"
													>
														Live
													</Link>
												</Button>
											) : null}
											{project.caseStudyLink ? (
												<Button
													variant="outline"
													className="border-green-400 bg-black/60 text-green-400 transition hover:bg-green-400 hover:text-black hover:shadow-green-400/30 hover:shadow-lg"
													asChild
												>
													<Link
														href={project.caseStudyLink}
														target="_blank"
														rel="noreferrer"
													>
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
