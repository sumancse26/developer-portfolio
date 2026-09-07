import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'E-learning Platform',
        description:
            'A production-grade e-learning platform engineered for a corporate training provider, delivering multilingual and multi-currency course experiences. I built a responsive, accessible frontend with Next.js, TypeScript, and Tailwind CSS, and developed a robust NestJS API backed by PostgreSQL with transactional email notifications. The solution was containerized and deployed to a live server with CI/CD for reliable, scalable delivery.',
        tools: ['NextJS', 'Tailwind CSS', 'Google Maps', 'TypeScript', 'PostgreSQL', 'Vercel', 'Gmail Passkey'],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://cyberneticsitbd.com/',
        liveLink: 'https://cyberneticsitbd.com/',
        image: crefin
    },
    {
        id: 2,
        name: 'Multi-vendor E-commerce App',
        //description for ecommerce app
        description:
            'A scalable multi-vendor marketplace enabling numerous sellers to list and manage products from a unified storefront. I designed and built the customer-facing application with Next.js, TypeScript, Tailwind CSS, and Google Maps integration, supporting localization across languages and currencies. The backend leverages a Next.js API with Prisma ORM on PostgreSQL, Nodemailer for transactional messaging, and Vercel for zero-downtime deployments.',
        tools: ['NextJS', 'Tailwind CSS', 'Google Maps', 'TypeScript', 'PostgreSQL', 'Vercel', 'Gmail Passkey'],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://discountshop.pagoole.com/',
        liveLink: 'https://discountshop.pagoole.com/',
        image: crefin
    },
    {
        id: 3,
        name: 'Inventory Management System',
        description:
            'A comprehensive inventory management system that streamlines stock tracking, order processing, and reporting for growing businesses. I developed a performant, maintainable frontend using React, Next.js, Tailwind CSS, and SCSS, with an internationalized interface supporting multiple languages and currencies. The backend is powered by a Next.js API and PostgreSQL with Nodemailer notifications, deployed seamlessly to Vercel.',
        tools: ['NextJS', 'Tailwind CSS', 'TypeScript', 'PostgreSQL', 'Vercel', 'Gmail Passkey'],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://emojud-inventory.vercel.app/',
        liveLink: 'https://emojud-inventory.vercel.app/',
        credentials: {
            username: 'suman',
            password: '12345678'
        },
        image: crefin
    },
    {
        id: 3,
        name: 'Real Time Trading Terminal',
        description:
            'Trading Terminal is a browser-based cryptocurrency derivatives platform that provides live market monitoring, interactive charts, order-book analysis, simulated trading, portfolio tracking, and risk analytics in one professional workspace.',
        tools: ['React', 'TypeScript', 'Vite', 'Zustand', 'TanStack Query', 'Web Socket'],
        role: 'Front End Developer',
        code: '',
        demo: 'https://real-time-trading-terminal.netlify.app/',
        liveLink: 'https://real-time-trading-terminal.netlify.app/',

        image: crefin
    }
];
