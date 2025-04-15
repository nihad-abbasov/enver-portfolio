"use client";

import { useEffect } from 'react';

export const SchemaMarkup = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Enver Nagiyev",
      "jobTitle": "Digital Marketing Specialist",
      "url": "https://enver-nagiyev.vercel.app",
      "sameAs": [
        "https://www.linkedin.com/in/enver-nagiyev",
        "https://www.facebook.com/enver.nagiyev",
        "https://www.instagram.com/enver.nagiyev"
      ],
      "description": "Digital marketing specialist helping brands grow through strategic campaigns, engaging content, and analytics-driven insights.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Baku",
        "addressCountry": "Azerbaijan"
      },
      "email": "enver.nagiyev@gmail.com",
      "telephone": "+994 10 384 12 16",
      "image": "https://enver-nagiyev.vercel.app/enver.jpeg",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance",
        "url": "https://enver-nagiyev.vercel.app"
      },
      "knowsAbout": [
        "SEO",
        "Content Creation",
        "Social Media Marketing",
        "Paid Advertising",
        "Analytics & Reporting",
        "Email Marketing"
      ],
      "offers": {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing Services",
          "description": "Comprehensive digital marketing solutions including SEO, content creation, social media marketing, paid advertising, analytics, and email marketing."
        }
      }
    });

    // Add script to document head
    document.head.appendChild(script);

    // Cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}; 