"use client";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	type CaseStudySlug,
	caseStudyHref,
	caseStudyNeighbors,
} from "../catalog";

export const ProjectLinks = ({ slug }: { slug: CaseStudySlug }) => {
	const { previous, current, next } = caseStudyNeighbors(slug);

	return (
		<div className="flex flex-wrap items-center justify-center gap-1">
			<Button
				nativeButton={false}
				role="link"
				render={
					<Link
						className="link-btn col-sm m-1"
						href={caseStudyHref(previous.slug)}
					/>
				}
			>
				<ArrowLeft className="ml-1 size-4" /> Previous Project
			</Button>
			<Button
				nativeButton={false}
				role="link"
				render={
					<a
						className="link-btn col-sm m-1"
						target="_blank"
						rel="noreferrer"
						href={current.githubLink}
					/>
				}
			>
				View Code on GitHub
			</Button>
			{"liveLink" in current && current.liveLink ? (
				<Button
					nativeButton={false}
					role="link"
					render={
						<a
							className="link-btn col-sm m-1"
							target="_blank"
							rel="noreferrer"
							href={current.liveLink}
						/>
					}
				>
					View Live <ExternalLink className="mr-1 size-4" />
				</Button>
			) : null}
			<Button
				nativeButton={false}
				role="link"
				render={
					<Link
						className="link-btn col-sm m-1"
						href={caseStudyHref(next.slug)}
					/>
				}
			>
				Next Project <ArrowLeft className="mr-1 size-4 rotate-180" />
			</Button>
		</div>
	);
};
