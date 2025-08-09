import Image from "next/image";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { ProjectLinks } from "@/features/projects/components/project-links";
import { ImageCarousel } from "../../../components/image-carousel";

export default function Gatherr() {
	return (
		<div id="caseStudy p-1">
			<section id="HeroImage" className="min-h-screen">
				<Image
					src={"/Gatherr_Hero.jpeg"}
					className="brightness-50"
					layout="fill"
					objectFit="cover"
					alt="Hero Image"
				/>
				<div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-50 transform text-center font-bold text-5xl text-white">
					<h1 className="font-extrabold text-7xl">Gatherr</h1>
					<h2 className="text-4xl">
						Progressive Web App with Google Calendar API
					</h2>
				</div>
			</section>
			<article className="prose lg:prose-lg dark:prose-invert mx-auto w-full p-1">
				<div id="Overview">
					<h1 className="mt-2 text-center">Overview</h1>
					<p className="w-90">
						Gatherr is a progressive web application built with React that
						allows users view information on upcoming developer event, courtesy
						of the Google Calendar API. Gatherr uses Serverless and AWS Lambda
						functions to authenticate users with their Google accounts. From
						there, users can view all the events provided by the API, search for
						events in specific cities, and limit the query results to a number
						between one and thirty-two. Users can visualize the data quickly
						with a pie chart and line graph provided from the Recharts library.
					</p>
					<h2>Process & Context</h2>
					<p className="w-90">
						Gatherr is a personal project built as part of CareerFoundry&#39;s
						Full-Stack Immersion Web Developer course. This project demanded a
						solid understanding of test-driven development (TDD) and using a
						serverless backend with Amazon Web Services (AWS).
					</p>
					<h2>Objective</h2>
					<p>
						Build a progressive web application that achieves the following:
						authenticate users using serverless AWS functions, follow the
						principles of test-driven development, allow users to download the
						application on their mobile device, give users the ability to use
						the app offline, and provide a way to visualize the API data.
					</p>
					<br />
					<h2>Solutions: </h2>
					<ol>
						<li>
							First, receive a consumer token from the Google Calendar API.
							Then, using <b>AWS Lambda</b> and <b>Serverless</b>, refresh the
							access token to authenticate users with their Google account.
						</li>
						<li>
							Using <b>Enzyme</b>, <b>Jest</b>, <b>Cucumber</b>, and{" "}
							<b>Puppeteer</b>, perform testing on individual components and
							cross-component integration to limit bugs during production. This
							also ensures elements such as buttons function properly.
						</li>
						<li>
							Use <b>React&#39;s </b> &quot;<code>manifest.json</code>&quot;
							file to make the application installable on the user&#39;s device.
						</li>
						<li>
							Use a service worker to serve cached content to the user when they
							have no internet connection.
						</li>
						<li>
							Use the <b>Recharts</b> library to display visualize event data by
							means of a pie chart and line graph.
						</li>
					</ol>
				</div>
				<div id="Tools/Technologies">
					<h1>Tools and Technologies</h1>
					<Accordion type="single" collapsible>
						<AccordionItem value="front-end">
							<AccordionTrigger>Front End</AccordionTrigger>
							<AccordionContent>
								<ul className="list-unstyled">
									<li>React</li>
									<li>Enzyme</li>
									<li>Jest</li>
									<li>Cucumber</li>
									<li>Puppeteer</li>
									<li>React Bootstrap</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="back-end">
							<AccordionTrigger>Back End</AccordionTrigger>
							<AccordionContent>
								<ul className="list-unstyled">
									<li>Serverless</li>
									<li>AWS Lambda</li>
									<li>GitHub Pages</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="dependencies">
							<AccordionTrigger>Dependencies</AccordionTrigger>
							<AccordionContent>
								<ul className="list-unstyled">
									<li>axios</li>
									<li>nprogress</li>
									<li>recharts</li>
									<li>atatus</li>
									<li>@wojtekmaj/enzyme-adapter-react-17</li>
									<li>jest-cucumber</li>
									<li>gh pages</li>
									<li>morgan</li>
									<li>Workbox (Provided by Google)</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<div id="Structure">
						<h1 className="text-center">Structure</h1>
						<h2 className="m-4">Back-End Process</h2>
						<div className="divider">
							<ul>
								<li>
									Using the <b>Google Calendar API</b>, generate a consumer key
									and secret.
								</li>
								<li>
									Using <b>AWS</b> and <b>Serverless</b>, create a simple
									function that refreshes the access token to grant user access
									to the application.
								</li>
							</ul>

							<ImageCarousel
								images={[
									"/Serverless_Capture.png",
									"/awsLambda_Capture.png",
									"/GoogleAPI_Capture.png",
								]}
							/>
						</div>
						<h2 className="m-4">Front-End Process</h2>
						<div className="divider">
							<ul>
								<li>
									Using <b>React</b>, built the app&#39;s front-end to enable
									user interactivity.
								</li>
								<li>
									Using <b>Enzyme</b> and <b>Jest</b>, use unit and integration
									testing to ensure components work properly on their own and in
									tandem with other components.
								</li>
								<li>
									Using <b>Cucumber</b>, use Gherkin&#39;s Given, When, Then
									syntax to write acceptance tests, a core principle of
									behavior-driven development.
								</li>
								<li>
									Using <b>Puppeteer</b>, write end-to-end tests to simulate the
									final performance of the application.
								</li>
								<li>
									Using <b>GitHub Pages</b>, deploy and manage the app&#39;s
									client-side server.
								</li>
							</ul>

							<ImageCarousel
								images={[
									"/Gatherr_Capture.png",
									"/Gatherr_Capture2.png",
									"/Gatherr_Capture3.png",
								]}
							/>
						</div>
					</div>
					<div id="Reflection">
						<h1>Reflection</h1>
						<p>
							The development of Gatherr was a difficult, but rewarding
							experience that gave me a better understanding of test-driven
							development and working with a FaaS like AWS Lambda. As many large
							companies and small startups can attest to, building an
							maintaining servers can be time-consuming endeavors. That is why,
							more so now then ever, serverless providers like AWS are becoming
							a popular choice for building serverless applications like
							Gatherr. Additionally, developing this project with a test-driven
							approach proved to be a good experience. After writing and
							completing the testing phase, I certainly appreciate the
							bug-preventing and time-saving benefits TDD offers.
						</p>
						<h2>Overcoming Challenges</h2>
						<p>
							The development process brought with it some challenges. When
							using AWS Lambda and Serverless, the biggest challenge was I faced
							initially was ensuring that my functions worked properly the
							Google Calendar API. It would seem that each time I made a request
							to get an authentication token, some issue would arise that
							prevented that token from generating. Because of the fact that the
							syntax for generating such a token is very specific, it took me
							sometime to wrap my mind around how this process was meant to
							work. After some trial and error, I was able to solve this issue
							by exploring the AWS and Google Calendar API documentation to
							ensure my code was setup properly.
						</p>
						<p>
							The other challenge I faced during development was learning the
							syntax involved with writing tests. Unit tests, while being
							written in JavaScript, are just unique enough in a way that gives
							this form of development its own learning curve. In the end, this
							was simply a matter of studying the documentation of Jest,
							Cucumber, and Puppeteer to make sure that the tests were written
							properly and functioned as one would expect.
						</p>
						<h2>Duration</h2>
						<p>
							The development of Gatherr took about three weeks from start to
							finish. Most of the development time was spent on learning the ins
							and outs of test-driven development and using AWS Lambda
							functions.
						</p>
						<h2>Credits</h2>
						<ul className="list-unstyled">
							<li>Role: Lead Developer</li>
							<li>Tutor: Jason Early</li>
							<li>Mentor: Tony Dominguez</li>
						</ul>
						<h2 className="text-center">Links</h2>
						<ProjectLinks
							previousProject="filmfever"
							githubLink="https://github.com/Myles-the-Coder/Gatherr.git"
							liveLink="https://myles-the-coder.github.io/Gatherr/"
							nextProject="pokedex"
						/>
					</div>
				</div>
			</article>
		</div>
	);
}
