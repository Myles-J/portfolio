"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TimelineEntry {
	title: string;
	content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		const updateHeight = () => {
			if (ref.current) {
				const rect = ref.current.getBoundingClientRect();
				setHeight(rect.height);
			}
		};

		updateHeight();
		window.addEventListener("resize", updateHeight);

		return () => window.removeEventListener("resize", updateHeight);
	}, []);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

	return (
		<div
			className="w-full bg-white font-sans md:px-10 dark:bg-neutral-950"
			ref={containerRef}
		>
			<div ref={ref} className="relative mx-auto max-w-7xl pb-20">
				{data.map((item, index) => (
					<div
						key={`timeline-${index}-${item.title}`}
						className="flex justify-start pt-10 md:gap-10 md:pt-40"
					>
						<div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
							<div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white md:left-3 dark:bg-black">
								<div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
							</div>
							<h3 className="hidden font-bold text-neutral-500 text-xl md:block md:pl-20 md:text-5xl dark:text-neutral-500">
								{item.title}
							</h3>
						</div>

						<div className="relative w-full pr-4 pl-20 md:pl-4">
							<h3 className="mb-4 block text-left font-bold text-2xl text-neutral-500 md:hidden dark:text-neutral-500">
								{item.title}
							</h3>
							{item.content}{" "}
						</div>
					</div>
				))}
				<div
					style={{
						height: `${height}px`,
					}}
					className="absolute top-0 left-8 w-[2px] overflow-hidden md:left-8"
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-b from-purple-500 via-blue-500 to-transparent"
					/>
				</div>
			</div>
		</div>
	);
};
