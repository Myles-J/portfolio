"use client";
import React, { useState } from "react";
import Image from "next/image";

import whiteLogo from "public/MJ-Logo-Design-01-White-BG.png";
import blackLogo from "public/MJ-Logo-Design-01.svg";
import { ThemeToggle } from "src/components/theme-toggle";
import Link from "next/link";
import { useTheme } from "next-themes";
import { links } from "@/utils/constants";

const MainNav = () => {
	const { theme } = useTheme();
	return (
		<nav className="hidden md:flex justify-content-between items-center w-full">
			<>
				<Image
					className="navbar-brand"
					src={theme === "light" ? blackLogo : whiteLogo}
					width={50}
					height={50}
					alt="Personal logo"
				/>
				<ThemeToggle />

				<ul className="navbar-nav" id="navbar-nav">
					{links.map(({ name, href }) => (
						<li className="nav-item" key={name}>
							<Link className="nav-link" href={href}>
								{name}
							</Link>
						</li>
					))}
				</ul>
			</>
		</nav>
	);
};

const MobileNav = () => {
	const { theme } = useTheme();
	return (
		<nav className="flex justify-content-between items-center w-full">
			<>
				<Image
					className="navbar-brand"
					src={theme === "light" ? blackLogo : whiteLogo}
					width={50}
					height={50}
					alt="Personal logo"
				/>
				<ThemeToggle />
			</>
		</nav>
	);
};

export const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const handleNavCollapse = () => setIsNavOpen(!isNavOpen);
	const { theme } = useTheme();

	return (
		<header id="page-header" className="sticky top-0 z-50 bg-blue-500">
			<nav className="flex justify-content-between items-center w-full">
				<>
					<Image
						className="navbar-brand"
						src={theme === "light" ? blackLogo : whiteLogo}
						width={50}
						height={50}
						alt="Personal logo"
					/>
					<ThemeToggle />

					<ul className="navbar-nav" id="navbar-nav">
						{links.map(({ name, href }) => (
							<li className="nav-item" key={name}>
								<Link
									className="nav-link"
									href={href}
									onClick={handleNavCollapse}
								>
									{name}
								</Link>
							</li>
						))}
					</ul>
				</>
			</nav>
		</header>
	);
};

export default Header;
