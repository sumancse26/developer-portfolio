import { personalData } from "@/utils/data/personal-data";
import { defaultBlogs } from "@/utils/data/blogs-data";
import BlogCard from "../components/homepage/blog/blog-card";

async function getBlogs() {
  if (!personalData.devUsername || personalData.devUsername === 'N/A') {
    return defaultBlogs;
  }

  try {
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      return defaultBlogs;
    }

    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : defaultBlogs;
  } catch (error) {
    return defaultBlogs;
  }
}

async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-8">
      <div className="flex flex-col items-center justify-center my-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
          Knowledge Sharing
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center tracking-tight">
          Engineering <span className="gradient-text">Articles</span>
        </h1>
        <p className="mt-2 text-sm text-slate-600 text-center max-w-md">
          Technical deep-dives on system architecture, database optimization, and modern fullstack engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogs.map((blog, i) => (
          blog?.cover_image && <BlogCard blog={blog} key={blog.id || i} />
        ))}
      </div>
    </div>
  );
}

export default page;