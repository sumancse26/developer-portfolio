export const skillsData = [
  'TypeScript',
  'Next JS',
  'React',
  'Node JS',
  'Nest JS',
  'PostgreSQL',
  'Docker',
  'MySQL',
  'MongoDB',
  'AWS',
  'CI/CD',
  'Git',
  'Express',
  'Tailwind',
  'JavaScript',
  'GraphQL',
  'Nginx',
  'ViteJS',
  'Fastify'
];

export const categorizedSkills = [
  {
    category: 'Advanced Frontend Architecture',
    description: 'Server Components, streaming SSR, type-safe contracts, and performance profiling',
    skills: [
      { 
        name: 'Next JS', 
        level: 'Senior / Lead', 
        tags: ['App Router & RSC', 'Server Actions', 'Streaming SSR', 'ISR & Edge Caching'] 
      },
      { 
        name: 'React', 
        level: 'Expert', 
        tags: ['Concurrent React 18', 'Suspense & Error Boundaries', 'Custom Hooks Architecture', 'Profiler & Optimization'] 
      },
      { 
        name: 'TypeScript', 
        level: 'Advanced', 
        tags: ['Type-Level Generics', 'Conditional Types', 'Strict Type Safety', 'End-to-End Contracts'] 
      },
      { 
        name: 'JavaScript', 
        level: 'Expert', 
        tags: ['ESNext (ES2024)', 'Event Loop & Concurrency', 'Async Iterators', 'Memory Profiling'] 
      },
      { 
        name: 'Tailwind', 
        level: 'Advanced', 
        tags: ['Scalable Design Systems', 'Accessible UI Tokens', 'Dynamic Theming', 'Micro-Interactions'] 
      },
      { 
        name: 'ViteJS', 
        level: 'Proficient', 
        tags: ['Rollup Plugins', 'Tree Shaking', 'Bundle Size Budgeting', 'HMR Optimization'] 
      }
    ]
  },
  {
    category: 'Distributed Backend & APIs',
    description: 'High-throughput microservices, domain-driven architecture, and resilient API contracts',
    skills: [
      { 
        name: 'Nest JS', 
        level: 'Advanced / Enterprise', 
        tags: ['Modular Domain Architecture', 'Dependency Injection', 'Guards & Interceptors', 'RBAC Authorization'] 
      },
      { 
        name: 'Node JS', 
        level: 'Senior / Production', 
        tags: ['High-Throughput Streams', 'Event-Driven Architecture', 'Cluster & Worker Threads', 'Graceful Shutdowns'] 
      },
      { 
        name: 'Express', 
        level: 'Advanced', 
        tags: ['Enterprise REST Standards', 'Security Middlewares (Helmet)', 'Rate Limiting', 'JWT & OAuth2'] 
      },
      { 
        name: 'GraphQL', 
        level: 'Proficient', 
        tags: ['Schema Federation', 'Resolvers & Dataloaders', 'N+1 Query Elimination', 'Type Safety'] 
      },
      { 
        name: 'Fastify', 
        level: 'Proficient', 
        tags: ['Low-Overhead Routing', 'JSON Schema Validation', 'High-RPS Microservices'] 
      }
    ]
  },
  {
    category: 'Databases & Performance Engineering',
    description: 'Sub-second relational tuning, query execution plan profiling, and transactional integrity',
    skills: [
      { 
        name: 'PostgreSQL', 
        level: 'Advanced / Specialist', 
        tags: ['35%+ Query Optimization', 'EXPLAIN ANALYZE Profiling', 'Composite & Partial Indexing', 'PgBouncer Connection Pooling'] 
      },
      { 
        name: 'MySQL', 
        level: 'Advanced', 
        tags: ['ACID Transaction Safety', 'Deadlock Prevention', 'Schema Migrations', 'Replication & Partitioning'] 
      },
      { 
        name: 'MongoDB', 
        level: 'Proficient', 
        tags: ['Aggregation Pipelines', 'Compound Index Strategies', 'Document Schema Design', 'Atlas Sharding'] 
      }
    ]
  },
  {
    category: 'DevOps, Cloud & Infrastructure',
    description: 'Production containerization, automated deployment pipelines, and cloud reliability',
    skills: [
      { 
        name: 'Docker', 
        level: 'Advanced', 
        tags: ['Multi-Stage Containerization', 'Docker Compose', 'Minimal Alpine Images', 'Container Security'] 
      },
      { 
        name: 'CI/CD', 
        level: 'Advanced', 
        tags: ['GitHub Actions Workflows', 'Automated Lint/Test/Build', 'Zero-Downtime Deployments', 'Rollback Strategies'] 
      },
      { 
        name: 'AWS', 
        level: 'Proficient', 
        tags: ['EC2 & S3 Buckets', 'RDS Managed PostgreSQL', 'CloudFront CDN', 'IAM Least Privilege'] 
      },
      { 
        name: 'Nginx', 
        level: 'Proficient', 
        tags: ['Reverse Proxying', 'SSL/TLS Termination', 'Load Balancing', 'Gzip & Security Headers'] 
      },
      { 
        name: 'Git', 
        level: 'Advanced', 
        tags: ['Trunk-Based Development', 'Git Workflows & Hooks', 'Code Review Standards', 'Semantic Versioning'] 
      }
    ]
  }
];
