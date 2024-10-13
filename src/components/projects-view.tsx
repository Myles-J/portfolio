
'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import SvgWave from "src/components/SvgWave";
import { projects } from "src/utils/constants";

export const ProjectsView = () => {
	const [activeTitle, setActiveTitle] = useState("");

	return (
		<section id="projects">
			<h1 className="title mt-3 pt-5" data-aos="zoom-in">
				Projects
			</h1>
			<div className="project-list">
				{projects.map(
					({
						title,
						description,
						logo,
						capture,
						technologies,
						github_link,
						live_link,
						data_aos_duration,
					}) => {
						const caseStudyLink =
							title !== "Pokédex" ? `/${title}` : "/Pokedex";
						return (
							<div
								className={`project ${activeTitle === title && "active"}`}
								onMouseEnter={() => setActiveTitle(title)}
								onMouseLeave={() => setActiveTitle(null)}
								key={title}
							>
								{activeTitle !== title ? (
									<div
										data-aos="fade-down"
										data-aos-duration={data_aos_duration}
									>
										<Image
											loading="lazy"
											src={logo}
											width={175}
											height={175}
											alt={`${title} logo`}
											className="project-logo"
										/>
										<p>{description}</p>
									</div>
								) : (
								
										<div
											data-aos="fade-up"
											data-aos-duration={data_aos_duration}
										>
											<h1>{title}</h1>
											<p>{description}</p>
											<p>{technologies}</p>
											<div className="d-flex flex-column">
												<Image
													src={capture}
													width={450}
													height={350}
													className="project-image"
													alt={`${title} screenshot`}
												/>
												<div className="project-links">
													<a
														href={github_link}
														target="_blank"
														rel="noreferrer"
													>
														View code on GitHub
													</a>
													{live_link && (
														<a
															href={live_link}
															target="_blank"
															rel="noreferrer"
														>
															View Live
														</a>
													)}
													{title !== "Sermo" ? (
														<Link href={caseStudyLink}>
															<a>View Case Study</a>
														</Link>
													) : (
														<p>Case Study coming soon</p>
													)}
												</div>
											</div>
										</div>
								)}
							</div>
						);
					},
				)}
			</div>
			<SvgWave />
		</section>
	);
};

