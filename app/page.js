import HomePage from "@/app/componenets/HomePage/HomePage";

export const metadata = {
  title: 'AmaTechBD - Leading Software Development Company in Bangladesh',
  description: 'AmaTechBD is a premier software development company in Bangladesh offering web development, mobile apps, custom software solutions, and digital transformation services in Dhaka.',
  keywords: ['software development Bangladesh', 'web development Dhaka', 'mobile app development', 'custom software solutions', 'digital transformation Bangladesh', 'AmaTechBD'],
  openGraph: {
    title: 'AmaTechBD - Leading Software Development Company in Bangladesh',
    description: 'Transform your business with innovative software solutions. We specialize in web development, mobile apps, and custom software development in Bangladesh.',
    url: 'https://amatechbd.com',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'AmaTechBD - Software Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AmaTechBD - Leading Software Development Company in Bangladesh',
    description: 'Transform your business with innovative software solutions. We specialize in web development, mobile apps, and custom software development.',
    images: ['/og-home.jpg'],
  },
  alternates: {
    canonical: 'https://amatechbd.com',
  },
};

const App = () => {
  return (
      <HomePage />
  )
}

export default App;