"use client";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Backdrop>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Backdrop>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Backdrop
		className={(state) =>
			cn(
				"fixed inset-0 z-50 bg-black/80 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0",
				typeof className === "function" ? className(state) : className,
			)
		}
		{...props}
		ref={ref}
	/>
));
SheetOverlay.displayName = "SheetOverlay";

const sheetVariants = cva(
	"fixed z-50 gap-4 bg-background p-6 shadow-lg transition-transform duration-500 ease-in-out data-ending-style:duration-300",
	{
		variants: {
			side: {
				top: "inset-x-0 top-0 border-b data-ending-style:-translate-y-full data-starting-style:-translate-y-full",
				bottom:
					"inset-x-0 bottom-0 border-t data-ending-style:translate-y-full data-starting-style:translate-y-full",
				left: "inset-y-0 left-0 h-full w-3/4 border-r data-ending-style:-translate-x-full data-starting-style:-translate-x-full sm:max-w-sm",
				right:
					"inset-y-0 right-0 h-full w-3/4 border-l data-ending-style:translate-x-full data-starting-style:translate-x-full sm:max-w-sm",
			},
		},
		defaultVariants: {
			side: "right",
		},
	},
);

interface SheetContentProps
	extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Popup>,
		VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Popup>,
	SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
	<SheetPortal>
		<SheetOverlay />
		<SheetPrimitive.Popup
			ref={ref}
			className={(state) =>
				cn(
					sheetVariants({ side }),
					typeof className === "function" ? className(state) : className,
				)
			}
			{...props}
		>
			<SheetPrimitive.Close className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
				<Cross2Icon className="h-4 w-4" />
				<span className="sr-only">Close</span>
			</SheetPrimitive.Close>
			{children}
		</SheetPrimitive.Popup>
	</SheetPortal>
));
SheetContent.displayName = "SheetContent";

const SheetHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"flex flex-col space-y-2 text-center sm:text-left",
			className,
		)}
		{...props}
	/>
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
			className,
		)}
		{...props}
	/>
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Title
		ref={ref}
		className={(state) =>
			cn(
				"font-semibold text-foreground text-lg",
				typeof className === "function" ? className(state) : className,
			)
		}
		{...props}
	/>
));
SheetTitle.displayName = "SheetTitle";

const SheetDescription = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Description
		ref={ref}
		className={(state) =>
			cn(
				"text-muted-foreground text-sm",
				typeof className === "function" ? className(state) : className,
			)
		}
		{...props}
	/>
));
SheetDescription.displayName = "SheetDescription";

export {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetOverlay,
	SheetPortal,
	SheetTitle,
	SheetTrigger,
};
