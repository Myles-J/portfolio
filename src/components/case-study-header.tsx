import { useRouter } from "next/navigation";
import React from "react";
import { caseStudyLinks } from "src/utils/constants";
import Link from 'next/link'

const CaseStudyHeader = () => {
	const router = useRouter();

	return (
		<header className="caseStudyHeader">
			{caseStudyLinks.map(({ name, href }) => (
				<Link href={href} className="m-1 link" key={name}>
					{name}
				</Link>
			))}
		</header>
	);
};

export default CaseStudyHeader;
