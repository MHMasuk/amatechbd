import ProjectsPage from "@/app/componenets/ProjectsPage";

export const metadata = {
    title: 'Software Development Projects & Portfolio | AmaTechBD Bangladesh',
    description: 'Explore AmaTechBD\'s successful software development projects including fintech, healthcare, e-commerce, and enterprise solutions in Bangladesh.',
    keywords: ['software projects', 'portfolio Bangladesh', 'fintech projects', 'healthcare apps', 'e-commerce development', 'enterprise solutions'],
    openGraph: {
        title: 'Software Development Projects & Portfolio | AmaTechBD Bangladesh',
        description: 'Explore our successful software development projects and portfolio showcasing innovative solutions across various industries.',
        url: 'https://amatechbd.com/projects',
        images: ['/og-projects.jpg'],
    },
    alternates: {
        canonical: 'https://amatechbd.com/projects',
    },
};

const Projects = () => {
    return (
        <ProjectsPage />
    )
}

export default Projects;