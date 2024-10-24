"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const ProjectLinks = ({
	previousProject,
	githubLink,
	liveLink,
	nextProject,
}: {
	previousProject: string;
	githubLink: string;
	liveLink?: string;
	nextProject: string;
}) => {
	return (
		<div className="flex items-center justify-center gap-1">
			<Button asChild>
				<Link
					className="m-1 link-btn col-sm"
					href={`/case-study/${previousProject}`}
				>
					<ArrowLeft className="size-4 ml-1" /> Previous Project
				</Link>
			</Button>
			<Button asChild>
				<Link
					className="m-1 link-btn col-sm"
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
						className="m-1 link-btn col-sm"
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
					className="m-1 link-btn col-sm"
					href={`/case-study/${nextProject}`}
				>
					Next Project <ArrowLeft className="size-4 mr-1 rotate-180" />
				</Link>
			</Button>
		</div>
	);
};
