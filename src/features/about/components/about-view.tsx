"use client";
import { motion } from "framer-motion";
import ProfilePicture from "public/profile-pic.png";
import Image from "next/image";
export const AboutView = () => (
	<section id="about" className="px-2 min-h-screen">
		<motion.h1
			className="text-3xl md:text-5xl font-bold mt-3"
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			About Me
		</motion.h1>

		<div className="grid grid-cols-2">
			<div className="flex flex-col text-xl">
				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					Hello, my name is Myles Jefferson. I am a self-taught developer with a
					passion for building elegant and user-friendly applications. Starting
					from humble beginnings, I spent time honing my skills in HTML,
					CSS/SCSS, TypeScript, React, NextJS, Node.js, Git, API development,
					SQL. In my professional experience, I have spent over{" "}
					{new Date().getFullYear() - 2022} years working on a variety of
					projects, from small web applications to large-scale enterprise
					systems. I have been able to collaborate with clients and team members
					to ensure that projects are completed on time, within budget, and to
					the highest standards of quality. Through this work, I have also
					become comfortable with Docker, Linux servers, agile development
					methodologies, test-driven development, and continuous
					integration/continuous deployment (CI/CD) practices.
				</motion.p>
				<br />
				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.7 }}
				>
					In my free time, I enjoy exploring new technologies, learning with
					side projects, and participating in online communities. I believe that
					staying curious and constantly learning is key to being a successful
					developer. I am always open to new opportunities and collaborations,
					so if you are interested in working together or have any questions,
					feel free to reach out. Let us build something great together!
				</motion.p>
			</div>

			<Image
				src={ProfilePicture}
				width={300}
				height={300}
				alt="Profile Picture"
				className="mx-auto"
			/>
		</div>
	</section>
);
