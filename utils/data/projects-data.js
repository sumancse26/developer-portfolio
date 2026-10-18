import elearningImg from '/public/image/elearning.jpg';
import ecommerceImg from '/public/image/ecommerce.jpg';
import inventoryImg from '/public/image/inventory.jpg';
import tradingImg from '/public/image/trading.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'E-learning Platform',
        category: 'Full Stack',
        tagline: 'Enterprise course delivery system with multi-currency checkout & automated student notifications',
        description:
            'A production-grade e-learning platform engineered for a corporate training provider, delivering multilingual and multi-currency course experiences. Built with Next.js, TypeScript, and NestJS backed by PostgreSQL, containerized with Docker and deployed with automated CI/CD.',
        highlights: [
            'Interactive video course player with real-time student curriculum progress tracking',
            'NestJS & PostgreSQL RESTful API with transactional email notification pipelines',
            'Docker containerized deployment with automated CI/CD for high reliability'
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
        name: 'Multi-vendor E-commerce App',
        category: 'E-Commerce',
        tagline: 'High-scale multi-vendor marketplace with vendor portals & real-time order processing',
        description:
            'A scalable multi-vendor marketplace enabling independent sellers to manage catalogs and products from a unified storefront. Features internationalized currency and language support, Google Maps store locators, and automated order fulfillment emails.',
        highlights: [
            'Dedicated vendor management portal for catalog updates, pricing, and sales tracking',
            'Prisma ORM on PostgreSQL optimized for high-concurrency order placement and inventory locks',
            'Zero-downtime deployment on Vercel with localized multi-currency checkout'
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
        name: 'Inventory Management System',
        category: 'Enterprise / ERP',
        tagline: 'Cloud-native warehouse inventory & stock analytics ERP with automated reorder triggers',
        description:
            'A comprehensive inventory management ERP that streamlines multi-warehouse stock tracking, procurement order processing, and real-time turnover analytics. Includes role-based access control (RBAC) and automated low-stock reorder alerts.',
        highlights: [
            'Real-time multi-warehouse stock level tracking with critical low-stock alert triggers',
            'Interactive business analytics dashboards for inventory valuation and product turnover',
            'Multi-tenant role-based access control (RBAC) securing audit logs and order approvals'
        ],
        tools: ['NextJS', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'SCSS', 'Vercel'],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://emojud-inventory.vercel.app/',
        liveLink: 'https://emojud-inventory.vercel.app/',
        credentials: {
            username: 'suman',
            password: '12345678'
        },
        image: inventoryImg
    },
    {
        id: 4,
        name: 'Real Time Trading Terminal',
        category: 'FinTech / Web3',
        tagline: 'High-frequency cryptocurrency derivatives trading platform with live charts & order books',
        description:
            'Browser-based crypto derivatives platform providing live market monitoring, technical candlestick charts, real-time order-book depth analysis, simulated trading, portfolio tracking, and risk analytics.',
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
