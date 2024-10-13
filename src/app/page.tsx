import { ContactView } from "@/components/contact-view";
import { AboutView } from "@/components/about-view";
import { HomeView } from "@/components/home-view";
import { ProjectsView } from "@/components/projects-view";
const page = () => {
	return (
		<>
			<HomeView />
			<ProjectsView />
			<AboutView />
			<ContactView />
		</>
	);
};

export default page;
