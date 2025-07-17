// // app/layout.js
// import { Inter } from 'next/font/google';
// import './globals.css';
// import Navbar from '@/app/componenets/Navbar'
// import Footer from '@/app/componenets/Footer'
//
// const inter = Inter({ subsets: ['latin'] });
//
// export const metadata = {
//     title: {
//         default: 'AmaTechBD - Leading Software Development Company in Bangladesh',
//         template: '%s | AmaTechBD'
//     },
//     description: 'AmaTechBD is a leading software development company in Bangladesh specializing in web development, mobile apps, backend systems, and digital solutions. Transform your business with our innovative technology solutions.',
//     keywords: ['software development', 'web development', 'mobile app development', 'Bangladesh', 'Dhaka', 'custom software', 'digital solutions', 'technology company', 'AmaTechBD'],
//     authors: [{ name: 'AmaTechBD Team' }],
//     creator: 'AmaTechBD',
//     publisher: 'AmaTechBD',
//     formatDetection: {
//         email: false,
//         address: false,
//         telephone: false,
//     },
//     metadataBase: new URL('https://amatechbd.com'),
//     alternates: {
//         canonical: '/',
//     },
//     openGraph: {
//         title: 'AmaTechBD - Leading Software Development Company in Bangladesh',
//         description: 'Transform your business with innovative software solutions. We specialize in web development, mobile apps, and custom software development in Bangladesh.',
//         url: 'https://amatechbd.com',
//         siteName: 'AmaTechBD',
//         images: [
//             {
//                 url: '/og-image.jpg',
//                 width: 1200,
//                 height: 630,
//                 alt: 'AmaTechBD - Software Development Company',
//             },
//         ],
//         locale: 'en_US',
//         type: 'website',
//     },
//     twitter: {
//         card: 'summary_large_image',
//         title: 'AmaTechBD - Leading Software Development Company in Bangladesh',
//         description: 'Transform your business with innovative software solutions. We specialize in web development, mobile apps, and custom software development.',
//         images: ['/og-image.jpg'],
//         creator: '@amatechbd',
//     },
//     robots: {
//         index: true,
//         follow: true,
//         googleBot: {
//             index: true,
//             follow: true,
//             'max-video-preview': -1,
//             'max-image-preview': 'large',
//             'max-snippet': -1,
//         },
//     },
//     verification: {
//         google: 'your-google-verification-code',
//         yandex: 'your-yandex-verification-code',
//         yahoo: 'your-yahoo-verification-code',
//     },
// };
//
// export default function RootLayout({ children }) {
//     return (
//         <html lang="en">
//         <head>
//             {/* Structured Data for Organization */}
//             <script
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{
//                     __html: JSON.stringify({
//                         "@context": "https://schema.org",
//                         "@type": "Organization",
//                         "name": "AmaTechBD",
//                         "alternateName": "AmaTech Bangladesh",
//                         "url": "https://amatechbd.com",
//                         "logo": "https://amatechbd.com/logo.png",
//                         "contactPoint": {
//                             "@type": "ContactPoint",
//                             "telephone": "+880-1XXX-XXXXXX",
//                             "contactType": "customer service",
//                             "areaServed": "BD",
//                             "availableLanguage": ["en", "bn"]
//                         },
//                         "address": {
//                             "@type": "PostalAddress",
//                             "streetAddress": "Your Street Address",
//                             "addressLocality": "Dhaka",
//                             "addressRegion": "Dhaka Division",
//                             "postalCode": "1000",
//                             "addressCountry": "BD"
//                         },
//                         "sameAs": [
//                             "https://www.facebook.com/amatechbd",
//                             "https://www.linkedin.com/company/amatechbd",
//                             "https://twitter.com/amatechbd"
//                         ],
//                         "foundingDate": "2020",
//                         "founders": [
//                             {
//                                 "@type": "Person",
//                                 "name": "Founder Name"
//                             }
//                         ],
//                         "numberOfEmployees": "50-100",
//                         "description": "AmaTechBD is a leading software development company in Bangladesh specializing in web development, mobile apps, backend systems, and digital solutions.",
//                         "services": [
//                             "Web Development",
//                             "Mobile App Development",
//                             "Backend Systems",
//                             "Custom Software Development",
//                             "Digital Solutions"
//                         ]
//                     })
//                 }}
//             />
//
//             {/* Structured Data for LocalBusiness */}
//             {/*<script*/}
//             {/*    type="application/ld+json"*/}
//             {/*    dangerouslySetInnerHTML={{*/}
//             {/*        __html: JSON.stringify({*/}
//             {/*            "@context": "https://schema.org",*/}
//             {/*            "@type": "LocalBusiness",*/}
//             {/*            "name": "AmaTechBD",*/}
//             {/*            "image": "https://amatechbd.com/logo.png",*/}
//             {/*            "address": {*/}
//             {/*                "@type": "PostalAddress",*/}
//             {/*                "streetAddress": "Your Street Address",*/}
//             {/*                "addressLocality": "Dhaka",*/}
//             {/*                "addressRegion": "Dhaka Division",*/}
//             {/*                "postalCode": "1000",*/}
//             {/*                "addressCountry": "BD"*/}
//             {/*            },*/}
//             {/*            "geo": {*/}
//             {/*                "@type": "GeoCoordinates",*/}
//             {/*                "latitude": "23.8103",*/}
//             {/*                "longitude": "90.4125"*/}
//             {/*            },*/}
//             {/*            "telephone": "+880-1XXX-XXXXXX",*/}
//             {/*            "email": "hello@amatechbd.com",*/}
//             {/*            "url": "https://amatechbd.com",*/}
//             {/*            "openingHours": "Mo-Fr 09:00-18:00",*/}
//             {/*            "priceRange": "$",*/}
//             {/*            "aggregateRating": {*/}
//             {/*                "@type": "AggregateRating",*/}
//             {/*                "ratingValue": "4.9",*/}
//             {/*                "reviewCount": "50"*/}
//             {/*            }*/}
//             {/*        })*/}
//             {/*    }}*/}
//             {/*/>*/}
//
//             {/* Additional SEO Meta Tags */}
//             <meta name="theme-color" content="#2563eb" />
//             <meta name="msapplication-TileColor" content="#2563eb" />
//             <meta name="apple-mobile-web-app-capable" content="yes" />
//             <meta name="apple-mobile-web-app-status-bar-style" content="default" />
//             <meta name="format-detection" content="telephone=no" />
//             <meta name="mobile-web-app-capable" content="yes" />
//
//             {/* Favicon */}
//             <link rel="icon" href="/app/favicon.ico" />
//             <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//             <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//             <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
//             <link rel="manifest" href="/site.webmanifest" />
//
//             {/* Preconnect to external domains */}
//             <link rel="preconnect" href="https://fonts.googleapis.com" />
//             <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//
//             {/* Canonical URL */}
//             <link rel="canonical" href="https://amatechbd.com" />
//         </head>
//         <body className={inter.className}>
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//         </body>
//         </html>
//     );
// }

// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/componenets/Navbar'
import Footer from '@/app/componenets/Footer'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: {
        default: 'AmaTechBD - Leading Software Development Company in Bangladesh',
        template: '%s | AmaTechBD'
    },
    description: 'AmaTechBD is a leading software development company in Bangladesh specializing in web development, mobile apps, backend systems, and digital solutions. Transform your business with our innovative technology solutions.',
    keywords: ['software development', 'web development', 'mobile app development', 'Bangladesh', 'Dhaka', 'custom software', 'digital solutions', 'technology company', 'AmaTechBD'],
    authors: [{ name: 'AmaTechBD Team' }],
    creator: 'AmaTechBD',
    publisher: 'AmaTechBD',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://amatechbd.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'AmaTechBD - Leading Software Development Company in Bangladesh',
        description: 'Transform your business with innovative software solutions. We specialize in web development, mobile apps, and custom software development in Bangladesh.',
        url: 'https://amatechbd.com',
        siteName: 'AmaTechBD',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'AmaTechBD - Software Development Company',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AmaTechBD - Leading Software Development Company in Bangladesh',
        description: 'Transform your business with innovative software solutions. We specialize in web development, mobile apps, and custom software development.',
        images: ['/og-image.jpg'],
        creator: '@amatechbd',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code',
        yahoo: 'your-yahoo-verification-code',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            {/* Structured Data for Organization */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "AmaTechBD",
                        "alternateName": "AmaTech Bangladesh",
                        "url": "https://amatechbd.com",
                        "logo": "https://amatechbd.com/logo.png",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+880-1XXX-XXXXXX",
                            "contactType": "customer service",
                            "areaServed": "BD",
                            "availableLanguage": ["en", "bn"]
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Your Street Address",
                            "addressLocality": "Dhaka",
                            "addressRegion": "Dhaka Division",
                            "postalCode": "1000",
                            "addressCountry": "BD"
                        },
                        "sameAs": [
                            "https://www.facebook.com/amatechbd",
                            "https://www.linkedin.com/company/amatechbd",
                            "https://twitter.com/amatechbd"
                        ],
                        "foundingDate": "2020",
                        "founders": [
                            {
                                "@type": "Person",
                                "name": "Founder Name"
                            }
                        ],
                        "numberOfEmployees": "50-100",
                        "description": "AmaTechBD is a leading software development company in Bangladesh specializing in web development, mobile apps, backend systems, and digital solutions.",
                        "services": [
                            "Web Development",
                            "Mobile App Development",
                            "Backend Systems",
                            "Custom Software Development",
                            "Digital Solutions"
                        ]
                    })
                }}
            />

            {/* Additional SEO Meta Tags */}
            <meta name="theme-color" content="#0B1426" />
            <meta name="msapplication-TileColor" content="#0B1426" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />

            {/* Favicon */}
            <link rel="icon" href="/app/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />

            {/* Preconnect to external domains */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {/* Canonical URL */}
            <link rel="canonical" href="https://amatechbd.com" />
        </head>
        <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}