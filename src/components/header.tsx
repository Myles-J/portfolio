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
		<nav className="hidden md:flex justify-between items-center w-full">
			<Link href={"/"}>
				<Image
					className="navbar-brand"
					src={theme === "light" ? blackLogo : whiteLogo}
					width={35}
					height={35}
					alt="Personal logo"
				/>
			</Link>

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
			className="sticky top-0 z-10 w-full mx-auto px-4 md:px-6 lg:px-8 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
		>
			<div className="flex h-12 items-center px-4">
				<MainNav />
				<MobileNav />
			</div>
		</header>
	);
};

export default Header;
