import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';

function Blog({ blogs = [] }) {
  const visibleBlogs = blogs.filter((b) => b?.cover_image).slice(0, 3);

  if (visibleBlogs.length === 0) {
    return null;
  }

  return (
    <section id="blogs" className="relative my-16 lg:my-24 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-10 lg:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
          Knowledge Sharing &amp; Writing
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center tracking-tight">
          Engineering <span className="gradient-text">Insights</span>
        </h2>
        <p className="mt-3 text-sm text-slate-600 text-center max-w-xl">
          Deep-dives into database performance, enterprise ERP architecture, and high-concurrency fullstack patterns.
        </p>
        <div className="w-16 h-1 bg-indigo-600 rounded-full mt-3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {visibleBlogs.map((blog, i) => (
          <BlogCard blog={blog} key={blog.id || i} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:text-slate-900 shadow-sm transition-all"
        >
          <span>Explore All Articles</span>
          <FaArrowRight size={13} className="text-indigo-600" />
        </Link>
      </div>
    </section>
  );
}

export default Blog;