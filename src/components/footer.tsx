"use client";
import React from "react";
import { socialLinkSVGs } from "src/utils/constants";
import { Heart } from "lucide-react";
import { useTheme } from "next-themes";

export const Footer = () => {
	const { theme } = useTheme();
	return (
		<footer id="footer">
			<h5 className="footer-h4">Find me on</h5>
			<div className="social-links">
				{socialLinkSVGs.map(
					({ name, link, xmlns, width, height, viewBox, x, y, d }) => (
						<a href={link} target="_blank" key={name} rel="noreferrer">
							<svg
								className={`${name}-logo`}
								xmlns={xmlns}
								x={x}
								y={y}
								width={width}
								height={height}
								viewBox={viewBox}
								fill={theme === "Light" ? "#000" : "#fff"}
							>
								<path d={d} />
							</svg>
						</a>
					),
				)}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1770 1000">
					<circle cx="500" cy="500" r="500" />
					<ellipse ry="475" rx="250" cy="501" cx="1296" />
					<ellipse cx="1682" cy="502" rx="88" ry="424" />
				</svg>
			</div>
			<small className="flex items-center justify-center gap-1">
				Built with
				<Heart className="animate-pulse size-4" />
				by Myles Jefferson
			</small>
		</footer>
	);
};
