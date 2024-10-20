import { ContactView } from "@/features/contact/components/contact-view";
import { AboutView } from "@/features/about/components/about-view";
import { HomeView } from "@/features/home/components/home-view";
import { ProjectsView } from "@/features/projects/components/projects-view";
import { WorkExperienceView } from "@/features/work-experience/components/work-experience-view";
export default function IndexPage () {
	return (
		<>
			<HomeView />
			<WorkExperienceView />
			<ProjectsView />
			<AboutView />
			<ContactView />
		</>
	);
};

