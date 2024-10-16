"use client";

import { Typewriter } from "react-simple-typewriter";

import { typewriterWords } from "src/utils/constants";
import Link from "next/link";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ProfilePicture from "public/profile-pic.png";
import Image from "next/image";

export const HomeView = () => {
	return (
		<section
			id="home"
			className="min-h-screen flex flex-col justify-center items-center text-center"
		>
			<motion.h1
				id="profile-h1"
				className="text-5xl font-bold md:text-5xl motion-preset-slide-right-sm"
				initial={{ opacity: 0, x: 100 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
			>
				Hello, I am Myles Jefferson
			</motion.h1>

			<h2 className="text-xl md:text-2xl">
				A <span className="web-text">&lt;Full-Stack Developer /&gt;</span>{" "}
				experienced with{" "}
				<span>
					<Typewriter words={typewriterWords} cursor cursorStyle="_" loop />
				</span>
			</h2>

			<div>
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
						href="https://utfs.io/f/XTHROo6zFRkOFDxKeSPPVraILQ46Wk1Z9smRY2XquhcSz0ix"
						target="_blank"
						rel="noreferrer"
						className="btn mb-3"
					>
						View my Resume
					</Link>
				</Button>
			</div>
		</section>
	);
};
