export const defaultBlogs = [
  {
    id: 1,
    title: 'Architecting High-Throughput ERP Systems with Next.js 14 and NestJS',
    description:
      'A deep dive into building modular, maintainable enterprise ERPs handling multi-branch inventory, procurement, and billing workflows with sub-second response times.',
    url: 'https://dev.to',
    published_at: '2024-11-15T00:00:00Z',
    reading_time_minutes: 6,
    public_reactions_count: 84,
    comments_count: 12,
    cover_image: '/image/inventory.jpg',
    tags: ['nextjs', 'nestjs', 'postgresql', 'architecture']
  },
  {
    id: 2,
    title: 'PostgreSQL Query Optimization & Database Indexing for High Concurrency',
    description:
      'How we slashed analytics and ledger report turnaround times by 35%+ using composite B-tree indexes, CTE refactoring, and connection pooling in Prisma.',
    url: 'https://dev.to',
    published_at: '2024-10-02T00:00:00Z',
    reading_time_minutes: 8,
    public_reactions_count: 128,
    comments_count: 19,
    cover_image: '/image/ecommerce.jpg',
    tags: ['postgresql', 'prisma', 'performance', 'database']
  },
  {
    id: 3,
    title: 'Real-Time Financial Feeds: Streaming WebSockets with Zustand & React',
    description:
      'Designing zero-lag order-book depth charts and live price feeds running smoothly at 60 FPS without memory leaks in modern React applications.',
    url: 'https://dev.to',
    published_at: '2024-08-20T00:00:00Z',
    reading_time_minutes: 5,
    public_reactions_count: 96,
    comments_count: 15,
    cover_image: '/image/trading.jpg',
    tags: ['react', 'websockets', 'typescript', 'zustand']
  }
];
