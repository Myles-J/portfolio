"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimationWrapperProps {
	children: React.ReactNode;
	className?: string;
	animation?:
		| "fadeIn"
		| "slideUp"
		| "slideDown"
		| "scaleIn"
		| "slideInLeft"
		| "slideInRight";
	delay?: number;
	duration?: number;
	stagger?: boolean;
	staggerDelay?: number;
}

const animations = {
	fadeIn: {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
	},
	slideUp: {
		initial: { opacity: 0, y: 30 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -30 },
	},
	slideDown: {
		initial: { opacity: 0, y: -30 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 30 },
	},
	scaleIn: {
		initial: { opacity: 0, scale: 0.9 },
		animate: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.9 },
	},
	slideInLeft: {
		initial: { opacity: 0, x: -30 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -30 },
	},
	slideInRight: {
		initial: { opacity: 0, x: 30 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: 30 },
	},
};

export const AnimationWrapper = ({
	children,
	className = "",
	animation = "fadeIn",
	delay = 0,
	duration = 0.6,
}: AnimationWrapperProps) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const selectedAnimation = animations[animation];

	if (!isMounted) {
		// Return children without animation during SSR
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			className={className}
			initial={selectedAnimation.initial}
			animate={selectedAnimation.animate}
			exit={selectedAnimation.exit}
			transition={{
				duration,
				delay,
				ease: "easeOut",
			}}
		>
			{children}
		</motion.div>
	);
};

interface StaggerWrapperProps {
	children: React.ReactNode;
	className?: string;
	animation?:
		| "fadeIn"
		| "slideUp"
		| "slideDown"
		| "scaleIn"
		| "slideInLeft"
		| "slideInRight";
	staggerDelay?: number;
	duration?: number;
}

export const StaggerWrapper = ({
	children,
	className = "",
	staggerDelay = 0.1,
}: StaggerWrapperProps) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		// Return children without animation during SSR
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			className={className}
			initial="hidden"
			animate="visible"
			variants={{
				hidden: { opacity: 0 },
				visible: {
					opacity: 1,
					transition: {
						staggerChildren: staggerDelay,
						delayChildren: 0.1,
					},
				},
			}}
		>
			<AnimatePresence>{children}</AnimatePresence>
		</motion.div>
	);
};

interface StaggerItemProps {
	children: React.ReactNode;
	animation?:
		| "fadeIn"
		| "slideUp"
		| "slideDown"
		| "scaleIn"
		| "slideInLeft"
		| "slideInRight";
	duration?: number;
}

export const StaggerItem = ({
	children,
	animation = "fadeIn",
	duration = 0.6,
}: StaggerItemProps) => {
	const selectedAnimation = animations[animation];

	return (
		<motion.div
			variants={{
				hidden: selectedAnimation.initial,
				visible: {
					...selectedAnimation.animate,
					transition: {
						duration,
						ease: "easeOut",
					},
				},
			}}
		>
			{children}
		</motion.div>
	);
};

// Intersection Observer wrapper for scroll-triggered animations
interface ScrollAnimationWrapperProps {
	children: React.ReactNode;
	className?: string;
	animation?:
		| "fadeIn"
		| "slideUp"
		| "slideDown"
		| "scaleIn"
		| "slideInLeft"
		| "slideInRight";
	threshold?: number;
	duration?: number;
}

export const ScrollAnimationWrapper = ({
	children,
	className = "",
	animation = "fadeIn",
	threshold = 0.1,
	duration = 0.6,
}: ScrollAnimationWrapperProps) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const selectedAnimation = animations[animation];

	if (!isMounted) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			className={className}
			initial={selectedAnimation.initial}
			whileInView={selectedAnimation.animate}
			viewport={{ once: true, threshold }}
			transition={{
				duration,
				ease: "easeOut",
			}}
		>
			{children}
		</motion.div>
	);
};
