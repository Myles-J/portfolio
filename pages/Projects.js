import React, { useState } from 'react';
import Image from 'next/image';
import { projects } from '../helpers/constants';
import SvgWave from '../components/SvgWave'
import Link from 'next/link';

export default function Projects() {
	const [isActive, setIsActive] = useState('');

	return (
		<section id='projects'>
			<h1 className='title mt-3 pt-5' data-aos='zoom-in'>
				Projects
			</h1>
			<div className='project-list' data-aos='fade-up'>
				{projects.map(project => {
					const {
						title,
						description,
						logo,
						capture,
						technologies,
						github_link,
						live_link,
					} = project;
					let caseStudyLink = title !== 'Pokédex' ? `/${title}` : '/Pokedex';
					return (
						<div
							className={`project ${isActive === title ? 'active' : ''}`}
							onClick={() => setIsActive(title)}
							data-bs-toggle='modal'
							data-bs-target='#exampleModal'
							key={title}>
							{isActive !== title ? (
								<>
									<Image
                    loading='lazy'
										src={logo}
										width={175}
										height={175}
										alt={`${title} logo`}
										className='project-logo'
									/>
									<p>{description}</p>
									<p>(Click to view more details)</p>
								</>
							) : (
								<>
									<h1>{title}</h1>
									<p>{description}</p>
									<p>{technologies}</p>
									<div className='d-flex flex-column'>
										<Image
											priority
											src={capture}
											width={550}
											height={350}
                      className='project-image'
											alt={`${title} screenshot`}
										/>
										<div className='project-links'>
											<a href={github_link} target='_blank' rel='noreferrer'>
												View code on GitHub
											</a>
											<a href={live_link} target='_blank' rel='noreferrer'>
												View Live
											</a>
											{title === 'FilmFever' ? (
												<Link href={caseStudyLink}>
													<a>View Case Study</a>
												</Link>
											) : (
												<p>Case Study coming soon</p>
											)}
										</div>
									</div>
								</>
							)}
						</div>
					);
				})}
			</div>
			<SvgWave/>
		</section>
	);
}
