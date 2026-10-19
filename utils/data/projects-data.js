import elearningImg from '/public/image/elearning.png';
import ecommerceImg from '/public/image/ecommerce.png';
import inventoryImg from '/public/image/inventory.png';
import tradingImg from '/public/image/trading.png';

export const projectsData = [
    {
        id: 1,
        name: 'Cybernetics IT Platform',
        category: 'Full Stack & Enterprise',
        tagline: 'Enterprise digital products & scalable training platform with automated service pipelines',
        description:
            'A production-grade digital platform engineered for Cybernetics IT, delivering comprehensive enterprise services and interactive learning modules. Built with Next.js, TypeScript, and NestJS backed by PostgreSQL, containerized with Docker and deployed with automated CI/CD.',
        highlights: [
            'Interactive modern web portal with responsive layouts, service catalog, and client pipelines',
            'NestJS & PostgreSQL RESTful API with automated transactional email and inquiry pipelines',
            'Docker containerized deployment with automated CI/CD for high availability and performance'
        ],
        tools: ['NextJS', 'TypeScript', 'NestJS', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'CI/CD'],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://cyberneticsitbd.com/',
        liveLink: 'https://cyberneticsitbd.com/',
        image: elearningImg
    },
    {
        id: 2,
        name: 'Pagoole Discount Shop (E-commerce)',
        category: 'E-Commerce Marketplace',
        tagline: 'High-scale multi-vendor marketplace with vendor portals & real-time discount ordering',
        description:
            'A scalable multi-vendor marketplace enabling independent sellers to manage catalogs, deals, and products from a unified storefront. Features localized grocery and essentials categories, fast search indexing, and automated order fulfillment.',
        highlights: [
            'Dedicated vendor catalog management, real-time product discounts, and category browsing',
            'Prisma ORM on PostgreSQL optimized for high-concurrency order placement and inventory locks',
            'Zero-downtime deployment on Vercel with responsive mobile-first shopping experience'
        ],
        tools: ['NextJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Google Maps', 'Vercel'],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://discountshop.pagoole.com/',
        liveLink: 'https://discountshop.pagoole.com/',
        image: ecommerceImg
    },
    {
        id: 3,
        name: 'Emojud ERP & Inventory Platform',
        category: 'Enterprise / ERP',
        tagline: 'Smart business platform for multi-shop sales, inventory sync, supplier ledger & analytics',
        description:
            'A comprehensive business ERP that streamlines multi-warehouse stock tracking, procurement order processing, and real-time turnover analytics. Includes role-based access control (RBAC), 1-click demo login, and automated low-stock reorder alerts.',
        highlights: [
            'Multi-shop control across branches and warehouses from one unified cloud dashboard',
            'Real-time financial analytics, POS barcode invoicing, supplier ledgers, and inventory valuation',
            'Multi-tenant role-based access control (RBAC) securing audit logs and branch approvals'
        ],
        tools: ['NextJS', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'SCSS', 'Netlify'],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://emojud.netlify.app/',
        liveLink: 'https://emojud.netlify.app/',
        credentials: {
            username: 'suman',
            password: '12345678'
        },
        image: inventoryImg
    },
    {
        id: 4,
        name: 'Nexus Real-Time Trading Terminal',
        category: 'FinTech / High-Frequency',
        tagline: 'High-frequency cryptocurrency derivatives trading platform with live order books & charts',
        description:
            'Browser-based crypto derivatives platform providing live market monitoring, technical candlestick charts, sub-second WebSocket order-book depth analysis, simulated trading, and risk analytics.',
        highlights: [
            'Sub-second live WebSocket data streams for order book depth, bids/asks, and ticker pricing',
            'Interactive financial candlestick charting with multi-timeframe technical indicators',
            'Lightweight state management via Zustand and TanStack Query maintaining smooth 60 FPS'
        ],
        tools: ['React', 'TypeScript', 'Vite', 'Zustand', 'TanStack Query', 'WebSocket', 'Tailwind CSS'],
        role: 'Front End Developer',
        code: '',
        demo: 'https://real-time-trading-terminal.netlify.app/',
        liveLink: 'https://real-time-trading-terminal.netlify.app/',
        image: tradingImg
    }
];
