import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { projects } from '../helpers/constants';
import Link from 'next/link';

export default function Projects() {
	const [isActive, setIsActive] = useState('');
	const [isIntersecting, setIsIntersecting] = useState(false);
	const projectRef = useRef(null);

	useEffect(() => {
		let observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					entry.isIntersecting
						? console.log(entry)
						: console.log('Not intersecting');
				});
			},
			{ root: null, threshold: [0.25, 0.5, 0.75, 1], rootMargin: '0px' }
		);

		observer.observe(projectRef.current);

		return () => projectRef.current && observer.unobserve(projectRef.current);
	}, []);

	return (
		<section id='projects'>
			<h1 className='title m-3' data-aos='zoom-in'>
				Projects
			</h1>
			<div className='project-list' data-aos='fade-up' ref={projectRef}>
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
					const caseStudyLink = `/${title}`;
					return (
						<div
							className={`project ${isActive === title ? 'active' : ''}`}
							onClick={() => setIsActive(title)}
							key={title}>
							{isActive !== title && (
								<Image
									src={logo}
									width={175}
									height={175}
									alt={`${title} logo`}
									className='project-logo'
								/>
							)}
							{isActive === title && (
								<>
									<h3>{title}</h3>
									<p>{description}</p>
									<h4>Tools and Technologies</h4>
									<p>{technologies}</p>
									<div className='d-flex align-items-center justify-content-between flex-column flex-md-row m'>
										<Image
											priority
											src={capture}
											width={1250}
											height={850}
											alt={`${title} screenshot`}
										/>
										<div className='project-links'>
											<a href={github_link} target='_blank' rel='noreferrer'>
												View code on GitHub
											</a>
											<a href={live_link} target='_blank' rel='noreferrer'>
												View Live
											</a>
											<Link
												href={{
													pathname: caseStudyLink,
													query: {
														title,
													},
												}}>
												<a>View Case Study</a>
											</Link>
										</div>
									</div>
								</>
							)}
						</div>
					);
				})}
			</div>
		</section>
	);
}
