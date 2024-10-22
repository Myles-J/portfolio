import { ContactView } from "@/features/contact/components/contact-view";
import { AboutView } from "@/features/about/components/about-view";
import { HomeView } from "@/features/home/components/home-view";
import { ProjectsView } from "@/features/projects/components/projects-view";
import { WorkExperienceView } from "@/features/work-experience/components/work-experience-view";
export default function IndexPage() {
	return (
		<div className="flex flex-col space-y-10">
			<HomeView />
			<WorkExperienceView />
			<ProjectsView />
			<AboutView />
			<ContactView />
		</div>
	);
}
