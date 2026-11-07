
"use client";

import { createContext, useContext, useState, useEffect } from "react";

const IdeaContext = createContext();

export function IdeaProvider({ children }) {
  const [ideas, setIdeas] = useState([]);

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

  const addIdea = (newIdea) => {
    setIdeas((previousIdeas) => {
      const updatedIdeas = [...previousIdeas, newIdea];

      const submittedIdeas = updatedIdeas.filter(
        (idea) => ![1, 2, 3].includes(idea.id)
      );

      localStorage.setItem(
        "ideatest-ideas",
        JSON.stringify(submittedIdeas)
      );

      return updatedIdeas;
    });
  };

  return (
    <IdeaContext.Provider value={{ ideas, addIdea }}>
      {children}
    </IdeaContext.Provider>
  );
}

export function useIdeas() {
  return useContext(IdeaContext);
}
