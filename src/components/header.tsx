"use client";
import { Menu as MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import whiteLogo from "public/MJ-Logo-Design-01-White-BG.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { links } from "@/utils/constants";

const MobileNav = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="flex items-center justify-end md:hidden">
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<Button
						variant="ghost"
						size="icon"
						className="text-white hover:text-green-400"
					>
						<MenuIcon className="h-5 w-5" />
					</Button>
				</SheetTrigger>
				<SheetContent
					side="left"
					className="border-gray-800 bg-black/95 backdrop-blur-sm"
				>
					<SheetHeader className="pb-6">
						<SheetTitle className="flex items-center space-x-3">
							<Image
								src={whiteLogo}
								width={35}
								height={35}
								alt="Personal logo"
							/>
							<span className="text-white">Myles Jefferson</span>
						</SheetTitle>
						<SheetDescription className="text-gray-400">
							Full-Stack Developer
						</SheetDescription>
					</SheetHeader>
					<div className="flex flex-col space-y-2">
						{links.map(({ name, href }) => (
							<Button
								key={name}
								variant="ghost"
								onClick={() => {
									setOpen(false);
								}}
								asChild
								className="justify-start text-left text-gray-300 hover:bg-gray-800 hover:text-green-400"
							>
								<Link href={href}>{name}</Link>
							</Button>
						))}
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};

const MainNav = () => {
	return (
		<nav className="hidden w-full items-center justify-between md:flex">
			<Link href={"/"}>
				<Image
					className="navbar-brand"
					src={whiteLogo}
					width={35}
					height={35}
					alt="Personal logo"
				/>
			</Link>

			<ul className="flex items-center space-x-8" id="navbar-nav">
				{links.map(({ name, href }) => (
					<li className="nav-item" key={name}>
						<Link
							className="text-gray-300 transition-all duration-200 ease-in-out hover:text-green-400 hover:underline"
							href={href}
						>
							{name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export const Header = () => {
	return (
		<header
			id="page-header"
			className="sticky top-0 z-50 mx-auto w-full border-gray-800 border-b bg-black/95 backdrop-blur-sm supports-backdrop-filter:bg-black/60"
		>
			<div className="flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
				<MainNav />
				<MobileNav />
			</div>
		</header>
	);
};
