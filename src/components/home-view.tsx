"use client";

import { Typewriter } from "react-simple-typewriter";

import { Arrow } from "@/components/arrow";
import { typewriterWords } from "src/utils/constants";
import Link from "next/link";
import { Button } from "./ui/button";

export const HomeView = () => {
	return (
		<section id="home">
			<h1 id="profile-h1" className="text-5xl font-bold">
				Hello, I am Myles Jefferson
			</h1>
			<h2>
				A <span className="web-text">&lt;Full-Stack Developer /&gt;</span>{" "}
				experienced with{" "}
				<span>
					<Typewriter words={typewriterWords} cursor cursorStyle="_" />
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
			<Arrow />
		</section>
	);
};
