'use client'

import Image from "next/image";
import profilePicture from "public/profile-pic.png";
import React from "react";
import SvgWave from "src/components/SvgWave";

const About = () => {
	return (
		<section id="about">
			<h1 className="text-xl mt-3" data-aos="fade-in" data-aos-duration="1000">
				About
			</h1>
			<Image
				className="profile-img"
				src={profilePicture}
				width={175}
				height={175}
				alt="Profile Picture"
				data-aos="fade-up"
				data-aos-duration="1100"
			/>
			<div className="about-desc">
				<p data-aos="fade-left" data-aos-duration="1100">
					Hello, my name is Myles Jefferson. I am a self-taught developer with a
					passion for building elegant and user-friendly applications. Starting
					from humble beginnings, I spent time honing my skills in HTML,
					CSS/SCSS, TypeScript, React, NextJS, NodeJS servers, Redux, Git, API
					development, SQL, and noSQL. In my professional experience, I have
					spent over a year working on a variety of projects, from small web
					applications to large-scale enterprise systems. I have been able to
					collaborate with clients and team members to ensure that projects are
					completed on time, within budget, and to the highest standards of
					quality. Through this work, I have also become comfortable with
					Docker, Azure DevOps, Linux servers, agile development methodologies,
					test-driven development, and continuous integration/continuous
					deployment (CI/CD) practices.
				</p>
				<p data-aos="fade-right" data-aos-duration="1200">
					In my free time, I enjoy exploring new technologies, experimenting
					with side projects, and participating in online communities. I believe
					that staying curious and constantly learning is key to being a
					successful developer. I am always open to new opportunities and
					collaborations, so if you are interested in working together or have
					any questions, feel free to reach out. Let us build something great
					together!
				</p>
			</div>
			<a
				href="https://docdro.id/cTkg7TC"
				target="_blank"
				rel="noreferrer"
				className="btn mb-3"
			>
				View/Download my Résumé
			</a>
			<SvgWave />
		</section>
	);
};

export default About;

