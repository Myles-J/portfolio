"use client";
// MobileNav.tsx
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon } from "lucide-react";
import { links } from "@/utils/constants";
import Link from "next/link";
export const MobileNav = () => {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			{/* This button will trigger open the mobile sheet menu */}
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="md:hidden">
					<MenuIcon />
				</Button>
			</SheetTrigger>

			<SheetContent side="left">
				<div className="flex flex-col items-start">
					{links.map(({ name, href }) => (
						<Button
							key={name}
							variant="link"
							onClick={() => {
								setOpen(false);
							}}
							asChild
						>
							<Link href={href}>{name}</Link>
						</Button>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
};
