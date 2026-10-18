export const skillsData = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next JS',
  'Node JS',
  'Express',
  'Nest JS',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Tailwind',
  'Docker',
  'AWS',
  'Git',
  'CI/CD',
  'HTML',
  'CSS',
  'GraphQL',
  'Nginx'
];

export const categorizedSkills = [
  {
    category: 'Frontend Engineering',
    description: 'Component architecture, state management, SSR/SSG, and responsive design',
    skills: [
      { name: 'Next JS', level: 'Advanced', tags: ['App Router', 'SSR', 'Server Actions'] },
      { name: 'React', level: 'Advanced', tags: ['Hooks', 'Context', 'Performance'] },
      { name: 'TypeScript', level: 'Advanced', tags: ['Type Safety', 'Generics', 'Interfaces'] },
      { name: 'JavaScript', level: 'Expert', tags: ['ES6+', 'Async/Await', 'DOM APIs'] },
      { name: 'Tailwind', level: 'Advanced', tags: ['Utility CSS', 'Responsive', 'Design Systems'] },
      { name: 'HTML', level: 'Expert', tags: ['Semantic HTML5', 'Accessibility', 'SEO'] },
      { name: 'CSS', level: 'Advanced', tags: ['SCSS', 'Flexbox', 'Grid', 'Animations'] },
      { name: 'ViteJS', level: 'Proficient', tags: ['Bundling', 'HMR', 'SPA'] }
    ]
  },
  {
    category: 'Backend & APIs',
    description: 'High-concurrency servers, enterprise REST APIs, and microservices',
    skills: [
      { name: 'Nest JS', level: 'Advanced', tags: ['Dependency Injection', 'Modules', 'Microservices'] },
      { name: 'Node JS', level: 'Advanced', tags: ['Event Loop', 'Streams', 'Async Architecture'] },
      { name: 'Express', level: 'Advanced', tags: ['REST Endpoints', 'Middlewares', 'Security'] },
      { name: 'GraphQL', level: 'Proficient', tags: ['Queries', 'Mutations', 'Resolvers'] },
      { name: 'PHP', level: 'Intermediate', tags: ['Laravel', 'MVC Architecture', 'APIs'] }
    ]
  },
  {
    category: 'Databases & ORMs',
    description: 'Relational data modeling, schema migrations, and query performance',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', tags: ['Indexing', 'Query Optimization', 'Transactions'] },
      { name: 'MySQL', level: 'Proficient', tags: ['Relational Schemas', 'Joins', 'Stored Procedures'] },
      { name: 'MongoDB', level: 'Proficient', tags: ['NoSQL Modeling', 'Aggregations', 'Indexes'] }
    ]
  },
  {
    category: 'DevOps & Cloud',
    description: 'Automated CI/CD workflows, containerization, and cloud infrastructure',
    skills: [
      { name: 'Docker', level: 'Advanced', tags: ['Multi-stage Builds', 'Compose', 'Containers'] },
      { name: 'CI/CD', level: 'Advanced', tags: ['GitHub Actions', 'Automated Pipelines', 'Deployments'] },
      { name: 'AWS', level: 'Proficient', tags: ['EC2', 'S3', 'CloudFront', 'RDS'] },
      { name: 'Git', level: 'Advanced', tags: ['Branching', 'PR Workflows', 'Version Control'] },
      { name: 'Nginx', level: 'Proficient', tags: ['Reverse Proxy', 'Load Balancing', 'SSL'] }
    ]
  }
];
