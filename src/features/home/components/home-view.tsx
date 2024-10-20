
"use client";

import { typewriterWords } from "src/utils/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileUser } from "lucide-react";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const HomeView = () => {
	return (
		<AuroraBackground>
		<motion.h1
				id="profile-h1"
				className="text-5xl font-bold md:text-5xl motion-preset-slide-right-sm"
				initial={{opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Hello, I am Myles Jefferson
			</motion.h1>

			<motion.h2 className="text-3xl mx-auto text-neutral-600 dark:text-neutral-400"
        initial={{opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
				A <span className="font-semibold">&lt;Full-Stack Developer /&gt;</span>{" "}
				experienced with{" "}
				<FlipWords
					words={typewriterWords}
					className="font-semibold text-blue-500"
				/>
			</motion.h2>

			<motion.div
      className="flex justify-center items-center gap-1">
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
			</motion.div>
		</AuroraBackground>
	);
};
