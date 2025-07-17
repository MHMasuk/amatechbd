import AboutPage from "@/app/about/page";

export const metadata = {
    title: 'About AmaTechBD - Software Development Company in Bangladesh',
    description: 'Learn about AmaTechBD, a leading software development company in Bangladesh. Our mission, team, and commitment to delivering innovative digital solutions.',
    keywords: ['about AmaTechBD', 'software company Bangladesh', 'technology team', 'company mission', 'Bangladesh tech company'],
    openGraph: {
        title: 'About AmaTechBD - Software Development Company in Bangladesh',
        description: 'Learn about AmaTechBD, a leading software development company in Bangladesh with expert team and innovative solutions.',
        url: 'https://amatechbd.com/about',
        images: ['/og-about.jpg'],
    },
    alternates: {
        canonical: 'https://amatechbd.com/about',
    },
};

const About = () => {
    return(
        <AboutPage />
    )};

export default About;