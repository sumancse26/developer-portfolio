import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';
import { FiClock, FiExternalLink } from 'react-icons/fi';

function BlogCard({ blog }) {
  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 hover:-translate-y-1 group">
      <div>
        {/* Cover Image */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
          <Image
            src={blog?.cover_image}
            height={400}
            width={700}
            alt={blog.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Reading Time Badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-slate-200 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm">
            <FiClock size={11} className="text-indigo-600" />
            <span>{blog.reading_time_minutes || 5} min read</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex flex-col">
          {/* Metadata */}
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-2">
            <span>{blog.published_at ? timeConverter(blog.published_at) : 'Engineering Post'}</span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-rose-500">
                <BsHeartFill size={10} />
                <span>{blog.public_reactions_count || 0}</span>
              </span>
              {(blog.comments_count > 0 || blog.comments_count === 0) && (
                <span className="flex items-center gap-1 text-slate-500">
                  <FaCommentAlt size={10} />
                  <span>{blog.comments_count || 0}</span>
                </span>
              )}
            </div>
          </div>

          {/* Title */}
          <Link
            href={blog.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-base text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 mt-1 leading-snug"
          >
            {blog.title}
          </Link>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
            {blog.description}
          </p>

          {/* Tags */}
          {blog.tags && Array.isArray(blog.tags) && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {blog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[11px] font-medium bg-indigo-50 text-indigo-700 border border-indigo-100"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer link */}
      <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50">
        <Link
          href={blog.url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          <span>Read Full Article</span>
          <FiExternalLink size={12} />
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;