"use client";

import Image from "next/image";
import { BlogPost } from "@/data/blogs";

interface BlogCardProps {
  blog: BlogPost;
  onClick: () => void;
}

export default function BlogCard({ blog, onClick }: BlogCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-amber-300 border-4 border-r-10 border-b-10 rounded-2xl p-5 text-left transition-transform duration-200 hover:-translate-y-1 hover:cursor-pointer focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-purple-700"
      aria-label={`Open blog post: ${blog.title}`}
    >
      <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl border-2 border-gray-800 bg-white">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover"
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
        />
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-700">
          {blog.date}
        </p>
        <h3 className="font-archivo text-2xl font-black md:text-3xl">
          {blog.title}
        </h3>
        <p className="rounded-2xl bg-purple-400 p-4 text-sm leading-7 md:text-base">
          {blog.description}
        </p>
      </div>
    </button>
  );
}
