
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Explore() {
  const [ideas, setIdeas] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const sampleIdeas = [
      {
        id: 1,
        title: "Smart Study Planner",
        description: "A platform to help students organize their study schedules.",
        category: "Education",
      },
      {
        id: 2,
        title: "Food Waste Saver",
        description: "Connect restaurants with people who need affordable food.",
        category: "Environment",
      },
      {
        id: 3,
        title: "Skill Exchange",
        description: "A place where people can teach and learn skills together.",
        category: "Technology",
      },
    ];

    const submittedIdeas = JSON.parse(
      localStorage.getItem("ideatest-ideas") || "[]"
    );

    setIdeas([...sampleIdeas, ...submittedIdeas]);
  }, []);

  const filteredIdeas =
    selectedCategory === "All"
      ? ideas
      : ideas.filter(
          (idea) => idea.category === selectedCategory
        );

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between bg-white px-8 py-5 shadow">
        <h1 className="text-2xl font-bold text-blue-600">
          IdeaTest
        </h1>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/explore" className="text-blue-600">
            Explore Ideas
          </Link>
          <Link href="/submit">Submit Idea</Link>
          <Link href="/login">Login</Link>
        </div>
      </nav>

      <section className="px-6 py-16">
        <h2 className="mb-4 text-center text-4xl font-bold">
          Explore Ideas
        </h2>

        <p className="mb-8 text-center text-gray-600">
          Discover creative ideas shared by people.
        </p>

        {/* Category Filter */}
        <div className="mb-10 flex justify-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white p-3 text-gray-900"
          >
            <option value="All">All Categories</option>
            <option value="Education">Education</option>
            <option value="Technology">Technology</option>
            <option value="Environment">Environment</option>
            <option value="Health">Health</option>
          </select>
        </div>

        {/* Ideas Display */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {filteredIdeas.length > 0 ? (
            filteredIdeas.map((idea) => (
              <div
                key={idea.id}
                className="rounded-xl bg-white p-6 shadow"
              >
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {idea.title}
                </h3>

                <p className="text-gray-600">
                  {idea.description}
                </p>

                <p className="mt-4 text-sm text-blue-600">
                  Category: {idea.category}
                </p>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-600">
              No ideas found in this category.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
