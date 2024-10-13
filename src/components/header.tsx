"use client";
import Image from "next/image";

import whiteLogo from "public/MJ-Logo-Design-01-White-BG.png";
import blackLogo from "public/MJ-Logo-Design-01.svg";
import { ThemeToggle } from "src/components/theme-toggle";
import Link from "next/link";
import { useTheme } from "next-themes";
import { links } from "@/utils/constants";
import { MobileNav } from "./mobile-nav";

const MainNav = () => {
	const { theme } = useTheme();
	return (
		<nav className="hidden md:flex justify-between items-center">
			<Image
				className="navbar-brand"
				src={theme === "light" ? blackLogo : whiteLogo}
				width={50}
				height={50}
				alt="Personal logo"
			/>

			<ul className="flex space-x-4 items-center" id="navbar-nav">
				{links.map(({ name, href }) => (
					<li className="nav-item" key={name}>
						<Link className="nav-link" href={href}>
							{name}
						</Link>
					</li>
				))}
			</ul>

			<ThemeToggle />
		</nav>
	);
};

export const Header = () => {
	return (
		<header
			id="page-header"
			className="sticky top-0 z-50 bg-blue-500 h-10 md:h-14 flex items-center px-4"
		>
			<div className="flex h-14 items-center px-4">
				<MainNav />
				<MobileNav />
			</div>
		</header>
	);
};

export default Header;
