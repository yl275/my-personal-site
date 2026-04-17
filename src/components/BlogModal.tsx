"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useId, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { X } from "lucide-react";
import { BlogPost } from "@/data/blogs";

interface BlogModalProps {
  blog: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function BlogModal({ blog, isOpen, onClose }: BlogModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    lastFocusedElementRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      lastFocusedElementRef.current?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && blog ? (
        <motion.div
          className="fixed inset-0 z-[10002] flex items-center justify-center bg-black/60 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border-4 border-r-10 border-b-10 border-gray-900 bg-amber-300 shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <div className="flex items-start justify-between gap-4 border-b-4 border-gray-900 bg-purple-400 p-5 md:p-6">
              <div className="pr-4">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-800">
                  {blog.date}
                </p>
                <h2 id={titleId} className="font-archivo text-2xl font-black md:text-4xl">
                  {blog.title}
                </h2>
                <p id={descriptionId} className="mt-3 max-w-2xl text-sm leading-7 md:text-base">
                  {blog.description}
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="rounded-full border-2 border-gray-900 bg-amber-300 p-2 text-gray-900 transition-colors hover:bg-white focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Close blog post"
              >
                <X size={24} />
              </button>
            </div>

            <div className="max-h-[calc(90vh-12rem)] overflow-y-auto p-5 md:p-8">
              <div className="relative mb-6 aspect-[16/8] overflow-hidden rounded-2xl border-2 border-gray-900 bg-white">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 60rem, 100vw"
                />
              </div>

              <article className="text-gray-900">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <h1 className="mb-4 font-archivo text-3xl font-black md:text-4xl">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="mb-3 mt-8 font-archivo text-2xl font-black md:text-3xl">
                        {children}
                      </h2>
                    ),
                    p: ({ children }) => (
                      <p className="mb-4 text-base leading-8 md:text-lg">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-8 md:text-lg">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="mb-4 list-decimal space-y-2 pl-6 text-base leading-8 md:text-lg">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => <li>{children}</li>,
                    strong: ({ children }) => (
                      <strong className="font-black text-gray-950">{children}</strong>
                    ),
                    img: ({ src, alt }) => (
                      <img
                        src={src ?? ""}
                        alt={alt ?? ""}
                        className="my-5 w-full rounded-2xl border-2 border-gray-900 bg-white"
                        loading="lazy"
                      />
                    ),
                    table: ({ children }) => (
                      <table className="w-full border-2 border-gray-900 border-collapse">
                        {children}
                      </table>
                    ),
                    thead: ({ children }) => <thead>{children}</thead>,
                    tbody: ({ children }) => <tbody>{children}</tbody>,
                    tr: ({ children }) => <tr>{children}</tr>,
                    th: ({ children }) => (
                      <th className="border-2 border-gray-900 bg-purple-200 px-3 py-2 text-left font-archivo font-black">
                        {children}
                      </th>
                    ),
                    td: ({ children }) => (
                      <td className="border-2 border-gray-900 px-3 py-2 text-left">
                        {children}
                      </td>
                    ),
                  }}
                >
                  {blog.content}
                </ReactMarkdown>
              </article>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
