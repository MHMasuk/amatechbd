import ServicesPage from "@/app/componenets/ServicesPage";

export const metadata = {
    title: 'Software Development Services - Web, Mobile & Custom Solutions | AmaTechBD',
    description: 'Comprehensive software development services in Bangladesh: web development, mobile apps, custom software, backend systems, and digital transformation solutions.',
    keywords: 'software development services, web development Bangladesh, mobile app development, custom software solutions, digital transformation',
    openGraph: {
        title: 'Software Development Services - Web, Mobile & Custom Solutions | AmaTechBD',
        description: 'Comprehensive software development services including web development, mobile apps, and custom solutions in Bangladesh.',
        url: 'https://amatechbd.com/services',
        images: ['/og-services.jpg'],
    },
};

const Services = () => {
    return(
        <ServicesPage />
    )
}

export default Services;