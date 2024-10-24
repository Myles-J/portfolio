import Image from "next/image";
import { ProjectLinks } from "@/features/projects/components/project-links";
import { ImageCarousel } from "../../../components/image-carousel";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const FilmFever = () => (
	<div id="caseStudy">
		<section className="min-h-screen">
			<Image
				src={"/FilmFever_Hero.png"}
				className="z-0 brightness-50"
				fill
				alt="Hero Image"
			/>
			<div className="z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  font-bold text-white">
				<h1 className="text-7xl font-extrabold">FilmFever</h1>
				<h3 className="text-4xl">Full-Stack Movie Application</h3>
			</div>
		</section>
		<article className="prose lg:prose-lg dark:prose-invert w-full mx-auto">
			<div className="m-auto p-2 w-90" id="Overview">
				<h1 className="text-center">Overview</h1>
				<p>
					FilmFever is a full-stack JavaScript application that allows users to
					access information about different movies, genres, and directors.
					Built using the MERN stack, FilmFever uses a built from scratch
					database and server to provide movie data to users on the
					application&#39;s front-end. Users can create an account, read
					information about different movies, update their information and
					favorite movies list, and delete their accounts if desired. These
					actions follow the core principles that are integral to a CRUD
					(create, read, update, delete) application.
				</p>
				<h2>Process & Context</h2>
				<p className="w-90">
					FilmFever is a personal project built as part of CareerFoundry&#39;s
					Full-Stack Immersion Web Developer course. This project demanded a
					solid understanding of using JavaScript for both back-end and
					front-end development.
				</p>
				<h2>Objective</h2>
				<h5>Build a Full-Stack JavaScript application from scratch</h5>
				<br />
				<h2>Solutions: </h2>
				<ol>
					<li>
						Build a database using MongoDB to house all the information for each
						movie and write the logic necessary for accessing this data.
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
			<div className="m-auto w-90" id="Tools/Technologies">
				<h1 className="m-2 p-4 text-center">Tools and Technologies</h1>
				<Accordion type="single" collapsible>
					<AccordionItem value="front-end">
						<AccordionTrigger>Front End</AccordionTrigger>
						<AccordionContent>
							<ul className="list-unstyled">
								<li>React</li>
								<li>Redux</li>
								<li>React-Redux</li>
								<li>Redux Toolkit</li>
								<li>React Bootstrap</li>
								<li>Netlify</li>
							</ul>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="back-end">
						<AccordionTrigger>Back End</AccordionTrigger>
						<AccordionContent>
							<ul className="list-unstyled">
								<li>Node.js</li>
								<li>Express.js</li>
								<li>MongoDB</li>
								<li>MongoDBCompass</li>
								<li>Heroku</li>
							</ul>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="dependencies">
						<AccordionTrigger>Dependencies</AccordionTrigger>
						<AccordionContent>
							<ul className="list-unstyled">
								<li>bcrypt</li>
								<li>body-parser</li>
								<li>cors</li>
								<li>express</li>
								<li>express-validator</li>
								<li>jsonwebtoken(JWT)</li>
								<li>mongoose</li>
								<li>morgan</li>
								<li>passport</li>
								<li>passport-jwt</li>
								<li>passport-local</li>
							</ul>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
			<section className="mt-2" id="Structure">
				<h1 className="text-center">Structure</h1>
				<h2 className="m-4 text-center">Back-End Process</h2>
				<div className="divider">
					<ul>
						<li>
							Using <b>Node.js</b> and <b>Express</b>, build a RESTful API and
							preform endpoint testing with <b>Postman</b>.
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
							Using <b>Heroku</b>, deploy and manage the app&#39;s API online
						</li>
					</ul>
					<ImageCarousel
						images={[
							"/MongoDB_Capture.png",
							"/MongoDB_Capture2.png",
							"/Postman_Capture.png",
						]}
					/>
				</div>
				<h2 className="m-4 text-center">Front-End Process</h2>
				<div className="divider">
					<ul>
						<li>
							Using <b>React</b>, built the app&#39;s front-end to enable user
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
						images={[
							"/FilmFever_Capture.png",
							"/FilmFever_Capture2.png",
							"/FilmFever_Capture3.png",
						]}
					/>
				</div>
			</section>
			<div className="w-90 m-auto" id="Reflection">
				<h1 className="text-center">Reflection</h1>
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
				<div className="d-flex flex-column align-items-center justify-content-center">
					<code>(TypeError: req.login is not a function)</code>
					<Image
						src={"/2.9-Console_Error.png"}
						width={900}
						height={350}
						alt="Error Message"
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
				<ul className="list-unstyled">
					<li>Role: Lead Developer</li>
					<li>Tutor: Jason Early</li>
					<li>Mentor: Tony Dominguez</li>
				</ul>
				<h2 className="text-center">Links</h2>
				<ProjectLinks
					previousProject="pokedex"
					githubLink="https://github.com/Myles-the-Coder/FilmFever-client.git"
					liveLink="https://filmfever.netlify.app/"
					nextProject="gatherr"
				/>
			</div>
		</article>
	</div>
);

export default FilmFever;
