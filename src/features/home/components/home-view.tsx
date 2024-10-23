"use client";

import { typewriterWords } from "src/utils/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileUser, Github } from "lucide-react";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const HomeView = () => {
	return (
		<AuroraBackground>
			<div className="flex flex-col items-center justify-center gap-3">
				<motion.h1
					id="profile-h1"
					className="text-4xl font-extrabold md:text-7xl text-center dark:text-white motion-preset-slide-right-sm"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Hello, I am Myles Jefferson
				</motion.h1>
				<motion.h2
					className="text-xl md:text-3xl text-center text-neutral-600 dark:text-neutral-400"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				>
					A{" "}
					<span className="font-bold">&lt;Full-Stack Developer /&gt;</span>{" "}
					experienced with{" "}
					<FlipWords words={typewriterWords} className="font-semibold " />
				</motion.h2>
				<motion.div className="flex justify-center items-center gap-1 z-10">
					<Button asChild>
						<Link
							href="https://github.com/Myles-J"
							target="_blank"
							rel="noreferrer"
						>
							My GitHub
							<Github className="ml-1" size={14} />
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
			</div>
		</AuroraBackground>
	);
};
