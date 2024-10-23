import { ProjectLinks } from "@/features/projects/components/project-links";
import Image from "next/image";

export default function Pokedex() {
	return (
		<div id="caseStudy">
			<section id="HeroImage" className="min-h-screen">
				<Image
					src={"/Pokedex_Hero.jpeg"}
					className="z-0 brightness-50"
					fill
					alt="Hero Image"
				/>
				<div className="z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-7xl font-bold text-white">
					<h1 className="text-7xl font-extrabold">Pokédex</h1>
          <h2 className="text-4xl">Front-End JavaScript Application</h2>
				</div>
			</section>
			<article className="prose lg:prose-lg dark:prose-invert w-full mx-auto">
        <div className=" m-auto w-90" id="Overview">
          <h1 className="text-center mt-2">Overview</h1>
          <p className="w-90">
            Pokédex is a front-end JavaScript application that uses PokéAPI data
            to display information on the original 151 Pokemon from the famous
            video game series. Users can then search for specific and filter
            specific pokemon.
          </p>
          <h2>Process & Context</h2>
          <h2>Objective</h2>
          <p>
            Build a front-end JavaScript application from consumes third-party API
            data
          </p>
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
        <div className=" m-auto w-90 text-center" id="Tools/Technologies">
          <h1 className="m-2 p-4">Tools and Technologies</h1>
          <div className="Tech-container">
            <div className="Tech-list text-center">
              <h4>Front-end</h4>
              <ul className="list-unstyled">
                <li>HTML</li>
                <li>CSS/SCSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" m-auto w-90" id="Structure">
          <h2 className="m-4">Front-End Process</h2>
          <div className="divider">
            <ul>
              <li>
                Using <b>HTML</b>, built the app&#39;s front-end to enable user
                interactivity.
              </li>
              <li>
                Using the <b>Fetch API and PokéAPI </b>, use a GET request to
                retrieve a JSON object containing Pokemon information.
              </li>
              <li>
                Using <b>SCSS</b>, style the API data using the CSS grid format
              </li>
              <li>
                Using <b>GitHub Pages</b>, deploy and manage the app&#39;s
                client-side server.
              </li>
            </ul>
            {/* <ImageCarousel img1={'/Pokedex_Capture.png'} img2={'/Pokedex_Capture2.png'} img3={'/Pokedex_Capture3.png'} /> */}
          </div>
        </div>
        <div className=" w-90 m-auto" id="Reflection">
          <h1>Reflection</h1>
          <p>
            Pokedex is a perfect and fun way to interact with API data and use
            said data in a way to add user functionality to an app. This is an
            integral skill that all software developers will use at some point in
            their career, if not on a daily basis.
          </p>
          <h2>Overcoming Challenges</h2>
          <p>
            The main challenge that I encountered when first developing this
            application was properly filtering the API data in conjunction with
            user search terms. Often times, searching for a specific Pokemon name
            would either not return the correct Pokemon or the performance of the
            filtering was not in line with good UX design.
          </p>
          <p>
            After researching the MDN documentation, I fixed this issue by
            implementing the modern ES6 version of array filtering to update the
            Pokemon list in real time. This also fixed the issue where app
            performance was slow during this operation.
          </p>
          <h2>Duration</h2>
          <p>
            This project took about one week from start to finish. Most of the
            development time was spent on implementing the API data and how to
            display that information to the user.
          </p>
          <h2>Credits</h2>
          <ul className="list-unstyled">
            <li>Role: Lead Developer</li>
            <li>Tutor: Jason Early</li>
            <li>Mentor: Tony Dominguez</li>
          </ul>
          <h2 className="text-center">Links</h2>
          <ProjectLinks
            previousProject="gatherr"
            githubLink="https://github.com/Myles-the-Coder/Pokedex-v2.git"
            liveLink="https://myles-the-coder.github.io/Pokedex-v2/"
            nextProject="filmfever"
          />
        </div>
      </article>
		</div>
	);
}
