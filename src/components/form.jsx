"use client";
import React, { useRef, useState } from "react";

export default function MyForm() {
  const emailRef = useRef(null);
  const [formStatus, setFormStatus] = useState(null); // null, "success", or "error"
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setIsLoading(false); // Start the loading animation
    const response = await fetch("/api/news", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setFormStatus("success");
      setMessage(data.message);
    } else {
      setFormStatus("error");
      setMessage("Form submission failed.");
    }
    emailRef.current.value = "";
    setIsLoading(false); // Stop the loading animation
  };

  return (
    <div className="mx-auto mb-10 flex h-full w-full max-w-3xl flex-col items-center justify-center gap-10 px-6 md:flex-row">
      {formStatus === "success" || formStatus === "error" ? (
        <div className="text-turnicate mt-6 flex h-full w-full flex-col gap-5 rounded-2xl border-2 border-text/20 p-3 px-6 py-12 text-2xl font-bold text-text transition-all duration-300 ease-in-out hover:bg-card/70">
          {message}
        </div>
      ) : (
        <div className="text-turnicate mt-6 flex h-full w-full flex-col gap-5 rounded-2xl border-2 border-brandpink/20 p-3 px-6 py-12 text-2xl font-bold text-text transition-all duration-300 ease-in-out">
          <h1 class="text-turnicate p-3 text-2xl font-bold text-text ">
            Maybe even subscribe to our newsletter 👀
          </h1>

          <form
            method="post"
            className="intro flex w-full flex-col justify-center md:flex-row md:items-center"
            onSubmit={handleSubmit}
            name="contact"
          >
            <input
              type="email"
              name="email"
              id="email"
              className="mb-5 w-full max-w-lg border-0 border-b-2 border-[#f9f4da] bg-transparent p-3 font-sans text-xl outline-none transition-all duration-300 ease-in-out hover:border-text/70 focus:border-brandpink/70 focus:ring-0 md:flex-grow lg:text-2xl"
              placeholder="john@example.com"
              ref={emailRef}
              required
            />

            <span className="bg-transparent px-2"></span>

            {isLoading ? (
              <button
                type="submit"
                className="animate-fade-up relative mb-2 mr-2 w-fit rounded-lg bg-text px-8 py-3 text-lg font-semibold text-black transition delay-100 hover:opacity-80 focus:outline-2 focus:ring-4 focus:ring-gray-300"
              >
                Submit
              </button>
            ) : (
              <button
                disabled
                type="submit"
                className="animate-fade-up relative mb-2 mr-2 w-fit rounded-lg bg-brandpink/70 px-6 py-3 text-lg font-semibold text-black transition delay-100 hover:opacity-80 focus:outline-2 focus:ring-4 focus:ring-gray-300"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  className="mr-3 inline h-4 w-4 animate-spin rounded-full bg-slate-800 text-white"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Loading...
              </button>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
