"use client";
import {
	AnimationWrapper,
	ScrollAnimationWrapper,
} from "@/components/animation-wrapper";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const WorkExperienceView = () => {
	return (
		<section
			id="workExperience"
			className="flex min-h-screen flex-col justify-center px-4 py-12 sm:py-16"
		>
			<AnimationWrapper
				className="mx-auto max-w-4xl"
				animation="fadeIn"
				duration={0.6}
			>
				<AnimationWrapper animation="slideUp" delay={0.2}>
					<h1 className="text-center font-bold text-2xl text-white tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
						My Experience
					</h1>
				</AnimationWrapper>

				<AnimationWrapper animation="slideUp" delay={0.4}>
					<h2 className="mt-4 text-center text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl">
						Some of my professional experience turning challenges into
						accomplishments
					</h2>
				</AnimationWrapper>

				<ScrollAnimationWrapper
					className="mt-8 sm:mt-12 lg:mt-16"
					animation="slideUp"
					threshold={0.3}
					duration={0.8}
				>
					<Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
						<CardHeader className="pb-4 sm:pb-6">
							<CardTitle className="flex flex-col text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
								Full-Stack Developer
								<span className="mt-2 text-base text-gray-300 sm:text-lg md:text-xl">
									Viaero Wireless, Fort Morgan, Colorado
								</span>
							</CardTitle>
							<CardDescription className="flex flex-col space-y-1 text-gray-400">
								<span className="font-medium text-base sm:text-lg">
									April 2022 - Present
								</span>
								<span className="text-xs sm:text-sm">Full-time position</span>
							</CardDescription>
						</CardHeader>
						<CardContent className="text-gray-300">
							<div className="space-y-4 sm:space-y-6">
								<p className="text-base leading-relaxed sm:text-lg">
									As a Full-Stack Developer at Viaero Wireless, I spearhead the
									design and development of high-performance web applications
									that serve critical business operations. My role involves
									collaborating with cross-functional teams across Network
									Operations, IP Admin, HR, Billing, and Field Operations
									departments to deliver solutions that significantly increase
									operational efficiency.
								</p>

								<h3 className="font-semibold text-white text-xl">
									Key Achievements & Impact:
								</h3>
								<ul className="list-inside list-disc space-y-4 text-base leading-relaxed">
									<li>
										<strong className="text-green-400">
											Customer Provisioning Platform:
										</strong>{" "}
										Developed a comprehensive customer provisioning platform
										serving over{" "}
										<strong className="text-green-400">
											100,000 customers
										</strong>
										, streamlining account management for customer service teams
										by translating user actions into secure SOAP UI backend
										requests.
									</li>
									<li>
										<strong className="text-green-400">
											Equipment Tracking System:
										</strong>{" "}
										Crafted an ISP equipment tracking and management application
										that enabled the discovery and recovery of{" "}
										<strong className="text-green-400">
											$50,000 in previously untracked assets
										</strong>
										, directly improving asset accountability and reducing
										company losses.
									</li>
									<li>
										<strong className="text-green-400">
											CI/CD Implementation:
										</strong>{" "}
										Implemented robust CI/CD pipelines, automating deployments
										and testing on Linux virtual machines and reducing
										application downtime while accelerating release cycles for
										critical internal tools.
									</li>
									<li>
										<strong className="text-green-400">
											Legacy Code Modernization:
										</strong>{" "}
										Modernized legacy codebases by refactoring and migrating to
										scalable architectures, enhancing maintainability,
										performance, and user experience for internal stakeholders.
									</li>
									<li>
										<strong className="text-green-400">
											Cross-Department Collaboration:
										</strong>{" "}
										Successfully collaborated with clients and team members to
										ensure projects are completed on time, within budget, and to
										the highest standards of quality.
									</li>
								</ul>

								<div className="mt-6 rounded-lg border border-gray-700 bg-gray-800/50 p-4 sm:mt-8 sm:p-6">
									<h4 className="mb-3 font-semibold text-base text-white sm:mb-4 sm:text-lg">
										Technologies & Skills:
									</h4>
									<div className="grid grid-cols-1 gap-3 text-xs sm:grid-cols-2 sm:gap-4 sm:text-sm md:grid-cols-3">
										<div className="space-y-2">
											<h5 className="font-medium text-green-400">Frontend</h5>
											<p className="text-gray-300">
												React, Next.js, TypeScript
											</p>
										</div>
										<div className="space-y-2">
											<h5 className="font-medium text-green-400">Backend</h5>
											<p className="text-gray-300">Node.js, Python, SOAP UI</p>
										</div>
										<div className="space-y-2">
											<h5 className="font-medium text-green-400">DevOps</h5>
											<p className="text-gray-300">Docker, CI/CD, Linux VMs</p>
										</div>
										<div className="space-y-2">
											<h5 className="font-medium text-green-400">
												Architecture
											</h5>
											<p className="text-gray-300">
												Scalable Systems, Legacy Migration
											</p>
										</div>
										<div className="space-y-2">
											<h5 className="font-medium text-green-400">
												Business Impact
											</h5>
											<p className="text-gray-300">
												100K+ Users, $50K Asset Recovery
											</p>
										</div>
										<div className="space-y-2">
											<h5 className="font-medium text-green-400">
												Collaboration
											</h5>
											<p className="text-gray-300">
												Cross-functional Teams, Stakeholder Management
											</p>
										</div>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</ScrollAnimationWrapper>
			</AnimationWrapper>
		</section>
	);
};
