"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as React from "react";

import { cn } from "@/lib/utils";

function Accordion({
	onKeyDown,
	...props
}: AccordionPrimitive.Root.Props<string>) {
	return (
		<AccordionPrimitive.Root
			{...props}
			onKeyDown={(event) => {
				onKeyDown?.(event);
				if (
					event.defaultPrevented ||
					!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)
				)
					return;
				// Base UI 1.8 removed arrow navigation; retain the existing Radix shortcuts.
				const triggers = Array.from(
					event.currentTarget.querySelectorAll<HTMLButtonElement>(
						"[data-slot=accordion-trigger]:not(:disabled):not([aria-disabled=true])",
					),
				);
				if (!(event.target instanceof HTMLButtonElement)) return;
				const index = triggers.indexOf(event.target);
				if (index === -1) return;
				event.preventDefault();
				const next =
					event.key === "Home"
						? 0
						: event.key === "End"
							? triggers.length - 1
							: (index +
									(event.key === "ArrowDown" ? 1 : -1) +
									triggers.length) %
								triggers.length;
				triggers[next]?.focus();
			}}
		/>
	);
}

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={(state) =>
			cn(
				"border-b",
				typeof className === "function" ? className(state) : className,
			)
		}
		{...props}
	/>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			data-slot="accordion-trigger"
			className={(state) =>
				cn(
					"flex flex-1 items-center justify-between py-4 font-medium text-sm transition-all hover:underline [&[data-panel-open]>svg]:rotate-180",
					typeof className === "function" ? className(state) : className,
				)
			}
			{...props}
		>
			{children}
			<ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Panel>,
	Omit<
		React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Panel>,
		"className"
	> & { className?: string }
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Panel
		ref={ref}
		className="h-[var(--accordion-panel-height)] overflow-hidden text-sm transition-[height] duration-200 data-ending-style:h-0 data-starting-style:h-0"
		{...props}
	>
		<div className={cn("pt-0 pb-4", className)}>{children}</div>
	</AccordionPrimitive.Panel>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
