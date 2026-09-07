"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const labelVariants = cva(
	"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = React.forwardRef<
	HTMLLabelElement,
	React.ComponentPropsWithoutRef<"label"> & VariantProps<typeof labelVariants>
>(({ className, htmlFor, children, ...props }, ref) => (
	<label
		ref={ref}
		htmlFor={htmlFor}
		className={cn(labelVariants(), className)}
		{...props}
	>
		{children}
	</label>
));
Label.displayName = "Label";

export { Label };
