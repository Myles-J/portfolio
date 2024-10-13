import { ContactView } from "@/components/contact-view";
import { AboutView } from "@/components/about-view";
import { HomeView } from "@/components/home-view";
import { ProjectsView } from "@/components/projects-view";
import { WorkExperienceView } from "@/components/work-experience-view";
const page = () => {
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

export default page;
