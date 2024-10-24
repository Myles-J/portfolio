import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children, ...props }) => (
			<h1 className="text-xl font-bold tracking-tight" {...props}>
				{children}
			</h1>
		),
		h2: ({ children, ...props }) => (
			<h2 className="text-lg font-semibold" {...props}>
				{children}
			</h2>
		),
		...components,
	};
}
