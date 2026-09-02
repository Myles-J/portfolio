import { AboutView } from "@/features/about/components/about-view";
import { ContactView } from "@/features/contact/components/contact-view";
import { HomeView } from "@/features/home/components/home-view";
import { ProjectsView } from "@/features/projects/components/projects-view";
import { SECTION } from "@/features/sections";
import { SkillsView } from "@/features/skills/components/skills-view";
import { WorkExperienceView } from "@/features/work-experience/components/work-experience-view";

export default function IndexPage() {
	return (
		<div className="flex flex-col pt-16">
			<section id={SECTION.home} className="min-h-screen">
				<HomeView />
			</section>

			<section
				id={SECTION.workExperience}
				className="min-h-screen bg-gray-900/30"
			>
				<WorkExperienceView />
			</section>

			<section id={SECTION.skills} className="min-h-screen">
				<SkillsView />
			</section>

			<section id={SECTION.projects} className="min-h-screen">
				<ProjectsView />
			</section>

			<section id={SECTION.about} className="min-h-screen bg-gray-900/30">
				<AboutView />
			</section>

			<section id={SECTION.contact} className="min-h-screen">
				<ContactView />
			</section>
		</div>
	);
}
