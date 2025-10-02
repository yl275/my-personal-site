"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mblzonbk");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setName("");
      setEmail("");
      setMessage("");
      setShowSuccessMessage(true);

      const timer = setTimeout(() => setShowSuccessMessage(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 p-8 md:p-10 md:gap-30 md:m-20 relative">
        <div className="font-black text-6xl flex flex-col gap-10 mt-17">
          <p>Have a question or an idea?</p>
          <p> Let’s chat!</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10">
          <label className="font-medium">
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              className="mt-1 p-2 border-2 rounded w-full"
            />
          </label>

          <label className="font-medium">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
              className="mt-1 p-2 border-2 rounded w-full"
            />
          </label>
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label className="font-medium">
            Message
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              required
              className="mt-1 h-32 md:h-50 lg:h-80 p-2 border-2 rounded w-full"
            />
          </label>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="border-4 border-black text-black p-2 shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all hover:cursor-pointer w-1/3 self-end border-b-6 border-r-6 bg-amber-500"
          >
            Send
          </button>
        </form>
      </div>
      {showSuccessMessage && (
          <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  bg-green-400 text-black p-4 rounded shadow-lg z-50" 
          >
            Thanks for reaching out! Your message has been sent.
          </div>
        )}
    </>
  );
}
