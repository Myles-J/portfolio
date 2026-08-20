"use client";

import { useMemo, useState } from "react";
import {
	AnimationWrapper,
	StaggerItem,
	StaggerWrapper,
} from "@/components/animation-wrapper";
import { Button } from "@/components/ui/button";
import { categories, skills } from "../constants";

export const SkillsView = () => {
	const [selectedCategory, setSelectedCategory] = useState<
		keyof typeof categories | "all"
	>("all");

	// ✅ UseMemo prevents unnecessary recalculations
	const filteredSkills = useMemo(
		() =>
			selectedCategory === "all"
				? skills
				: skills.filter((skill) => skill.category === selectedCategory),
		[selectedCategory],
	);

	const baseButtonClasses =
		"rounded-full px-3 py-2 font-medium text-xs sm:px-4 sm:text-sm transition-all duration-200";
	const inactiveClasses =
		"bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-100";

	return (
		<section className="flex flex-col justify-center px-4 py-12 sm:py-16">
			<AnimationWrapper
				className="mx-auto w-full max-w-7xl px-4 py-8 sm:py-12"
				animation="fadeIn"
				duration={0.3}
			>
				<div className="mb-8 text-center sm:mb-12">
					<h2 className="text-center font-bold text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
						Technical Skills
					</h2>
					<p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
						A comprehensive overview of my technical expertise across various
						domains
					</p>
				</div>

				{/* --- Category Filter --- */}
				<div className="mb-6 flex flex-wrap justify-center gap-2 sm:mb-8">
					<button
						type="button"
						onClick={() => setSelectedCategory("all")}
						className={`${baseButtonClasses} ${
							selectedCategory === "all"
								? "bg-linear-to-r from-gray-100 to-gray-200 text-gray-900 shadow-lg"
								: inactiveClasses
						}`}
					>
						All Skills
					</button>
					{Object.entries(categories).map(([key, { name, color }]) => (
						<Button
							key={key}
							type="button"
							onClick={() =>
								setSelectedCategory(key as keyof typeof categories)
							}
							className={`${baseButtonClasses} ${
								selectedCategory === key
									? `bg-linear-to-r ${color} text-white shadow-lg`
									: inactiveClasses
							}`}
						>
							{name}
						</Button>
					))}
				</div>

				{/* --- Skills Grid --- */}
				<StaggerWrapper
					className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
					staggerDelay={0.08}
				>
					{filteredSkills.map(({ name, icon: Icon, category, experience }) => (
						<StaggerItem key={name} animation="scaleIn" duration={0.6}>
							<div className="group relative rounded-xl border border-gray-700/50 bg-linear-to-br from-gray-900/70 via-gray-900/60 to-black/80 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-gray-800/70 hover:shadow-xl sm:p-6">
								<div className="mb-3 flex items-center space-x-3 sm:mb-4">
									<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-700/50 transition-colors duration-200 group-hover:bg-gray-600/50 sm:h-10 sm:w-10">
										<Icon className="h-5 w-5 text-gray-300 transition-colors duration-200 group-hover:text-white sm:h-6 sm:w-6" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-100 text-sm transition-colors duration-200 group-hover:text-white sm:text-base">
											{name}
										</h3>
										<p className="text-gray-400 text-xs capitalize">
											{category}
										</p>
									</div>
								</div>

								<p className="text-gray-300 text-xs leading-relaxed sm:text-sm">
									{experience}
								</p>

								<div className="absolute inset-0 rounded-xl bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
							</div>
						</StaggerItem>
					))}
				</StaggerWrapper>
			</AnimationWrapper>
		</section>
	);
};
