"use client";

import { Typewriter } from "react-simple-typewriter";

import { typewriterWords } from "src/utils/constants";
import Link from "next/link";
import { Button } from "./ui/button";
import profilePicture from "public/profile-pic.png";
import Image from "next/image";

export const HomeView = () => {
	return (
		<section id="home">
			<h1 id="profile-h1" className="text-5xl font-bold">
				Hello, I am Myles Jefferson
			</h1>
			<Image
				className="profile-img"
				src={profilePicture}
				width={200}
				height={200}
				alt="Profile Picture"
			/>

			<h2 className="text-2xl">
				A <span className="web-text">&lt;Full-Stack Developer /&gt;</span>{" "}
				experienced with{" "}
				<span>
					<Typewriter words={typewriterWords} cursor cursorStyle="_" loop />
				</span>
			</h2>
			<Button asChild>
				<Link
					href="https://github.com/Myles-J"
					target="_blank"
					className="btn mt-4"
					rel="noreferrer"
				>
					Explore my code on GitHub
				</Link>
			</Button>
			<Button asChild>
				<Link
					href="https://docdro.id/cTkg7TC"
					target="_blank"
					rel="noreferrer"
					className="btn mb-3"
				>
					View/Download my Resume
				</Link>
			</Button>
		</section>
	);
};
