
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SubmitPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [checking, setChecking] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const loginStatus = localStorage.getItem("ideatest-login");

    if (loginStatus !== "true") {
      router.replace("/login");
    } else {
      setChecking(false);
    }
  }, [router]);

  function handleSubmit(e) {
    e.preventDefault();

    const newIdea = {
      id: Date.now(),
      title,
      category,
      description,
    };

    const existingIdeas = JSON.parse(
      localStorage.getItem("ideatest-ideas") || "[]"
    );

    existingIdeas.push(newIdea);

    localStorage.setItem(
      "ideatest-ideas",
      JSON.stringify(existingIdeas)
    );

    alert("Your idea has been submitted successfully!");

    setTitle("");
    setCategory("");
    setDescription("");
  }

  if (checking) {
    return <p className="p-10 text-center">Checking login...</p>;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex justify-between bg-white px-8 py-5 shadow">
        <h1 className="text-2xl font-bold text-blue-600">
          IdeaTest
        </h1>

        <Link href="/explore" className="text-blue-600">
          Explore Ideas
        </Link>
      </nav>

      <section className="mx-auto max-w-xl px-6 py-12">
        <h2 className="mb-6 text-center text-3xl font-bold">
          Submit Your Idea
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-xl bg-white p-8 shadow"
        >
          <div>
            <label className="mb-2 block font-medium">
              Idea Title
            </label>

            <input
              className="w-full rounded-lg border p-3"
              type="text"
              placeholder="Enter your idea title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Category
            </label>

            <select
              className="w-full rounded-lg border p-3"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select category</option>
              <option value="Education">Education</option>
              <option value="Technology">Technology</option>
              <option value="Environment">Environment</option>
              <option value="Health">Health</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Description
            </label>

            <textarea
              className="w-full rounded-lg border p-3"
              rows="5"
              placeholder="Describe your idea..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700"
          >
            Submit Idea
          </button>
        </form>
      </section>
    </main>
  );
}
