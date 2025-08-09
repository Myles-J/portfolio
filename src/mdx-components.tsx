import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children, ...props }) => (
			<h1 className="font-bold text-xl tracking-tight" {...props}>
				{children}
			</h1>
		),
		h2: ({ children, ...props }) => (
			<h2 className="font-semibold text-lg" {...props}>
				{children}
			</h2>
		),
		...components,
	};
}
