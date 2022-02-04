import React from 'react';
import CaseStudyHeader from '../components/CaseStudyHeader';
import ImageCarousel from '../components/ImageCarousel';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Pokedex() {
	return (
		<div>
			<CaseStudyHeader
				link1={'Overview'}
				link2={'Tools/Technologies'}
				link3={'Structure'}
				link4={'Reflection'}
			/>
			<section id='HeroImage'>
				<Image
					src={'/FilmFever_Hero.png'}
					className='Hero-image'
					layout='fill'
					objectFit='contain'
					alt='Hero Image'
				/>
				<div className='overlay'>
					<h1>Pokédex - Front-End JavaScript Application</h1>
					<h4>Scroll to explore case study</h4>
				</div>
				<div className='arrow'></div>
			</section>
			<div className='p-100 m-auto w-90' id='Overview'>
				<h1>Overview</h1>
				<p className='w-90'>
					Pokédex is a front-end JavaScript application that uses PokéAPI data
					to display information on the original 151 Pokemon from the famous
					video game series. Users can then search for specific and filter specific pokemon.
				</p>
				<h2>Process & Context</h2>
				<p className='w-90'></p>
				<h2>Objective</h2>
				<h5>
					Build a front-end JavaScript application from consumes third-party API
					data
				</h5>
				<br />
				<h2>Solutions: </h2>
				<ol>
					<li>
						Build the front-end of the application using React.js that uses the
						database information to enable user interactivity.
					</li>
					<li>
						Use version control via GitHub to track changes to the project and
						host the original code.
					</li>
				</ol>
			</div>
			<div className='p-100 m-auto w-90' id='Tools/Technologies'>
				<h1 className='m-2 p-4'>Tools and Technologies</h1>
				<div className='Tech-container'>
					<div className='Tech-list text-center'>
						<h4>Front-end</h4>
						<ul className='list-unstyled'>
							<li>HTML</li>
							<li>CSS/SCSS</li>
							<li>JavaScript</li>
							<li>Bootstrap</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='p-100 m-auto w-90' id='Structure'>
				<h2 className='m-4'>Front-End Process</h2>
				<div className='divider'>
					<ul>
						<li>
							Using <b>HTML</b>, built the app&#39;s front-end to enable user
							interactivity.
						</li>
						<li>
							Using <b>React-Router-Dom</b>, implement the logic allowing users
							to access different pages of the app.
						</li>
						<li>
							Using <b>Redux</b>, <b>React-Redux</b>, and <b>Redux Toolkit</b>,
							manage the state of the app which, in turn, centralizes the data
							used throughout the app.
						</li>
						<li>
							Using <b>Netlify</b>, deploy and manage the app&#39;s client-side
							server.
						</li>
					</ul>
					<ImageCarousel
						id={'carousel2'}
						img1={'/FilmFever_Capture.png'}
						img2={'/FilmFever_Capture2.png'}
						img3={'/FilmFever_Capture3.png'}
					/>
				</div>
			</div>
			<div className='p-100 w-90 m-auto' id='Reflection'>
				<h1>Reflection</h1>
				<p>
					FilmFever has proven itself to be an invaluable learning experience in
					my developer journey. From building and accessing a database to
					fleshing out the user experience on the front-end, this project
					demands a deep understanding of full-stack development to ensure every
					component works as expected.
				</p>
				<h2>Overcoming Challenges</h2>
				<p>
					Given the scope of this project, the development process brought with
					it some challenges. When developing the front-end, the biggest
					challenge was implementing Redux with React to achieve the desired
					results. With the help of Redux Toolkit and personal research, I was
					able to properly implement Redux to manage of the state of my app. The
					main issue that arose during back-end development was ensuring that
					all the endpoints of the API functioned correctly. This was a common
					error that was thrown during development.
				</p>
				<div className='d-flex flex-column align-items-center justify-content-center'>
					<code>(TypeError: req.login is not a function)</code>
					<Image
						src={'/2.9-Console_Error.png'}
						width={900}
						height={350}
						alt='Error Message'
					/>
				</div>
				<p>
					After researching the issue and debugging my code, I solved the issue
					by restructuring the middleware of the Node.js server. This issue
					showed me the importance of proper code structure, especially when
					setting up a server. These challenges proved to be an excellent
					learning experience and helped me gain a better understanding of the
					relationship between the server-side and client-side.
				</p>
				<h2>Duration</h2>
				<p>
					The development of FilmFever took about two weeks from start to
					finish. Most of the development time was spent on building the
					back-end of the app as well as learning the intricacies of React and
					Redux.
				</p>
				<h2>Credits</h2>
				<ul className='list-unstyled'>
					<li>Role: Lead Developer</li>
					<li>Tutor: Jason Early</li>
					<li>Mentor: Tony Dominguez</li>
				</ul>
				<h2 className='text-center'>Links</h2>
				<div className='d-flex align-items-start justify-content-center'>
					<a
						className='h5 m-2'
						href='https://github.com/Myles-the-Coder/Pokedex-v2.git'>
						View Code on GitHub
					</a>
					<a
						className='h5 m-2'
						href='https://myles-the-coder.github.io/Pokedex-v2/'>
						View Project Live
					</a>
				</div>
			</div>
			<Footer theme='Light' />
		</div>
	);
}
