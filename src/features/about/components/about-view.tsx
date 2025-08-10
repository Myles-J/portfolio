import Image from "next/image";
import ProfilePicture from "public/profile-pic.png";
import {
	AnimationWrapper,
	ScrollAnimationWrapper,
} from "@/components/animation-wrapper";
import { YearOfExperience } from "./year-of-experience";

export const AboutView = () => (
	<section
		id="about"
		className="flex min-h-screen flex-col justify-center px-4 py-12 sm:py-16"
	>
		<AnimationWrapper
			className="mx-auto max-w-6xl"
			animation="fadeIn"
			duration={0.6}
		>
			<AnimationWrapper animation="slideUp" delay={0.2}>
				<h1 className="text-center font-bold text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
					About Me
				</h1>
			</AnimationWrapper>

			<div className="mt-8 flex flex-col items-center justify-center gap-8 sm:mt-12 sm:gap-12 lg:flex-row lg:gap-16">
				<ScrollAnimationWrapper
					animation="slideInLeft"
					threshold={0.3}
					duration={0.8}
				>
					<div className="flex-shrink-0">
						<Image
							src={ProfilePicture}
							width={300}
							height={300}
							alt="Profile Picture"
							className="h-48 w-48 rounded-2xl shadow-2xl sm:h-64 sm:w-64 md:h-80 md:w-80"
						/>
					</div>
				</ScrollAnimationWrapper>

				<ScrollAnimationWrapper
					className="flex-1 space-y-4 sm:space-y-6"
					animation="slideInRight"
					threshold={0.3}
					duration={0.8}
				>
					<div className="space-y-3 sm:space-y-4">
						<h2 className="font-semibold text-white text-xl sm:text-2xl md:text-3xl">
							Hello, I'm <span className="text-green-400">Myles Jefferson</span>
						</h2>
						<p className="text-base text-gray-300 leading-relaxed sm:text-lg">
							A passionate full-stack developer who believes in the power of
							elegant code to solve real-world problems. My journey began with
							curiosity and has evolved into a career of crafting digital
							solutions that make a difference.
						</p>
					</div>

					<div className="space-y-3 sm:space-y-4">
						<h3 className="font-semibold text-lg text-white sm:text-xl">
							My Story
						</h3>
						<p className="text-gray-300 text-sm leading-relaxed sm:text-base">
							I started my programming journey as a self-taught developer,
							driven by the desire to create and innovate. What began with
							simple HTML and CSS has grown into a comprehensive skill set
							spanning modern web technologies. I've spent over{" "}
							<YearOfExperience /> refining my craft, from building personal
							projects to developing enterprise-level applications that serve
							thousands of users.
						</p>
					</div>

					<div className="space-y-3 sm:space-y-4">
						<h3 className="font-semibold text-lg text-white sm:text-xl">
							Technical Philosophy
						</h3>
						<p className="text-gray-300 text-sm leading-relaxed sm:text-base">
							I believe in writing code that's not just functional, but
							maintainable, scalable, and user-friendly. My approach combines
							modern development practices with a deep understanding of user
							needs. Whether it's implementing CI/CD pipelines, modernizing
							legacy systems, or architecting new solutions, I focus on creating
							robust, efficient systems that stand the test of time.
						</p>
					</div>

					<div className="space-y-3 sm:space-y-4">
						<h3 className="font-semibold text-lg text-white sm:text-xl">
							What Drives Me
						</h3>
						<p className="text-gray-300 text-sm leading-relaxed sm:text-base">
							I'm motivated by the challenge of turning complex problems into
							elegant solutions. Every project is an opportunity to learn
							something new, whether it's mastering a new framework, optimizing
							performance, or improving user experience. I thrive in
							collaborative environments where ideas flow freely and innovation
							is encouraged.
						</p>
					</div>

					<div className="space-y-3 sm:space-y-4">
						<h3 className="font-semibold text-lg text-white sm:text-xl">
							Looking Forward
						</h3>
						<p className="text-gray-300 text-sm leading-relaxed sm:text-base">
							I'm always excited about new opportunities to create meaningful
							impact through technology. Whether it's building the next great
							application, mentoring aspiring developers, or contributing to
							innovative projects, I'm ready to take on new challenges. Let's
							connect and explore how we can build something amazing together!
						</p>
					</div>
				</ScrollAnimationWrapper>
			</div>
		</AnimationWrapper>
	</section>
);
