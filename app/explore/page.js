
"use client";

import { useState } from "react";
import IdeaCard from "../../components/IdeaCard";
import { useIdeas } from "../../context/IdeaContext";

export default function Explore() {
  const { ideas } = useIdeas();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredIdeas =
    selectedCategory === "All"
      ? ideas
      : ideas.filter(
          (idea) => idea.category === selectedCategory
        );

  return (
    <main className="min-h-screen bg-gray-50">
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

        {/* Display Ideas */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {filteredIdeas.length > 0 ? (
            filteredIdeas.map((idea) => (
              <IdeaCard key={idea.id} idea={idea} />
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
