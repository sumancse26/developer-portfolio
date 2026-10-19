import About from '@/app/components/homepage/about/index.jsx';

export const metadata = {
  title: 'About | Md. Suman Sarkar - Fullstack Software Engineer',
  description: 'Learn about Md. Suman Sarkar, his academic CSE background, and 4 core engineering principles at Mononsoft Ltd. (JMI Group).'
};

const AboutPage = () => {
  return (
    <div className="pt-4 pb-12">
      <About />
    </div>
  );
};

export default AboutPage;