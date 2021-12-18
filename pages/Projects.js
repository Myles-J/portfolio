import React, { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
	const [projects, setProjects] = useState([
		{
			title: 'FilmFever',
			description:
				'	A client-side React app with a RESTful Node.js API built from scratch',
			logo: '/../public/FilmFever_logo.png',
			capture: '/../public/FilmFever_capture.png',
			technologies:
				'React | Redux | SCSS | React-Bootstrap | MongoDB | Node.js | Express.js',
			github_link: 'https://github.com/Myles-the-Coder/FilmFever-client.git',
			live_link: 'https://filmfever.netlify.app/',
		},
		{
			title: 'Gatherr',
			description:
				'	A serverless, progressive web app fetching Google Calendar API data',
			logo: '/../public/Gatherr_logo.png',
			capture: '/../public/Gatherr_Capture.png',
			technologies:
				'	React | Serverless | AWS | Data Visualization | Test-Driven (Just, Cucumber, Puppeteer) | Google OAuth',
			github_link: 'https://github.com/Myles-the-Coder/Gatherr.git',
			live_link: 'https://myles-the-coder.github.io/Gatherr/',
		},
		{
			title: 'Pokédex',
			description:
				'A Javascript app that fetches data from an external Pokémon API',
			logo: '/../public/Pokedex_logo.png',
			capture: '/../public/Pokedex_capture.png',
			technologies:
				'HTML | CSS | JavaScript | Bootstrap | AJAX | External API ',
			github_link: 'https://github.com/Myles-the-Coder/Pokedex-v2.git',
			live_link: 'https://myles-the-coder.github.io/Pokedex-v2/',
		},
	]);
	const [isActive, setIsActive] = useState('');
	function toggleActiveClass(title) {
		setIsActive(title);
	}

	return (
		<section id='projects'>
			<h1 className='title'>Projects</h1>
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
					return (
						<div
							className={isActive === title ? 'project active' : 'project'}
							onClick={() => toggleActiveClass(title)}>
							<Image
								src={logo}
								width={150}
								height={150}
								alt={`${title} logo`}
								className='project-logo'
							/>
							<h1>FilmFever</h1>
							<p>{description}</p>
							<div className='details'>
								<Image
									src={capture}
									width={650}
									height={300}
									alt={`${title} screenshot`}
									className='project-capture'
								/>
								<div className='project-links'>
									<a href={github_link} target='_blank'>
										View code on GitHub
									</a>
									<a href={live_link} target='_blank'>
										View Live
									</a>
								</div>
							</div>
							<br />
							<h5>{technologies}</h5>
						</div>
					);
				})}
			</div>
		</section>
	);
}
