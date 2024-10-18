"use client";

import { Typewriter } from "react-simple-typewriter";

import { typewriterWords } from "src/utils/constants";
import Link from "next/link";
import { Button } from "./ui/button";
import { ExternalLink, FileUser } from "lucide-react";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { FlipWords } from "./ui/filp-words";

export const HomeView = () => {
	return (
		<AuroraBackground>
			<motion.h1
				id="profile-h1"
				className="text-5xl font-bold md:text-5xl motion-preset-slide-right-sm"
				initial={{ opacity: 0, x: 100 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
			>
				Hello, I am Myles Jefferson
			</motion.h1>

			<h2 className="text-3xl mx-auto text-neutral-600 dark:text-neutral-400">
				A <span className="font-semibold">&lt;Full-Stack Developer /&gt;</span>{" "}
				experienced with{" "}
				<FlipWords
					words={typewriterWords}
					className="font-semibold text-blue-500"
				/>
			</h2>

			<div className="flex justify-center items-center gap-1">
				<Button asChild>
					<Link
						href="https://github.com/Myles-J"
						target="_blank"
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
					>
						View my Resume <FileUser className="ml-1" size={14} />
					</Link>
				</Button>
			</div>
		</AuroraBackground>
	);
};
