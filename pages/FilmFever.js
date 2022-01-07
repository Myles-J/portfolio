import React from 'react';
import CaseStudyHeader from '../components/CaseStudyHeader';
import ImageCarousel from '../components/ImageCarousel';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function FilmFever() {
	return (
		<div>
			<CaseStudyHeader title='FilmFever' />
			<div id='Overview'>
				<h1>Overview</h1>
				<p>
					Create an interactive movie application that allows users to save
					their favorite movies or discover new ones{' '}
				</p>
				<h2></h2>
				<h2>Process & Context</h2>
				<h2>Objective</h2>
				<ol>
					<li>
						Build a database using MongoDB to house all the information for each
						movie and write the logic necessary for accessing this
						data.float-end
					</li>
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
			<div id='Structure'>
				<h1>Structure</h1>
				<h2>Back-End</h2>
				<ul>
					<li>
						Using <b>Node.js</b> and <b>Express</b>, build a RESTful API and
						preform endpoint testing with Postman.
					</li>
					<li>
						Using <b>MongoDB</b> and <b>Mongoose</b>, build a non-relational
						database and write the necessary business logic.
					</li>
					<li>
						Using <b>Passport</b> and <b>JWT</b>, write the logic to
						authenticate users and authorize their access to certain
						functionality of the app.
					</li>
					<li>
						Using <b>Heroku</b>, deploy and manage the app's API online
					</li>
				</ul>
				<ImageCarousel
					id={'carousel1'}
					img1={'/../public/MongoDB_Capture.png'}
					img2={'/../public/MongoDB_Capture2.png'}
					img3={'/../public/Postman_Capture.png'}
				/>
				<h2>Front-end</h2>
				<ul>
					<li>
						Using <b>React.js</b>, built the app's front-end to enable user
						interactivity.
					</li>
					<li>
						Using <b>React-Router-Dom</b>, implement the logic allowing users to
						access different pages of the app.
					</li>
					<li>
						Using <b>Redux</b>, <b>React-Redux</b>, and <b>Redux Toolkit</b>,
						manage the state of the app which, in turn, centralizes the data
						used throughout the app.
					</li>
					<li>
						Using <b>Netlify</b>, deploy and manage the app's client-side server
					</li>
				</ul>
				<ImageCarousel
					id={'carousel2'}
					img1={'/../public/FilmFever_capture.png'}
					img2={'/../public/FilmFever_Capture2.png'}
					img3={'/../public/FilmFever_Capture3.png'}
				/>
			</div>
			<div id='Reflection'>
				<h1>Reflection</h1>
				<p>
					FilmFever has proven itself to be an invaluable learning experience in
					my developer journey. From building and accessing a database to
					fleshing out the user experience on the front-end, this project
					demands a deep understanding of full-stack development to ensure every
					part works as expected.
				</p>
				<h2>Overcoming Challenges</h2>
				<p>
					Given the scope of this project, the development process brought with
					it some challenges. When developing the front-end, the biggest challenge was implementing Redux with React to achieve the desired results. With the help of Redux Toolkit and personal research, I was able to properly implement Redux to manage of the state of my app. The main issue that arose during back-end development was
					ensuring that all the endpoints of the API functioned correctly. This was a common error that was thrown during development
				</p>
        <code>(TypeError: req.login is not a function)</code>
        <Image src={'/../public/2.9-Console_Error.png'}width={900} height={350}/>
				<p>After researching the issue and debugging my code, I solved the issue by restructuring the middleware of the Node.js server. These challenges proved to be an excellent learning experience and helped me gain a better understanding of the relationship between the server-side and client-side.</p>
        <h2>Duration</h2>
        <p>The development of FilmFever took about two weeks from start to finish. Most of the development time was spent on building the back-end of the app as well as learning the intricacies of React and Redux</p>
				<h2>Credits</h2>
				<ul>
					<li>Role: Lead Developer</li>
					<li>Tutor: Jason Early</li>
					<li>Mentor: Tony Dominguez</li>
				</ul>
			</div>
			<Footer theme='Light' />
		</div>
	);
}
