"use client";
import {
	AnimationWrapper,
	ScrollAnimationWrapper,
} from "@/components/animation-wrapper";
import { Timeline } from "@/components/ui/timeline";

export const WorkExperienceView = () => {
	const timelineData = [
		{
			title: "April 2022 - October 2025",
			content: (
				<div className="space-y-4">
					<div>
						<h3 className="font-bold text-2xl text-white">
							Full-Stack Developer
						</h3>
						<h4 className="mt-1 font-semibold text-green-300 text-xl">
							Viaero Wireless
						</h4>
						<div className="mt-2 flex flex-col sm:flex-row sm:gap-4">
							<p className="text-gray-400 text-sm">
								<span className="font-medium text-white">Location: </span>Fort
								Morgan, Colorado
							</p>
							<p className="text-gray-400 text-sm">
								<span className="font-medium text-white">Industry: </span>
								Telecommunications
							</p>
						</div>
					</div>
					<p className="text-gray-300 text-sm">
						Spearheading the design and development of high-performance web
						applications that serve critical business operations. Collaborating
						with cross-functional teams across Network Operations, IP Admin, HR,
						Billing, and Field Operations departments to deliver solutions that
						significantly increase operational efficiency.
					</p>

					<div className="space-y-3">
						<h5 className="font-semibold text-base text-white">
							Key Achievements & Impact:
						</h5>
						<ul className="space-y-3 text-gray-300 text-sm">
							<li>
								<strong className="text-green-400">
									Customer Provisioning Platform:
								</strong>{" "}
								Developed a comprehensive platform serving over{" "}
								<strong className="text-green-400">100,000 customers</strong>,
								streamlining account management for customer service teams by
								translating user actions into secure SOAP UI backend requests.
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
								, directly improving asset accountability and reducing company
								losses.
							</li>
							<li>
								<strong className="text-green-400">
									CI/CD Implementation:
								</strong>{" "}
								Implemented robust CI/CD pipelines, automating deployments and
								testing on Linux virtual machines and reducing application
								downtime while accelerating release cycles for critical internal
								tools.
							</li>
							<li>
								<strong className="text-green-400">
									Legacy Code Modernization:
								</strong>{" "}
								Modernized legacy codebases by refactoring and migrating to
								scalable architectures, enhancing maintainability, performance,
								and user experience for internal stakeholders.
							</li>
						</ul>
					</div>

					<div className="mt-4 rounded-lg border border-gray-700 bg-gray-800/50 p-4">
						<h5 className="mb-3 font-semibold text-base text-white">
							Technologies & Skills:
						</h5>
						<div className="grid grid-cols-2 gap-3 text-xs sm:grid-cols-3 sm:text-sm">
							<div>
								<h6 className="font-medium text-green-400">Frontend</h6>
								<p className="text-gray-300">React, Next.js, TypeScript</p>
							</div>
							<div>
								<h6 className="font-medium text-green-400">Backend</h6>
								<p className="text-gray-300">Node.js, Python, SOAP UI</p>
							</div>
							<div>
								<h6 className="font-medium text-green-400">DevOps</h6>
								<p className="text-gray-300">Docker, CI/CD, Linux VMs</p>
							</div>
							<div>
								<h6 className="font-medium text-green-400">Architecture</h6>
								<p className="text-gray-300">
									Scalable Systems, Legacy Migration
								</p>
							</div>
							<div>
								<h6 className="font-medium text-green-400">Business Impact</h6>
								<p className="text-gray-300">
									100K+ Users, $50K Asset Recovery
								</p>
							</div>
							<div>
								<h6 className="font-medium text-green-400">Collaboration</h6>
								<p className="text-gray-300">
									Cross-functional Teams, Stakeholder Management
								</p>
							</div>
						</div>
					</div>
				</div>
			),
		},
		{
			title: "October 2025 - Present",
			content: (
				<div className="space-y-5">
					<div>
						<h3 className="font-bold text-2xl text-white">
							Senior Application Developer
						</h3>
						<h4 className="mt-1 font-semibold text-green-300 text-xl">
							Vail Resorts
						</h4>
						<div className="mt-2 flex flex-col sm:flex-row sm:gap-4">
							<p className="text-gray-400 text-sm">
								<span className="font-medium text-white">Location: </span>
								Broomfield, Colorado
							</p>
							<p className="text-gray-400 text-sm">
								<span className="font-medium text-white">Industry: </span>
								Hospitality &amp; Leisure
							</p>
						</div>
					</div>
					<p className="mt-3 text-base text-gray-300 italic">
						Magic in the making...
					</p>
				</div>
			),
		},
	].reverse();

	return (
		<section
			id="work-experience"
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
					<Timeline data={timelineData} />
				</ScrollAnimationWrapper>
			</AnimationWrapper>
		</section>
	);
};
