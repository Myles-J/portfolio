import { AboutView } from "@/features/about/components/about-view";
import { ContactView } from "@/features/contact/components/contact-view";
import { HomeView } from "@/features/home/components/home-view";
import { ProjectsView } from "@/features/projects/components/projects-view";
import { SkillsView } from "@/features/skills/components/skills-view";
import { WorkExperienceView } from "@/features/work-experience/components/work-experience-view";

export default function IndexPage() {
	return (
		<div className="flex flex-col pt-16">
			{/* Hero Section */}
			<section className="min-h-screen">
				<HomeView />
			</section>

			{/* Work Experience Section */}
			<section className="min-h-screen bg-gray-900/30">
				<WorkExperienceView />
			</section>

			{/* Projects Section */}
			<section className="min-h-screen">
				<SkillsView />
			</section>

			{/* Projects Section */}
			<section className="min-h-screen">
				<ProjectsView />
			</section>

			{/* About Section */}
			<section className="min-h-screen bg-gray-900/30">
				<AboutView />
			</section>

			{/* Contact Section */}
			<section className="min-h-screen">
				<ContactView />
			</section>
		</div>
	);
}
