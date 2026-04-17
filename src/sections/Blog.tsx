"use client";

import { useMemo, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import BlogModal from "@/components/BlogModal";
import blogs, { BlogPost } from "@/data/blogs";

export default function BlogSection() {
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  const selectedBlog = useMemo<BlogPost | null>(
    () => blogs.find((blog) => blog.id === selectedBlogId) ?? null,
    [selectedBlogId],
  );

  return (
    <div className="border-t-6 border-b-6 bg-green-300 px-4 py-12 md:p-15">
      <div className="flex flex-col gap-8">
        <SectionTitle title="Blogs" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onClick={() => setSelectedBlogId(blog.id)}
            />
          ))}
        </div>
      </div>

      <BlogModal
        blog={selectedBlog}
        isOpen={selectedBlog !== null}
        onClose={() => setSelectedBlogId(null)}
      />
    </div>
  );
}
