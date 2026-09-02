"use client";
import {
	AnimationWrapper,
	ScrollAnimationWrapper,
} from "@/components/animation-wrapper";
import { Timeline } from "@/components/ui/timeline";
import { type Role, rolesNewestFirst } from "../roles";

const RoleContent = ({ role }: { role: Role }) => (
	<div className="space-y-4">
		<div>
			<h3 className="font-bold text-2xl text-white">{role.title}</h3>
			<h4 className="mt-1 font-semibold text-green-300 text-xl">
				{role.company}
			</h4>
			<div className="mt-2 flex flex-col sm:flex-row sm:gap-4">
				<p className="text-gray-400 text-sm">
					<span className="font-medium text-white">Location: </span>
					{role.location}
				</p>
				<p className="text-gray-400 text-sm">
					<span className="font-medium text-white">Industry: </span>
					{role.industry}
				</p>
			</div>
		</div>
		<p
			className={
				role.achievements
					? "text-gray-300 text-sm"
					: "mt-3 text-base text-gray-300 italic"
			}
		>
			{role.summary}
		</p>

		{role.achievements ? (
			<div className="space-y-3">
				<h5 className="font-semibold text-base text-white">
					Key Achievements & Impact:
				</h5>
				<ul className="space-y-3 text-gray-300 text-sm">
					{role.achievements.map((item) => (
						<li key={item.heading}>
							<strong className="text-green-400">{item.heading}</strong>{" "}
							{item.body}
						</li>
					))}
				</ul>
			</div>
		) : null}

		{role.skills ? (
			<div className="mt-4 rounded-lg border border-gray-700 bg-gray-800/50 p-4">
				<h5 className="mb-3 font-semibold text-base text-white">
					Technologies & Skills:
				</h5>
				<div className="grid grid-cols-2 gap-3 text-xs sm:grid-cols-3 sm:text-sm">
					{role.skills.map((item) => (
						<div key={item.heading}>
							<h6 className="font-medium text-green-400">{item.heading}</h6>
							<p className="text-gray-300">{item.detail}</p>
						</div>
					))}
				</div>
			</div>
		) : null}
	</div>
);

export const WorkExperienceView = () => {
	const timelineData = rolesNewestFirst().map((role) => ({
		title: role.dates,
		content: <RoleContent role={role} />,
	}));

	return (
		<section className="flex min-h-screen flex-col justify-center px-4 py-12 sm:py-16">
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
