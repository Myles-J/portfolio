"use client";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type ProjectLinksProps = {
	previousProject: string;
	githubLink: string;
	liveLink?: string;
	nextProject: string;
};

export const ProjectLinks = ({
	previousProject,
	githubLink,
	liveLink,
	nextProject,
}: ProjectLinksProps) => {
	return (
		<div className="flex flex-wrap items-center justify-center gap-1">
			<Button asChild>
				<Link
					className="link-btn col-sm m-1"
					href={`/case-study/${previousProject}`}
				>
					<ArrowLeft className="ml-1 size-4" /> Previous Project
				</Link>
			</Button>
			<Button asChild>
				<Link
					className="link-btn col-sm m-1"
					target="_blank"
					rel="noreferrer"
					href={githubLink}
				>
					View Code on GitHub
				</Link>
			</Button>
			{liveLink ? (
				<Button asChild>
					<Link
						className="link-btn col-sm m-1"
						target="_blank"
						rel="noreferrer"
						href={liveLink}
					>
						View Live <ExternalLink className="mr-1 size-4" />
					</Link>
				</Button>
			) : null}
			<Button asChild>
				<Link
					className="link-btn col-sm m-1"
					href={`/case-study/${nextProject}`}
				>
					Next Project <ArrowLeft className="mr-1 size-4 rotate-180" />
				</Link>
			</Button>
		</div>
	);
};
