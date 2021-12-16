import React, { useEffect } from 'react';

export default function Projects() {
		if (typeof window !== 'undefined') {
			const projects = document.querySelectorAll('.project');

			const removeActiveClass = () => {
				projects.forEach(project => project.classList.remove('active'));
			}

			projects.forEach(project => {
				project.addEventListener('click', () => {
					removeActiveClass();
					project.classList.add('active');
				});
			});
		}

	return (
		<section id='projects'>
			<h1 className='title'>Projects</h1>
			<div className='project-list' data-aos='fade-up'>
				<div className='project active'>
					<img
						src={require('../public/FilmFever_logo.png')}
						alt='FilmFever Logo'
						className='project-logo'
					/>
					<h1>FilmFever</h1>
					<p>
						A client-side React app with a RESTful Node.js API built from
						scratch
					</p>
					<div className='details'>
						<img
							src={require('../public/FilmFever_capture.png')}
							alt='FilmFever screenshot'
							className='project-capture'
						/>
						<div className='project-links'>
							<a
								href='https://github.com/Myles-the-Coder/FilmFever-client.git'
								target='_blank'>
								View code on GitHub
							</a>
							<a href='https://filmfever.netlify.app/' target='_blank'>
								View Live
							</a>
						</div>
					</div>
					<br />
					<h5>
						React | Redux | SCSS | React-Bootstrap | MongoDB | Node.js |
						Express.js{' '}
					</h5>
				</div>
				<div className='project'>
					<img
						src={require('../public/Gatherr_logo.png')}
						alt='Gatherr Logo'
						className='project-logo'
					/>
					<h1>Gatherr</h1>
					<p>
						A serverless, progressive web app fetching Google Calendar API data
					</p>
					<div className='details'>
						<img
							src={require('../public/Gatherr_Capture.png')}
							alt='Gatherr screenshot'
							className='project-capture'
						/>
						<div className='project-links'>
							<a
								href='https://github.com/Myles-the-Coder/Gatherr.git'
								target='_blank'>
								View code on GitHub
							</a>
							<a
								href='https://myles-the-coder.github.io/Gatherr/'
								target='_blank'>
								View Live
							</a>
						</div>
					</div>
					<br />
					<h5>
						React | Serverless | AWS | Data Visualization | Test-Driven (Just,
						Cucumber, Puppeteer) | Google OAuth
					</h5>
				</div>

				<div className='project'>
					<img
						src={require('../public/Pokedex_logo.png')}
						alt='Pokedex Logo'
						className='project-logo'
					/>
					<h1>Pokédex</h1>
					<p>A Javascript app that fetches data from an external Pokémon API</p>
					<div className='details'>
						<img
							src={require('../public/Pokedex_capture.png')}
							alt='Pokedex screenshot'
							className='project-capture'
						/>
						<div className='project-links'>
							<a
								href='https://github.com/Myles-the-Coder/Pokedex-v2.git'
								target='_blank'>
								View code on GitHub
							</a>
							<a
								href='https://myles-the-coder.github.io/Pokedex-v2/'
								target='_blank'>
								View Live
							</a>
						</div>
					</div>
					<br />
					<h5>HTML | CSS | JavaScript | Bootstrap | AJAX | External API </h5>
				</div>
			</div>
		</section>
	);
}
