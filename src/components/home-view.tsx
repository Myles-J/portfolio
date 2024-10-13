"use client";

import { Typewriter } from "react-simple-typewriter";

import { typewriterWords } from "src/utils/constants";
import Link from "next/link";
import { Button } from "./ui/button";
import profilePicture from "public/profile-pic.png";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export const HomeView = () => {
	return (
		<section id="home">
			<h1 id="profile-h1" className="text-3xl md:text-5xl font-bold">
				Hello,
				<br />I am Myles Jefferson
			</h1>

			<h2 className="text-xl md:text-2xl">
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
					My GitHub
					<ExternalLink className="ml-1" size={14} />
				</Link>
			</Button>
			<Button asChild>
				<Link
					href="https://docdro.id/cTkg7TC"
					target="_blank"
					rel="noreferrer"
					className="btn mb-3"
				>
					View my Resume
				</Link>
			</Button>
		</section>
	);
};
