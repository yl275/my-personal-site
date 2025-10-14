"use client";
import BlogCard from "./BlogCard";
import MarkdownModal from "./BlogModal";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "My First Blog",
    content: `
# Hello Markdown

This is **bold text** and a list:

- Item 1
- Item 2
`,
  },
  {
    id: 2,
    title: "Second Blog",
    content: `## Another Blog\nSome more text here.`,
  },
];

export default function Blogs() {
  const [openBlogId, setOpenBlogId] = useState<number | null>(null);

  const toggleBlog = (id: number) => {
    setOpenBlogId(openBlogId === id ? null : id);
  };
  return (
    <div className="flex flex-col gap-10 pl-20 pt-10">
      {blogs && blogs.length > 0 ? (
        blogs.map((blog: { id: number; title: string; content: string }) => (
          <div key={blog.id} className="relative">
            <BlogCard title={blog.title} onClick={() => toggleBlog(blog.id)} />
            {/* Popover */}
            {openBlogId === blog.id && (
              <MarkdownModal isOpen={openBlogId === blog.id} onClose={() => toggleBlog(blog.id)} markdownContent={blog.content} />
            )}
          </div>
        ))
      ) : (
        <div className="text-4xl font-bold flex justify-center items-center flex-1 p-8 mb-30">
          Blogs Section Coming Soon!
        </div>
      )}
    </div>
  );
}
