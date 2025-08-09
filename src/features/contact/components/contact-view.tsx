"use client";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import {
	AnimationWrapper,
	StaggerItem,
	StaggerWrapper,
} from "@/components/animation-wrapper";
import { GitHub, LinkedIn } from "@/components/social-logos";
import { ContactForm } from "./contact-form";

const socialLinks = [
	{
		name: "GitHub",
		link: "https://github.com/Myles-J",
		Icon: GitHub,
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/mylesjefferson/",
		Icon: LinkedIn,
	},
];

export const ContactView = () => {
	return (
		<section
			id="contact"
			className="flex min-h-screen flex-col justify-center px-4 py-12 sm:py-16"
		>
			<AnimationWrapper
				className="mx-auto max-w-6xl"
				animation="fadeIn"
				duration={0.6}
			>
				<AnimationWrapper animation="slideUp" delay={0.2}>
					<h1 className="text-center font-bold text-3xl text-white tracking-tight sm:text-4xl md:text-5xl">
						Get In Touch
					</h1>
				</AnimationWrapper>
				<AnimationWrapper animation="slideUp" delay={0.4}>
					<p className="mt-4 text-center text-base text-gray-300 sm:text-lg">
						Have a question or want to work together? Send me a message and I'll
						get back to you as soon as possible.
					</p>
				</AnimationWrapper>

				<div className="mt-8 grid gap-8 sm:mt-12 lg:grid-cols-2 lg:gap-12">
					{/* Contact Information */}
					<AnimationWrapper
						className="space-y-6 sm:space-y-8"
						animation="slideInLeft"
						delay={0.6}
					>
						<div>
							<h2 className="mb-4 font-semibold text-white text-xl sm:mb-6 sm:text-2xl">
								Let's Connect
							</h2>
							<p className="text-base text-gray-300 leading-relaxed sm:text-lg">
								I'm always open to discussing new opportunities, interesting
								projects, or just having a chat about technology. Feel free to
								reach out!
							</p>
						</div>
						<div className="flex flex-col gap-6 sm:gap-8">
							<StaggerWrapper className="flex-1" staggerDelay={0.1}>
								<StaggerItem key="email-contact" animation="slideUp">
									<div className="flex items-center space-x-3 sm:space-x-4">
										<div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-400/10 sm:h-14 sm:w-14">
											<Mail className="h-6 w-6 text-green-400 sm:h-7 sm:w-7" />
										</div>
										<div>
											<h3 className="font-semibold text-base text-white sm:text-lg">
												Email
											</h3>
											<Link
												href={"mailto:mylesjefferson.dev@gmail.com"}
												className="text-green-400 text-sm hover:text-green-300 hover:underline sm:text-base"
											>
												mylesjefferson.dev@gmail.com
											</Link>
										</div>
									</div>
								</StaggerItem>
							</StaggerWrapper>
							<StaggerWrapper className="flex-1" staggerDelay={0.1}>
								<StaggerItem key="socials-contact" animation="slideUp">
									<div className="flex items-center space-x-3 sm:space-x-4">
										<div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-400/10 sm:h-14 sm:w-14">
											<Phone className="h-6 w-6 text-green-400 sm:h-7 sm:w-7" />
										</div>
										<div>
											<h3 className="font-semibold text-base text-white sm:text-lg">
												Socials
											</h3>
											<div className="flex items-center justify-center gap-4 space-x-1 py-1">
												{socialLinks.map(({ name, link, Icon }) => (
													<Link
														key={name}
														href={link}
														target="_blank"
														rel="noreferrer noopener"
														className="inline-flex items-center space-x-3 text-green-400 text-sm hover:text-green-300 hover:underline sm:text-base"
													>
														<Icon className="size-4 sm:size-5" />
														<span className="text-base sm:text-lg">{name}</span>
													</Link>
												))}
											</div>
										</div>
									</div>
								</StaggerItem>
							</StaggerWrapper>
						</div>
					</AnimationWrapper>

					{/* Contact Form */}
					<AnimationWrapper animation="slideInRight" delay={0.8}>
						<div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm sm:p-8">
							<h2 className="mb-6 font-semibold text-white text-xl sm:mb-8 sm:text-2xl">
								Send Message
							</h2>
							<ContactForm />
						</div>
					</AnimationWrapper>
				</div>
			</AnimationWrapper>
		</section>
	);
};
