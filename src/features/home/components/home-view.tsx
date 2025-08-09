// "use client";

import { FileUser } from "lucide-react";
import Link from "next/link";
import { typewriterWords } from "src/utils/constants";
import {
	AnimationWrapper,
	StaggerItem,
	StaggerWrapper,
} from "@/components/animation-wrapper";
import { GitHub } from "@/components/social-logos";
import { FlipWords } from "@/components/ui/flip-words";

export const HomeView = () => {
	return (
		<div className="relative min-h-screen w-full bg-black">
			<div
				className="pointer-events-none absolute inset-0 z-0"
				style={{
					background:
						"radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16, 185, 129, 0.25), transparent 70%), #000000",
				}}
				aria-hidden="true"
			/>

			<div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6">
				<AnimationWrapper
					className="mx-auto max-w-4xl text-center"
					animation="fadeIn"
					duration={0.8}
				>
					<AnimationWrapper animation="slideUp" delay={0.2} duration={0.8}>
						<h1
							id="profile-h1"
							className="text-center font-extrabold text-3xl text-white sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
						>
							Hello, I am Myles Jefferson
						</h1>
					</AnimationWrapper>

					<AnimationWrapper animation="slideUp" delay={0.4} duration={0.8}>
						<h2 className="mt-6 text-center text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
							A{" "}
							<span className="font-bold text-green-400">
								&lt;Full-Stack Developer /&gt;
							</span>{" "}
							experienced with
							<br />
							<span className="mt-2">
								<FlipWords
									words={typewriterWords}
									className="font-semibold text-green-400"
								/>
							</span>
						</h2>
					</AnimationWrapper>

					<AnimationWrapper animation="slideUp" delay={0.6} duration={0.8}>
						<p className="mt-6 text-center text-base text-gray-400 sm:text-lg md:text-xl">
							Passionate about creating elegant solutions and building impactful
							applications
						</p>
					</AnimationWrapper>

					<StaggerWrapper
						className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4"
						staggerDelay={0.1}
					>
						<StaggerItem key="github-link" animation="scaleIn" duration={0.6}>
							<Link
								href="https://github.com/Myles-J"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center justify-center rounded-full bg-green-400 px-6 py-3 text-black hover:bg-green-500"
							>
								My GitHub
								<GitHub className="ml-2 size-4" fill="#000" />
							</Link>
						</StaggerItem>
						<StaggerItem key="resume-link" animation="scaleIn" duration={0.6}>
							<Link
								href="https://utfs.io/f/XTHROo6zFRkOFDxKeSPPVraILQ46Wk1Z9smRY2XquhcSz0ix"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center justify-center gap-2 rounded-full bg-green-400 px-6 py-3 text-black hover:bg-green-500"
							>
								View my Resume <FileUser size={18} />
							</Link>
						</StaggerItem>
					</StaggerWrapper>
				</AnimationWrapper>
			</div>
		</div>
	);
};
