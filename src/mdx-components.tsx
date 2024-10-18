import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h2: ({ children, ...props }) => (
			<h2 className="text-lg font-semibold" {...props}>
				{children}
			</h2>
		),
		...components,
	};
}
